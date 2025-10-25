import Main from "@/views/(whiten-enhance)/smile-makeover/main";
import Script from "next/script";

const SmileMakeoverPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/smile-makeover",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental provides professional smile makeover treatments to enhance your teeth's appearance, improving both aesthetics and confidence.",
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
    serviceType: "Smile Makeover",
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
      url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/smile-makeover",
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
        name: "What is included in a smile makeover at NUYU Cheltenham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A smile makeover is a personalised combination of treatments designed to enhance the appearance of your teeth and smile. This may include whitening, veneers, bonding, implants or orthodontics — all tailored to your unique goals and dental health.",
        },
      },
      {
        "@type": "Question",
        name: "Am I a suitable candidate for a smile makeover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you’re concerned about discolouration, misalignment, gaps, chips, or uneven teeth, a smile makeover could be ideal. Your suitability will be carefully assessed during your consultation with our experienced team.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a smile makeover treatment take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment times vary depending on your individual plan. Some changes, like whitening or bonding, can be completed in a few appointments, while more comprehensive makeovers may take several months.",
        },
      },
      {
        "@type": "Question",
        name: "Will my smile makeover look natural?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. At NUYU Cheltenham, we focus on creating beautiful, natural-looking results that complement your facial features and enhance your confidence.",
        },
      },
      {
        "@type": "Question",
        name: "Is the smile makeover process painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most treatments are comfortable and minimally invasive. Our team prioritises your comfort and will discuss any concerns before and during your treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How do I maintain my new smile after treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We’ll provide you with personalised advice on caring for your enhanced smile, including oral hygiene tips and recommended follow-up visits to ensure your results last.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Smile Makeovers Cheltenham | Beautiful, Natural Smiles</title>
        <meta
          name="description"
          content="Transform your smile and your confidence with NUYU Cheltenham’s bespoke smile makeover treatments, created just for you."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/smile-makeover"
        />
        <meta
          property="og:title"
          content="Smile Makeovers Cheltenham | Beautiful, Natural Smiles"
        />
        <meta
          property="og:description"
          content="Transform your smile and your confidence with NUYU Cheltenham’s bespoke smile makeover treatments, created just for you."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/smile-makeover"
        />
      </head>
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
      <Main />
    </>
  );
};

export default SmileMakeoverPage;
