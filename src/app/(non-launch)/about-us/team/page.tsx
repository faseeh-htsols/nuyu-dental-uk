import Main from "@/views/(about-us)/team/main";
import Script from "next/script";
import React from "react";

const TeamPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id":
          "https://www.nuyu-dental.co.uk/about-us/team#dr-natalia-agalakova",
        name: "Dr Natalia Agalakova",
        jobTitle: "Director & Lead Implant & Cosmetic Dentist",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "100225",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        knowsAbout: ["Dental implants", "Cosmetic dentistry"],
      },
      {
        "@type": "Person",
        "@id": "https://www.nuyu-dental.co.uk/about-us/team#dr-naiz-khan",
        name: "Dr Naiz Khan",
        jobTitle: "Director & Diamond Apex Invisalign® Provider",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "101469",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        knowsAbout: ["Invisalign", "Orthodontics", "Cosmetic dentistry"],
      },
      {
        "@type": "Person",
        "@id": "https://www.nuyu-dental.co.uk/about-us/team#dr-alex-eremia",
        name: "Dr Alex Eremia",
        jobTitle: "Dentist with a Special Interest in Orthodontics",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "279510",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        knowsAbout: ["Orthodontics", "Metal braces", "Ceramic braces"],
      },
      {
        "@type": "Person",
        "@id": "https://www.nuyu-dental.co.uk/about-us/team#dr-goce-gigovski",
        name: "Dr Goce Gigovski",
        jobTitle: "Dentist",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "287637",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        knowsAbout: ["Everyday dentistry", "Restorative dentistry"],
      },
      {
        "@type": "Person",
        "@id": "https://www.nuyu-dental.co.uk/about-us/team#dr-shazia-parveen",
        name: "Dr Shazia Parveen",
        jobTitle: "Everyday & Cosmetic Dentist",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "265195",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        knowsAbout: [
          "Cosmetic bonding",
          "Smile makeovers",
          "Everyday dentistry",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.nuyu-dental.co.uk/about-us/team#tinashe-nhova",
        name: "Tinashe Nhova",
        jobTitle: "Dentist",
        identifier: {
          "@type": "PropertyValue",
          propertyID: "GDC",
          value: "244846",
        },
        worksFor: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        affiliation: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
      },
    ],
  };

  return (
    <>
      <head>
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>Meet Our Dental Team | NUYU Cheltenham</title>
        <meta
          name="description"
          content="Meet NUYU’s passionate  dental and aesthetics team. Experience world-class care from a team who put you at the heart of everything."
        />
        <meta
          property="og:title"
          content="Meet Our Dental Team | NUYU Cheltenham"
        />
        <meta
          property="og:description"
          content="Meet NUYU’s passionate dental and aesthetics team. Experience world-class care from a team who put you at the heart of everything."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/about-us/team"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/about-us/team"
        />
      </head>
      <Main />
    </>
  );
};

export default TeamPage;
