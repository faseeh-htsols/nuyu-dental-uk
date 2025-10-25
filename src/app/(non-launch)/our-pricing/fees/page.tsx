import Main from "@/views/(our-pricing)/fees/main";
import Script from "next/script";

const FeesPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.nuyu-dental.co.uk/our-pricing#webpage",
    url: "https://www.nuyu-dental.co.uk/our-pricing",
    name: "Our Pricing – NUYU Dental & Aesthetics",
    description:
      "Transparent fees for private dental care in Cheltenham. Guide prices for Invisalign®, braces, whitening, implants, and everyday dentistry.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    mainEntity: { "@id": "https://www.nuyu-dental.co.uk/our-pricing#pricing" },
  };
  const schemaData2 = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://www.nuyu-dental.co.uk/#dentist",
        name: "NUYU Dental & Aesthetics",
        url: "https://www.nuyu-dental.co.uk",
        logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "64 Winchcombe Street",
          addressLocality: "Cheltenham",
          addressRegion: "Gloucestershire",
          postalCode: "GL52 2ND",
          addressCountry: "GB",
        },
        telephone: "+44 1242 339233",
        sameAs: [
          "https://www.facebook.com/nuyudentalcheltenham",
          "https://www.instagram.com/nuyu.dental.cheltenham",
          "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
          "https://www.tiktok.com/@nuyu.dental.cheltenham",
          "https://maps.apple/p/RQ~my5xdWyLs5U",
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": "https://www.nuyu-dental.co.uk/our-pricing/fees#fees",
        name: "NUYU Dental & Aesthetics Fee Guide",
        url: "https://www.nuyu-dental.co.uk/our-pricing/fees",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Straighten & Align",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Invisalign®",
                price: "2295",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Invisalign®",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Fixed Braces",
                price: "2995",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Fixed Braces",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Retainers (per arch)",
                price: "149",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Retainers (per arch)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Vivera® Retainers (3 sets)",
                price: "550",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Vivera® Retainers (3 sets)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Whiten & Enhance",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Teeth Whitening",
                price: "395",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Teeth Whitening",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Edge Bonding (per tooth)",
                price: "350",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Edge Bonding (per tooth)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Digital Smile Design & Smile Trial",
                price: "350",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Digital Smile Design & Smile Trial",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Composite Bonding (per tooth)",
                price: "350",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Composite Bonding (per tooth)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Ceramic Veneers (per tooth)",
                price: "949",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Ceramic Veneers (per tooth)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Gum Contouring (per tooth)",
                price: "195",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Gum Contouring (per tooth)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Prevent & Protect",
            itemListElement: [
              {
                "@type": "Offer",
                name: "New patient Oral Health Assessment",
                price: "69",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "New patient Oral Health Assessment",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Existing Patients Oral Health Assessment",
                price: "59",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Existing Patients Oral Health Assessment",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Hygiene Therapy",
                price: "89",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Hygiene Therapy",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Extended Hygiene Therapy",
                price: "119",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Extended Hygiene Therapy",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Composite Bonding Maintenance (Shine & Polish)",
                price: "120",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Composite Bonding Maintenance (Shine & Polish)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Implant & Replace",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Implant Consultation",
                price: "99",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Implant Consultation",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "CBCT Scan",
                price: "249",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "CBCT Scan",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Single Dental Implant with Crown",
                price: "3149",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Single Dental Implant with Crown",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Full Arch Implants",
                price: "17995",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Full Arch Implants",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Dentures",
                price: "749",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Dentures",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Everyday Dentistry",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Composite Filling",
                price: "169",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Composite Filling",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Tooth Extraction",
                price: "199",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Tooth Extraction",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Root Canal Treatment",
                price: "499",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Root Canal Treatment",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Periodontal Treatment",
                price: "199",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Periodontal Treatment",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Emergency Consultation (Assessment & Advice)",
                price: "99",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Emergency Consultation (Assessment & Advice)",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Aesthetics & Body Confidence",
            itemListElement: [
              {
                "@type": "Offer",
                name: "Wrinkle relaxing treatments",
                price: "180",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Wrinkle relaxing treatments",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Dermal Fillers",
                price: "240",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Dermal Fillers",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "RSkin Boosters & Hydration Treatments",
                price: "250",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Skin Boosters & Hydration Treatments",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Lip Enhancement",
                price: "240",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Lip Enhancement",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
              {
                "@type": "Offer",
                name: "Profhilo® Skin Rejuvenation",
                price: "280",
                priceCurrency: "GBP",
                itemOffered: {
                  "@type": "Service",
                  name: "Profhilo® Skin Rejuvenation",
                  provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
                },
              },
            ],
          },
        ],
      },
    ],
  };
  return (
    <>
      <head>
        <Script
          id="json-id2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
        />
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>Dental Fees Cheltenham | Private Dental Costs at NUYU</title>
        <meta
          name="description"
          content="View NUYU Cheltenham’s private dental fee guide. High-quality care delivered with clarity, value and excellence."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/our-pricing/fees"
        />
        <meta
          property="og:title"
          content="Dental Fees Cheltenham | Private Dental Costs at NUYU"
        />
        <meta
          property="og:description"
          content="View NUYU Cheltenham’s private dental fee guide. High-quality care delivered with clarity, value and excellence."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/our-pricing/fees"
        />
      </head>
      <Main />
    </>
  );
};

export default FeesPage;
