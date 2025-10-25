import Main from "@/views/(prevent-protect)/implants-bonding/main";
import Script from "next/script";

const ImplantsBonding = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/implants-bonding",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers comprehensive aftercare for dental implants and composite bonding, ensuring long-lasting results and optimal oral health.",
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
    serviceType: "Implant & Bonding Care",
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
      url: "https://www.nuyu-dental.co.uk/treatments/prevent-protect/implants-bonding",
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
        name: "How often should I have my dental implants checked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend visiting us every six months for a tailored maintenance appointment, although some patients may benefit from more frequent reviews. These visits allow us to gently clean around the implants and monitor their health to ensure everything is stable and healthy.",
        },
      },
      {
        "@type": "Question",
        name: "Can I clean my dental implants like natural teeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes - but with extra care. Use a soft-bristled toothbrush and non-abrasive toothpaste, along with interdental brushes or floss recommended by your hygienist and implant surgeon. Our team will show you the best technique for keeping the area plaque-free.",
        },
      },
      {
        "@type": "Question",
        name: "What happens during an implant maintenance appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Your clinician will carefully examine the implant site, assess your gum health, and gently remove any plaque or tartar using specialist tools designed for implants. We may also take X-rays periodically to check the supporting bone.",
        },
      },
      {
        "@type": "Question",
        name: "What are signs something might be wrong with my implant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Persistent bleeding, tenderness, swelling or movement around the implant are all signs to contact us promptly. Early intervention can prevent more serious issues and help protect your smile.",
        },
      },
      {
        "@type": "Question",
        name: "Will my implants last forever with good care?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While no dental treatment lasts forever, implants have the potential to last many years, even decades, with the right home care and regular professional maintenance. At NUYU, we’re here to support their longevity with gentle, ongoing care.",
        },
      },
      {
        "@type": "Question",
        name: "How long does composite bonding typically last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With good care, bonding can last anywhere from 3 to 7 years, sometimes longer. Avoiding excessive force or staining foods and attending regular reviews will help maintain your results beautifully.",
        },
      },
      {
        "@type": "Question",
        name: "Can composite bonding stain or discolour over time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, bonding is more porous than natural enamel and can stain over time. We recommend limiting coffee, red wine, and smoking, and coming in for regular professional polishings to keep your smile fresh and bright.",
        },
      },
      {
        "@type": "Question",
        name: "Can I still whiten my teeth if I’ve had bonding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Teeth whitening will not affect bonded areas. If you’re considering whitening, it’s best done before bonding so we can match the shade. We’ll always guide you on the best timing for treatments.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my bonding chips or wears down?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bonding can be easily repaired or refreshed. If you notice a chip or feel a change in texture, just get in touch - our clinicians can restore it quickly and seamlessly.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to use any special products for my bonded teeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A non-abrasive toothpaste and a soft toothbrush are ideal to prevent unnecessary wear. Avoid hard or sticky foods where possible, and our team will recommend any additional care to suit your lifestyle.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          Implant & Bonding Maintenance Cheltenham | NUYU Excellence
        </title>
        <meta
          name="description"
          content="Protect your investment with aftercare for dental implants and bonding at NUYU Cheltenham. Long-lasting confidence."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/prevent-protect/implants-bonding"
        />
        <meta
          property="og:title"
          content="Implant & Bonding Maintenance Cheltenham | NUYU Excellence"
        />
        <meta
          property="og:description"
          content="Protect your investment with aftercare for dental implants and bonding at NUYU Cheltenham. Long-lasting confidence."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/prevent-protect/implants-bonding"
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

export default ImplantsBonding;
