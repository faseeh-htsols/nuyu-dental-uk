import Main from "@/views/(everyday-dentistry)/emergencies/main";
import Script from "next/script";

const Emergency = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Dentist", "Service"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/emergency",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    description:
      "NUYU Dental offers urgent dental care in Cheltenham, providing same-day appointments for severe tooth pain, trauma, or broken teeth, with a calming environment to help put you at ease.",
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
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:30", "Su Closed"],
    serviceType: "Emergency Dental Care",
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
      url: "https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/emergency",
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
        name: "What counts as a dental emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A dental emergency could be anything from a severe toothache, broken tooth, lost filling or crown, to swelling or trauma. If you’re unsure, it’s always best to contact us – we’re here to help.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I be seen in an emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We always aim to see emergency patients as soon as possible. Simply call us, and we’ll do everything we can to arrange a same-day appointment for you.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I have a knocked-out tooth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Try to handle the tooth by the crown (not the root), keep it moist in milk or saliva, and contact us immediately. The sooner you reach us, the better the chance of saving your tooth.",
        },
      },
      {
        "@type": "Question",
        name: "Will emergency treatment be painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our team at NUYU Cheltenham provide gentle, compassionate care, even in emergencies. We’ll do everything possible to ease your discomfort quickly and comfortably.",
        },
      },
      {
        "@type": "Question",
        name: "How do I contact NUYU Cheltenham if I have a dental emergency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking with us is simple. You can call our friendly team on 01242 339233, send us an enquiry through our website, or use our online booking system to choose a convenient time. If you're nearby, you can also visit us at 64 Winchcombe Street, Cheltenham, GL52 6ND.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          Emergency Dentist Cheltenham | Same-Day Dental Appointments
        </title>
        <meta
          name="description"
          content="Dental emergency? NUYU Cheltenham offers same-day appointments to relieve pain, restore smiles and provide urgent care."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/emergency"
        />
        <meta
          property="og:title"
          content="Emergency Dentist Cheltenham | Same-Day Dental Appointments"
        />
        <meta
          property="og:description"
          content="Dental emergency? NUYU Cheltenham offers same-day appointments to relieve pain, restore smiles and provide urgent care."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/everyday-dentistry/emergency"
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

export default Emergency;
