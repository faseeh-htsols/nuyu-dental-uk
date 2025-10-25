import Main from "@/views/(whiten-enhance)/veneers/main";
import Script from "next/script";

const Veneer = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/veneers",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers bespoke porcelain veneers in Cheltenham, crafted to enhance your smile with a natural and beautiful finish.",
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
    serviceType: "Porcelain Veneers",
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
      url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/veneers",
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
        name: "How durable are veneers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Although they are made from ultra-fine porcelain material and appear fragile on the surface, veneers are actually incredibly durable and even reinforce the strength of your natural teeth while improving their appearance.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have a veneer removed in the future?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In order to get dental veneers, you need to have some of the natural enamel covering your teeth removed. This is to help them fit properly. Unfortunately, enamel doesn’t regenerate. This means that any teeth that have had veneers fitted will always require veneers.",
        },
      },
      {
        "@type": "Question",
        name: "Can I have my veneers whitened?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Veneers don’t respond to whitening gel. If you are considering teeth whitening, perhaps as part of a wider smile makeover, we strongly recommend that you have your natural teeth whitened before getting veneers. This way, your veneers can be matched to your newly whitened teeth for the most effective smile transformation.",
        },
      },
      {
        "@type": "Question",
        name: "Can I eat normally with veneers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Generally, you can eat your normal diet with veneers. However, our team will advise you to be careful when eating anything particularly hard, and to avoid chewing hard items like pen lids or crunching ice, as habits like these could damage your veneers.",
        },
      },
      {
        "@type": "Question",
        name: "How long do dental veneers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Provided that you follow the care instructions given to you by our team, you can expect your dental veneers to last between five and fifteen years before they require replacement.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Porcelain Veneers Cheltenham | Bespoke Smile Designs</title>
        <meta
          name="description"
          content="Create your dream smile with bespoke porcelain veneers at NUYU Cheltenham. A beautiful, natural finish crafted by skilled hands."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/veneers"
        />
        <meta
          property="og:title"
          content="Porcelain Veneers Cheltenham | Bespoke Smile Designs"
        />
        <meta
          property="og:description"
          content="Create your dream smile with bespoke porcelain veneers at NUYU Cheltenham. A beautiful, natural finish crafted by skilled hands."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/veneers"
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

export default Veneer;
