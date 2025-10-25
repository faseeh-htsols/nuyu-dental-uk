import Main from "@/views/(aesthetics-confidence)/skin-treatments/main";
import Script from "next/script";

const SkinTreatmentsPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/skin-treatments",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers advanced skin treatments in Cheltenham, including medical-grade facials, microneedling, chemical peels, and LED light therapy, tailored to rejuvenate and restore your skin's natural glow.",
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
    serviceType: "Skin Treatments",
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
      url: "https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/skin-treatments",
      priceCurrency: "GBP",
      price: "Contact for pricing",
      eligibleRegion: "GB",
    },
  };

  const schemaData3 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What’s the difference between a medical-grade facial and a regular facial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Medical-grade facials use advanced, clinical-grade products and techniques to treat specific skin concerns, such as pigmentation, breakouts or dullness. They’re results-driven while still offering a relaxing, luxurious experience.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I have a medical-grade facial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We usually recommend a facial every 4-6 weeks, depending on your skin goals. Regular treatments help maintain skin health, clarity and hydration.",
        },
      },
      {
        "@type": "Question",
        name: "Is microneedling painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microneedling is well-tolerated by most patients. A topical numbing cream is applied beforehand to minimise discomfort, making the treatment comfortable and effective.",
        },
      },
      {
        "@type": "Question",
        name: "How long before I see results from microneedling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may notice a healthy glow within a few days, but full results - including improved texture and collagen production - develop gradually over several weeks. A course of treatments often gives the best outcome.",
        },
      },
      {
        "@type": "Question",
        name: "Will I peel after a chemical peel?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may experience light flaking or shedding for a few days, especially after medium-strength peels. However, not all peels result in visible peeling - this depends on the type and depth of the treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Can chemical peels help with pigmentation or acne?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - chemical peels are highly effective for improving uneven skin tone, reducing breakouts and smoothing acne scars. We’ll select the right peel for your specific skin concerns.",
        },
      },
      {
        "@type": "Question",
        name: "Will dermaplaning make my facial hair grow back thicker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No - dermaplaning only removes fine, vellus hair (peach fuzz), which will grow back at the same rate and texture. It’s a gentle, safe way to achieve smooth, glowing skin.",
        },
      },
      {
        "@type": "Question",
        name: "How often can I have dermaplaning?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most patients benefit from treatment every 4-6 weeks, depending on their skin type and desired results. It’s also a wonderful pre-event glow-up treatment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I combine these treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - many of our treatments complement one another beautifully. For example, dermaplaning can enhance the effects of a peel or facial. We’ll guide you through safe, effective combinations for your skin.",
        },
      },
      {
        "@type": "Question",
        name: "Is there downtime with any of these treatments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most treatments have little to no downtime. You may experience mild redness or sensitivity, particularly after microneedling or peels, but this usually settles quickly. We’ll provide full aftercare advice for comfort and optimal results.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Skin Treatments Cheltenham | Clear, Glowing Complexions</title>
        <meta
          name="description"
          content="Achieve radiant, glowing skin with NUYU Cheltenham’s advanced skin therapies. Tailored, gentle, and truly transformative."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/skin-treatments"
        />
        <meta
          property="og:title"
          content="Skin Treatments Cheltenham | Clear, Glowing Complexions"
        />
        <meta
          property="og:description"
          content="Achieve radiant, glowing skin with NUYU Cheltenham’s advanced skin therapies. Tailored, gentle, and truly transformative."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/skin-treatments"
        />

        <Script
          id="ld-json1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="ld-json3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData3) }}
        />
      </head>
      <Main />
    </>
  );
};

export default SkinTreatmentsPage;
