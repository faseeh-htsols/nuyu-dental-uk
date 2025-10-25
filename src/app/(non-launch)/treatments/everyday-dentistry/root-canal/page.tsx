import Main from "@/views/(everyday-dentistry)/root-canal/main";
import Script from "next/script";

const RootCanalPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/root-canal",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers expert root canal treatments in Cheltenham to save damaged or infected teeth, ensuring comfort and long-term oral health.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "64 Winchcombe Street",
      addressLocality: "Cheltenham",
      addressRegion: "Gloucestershire",
      postalCode: "GL52 2ND",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.902,
      longitude: -2.0701,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44 1242 339233",
      contactType: "Customer Service",
      areaServed: "GB",
      availableLanguage: "English",
    },
    priceRange: "££",
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:30"],
    serviceType: "Root Canal Treatment",
    provider: {
      "@type": "Organization",
      name: "NUYU Dental & Aesthetics",
      url: "https://www.nuyu-dental.co.uk",
      logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
      sameAs: [
        "https://www.facebook.com/nuyudentalcheltenham",
        "https://www.instagram.com/nuyu.dental.cheltenham",
        "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
        "https://www.tiktok.com/@nuyu.dental.cheltenham",
        "https://g.co/kgs/LZCRwvP",
      ],
    },
    areaServed: {
      "@type": "Place",
      name: "Cheltenham",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/root-canal",
      priceCurrency: "GBP",
      price: "Contact for pricing",
      eligibleRegion: "GB",
    },
  };

  const schemaData4 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is root canal treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Root canal treatment is a procedure to save a tooth that has become infected or severely damaged, by carefully cleaning and sealing the inside to prevent further problems.",
        },
      },
      {
        "@type": "Question",
        name: "Will root canal treatment be painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At NUYU Cheltenham, we use advanced techniques and gentle care to ensure your treatment is as comfortable as possible. Most patients are pleasantly surprised by how little discomfort they feel.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I need a root canal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include toothache, sensitivity, or swelling, but sometimes there are no obvious symptoms. We’ll carry out a full assessment to determine exactly what’s needed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does root canal treatment take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In many cases, treatment can be completed in one or two visits. We’ll explain everything clearly and ensure you feel relaxed every step of the way.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after my root canal treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After your root canal, we often recommend placing a crown to strengthen and protect your tooth for the long term. Your dentist will guide you through your personalised plan.",
        },
      },
      {
        "@type": "Question",
        name: "How do I arrange a consultation at NUYU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking with us is simple. You can call our friendly team on 01242 339233, send us an enquiry through our website, use our online booking system, or visit us at 64 Winchcombe Street, Cheltenham, GL52 6ND.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          Root Canal Treatment Cheltenham | Gentle and Effective Care
        </title>
        <meta
          name="description"
          content="Save your natural tooth with gentle, expert root canal therapy at NUYU Cheltenham. Comfortable, precise and reassuring."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/root-canal"
        />
        <meta
          property="og:title"
          content="Root Canal Treatment Cheltenham | Gentle and Effective Care"
        />
        <meta
          property="og:description"
          content="Save your natural tooth with gentle, expert root canal therapy at NUYU Cheltenham. Comfortable, precise and reassuring."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/root-canal"
        />

        <Script
          id="id-json1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="id-json4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};
export default RootCanalPage;
