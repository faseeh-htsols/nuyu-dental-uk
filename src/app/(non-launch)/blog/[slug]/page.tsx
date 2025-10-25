import Main from "@/views/blog-page/main";
import type { BlogPost } from "@/views/blog-page/main";
import { splitIntoSectionsNoIntro } from "@/lib/htmlSections";
import type { Metadata } from "next";
import { cache } from "react";
import Script from "next/script";

type Img = { url?: string | null } | null | undefined;
type ApiAuthor =
  | {
      name?: string | null;
      pictureUrl?: string | null;
      image?: Img;
      bio?: string | null;
    }
  | null
  | undefined;

type ApiBlog = {
  title?: string | null;
  contentHtml?: string | null;
  pictureUrl?: string | null;
  scheduledDate?: string | null;
  publishedAt?: string | null;
  image?: Img;
  featuredImage?: Img;
  coverImage?: Img;
  author?: ApiAuthor;
  authorName?: string | null;
  seo?: {
    seoTitle?: string | null;
    seoDescription?: string | null;
    schemaJson?: unknown;
  } | null;
} | null;

const getBlog = cache(async (slug: string): Promise<ApiBlog> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/client/blogs/${slug}`,
    { cache: "no-store" }
  );
  if (!res.ok) return null;
  const json = await res.json();
  return (json?.data?.blog as ApiBlog) ?? null;
});
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  const title = post?.seo?.seoTitle || post?.title || "Blog Post";
  const description = post?.seo?.seoDescription || "Blog Description";
  return {
    title,
    description,
    openGraph: { title, description },
    twitter: { title, description },
  };
}

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return <div>Post not found</div>;

  const sections = splitIntoSectionsNoIntro(post?.contentHtml || "");
  const pictureUrl = post.pictureUrl || "";

  const author: BlogPost["author"] = {
    name: post.author?.name ?? post.authorName ?? "",
    pictureUrl: post.author?.pictureUrl ?? post.author?.image?.url ?? "",
    bio: post.author?.bio ?? "",
    scheduledDate: post.scheduledDate ?? post.publishedAt ?? "",
  };
  const data: BlogPost = {
    ...post,
    title: post.title ?? "",
    pictureUrl,
    sections,
    author,
    contentHtml: (post.contentHtml ?? "") as unknown as JSON,
    scheduledDate: post.scheduledDate ?? post.publishedAt ?? undefined,
  };

  return (
    <>
      {Array.isArray(post.seo?.schemaJson) &&
        (post.seo!.schemaJson as unknown[]).map((schemaData, i) => (
          <Script
            key={i}
            id={`ldjson-${i}`}
            type="application/ld+json"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
          />
        ))}

      <Main data={data} />
    </>
  );
};

export default Blog;
