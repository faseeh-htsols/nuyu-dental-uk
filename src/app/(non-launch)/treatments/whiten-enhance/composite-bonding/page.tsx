import Main from "@/views/(whiten-enhance)/composite-bonding/main";
import Script from "next/script";

const CompositeBonding = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/composite-bonding",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental provides expert composite bonding treatments to enhance your smile, restoring teeth with natural-looking, durable results.",
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
    serviceType: "Composite Bonding",
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
      url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/composite-bonding",
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
        name: "How durable is composite bonding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While the material used in composite bonding isn’t as hard as your natural teeth, it’s still very durable. However, it can be stained by things like nicotine, coffee and red wine, so you’ll be given specific advice on the best way to limit any damage to the structure or appearance of your teeth.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have composite bonding removed in the future?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Since composite bonding doesn’t require any permanent changes to the structure of your teeth, you can have it removed and/or replaced in the future.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have my composite-bonded teeth whitened?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whitening gel doesn’t work on the material used in composite bonding. If you want to have your teeth whitened, we recommend that you do this before you undergo composite bonding treatment. Our team can then match the colour of the composite resin to your newly-whitened teeth to ensure that the colour is consistent across your smile.",
        },
      },
      {
        "@type": "Question",
        name: "Can I eat normally with composite bonding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Having composite bonding on your teeth doesn’t have to change your diet. However, since the material isn’t as strong as natural teeth, we’ll advise you to take special care with any foods that are particularly hard, chewy or sticky. We’ll also advise you to avoid any foods and drinks that could stain the composite, such as coffee and red wine.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need more than one appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Composite bonding doesn’t require any preparation, meaning that the entire treatment can be carried out in just one visit.",
        },
      },
      {
        "@type": "Question",
        name: "How long does composite bonding last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With proper care and attention, composite bonding can last up to 5 years. However, our team will continue to monitor your teeth at your regular patient consultations, so that we can accurately advise if and when repairs are required.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Composite Bonding Cheltenham | Perfect Your Smile</title>
        <meta
          name="description"
          content="Perfect small imperfections quickly with composite bonding at NUYU Cheltenham. A beautiful, natural-looking smile starts here."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/composite-bonding"
        />
        <meta
          property="og:title"
          content="Composite Bonding Cheltenham | Perfect Your Smile"
        />
        <meta
          property="og:description"
          content="Perfect small imperfections quickly with composite bonding at NUYU Cheltenham. A beautiful, natural-looking smile starts here."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/composite-bonding"
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

export default CompositeBonding;
