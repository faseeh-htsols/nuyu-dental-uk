import Main from "@/views/contact-us/main";
import Script from "next/script";

const Contactus = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.nuyu-dental.co.uk/#organization",
      name: "NUYU Dental & Aesthetics",
      url: "https://www.nuyu-dental.co.uk",
      logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
      telephone: "+44 1242 339233",
      email: "info@nuyu-dental.co.uk",
      sameAs: [
        "https://www.facebook.com/dentistbythegreen",
        "https://www.instagram.com/dentistbythegreen/",
        "https://maps.apple/p/RQ~my5xdWyLs5U",
        "https://www.tiktok.com/@nuyu.dental.cheltenham",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "64 Winchcombe Street",
        addressLocality: "Cheltenham",
        addressRegion: "Gloucestershire",
        postalCode: "GL52 2ND",
        addressCountry: "GB",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Customer Support",
          telephone: "+44 1242 339233",
          availableLanguage: "en",
        },
      ],
    },
  };

  return (
    <>
      <head>
        <Script
          id="json-id"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>Contact NUYU Cheltenham | Book Your Consultation Today</title>
        <meta
          name="description"
          content="Get in touch with NUYU Dental Cheltenham. Book your consultation today and take the first step towards your dream smile."
        />
        <meta
          property="og:title"
          content="Contact NUYU Cheltenham | Book Your Consultation Today"
        />
        <meta
          property="og:description"
          content="Get in touch with NUYU Dental Cheltenham. Book your consultation today and take the first step towards your dream smile."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/contact-us"
        />

        <link rel="canonical" href="https://www.nuyu-dental.co.uk/contact-us" />
      </head>
      <Main />
    </>
  );
};

export default Contactus;
