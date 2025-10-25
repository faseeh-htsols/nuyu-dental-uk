// lib/htmlSections.ts
import { load } from "cheerio";
import type { AnyNode } from "domhandler";

export type HtmlSection = { heading?: string; content: string };

/** <p><strong>Title</strong></p> -> <h2>Title</h2>; returns BODY innerHTML if present */
export function normalizeBoldParasToH2(html: string): string {
  const $ = load(html ?? "");

  // iterate as array (avoid .each this-typing)
  for (const p of $("p").toArray()) {
    const $p = $(p);
    const children = $p
      .contents()
      .toArray()
      .filter((el) =>
        el.type === "text" ? $(el).text().trim().length > 0 : true
      );

    if (children.length === 1) {
      const only = $(children[0]);
      if (only.is("strong")) {
        const txt = only.text().trim();
        if (txt) $p.replaceWith(`<h2>${txt}</h2>`);
      }
    }
  }

  const body = $("body");
  return (body.length ? body.html() : $.root().html()) ?? "";
}

/** Split at each <h2>; merge prelude into the first section; no “Introduction”. */
export function splitIntoSectionsNoIntro(html: string): HtmlSection[] {
  const normalized = normalizeBoldParasToH2(html ?? "");

  // ✅ Wrap in a div so container is Cheerio<Element>, not Document
  const $ = load(`<div id="__wrap">${normalized}</div>`);
  const container = $("#__wrap"); // Cheerio<Element>

  const sections: HtmlSection[] = [];
  const prelude: string[] = [];
  let cur = -1;

  // iterate children as an array (no .each)
  for (const el of container.children().toArray()) {
    const $el = $(el as AnyNode);

    if ($el.is("h2")) {
      const title = $el.text().trim() || "Section";
      sections.push({ heading: title, content: "" });
      cur = sections.length - 1;

      if (cur === 0 && prelude.length) {
        sections[0].content += prelude.join("");
        prelude.length = 0;
      }
    } else {
      const frag = $.html(el as AnyNode) ?? "";
      if (cur === -1) prelude.push(frag);
      else sections[cur].content += frag;
    }
  }

  if (sections.length === 0) {
    const content = prelude.join("").trim();
    if (content) sections.push({ content });
  }

  return sections;
}
