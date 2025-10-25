import { Main } from "@/views/(about-us)/patient-journey/main";
import Script from "next/script";
const PatientJourney = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.nuyu-dental.co.uk/about-us/patient-journey#about",
    url: "https://www.nuyu-dental.co.uk/about-us/patient-journey",
    name: "Your Patient Journey at NUYU Dental",
    description:
      "Step-by-step guide to what happens when you join NUYU Dental in Cheltenham — from booking and your first visit to treatment planning, care, and aftercare.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.nuyu-dental.co.uk/tj-4.webp",
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
          Your Journey with NUYU | Personalised, Luxurious Dentistry
        </title>
        <meta
          name="description"
          content="From your first consultation to your new smile, NUYU Cheltenham ensures a seamless, comfortable and bespoke patient experience."
        />
        <meta
          property="og:title"
          content="Your Journey with NUYU | Personalised, Luxurious Dentistry"
        />
        <meta
          property="og:description"
          content="From your first consultation to your new smile, NUYU Cheltenham ensures a seamless, comfortable and bespoke patient experience."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/about-us/patient-journey/"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/about-us/patient-journey"
        />
      </head>
      <Main />
    </>
  );
};
export default PatientJourney;
