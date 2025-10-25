import Main from "@/views/(everyday-dentistry)/fillings/main";
import Script from "next/script";

const Fillings = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/fillings",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers seamless, natural-looking composite fillings in Cheltenham, designed to restore teeth affected by decay with a discreet and durable solution.",
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
    serviceType: "Composite Fillings",
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
      url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/fillings",
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
        name: "When do I need a filling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may need a filling if you have a cavity, a chipped tooth, or an area of damage. During your check-up, we’ll let you know if a filling is the best way to protect and restore your tooth.",
        },
      },
      {
        "@type": "Question",
        name: "What are fillings made from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At NUYU Cheltenham, we use modern, tooth-coloured materials that blend beautifully with your natural teeth, offering a strong and discreet solution.",
        },
      },
      {
        "@type": "Question",
        name: "Will having a filling hurt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your comfort is always our priority. We use gentle techniques and, if needed, local anaesthetic to make sure you feel completely at ease throughout your treatment.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a filling appointment take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most fillings can be completed in a single visit, often in less than an hour - perfect for fitting in around your busy lifestyle.",
        },
      },
      {
        "@type": "Question",
        name: "How long will my filling last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With good care and regular check-ups, your filling can last for many years. We’ll also give you tailored advice to help maintain your dental health.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment for a filling at NUYU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply contact us through our website or call our friendly team - we’re here to make the whole process smooth, easy, and stress-free for you.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Tooth Fillings Cheltenham | White Composite Fillings</title>
        <meta
          name="description"
          content="Repair cavities discreetly with natural-looking white fillings at NUYU Cheltenham. Strong, beautiful and designed to blend seamlessly."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/fillings"
        />
        <meta
          property="og:title"
          content="Tooth Fillings Cheltenham | White Composite Fillings"
        />
        <meta
          property="og:description"
          content="Repair cavities discreetly with natural-looking white fillings at NUYU Cheltenham. Strong, beautiful and designed to blend seamlessly."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/fillings"
        />

        <Script
          id="json-id1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="json-id4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default Fillings;
