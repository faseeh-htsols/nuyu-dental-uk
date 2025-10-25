import { Main } from "@/views/referral/dental-implants/main";
import Script from "next/script";

const DentalImplant = () => {
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
          "https://www.instagram.com/nuyu.dental.cheltenham",
          "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
          "https://www.tiktok.com/@nuyu.dental.cheltenham",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.nuyu-dental.co.uk/referral/dental-implant#service",
        name: "Dental Implant Referral Service",
        url: "https://www.nuyu-dental.co.uk/referral/dental-implant",
        description:
          "Referral-based service for dental implant placement and restoration at NUYU Dental & Aesthetics.",
        provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        serviceType: "Dental Implant Referral",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id":
          "https://www.nuyu-dental.co.uk/referral/dental-implant#procedure",
        name: "Dental Implant Placement Procedure",
        description:
          "An implant placement procedure performed following specialist referral for restoring missing teeth.",
        procedureType: "SurgicalProcedure",
        howPerformed:
          "Dental surgery is performed by placing a titanium implant into the jawbone to support a replacement tooth.",
        preparation:
          "Patient must follow pre-operative instructions, including fasting if necessary.",
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
        <title>Dental Implant Referrals Cheltenham | Surgical Care</title>
        <meta
          name="description"
          content="Specialist dental implant referrals at NUYU Cheltenham. Surgical care to support patient smiles."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/referral/dental-implant"
        />
        <meta
          property="og:title"
          content="Dental Implant Referrals Cheltenham | Surgical Care"
        />
        <meta
          property="og:description"
          content="Specialist dental implant referrals at NUYU Cheltenham. Surgical care to support patient smiles."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/referral/dental-implant"
        />
      </head>
      <Main />
    </>
  );
};

export default DentalImplant;
