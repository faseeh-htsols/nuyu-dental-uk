import Main from "@/views/(our-pricing)/dental-plans/main";
import Script from "next/script";

const DentalPlanPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://www.nuyu-dental.co.uk/our-pricing/dental-plans#plans",
    url: "https://www.nuyu-dental.co.uk/our-pricing/dental-plans",
    name: "NUYU Dental & Aesthetics Plans",
    description:
      "Monthly dental membership plans at NUYU Dental & Aesthetics offering regular check-ups, hygiene visits, and treatment discounts in Cheltenham and nearby places.",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Plan 1",
        description:
          "1 dental exam + 1 hygiene visit per year, plus 10% off everyday dentistry and Invisalign®",
        price: "11.95",
        priceCurrency: "GBP",
        itemOffered: {
          "@type": "Service",
          name: "Basic Dental Plan",
          provider: {
            "@type": "Dentist",
            "@id": "https://www.nuyu-dental.co.uk/#dentist",
            name: "NUYU Dental & Aesthetics",
          },
        },
      },
      {
        "@type": "Offer",
        name: "Plan 2",
        description:
          "2 dental exams + 2 hygiene visits per year, plus 10% off everyday dentistry and Invisalign®",
        price: "23.55",
        priceCurrency: "GBP",
        itemOffered: {
          "@type": "Service",
          name: "Standard Dental Plan",
          provider: {
            "@type": "Dentist",
            "@id": "https://www.nuyu-dental.co.uk/#dentist",
            name: "NUYU Dental & Aesthetics",
          },
        },
      },
      {
        "@type": "Offer",
        name: "Plan 3",
        description:
          "2 dental exams + 4 hygiene visits per year, plus 10% off everyday dentistry and Invisalign®",
        price: "37.95",
        priceCurrency: "GBP",
        itemOffered: {
          "@type": "Service",
          name: "Comprehensive Dental Plan",
          provider: {
            "@type": "Dentist",
            "@id": "https://www.nuyu-dental.co.uk/#dentist",
            name: "NUYU Dental & Aesthetics",
          },
        },
      },
    ],
  };

  return (
    <>
      <head>
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>Dental Plans Cheltenham | Budget-Friendly Dental Care</title>
        <meta
          name="description"
          content="Flexible dental plans at NUYU Cheltenham to make premium care affordable and accessible for every smile."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/our-pricing/dental-plans"
        />
        <meta
          property="og:title"
          content="Dental Plans Cheltenham | Budget-Friendly Dental Care"
        />
        <meta
          property="og:description"
          content="Flexible dental plans at NUYU Cheltenham to make premium care affordable and accessible for every smile."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/our-pricing/dental-plans"
        />
      </head>
      <Main />
    </>
  );
};

export default DentalPlanPage;
