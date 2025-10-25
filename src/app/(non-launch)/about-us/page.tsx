import Main from "@/views/(about-us)/about-us/main";
import Script from "next/script";
import React from "react";

const AboutUs = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.nuyu-dental.co.uk/about-us#about",
    url: "https://www.nuyu-dental.co.uk/about-us",
    name: "About NUYU Dental & Aesthetics",
    description:
      "Caring for health, inspiring wellbeing. NUYU Dental in Cheltenham provides general, restorative, cosmetic and aesthetic care in a modern, spa-like setting focused on comfort and exceptional results.",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.nuyu-dental.co.uk/about-us-perfect.webp",
    },
  };
  return (
    <>
      <head>
        <Script
          id="id-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>
          About NUYU Cheltenham | Exceptional Dental & Aesthetic Care
        </title>
        <meta
          name="description"
          content="Learn about NUYU Dental Cheltenham — where patient care, clinical excellence and luxurious surroundings combine for an exceptional experience."
        />
        <meta
          property="og:title"
          content="About NUYU Cheltenham | Exceptional Dental & Aesthetic Care"
        />
        <meta
          property="og:description"
          content="Learn about NUYU Dental Cheltenham — where patient care, clinical excellence and luxurious surroundings combine for an exceptional experience."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/about-us"
        />

        <link rel="canonical" href="https://www.nuyu-dental.co.uk/about-us" />
      </head>
      <Main />
    </>
  );
};

export default AboutUs;
