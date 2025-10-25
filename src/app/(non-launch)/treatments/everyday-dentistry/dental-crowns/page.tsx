import Main from "@/views/(everyday-dentistry)/dental-crowns/main";
import Script from "next/script";

const DentalCrownspage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/dental-crowns",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers beautifully crafted dental crowns in Cheltenham, providing a long-lasting solution for weakened or damaged teeth with advanced 3D printing technology.",
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
    serviceType: "Dental Crowns",
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
      url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/dental-crowns",
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
        name: "Will my dental crown feel different to my natural teeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Initially, you might notice that the crown feels slightly different from your natural tooth. This is because the shape and texture of the crown can be a bit unfamiliar at first. However, this sensation is typically temporary. As you get used to the new crown, it should begin to feel completely normal within a few days. The adjustment period can vary from person to person, but it's common for any minor discomfort or odd sensation to subside quickly. If you continue to feel that the crown is not fitting properly or if it causes discomfort after a week or so, it's important to contact your dentist. They can make any necessary adjustments to ensure a perfect fit.",
        },
      },
      {
        "@type": "Question",
        name: "How should I take care of my dental crown?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The longevity of a dental crown largely depends on your oral hygiene practices. While the crown itself cannot decay, decay can occur at the junction where the crown meets the natural tooth. To ensure the best care for your crown, follow these steps: Visit your dentist and hygienist at NUYU Dental and Facial regularly for check-ups and cleanings. Brush your teeth twice a day with fluoride toothpaste. Floss daily and use interdental cleaners, such as specially shaped brushes and sticks, to remove plaque around the crown. By maintaining good oral hygiene, you can help ensure your crown lasts for many years.",
        },
      },
      {
        "@type": "Question",
        name: "Can I eat normally with a temporary crown?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While you can eat with a temporary crown, it's best to avoid hard, sticky, or chewy foods that could dislodge it. Stick to softer foods until your permanent crown is in place to ensure the temporary crown stays secure.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title> Dental Crowns Cheltenham | Restorative Dental Solutions</title>
        <meta
          name="description"
          content="Restore strength and beauty to damaged teeth with expertly crafted dental crowns at NUYU Cheltenham. Built to last and impress."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/dental-crowns"
        />
        <meta
          property="og:title"
          content="Dental Crowns Cheltenham | Restorative Dental Solutions"
        />
        <meta
          property="og:description"
          content="Restore strength and beauty to damaged teeth with expertly crafted dental crowns at NUYU Cheltenham. Built to last and impress."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/dental-crowns"
        />

        <Script
          id="id-json1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="id-json4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default DentalCrownspage;
