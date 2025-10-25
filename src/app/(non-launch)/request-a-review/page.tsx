import Main from "@/views/request-a-review/main";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You for Choosing NUYU Dental & Aesthetics | Leave a Review",
  description:
    "Share your experience with NUYU Dental & Aesthetics. Your review helps us improve and supports other Cheltenham patients in finding trusted dental care.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/request-a-review",
  },
  robots: {
    index: false, 
    follow: false,
  },
  openGraph: {
    title: "Thank You for Choosing NUYU Dental & Aesthetics | Leave a Review",
    description:
      "Share your experience with NUYU Dental & Aesthetics. Your review helps us improve and supports other Cheltenham patients in finding trusted dental care.",
    url: "https://www.nuyu-dental.co.uk/request-a-review",
    siteName: "NUYU Dental & Aesthetics",
    type: "website",
    images: [
      {
        url: "https://www.nuyu-dental.co.uk/header-image-v3.webp",
      },
    ],
  },
};


function Page() {
    return (
        <>
            <Main />
        </>
    );
}

export default Page;
