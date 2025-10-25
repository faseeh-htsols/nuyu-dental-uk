import Main from "@/views/(implants-replace)/full-arch-implants/main";
import Script from "next/script";

const AllOn4ImplantsPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/full-arch-implants",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers advanced Full Arch Implants in Cheltenham, providing a permanent, natural-feeling solution for those missing most or all teeth.",
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
    serviceType: "Full Arch Dental Implants",
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
      url: "https://www.nuyu-dental.co.uk/treatments/implant-replace/full-arch-implants",
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
        name: "Is the procedure really completed in one day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For many patients, yes! A secure, temporary bridge is often fitted on the same day as your implant placement, so you won’t go without teeth. The implants are placed using precise angles for stability and can support your new smile immediately. After healing and bone integration over the next few months, your final custom bridge is fitted, giving you a strong, long-lasting result.",
        },
      },
      {
        "@type": "Question",
        name: "Who is suitable for full arch implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full arch implants are ideal for those with multiple failing or missing teeth seeking a fixed, long-term alternative to dentures. They're also great for patients with jawbone loss, as implants can often be placed without grafting. A consultation and digital assessment is the best way to determine suitability.",
        },
      },
      {
        "@type": "Question",
        name: "Will the procedure be painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The procedure is done under local anaesthesia, and IV sedation is available for anxious patients. Some mild swelling or soreness is normal afterward, but discomfort usually subsides within a few days. Patients typically manage well, and our team provides full aftercare support.",
        },
      },
      {
        "@type": "Question",
        name: "How much does full arch implant treatment cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cost varies depending on the number of implants, complexity, and materials used. NUYU offers flexible payment options and finance plans. We’ll provide clear costs and timelines during your consultation.",
        },
      },
      {
        "@type": "Question",
        name: "How are full arch implants different from traditional dentures?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike dentures that rest on the gums, full arch implants are anchored to the jawbone, providing a stable, natural-feeling solution. They don’t require adhesives, prevent bone loss, and offer improved chewing power and appearance.",
        },
      },
      {
        "@type": "Question",
        name: "How long do full arch implants last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With expert placement and proper care, full arch implants are a durable, long-term solution. Longevity depends on bone health, bite, and maintenance. Regular check-ups and daily care are essential for lasting results.",
        },
      },
      {
        "@type": "Question",
        name: "How do I care for my full arch implants?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Care is similar to natural teeth: brush twice daily, use interdental brushes or a water flosser, rinse with antibacterial mouthwash, and attend regular dental visits. NUYU provides a personalised aftercare plan for each patient.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any risks or complications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While full arch implants have a high success rate, risks include infection or implant failure. At NUYU, we use advanced digital planning to minimise risks and ensure long-term success. Following your aftercare plan is key.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          Full Arch Dental Implants Cheltenham | Smile Transformations
        </title>
        <meta
          name="description"
          content="Full arch dental implants at NUYU Cheltenham — a lasting, beautiful solution for a complete, confident new smile."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/implant-replace/full-arch-implants"
        />
        <meta
          property="og:title"
          content="Full Arch Dental Implants Cheltenham | Smile Transformations"
        />
        <meta
          property="og:description"
          content="Full arch dental implants at NUYU Cheltenham — a lasting, beautiful solution for a complete, confident new smile."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/implant-replace/full-arch-implants"
        />

        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="json-ld3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default AllOn4ImplantsPage;
