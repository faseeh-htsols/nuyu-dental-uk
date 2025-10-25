import { Main } from "@/views/referral/Extraction/main";
import Script from "next/script";

const Extractions = () => {
  const schemaData = {
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
          "https://www.instagram.com/nuyu.dental.cheltenham/",
          "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
          "https://www.tiktok.com/@nuyu.dental.cheltenham",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.nuyu-dental.co.uk/referral/extractions#service",
        name: "Dental Extraction Referral Service",
        url: "https://www.nuyu-dental.co.uk/referral/extractions",
        description:
          "Referral-based service for tooth extraction at NUYU Dental in Cheltenham.",
        provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        serviceType: "Tooth Extraction Referral",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
      },
      {
        "@type": "SurgicalProcedure",
        "@id": "https://www.nuyu-dental.co.uk/referral/extractions#procedure",
        name: "Tooth Extraction Procedure",
        description:
          "A surgical dental extraction procedure performed following referral for removal of teeth.",
        procedureType: "SurgicalProcedure",
        howPerformed:
          "The tooth is carefully removed using dental instruments, typically under local anesthesia.",
        preparation:
          "Patients should follow any pre-operative instructions, such as fasting or pain management advice.",
        followup:
          "Post-operative care advice is provided, and the patient is monitored for healing and complications.",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Oral Surgery",
        },
        bodyLocation: "Oral Cavity",
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
        <title>Tooth Extractions Cheltenham | Skilled and Gentle Removal</title>
        <meta
          name="description"
          content="Complex or simple tooth extractions by experienced clinicians at NUYU Cheltenham. Patient-focused care, every step of the way."
        />
        <meta
          property="og:title"
          content="Tooth Extractions Cheltenham | Skilled and Gentle Removal"
        />
        <meta
          property="og:description"
          content="Complex or simple tooth extractions by experienced clinicians at NUYU Cheltenham. Patient-focused care, every step of the way."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/referral/extractions"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/referral/extractions"
        />
      </head>
      <Main />
    </>
  );
};

export default Extractions;
