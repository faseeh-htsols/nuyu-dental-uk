import HeadingTwo from "@/components-2/heading-two";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface blog {
  id: number;
  title: string;
  pictureUrl: string;
  slug: string;
  scheduledDate: string;
}
function BlogRoom({ data }: { data: blog[] }) {
  const formatDate = (d: string | Date) =>
    new Date(d).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  const getPostHref = (slug: string) =>
    slug.startsWith("/") ? slug : `/blog/${slug}`;

  return (
    <div
      className="py-10"
      style={{ backgroundImage: "url(/white-textured.webp)" }}
    >
      <Container>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.length === 0 && (
              <p className="text-sm text-gray-600">No posts available.</p>
            )}

            {data.map((post, idx) => (
              <Link
                key={idx}
                href={getPostHref(post.slug)}
                className="group bg-white rounded-bl-3xl rounded-tr-3xl overflow-hidden shadow flex flex-col" // ⬅️ added flex flex-col
                title={post.title}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden shrink-0">
                  <Image
                    src={post.pictureUrl}
                    alt={post.title || "Blog cover image"}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300"
                  />
                </div>

                {/* Make this area grow to fill space, then push button down */}
                <div className="flex flex-col gap-1 p-4 flex-1">
                  <HeadingTwo classes="!text-2xl">{post.title}</HeadingTwo>
                  <time
                    className="text-base tracking-wide text-olive"
                    dateTime={new Date(post.scheduledDate)
                      .toISOString()
                      .slice(0, 10)}
                  >
                    Published date: {formatDate(post.scheduledDate)}
                  </time>
                  <Link
                    className="mt-auto text-center text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none bg-primary text-white"
                    href={getPostHref(post.slug)}
                  >
                    Read more
                  </Link>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BlogRoom;
