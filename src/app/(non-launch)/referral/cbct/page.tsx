import { Main } from "@/views/referral/cbct/main";
import Script from "next/script";

const Cbct = () => {
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
        "@id": "https://www.nuyu-dental.co.uk/referral/cbct#service",
        name: "Dental Cone Beam CT (CBCT) Scan Referral",
        url: "https://www.nuyu-dental.co.uk/referral/cbct",
        description:
          "NUYU Dental & Aesthetics accepts referral patients for Dental Cone Beam CT (CBCT) scans, providing high-resolution 3D imaging to assist in implant planning and complex diagnosis.",
        provider: {
          "@id": "https://www.nuyu-dental.co.uk/#dentist",
        },
        serviceType: "Diagnostic Imaging Service",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
      },
      {
        "@type": "MedicalProcedure",
        "@id": "https://www.nuyu-dental.co.uk/referral/cbct#procedure-cbct",
        name: "Dental Cone Beam CT (CBCT) Scan",
        description:
          "A diagnostic procedure using a cone-beam CT scanner to create a 3D model of teeth, bone, and soft tissues for dental treatment planning.",
        procedureType: "DiagnosticProcedure",
        howPerformed:
          "The scanner rotates around the head, capturing X-ray images that are reconstructed into a detailed 3D model.",
        preparation:
          "Patients may be asked to remove jewelry and follow instructions before the scan.",
        followup:
          "Results are shared with the referring dentist for diagnosis and treatment planning.",
        relevantSpecialty: {
          "@type": "MedicalSpecialty",
          name: "Dentistry",
        },
        bodyLocation: "Craniofacial region",
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
        <title>CBCT Scans Cheltenham | Advanced 3D Dental Imaging</title>
        <meta
          name="description"
          content="Advanced CBCT dental scans in Cheltenham at NUYU. 3D imaging for precise, safe and efficient treatment planning."
        />
        <meta
          property="og:title"
          content="CBCT Scans Cheltenham | Advanced 3D Dental Imaging"
        />
        <meta
          property="og:description"
          content="Advanced CBCT dental scans in Cheltenham at NUYU. 3D imaging for precise, safe and efficient treatment planning."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/referral/cbct"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/referral/cbct"
        />
      </head>
      <Main />
    </>
  );
};

export default Cbct;
