import Container from "@/components/container";
import React from "react";

type Section = {
  heading?: string;
  content: string;
};

function ContentSections({ sections }: { sections: Section[] }) {
  console.log(sections);
  return (
    <section
      className="py-10"
      style={{ backgroundImage: "url(/white-textured.webp)" }}>
      <Container>
        {sections.map((sec, idx) => (
          <article key={idx} className="mb-10  last:mb-0">
            {sec.heading && (
              <h2 className=" text-primary leading-10 mb-3 text-3xl">
                {sec.heading}
              </h2>
            )}
            <div
              className="leading-8 text-gray-700"
              dangerouslySetInnerHTML={{ __html: sec.content }}
            />
          </article>
        ))}
      </Container>
    </section>
  );
}

export default ContentSections;
