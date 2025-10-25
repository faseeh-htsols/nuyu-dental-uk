import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import Main from "@/views/home/main";
import Script from "next/script";

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Dentist"],
    name: "NUYU Dental & Aesthetics",
    url: "https://www.nuyu-dental.co.uk/",
    logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
    image: "https://www.nuyu-dental.co.uk/normal.webp",
    description:
      "NUYU Dental & Aesthetics is a private dental clinic in Cheltenham, Gloucestershire, offering Invisalign®, teeth whitening, dental implants, smile makeovers, and facial aesthetics in a modern and welcoming environment.",
    telephone: "+44 1242 339233",
    email: "info@nuyu-dental.co.uk",
    sameAs: [
      "https://www.facebook.com/nuyudentalcheltenham",
      "https://www.instagram.com/nuyu.dental.cheltenham/",
      "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
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
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9007,
      longitude: -2.071,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:30",
      },
    ],
    priceRange: "££",
    hasMap: [
      "https://maps.google.com/?q=NUYU+Dental+Cheltenham",
      "https://maps.apple/p/RQ~my5xdWyLs5U",
    ],
    knowsAbout: [
      "Invisalign®",
      "Adult Braces",
      "Kids Braces",
      "Teeth Whitening",
      "Composite Bonding",
      "Veneers",
      "Smile Makeovers",
      "Oral Health Assessment",
      "Smile Clean",
      "Dental Implants",
      "Full Arch Implants",
      "Everyday Dentistry",
      "Root Canal Treatment",
      "Dental Crowns",
      "Emergency Dental Care",
      "Skin Treatments",
      "Facial Aesthetics",
    ],
  };
  const schemaData3 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is NUYU Dental & Aesthetics located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You’ll find NUYU Cheltenham in the heart of beautiful Cheltenham, offering a calm and elegant space where you can feel completely at ease.",
        },
      },
      {
        "@type": "Question",
        name: "What treatments do you offer at NUYU Dental & Aesthetics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide a full range of private dental and facial aesthetic treatments, including general dentistry, cosmetic dentistry, dental implants, Invisalign, teeth whitening, and facial rejuvenation.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book an appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Booking with us is simple. You can call our friendly team on 01242 339233, send an enquiry through our website, or use our online booking system. You’re also welcome to visit us at 64 Winchcombe Street, Cheltenham, GL52 6ND.",
        },
      },
      {
        "@type": "Question",
        name: "Are you accepting new patients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are delighted to welcome new patients to NUYU Dental & Aesthetics. Whether you're looking for a full smile makeover or simply a fresh, gentle approach to your dental care, we're here for you.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer consultations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We believe every smile journey should begin with a personal consultation to understand your wishes and tailor a plan just for you.",
        },
      },
      {
        "@type": "Question",
        name: "Is NUYU Dental & Aesthetics a fully private practice?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, NUYU Dental & Aesthetics is a fully private dental and wellness practice, allowing us to offer an exceptional level of care, time, and bespoke service to each of our patients.",
        },
      },
      {
        "@type": "Question",
        name: "What makes NUYU Dental & Aesthetics different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At NUYU Dental & Aesthetics, we combine clinical excellence with an unwavering focus on your comfort and experience. Every detail of your journey with us is thoughtfully designed to help you feel relaxed, valued, and truly cared for.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer finance options for treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We do. We understand that investing in your smile is a big decision, so we offer flexible finance plans to help make your dream smile more accessible.",
        },
      },
      {
        "@type": "Question",
        name: "I’m nervous about visiting the dentist – can you help?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Of course. You are in very safe hands at NUYU Cheltenham. We specialise in caring for nervous patients with kindness, patience, and a genuinely gentle approach.",
        },
      },
      {
        "@type": "Question",
        name: "How can I find out more about a specific treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our website offers a detailed overview of our treatments, but the best way to find out more is to arrange a consultation with our team. We’ll be delighted to guide you through your options with warmth and honesty.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>NUYU Dental Cheltenham | Luxury Dentistry & Wellness Care</title>
        <meta
          name="description"
          content="Discover NUYU in Cheltenham — luxurious dentistry, facial aesthetics and wellness, all under one beautifully designed roof. Your journey to confidence begins here."
        />
        <meta
          property="og:title"
          content="NUYU Dental Cheltenham | Luxury Dentistry & Wellness Care"
        />
        <meta
          property="og:description"
          content="Discover NUYU in Cheltenham — luxurious dentistry, facial aesthetics and wellness, all under one beautifully designed roof. Your journey to confidence begins here."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/og-properties-img.png"
        />
        <meta property="og:url" content="https://www.nuyu-dental.co.uk/" />

        <link rel="canonical" href="https://www.nuyu-dental.co.uk/" />
        {/* <script type="application/ld+json">{JSON.stringify(schemaData)}</script> */}
        <Script id="json-id" type="application/ld+json">
          {JSON.stringify(schemaData)}
        </Script>
        <Script id="json-id2" type="application/ld+json">
          {JSON.stringify(schemaData3)}
        </Script>
      </head>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
