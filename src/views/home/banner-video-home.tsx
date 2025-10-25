import Head from "next/head";
import React from "react";

const BannerVideoHome = () => {
  return (
    <>
      <Head>
        {/* Preload poster image as the real LCP */}
        <link
          rel="preload"
          as="image"
          href="/video-poster.webp"
          fetchPriority="high"
        />
      </Head>
      <div className="h-[70vh]">
        <video
          className="min-w-full h-full object-cover"
          src="/new-header.mp4"
          loop
          muted
          autoPlay
          poster="/video-poster.webp"
          preload="auto" // Ensure video starts fetching early
        ></video>
      </div>
    </>
  );
};

export default BannerVideoHome;
