import Main from "@/views/(implants-replace)/dentures/main";
import Script from "next/script";
const Dentures = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/dentures",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers custom-made dentures in Cheltenham, designed for comfort, durability, and a natural-looking smile.",
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
    serviceType: "Custom Dentures",
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
      url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/dentures",
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
        name: "Will anyone else be able to tell if I am wearing dentures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each set of dentures is different and designed to replicate the shape and colour of your natural teeth as closely as possible. This makes them extremely discreet.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to use dentures adhesive?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some patients find that their denture feels more secure when they use a denture adhesive.",
        },
      },
      {
        "@type": "Question",
        name: "Do dentures hurt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you aren’t used to wearing dentures, they can feel strange and uncomfortable at first. However, since they are made specifically to fit your mouth, they shouldn’t cause any long-term discomfort.",
        },
      },
      {
        "@type": "Question",
        name: "How do I clean my dentures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dentures should be brushed just like regular teeth, using a soft-bristled brush and toothpaste. You should always leave your dentures in a glass of water to soak overnight, and we recommend that you use fizzy denture-cleaning tablets to remove any stubborn food particles and prevent staining.",
        },
      },
      {
        "@type": "Question",
        name: "Can I sleep in dentures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Although you can wear dentures at night, we recommend that you remove them for sleeping. This will give your gums a chance to relax from the pressure caused by wearing dentures, and give you an opportunity to clean them.",
        },
      },
      {
        "@type": "Question",
        name: "I've been wearing dentures for a while - why don't they fit as comfortably as before?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This is something that can happen over time, normally as a result of the lower half of your face changing shape as the jawbone starts to deteriorate. If your dentures don’t seem as comfortable or secure as before, let us know. You may need a procedure called a reline to improve their fit.",
        },
      },
      {
        "@type": "Question",
        name: "How long do dentures last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dentures typically last anywhere from 7 to 10 years before they require replacement.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Custom Dentures Cheltenham | Comfortable, Natural Smiles</title>
        <meta
          name="description"
          content="Comfortable, natural-looking dentures designed for you at NUYU Cheltenham. Rediscover the joy of smiling and eating with ease."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/implant-replace/dentures"
        />
        <meta
          property="og:title"
          content="Custom Dentures Cheltenham | Comfortable, Natural Smiles"
        />
        <meta
          property="og:description"
          content="Comfortable, natural-looking dentures designed for you at NUYU Cheltenham. Rediscover the joy of smiling and eating with ease."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/implant-replace/dentures"
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

export default Dentures;
