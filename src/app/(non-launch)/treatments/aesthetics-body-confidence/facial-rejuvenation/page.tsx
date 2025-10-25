import Main from "@/views/(aesthetics-confidence)/facial-rejuvenation/main";
import Script from "next/script";
import React from "react";

const FacialRejuvenationPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/facial-rejuvenation",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers bespoke facial rejuvenation treatments in Cheltenham, including anti-wrinkle injections, dermal fillers, and skin boosters, tailored to enhance your natural beauty with subtle and elegant results.",
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
    serviceType: "Facial Rejuvenation",
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
      url: "https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/facial-rejuvenation",
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
        name: "Will I still look natural after anti-wrinkle or filler treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. At NUYU, we believe in subtle, refined enhancements that bring out your natural beauty. Our treatments are carefully tailored to your features – helping you look refreshed, never overdone.",
        },
      },
      {
        "@type": "Question",
        name: "How long do anti-wrinkle injections and dermal fillers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anti-wrinkle injections typically last 3–4 months, while dermal fillers can last from 6 to 18 months depending on the area treated and your body’s natural metabolism.",
        },
      },
      {
        "@type": "Question",
        name: "Does treatment hurt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most facial rejuvenation treatments involve minimal discomfort. We use gentle techniques and can apply numbing cream where needed to keep you comfortable throughout.",
        },
      },
      {
        "@type": "Question",
        name: "What’s the difference between fillers and wrinkle-relaxing injections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anti-wrinkle injections relax the muscles that cause lines, while dermal fillers restore volume and smooth out deeper folds. They’re often used together for a beautifully balanced result.",
        },
      },
      {
        "@type": "Question",
        name: "Is there any downtime after treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most patients return to their normal routine straight after. You may have slight redness or swelling at the injection sites, but this usually resolves within a day or two.",
        },
      },
      {
        "@type": "Question",
        name: "Am I suitable for facial rejuvenation treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you're in good health and looking to soften signs of ageing or enhance your features, you’re likely a good candidate. We’ll carry out a detailed consultation to ensure the treatment is safe and appropriate for you.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have treatments before a special event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes – but we recommend booking at least 2–4 weeks in advance of any event to allow time for any minor swelling or adjustments to settle fully.",
        },
      },
      {
        "@type": "Question",
        name: "What areas can be treated with dermal fillers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common areas include the lips, cheeks, chin, jawline and under-eye hollows. Fillers can also subtly lift and contour the face as part of a non-surgical facelift.",
        },
      },
      {
        "@type": "Question",
        name: "What are skin boosters and how are they different from fillers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Skin boosters (like Profhilo®) don’t add volume but deeply hydrate the skin and stimulate collagen. They’re ideal for improving skin texture, firmness and overall radiance.",
        },
      },
      {
        "@type": "Question",
        name: "Will people know I’ve had something done?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our aim is for your results to look completely natural – like you, on your best day. Most patients receive compliments on how well-rested or refreshed they look, without anyone knowing why.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          Facial Aesthetics Cheltenham | Anti-Wrinkle & Skin Rejuvenation
        </title>
        <meta
          name="description"
          content="Turn back time with facial rejuvenation treatments at NUYU Cheltenham. Subtle enhancements for naturally beautiful results."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/facial-rejuvenation"
        />
        <meta
          property="og:title"
          content="Facial Aesthetics Cheltenham | Anti-Wrinkle & Skin Rejuvenation"
        />
        <meta
          property="og:description"
          content="Turn back time with facial rejuvenation treatments at NUYU Cheltenham. Subtle enhancements for naturally beautiful results."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/facial-rejuvenation"
        />

        <Script
          id="ld-json1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="ld-json4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default FacialRejuvenationPage;
