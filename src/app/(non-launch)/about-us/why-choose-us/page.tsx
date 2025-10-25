import Main from "@/views/(about-us)/why-chose-us/main";
import Script from "next/script";
import React from "react";

const WhyChoseUs = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.nuyu-dental.co.uk/about-us/why-choose-us#about",
    url: "https://www.nuyu-dental.co.uk/about-us/why-choose-us",
    name: "Why Choose NUYU Dental",
    description:
      "Why patients choose NUYU Dental in Cheltenham: gentle, modern care, experienced clinicians, transparent pricing and convenient appointments.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.nuyu-dental.co.uk/normal.webp",
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Reasons to choose NUYU Dental",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Thing",
            name: "Experienced, patient-first team",
            description:
              "Friendly clinicians who explain every step in simple language and tailor care to your needs.",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Thing",
            name: "Modern treatments & technology",
            description:
              "From Invisalign® to implants and cosmetic dentistry, delivered with up-to-date techniques.",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Thing",
            name: "Comfort & transparency",
            description:
              "Gentle care in a calm setting with clear pricing discussed before treatment begins.",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Thing",
            name: "Convenient appointments",
            description:
              "Appointment options designed around busy schedules, including Saturdays.",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Thing",
            name: "Comprehensive services",
            description:
              "Preventive, restorative, cosmetic and facial aesthetics under one roof.",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "Thing",
            name: "Central Cheltenham location",
            description:
              "Easy to reach by road or train, with clear directions and nearby parking.",
          },
        },
      ],
    },
  };

  return (
    <>
      <head>
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>
          Why Choose NUYU | Boutique Dental Excellence in Cheltenham
        </title>
        <meta
          name="description"
          content="Experience personalised dentistry in the heart of Cheltenham. Discover why patients trust NUYU for outstanding results and compassionate care."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/about-us/why-choose-us"
        />
        <meta
          property="og:title"
          content="Why Choose NUYU | Boutique Dental Excellence in Cheltenham"
        />
        <meta
          property="og:description"
          content="Experience personalised dentistry in the heart of Cheltenham. Discover why patients trust NUYU for outstanding results and compassionate care."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/about-us/why-choose-us"
        />
      </head>
      <Main />
    </>
  );
};

export default WhyChoseUs;
