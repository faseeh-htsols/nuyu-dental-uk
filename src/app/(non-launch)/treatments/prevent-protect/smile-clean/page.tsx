import Main from "@/views/(prevent-protect)/smile-clean/main";
import Script from "next/script";

const HygienePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/smile-clean",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers professional Smile Clean services using advanced EMS Guided Biofilm Therapy to remove plaque, tartar, and bacteria, ensuring optimal oral health.",
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
    serviceType: "Smile Clean (Oral Hygiene)",
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
      url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/smile-clean",
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
        name: "What is a Smile Clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Smile Clean is our gentle yet thorough hygiene treatment, designed to remove plaque, tartar, and stains, leaving your teeth beautifully clean and refreshed.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I have a Smile Clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For most patients, we recommend a professional clean every six months, but some may benefit from more frequent visits – we’ll advise you based on your individual needs.",
        },
      },
      {
        "@type": "Question",
        name: "Will the treatment be uncomfortable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not at all. At NUYU Dental & Aesthetics, we take great care to ensure your Smile Clean is as comfortable and soothing as possible, even for patients with sensitive teeth.",
        },
      },
      {
        "@type": "Question",
        name: "What are the benefits of having a Smile Clean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Smile Clean not only brightens your smile but also helps prevent gum disease, tooth decay, and bad breath, keeping your mouth healthy and fresh.",
        },
      },
      {
        "@type": "Question",
        name: "Can a Smile Clean remove staining from tea, coffee, or wine?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our advanced techniques can lift everyday surface stains, giving your smile a noticeably cleaner, more radiant appearance.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a Smile Clean at NUYU Cheltenham?",
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
        <title>Dental Hygienist Cheltenham | NUYU Smile Cleaning</title>
        <meta
          name="description"
          content="Enjoy a fresher, brighter smile with NUYU Cheltenham’s Smile Clean hygiene services. Gentle, effective, and revitalising."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/prevent-protect/smile-clean"
        />
        <meta
          property="og:title"
          content="Dental Hygienist Cheltenham | NUYU Smile Cleaning"
        />
        <meta
          property="og:description"
          content="Enjoy a fresher, brighter smile with NUYU Cheltenham’s Smile Clean hygiene services. Gentle, effective, and revitalising."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/prevent-protect/smile-clean"
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

export default HygienePage;
