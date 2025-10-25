import Main from "@/views/blog/main";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | NUYU Dental & Aesthetics Cheltenham",
  description:
    "Explore the NUYU Dental & Aesthetics Cheltenham blog for expert advice on dental care and skin treatments. From smile makeovers to facial aesthetics, discover how we help you look and feel your best.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/blog",
  },
};
async function Page() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/client/blogs`,
    { cache: "no-store" } // <- show fresh content
  );
  let posts = await response.json();
  posts = posts.data.blogs;
  // console.log(posts);
  return (
    <div>
      <Main data={posts} />
    </div>
  );
}

export default Page;
