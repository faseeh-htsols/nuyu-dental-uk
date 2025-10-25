import Main from "@/views/(implants-replace)/dental-impants/main";
import Script from "next/script";

const DentalImplantsPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/dental-implants",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers state-of-the-art dental implants in Cheltenham, providing a permanent solution for missing teeth with advanced technology and personalized care.",
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
    serviceType: "Dental Implants",
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
      url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/dental-implants",
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
        name: "Am I suitable for dental implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most people with missing teeth are suitable for dental implants, but a comprehensive assessment is essential. At NUYU, we use high-resolution CBCT scans, digital impressions, and advanced diagnostics to evaluate bone density, gum health, and overall suitability. Even if you've been told you don’t have enough bone, modern solutions like bone grafting or sinus lifts may still make treatment possible.",
        },
      },
      {
        "@type": "Question",
        name: "I have gum disease; can I have implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, but gum disease must first be treated and stabilised. NUYU focuses on restoring gum health before implant placement. With good oral hygiene and regular maintenance, implants remain a reliable solution even for patients with a history of gum disease.",
        },
      },
      {
        "@type": "Question",
        name: "What if I don’t have enough bone for implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bone grafting and advanced implant techniques can restore lost bone volume. At NUYU, we often perform bone grafting during implant placement to reduce multiple procedures. Soft tissue augmentation may also be recommended for optimal aesthetics.",
        },
      },
      {
        "@type": "Question",
        name: "What is a sinus graft?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sinus graft (or sinus lift) adds bone to the upper back jaw, allowing implant placement where bone is thin. It's a common solution that makes implants possible for patients previously told they weren’t candidates.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the implant process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most implant treatments take 3 to 6 months from placement to final restoration. Some cases may allow for same-day temporary teeth. More complex treatments like bone grafts may extend the timeline.",
        },
      },
      {
        "@type": "Question",
        name: "Is the procedure painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The procedure is done under local anaesthesia, making it painless. Sedation options are available. Mild soreness may follow, but most patients compare it to a tooth extraction with quick recovery.",
        },
      },
      {
        "@type": "Question",
        name: "Will my bite be affected if I don’t replace a missing tooth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Missing teeth can cause neighbouring teeth to shift and opposing teeth to move down, disrupting bite balance. Implants restore function and prevent long-term issues.",
        },
      },
      {
        "@type": "Question",
        name: "How long do dental implants last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dental implants have over a 90% success rate after 10+ years, often lasting 25+ years. Their lifespan depends on oral hygiene, regular dental check-ups, and professional maintenance.",
        },
      },
      {
        "@type": "Question",
        name: "I’m a really nervous patient – what are my options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NUYU offers a calm, supportive environment with IV sedation for anxious patients. You’ll feel relaxed during treatment, and many have little memory of the procedure. We tailor the experience to your comfort level.",
        },
      },
    ],
  };
  return (
    <>
      <head>
        <title>Dental Implants Cheltenham | Permanent Tooth Replacement</title>
        <meta
          name="description"
          content="Restore missing teeth with NUYU’s advanced dental implant treatments in Cheltenham. Natural results, life-changing confidence."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/implant-replace/dental-implants"
        />
        <meta
          property="og:title"
          content="Dental Implants Cheltenham | Permanent Tooth Replacement"
        />
        <meta
          property="og:description"
          content="Restore missing teeth with NUYU’s advanced dental implant treatments in Cheltenham. Natural results, life-changing confidence."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/implant-replace/dental-implants"
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

export default DentalImplantsPage;
