import Main from "@/views/(whiten-enhance)/teeth-whitening/main";
import Script from "next/script";

const TeethWhiten = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/teeth-whitening",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental provides professional teeth whitening treatments to brighten your smile safely and effectively, enhancing overall dental aesthetics.",
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
    serviceType: "Teeth Whitening",
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
      url: "https://www.nuyu-dental.co.uk/treatments/whiten-enhance/teeth-whitening",
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
        name: "Why do I have to see a dentist for teeth whitening?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The dentist will use a high quality dental lab to manufacture a bespoke set of whitening trays for you. These are filled with the whitening gel and then placed on your teeth. It is imperative that these trays are made correctly and the fit is spot on. Otherwise, the whitening process and end result will be affected.",
        },
      },
      {
        "@type": "Question",
        name: "I’ve sensitive teeth, can I still have the treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whitening can cause heightened sensitivity of teeth during the procedure. This normally subsides again once you stop whitening. Therefore if your teeth are already sensitive, you should expect this to intensify while you whiten your teeth. We can discuss techniques to reduce sensitivity at your consultation and help reduce this.",
        },
      },
      {
        "@type": "Question",
        name: "How long do my teeth stay white?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This depends largely on your diet and oral hygiene. Some patients go years without whitening again. Others like to ‘top up’ their whitening more regularly. It is really a personal choice. As long as your trays still fit well, you can simply buy more whitening gel from us as needed.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to get a whiter smile?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once you start whitening, you can start to notice the difference within days. We normally advise whitening for at least 2 weeks (from as little as 2 hours per day).",
        },
      },
      {
        "@type": "Question",
        name: "How much does teeth whitening cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing varies on the treatment type you go for but can start from as low as £395.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Professional Teeth Whitening Cheltenham | NUYU Dentistry</title>
        <meta
          name="description"
          content="Brighten your smile safely and professionally with NUYU Cheltenham’s expert teeth whitening treatments. Shine with confidence."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/teeth-whitening"
        />
        <meta
          property="og:title"
          content="Professional Teeth Whitening Cheltenham | NUYU Dentistry"
        />
        <meta
          property="og:description"
          content="Brighten your smile safely and professionally with NUYU Cheltenham’s expert teeth whitening treatments. Shine with confidence."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/whiten-enhance/teeth-whitening"
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

export default TeethWhiten;
