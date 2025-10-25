import Main from "@/views/(prevent-protect)/oral-health-assessment/main";
import Script from "next/script";

const PatientConsultation = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/oral-health-assessment",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers comprehensive oral health assessments to detect potential dental issues early, ensuring long-term oral health and well-being.",
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
    serviceType: "Oral Health Assessment",
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
      url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/oral-health-assessment",
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
        name: "What is an oral health assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An oral health assessment is a thorough examination of your teeth, gums, and mouth to ensure everything is healthy and to catch any potential issues early.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I have an oral health assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We usually recommend a check-up every six months, but your dentist will advise you based on your individual needs to keep your smile at its very best.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during my assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your dentist will gently examine your mouth, check for any signs of decay, gum disease, or other concerns, and may also take digital x-rays if needed – all in a calm, reassuring setting.",
        },
      },
      {
        "@type": "Question",
        name: "Will I need treatment after my assessment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If we spot anything that needs attention, we’ll discuss it with you openly and create a personalised plan to restore your oral health gently and effectively.",
        },
      },
      {
        "@type": "Question",
        name: "Is an oral health assessment suitable for children?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We welcome patients of all ages and believe in building strong foundations for healthy smiles right from the very start.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book my oral health assessment at NUYU Cheltenham?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking with us is simple. You can call our friendly team on 01242 339233, send us an enquiry through our website, or choose a convenient time using our online booking system. You can also visit us in person at 64 Winchcombe Street, Cheltenham, GL52 6ND.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Dental Check-Ups Cheltenham | NUYU Oral Health Experts</title>
        <meta
          name="description"
          content="Maintain your best smile with a thorough oral health assessment at NUYU Cheltenham. Comprehensive care, tailored to you."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/prevent-protect/oral-health-assessment"
        />
        <meta
          property="og:title"
          content="Dental Check-Ups Cheltenham | NUYU Oral Health Experts"
        />
        <meta
          property="og:description"
          content="Maintain your best smile with a thorough oral health assessment at NUYU Cheltenham. Comprehensive care, tailored to you."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/prevent-protect/oral-health-assessment"
        />
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="json-id3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default PatientConsultation;
