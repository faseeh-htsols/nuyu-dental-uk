import Main from "@/views/cirencester/main";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";
export const metadata: Metadata = {
  title: "Private Dentist near Cirencester | NUYU Dental & Aesthetics",
  description:
    "Looking for a trusted private dentist near Cirencester? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — just 30 minutes away.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-cirencester",
  },
  openGraph: {
    title: "Private Dentist near Cirencester | NUYU Dental & Aesthetics",
    description:
      "Looking for a trusted private dentist near Cirencester? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — just 30 minutes away.",
    url: "https://www.nuyu-dental.co.uk/private-dentist-cirencester",
    siteName: "NUYU Dental & Aesthetics",
    images: [
      {
        url: "https://www.nuyu-dental.co.uk/header-image-v3.webp",
      },
    ],
  },
};
const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I get dental treatment if I’m pregnant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, many treatments like check-ups, hygiene, and fillings are safe during pregnancy. We avoid unnecessary X-rays and tailor your care to keep you and your baby safe.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer sedation for nervous patients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide sedation options for those with dental anxiety or phobia. It helps you relax during procedures while our team ensures maximum comfort and safety.",
      },
    },
    {
      "@type": "Question",
      name: "Can you fix gaps in teeth without braces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Treatments like composite bonding, veneers, or Invisalign® Lite can close gaps effectively without needing traditional braces, depending on your case.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I need a root canal or extraction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a tooth is infected but salvageable, a root canal can save it. Extraction is considered only when the tooth is beyond repair, and we’ll guide you through the safest option.",
      },
    },
    {
      "@type": "Question",
      name: "Is it possible to replace all my teeth in one day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with same-day full arch implants (“teeth in a day”), we can replace an entire set of teeth securely and efficiently. A full consultation is required to confirm suitability.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help if my dentures keep slipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we can improve comfort and stability with implant-supported dentures or a better-fitting custom design. We’ll assess your current dentures and recommend the best fix.",
      },
    },
    {
      "@type": "Question",
      name: "Do you treat bleeding gums or gum disease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer advanced hygiene treatments and gum therapy to tackle early signs of gum disease. Early intervention prevents further complications and tooth loss.",
      },
    },
    {
      "@type": "Question",
      name: "Can you remove stubborn brown stains on teeth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our professional hygiene and stain removal treatments can safely eliminate deep discolouration caused by tea, coffee, smoking, or medication — restoring a brighter smile.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with bad breath that doesn’t improve with brushing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, persistent bad breath often indicates underlying issues like gum disease or tartar build-up. We diagnose the cause and offer hygiene treatments to restore fresh breath.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer second opinions on treatment plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we welcome patients seeking reassurance or alternative options. We’ll review your case thoroughly and provide clear, honest advice so you can make an informed decision.",
      },
    },
  ],
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-cirencester",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Looking for a trusted private dentist near Cirencester? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — just 30 minutes away.",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:30"
  ],
  "serviceType": [
    "Invisalign®",
    "Adult Braces",
    "Kids Braces",
    "Whiten & Enhance",
    "Composite Bonding",
    "Smile Makeovers",
    "Teeth Whitening",
    "Veneers",
    "Oral Health Assessment",
    "Smile Clean",
    "Implant & Bonding Care",
    "Custom Dentures",
    "Dental Implants",
    "Full Arch Implants",
    "Fillings",
    "Root Canal Treatment",
    "Dental Crowns",
    "Emergencies",
    "Facial Rejuvenation",
    "Skin Treatments",
    "NUYU Gym"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "64 Winchcombe Street",
    "addressLocality": "Cheltenham",
    "addressRegion": "Gloucestershire",
    "postalCode": "GL52 2ND",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.902,
    "longitude": -2.0701
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44 1242 339233",
    "contactType": "Customer Service",
    "availableLanguage": "English",
    "areaServed": "GB"
  },
  "provider": {
    "@type": "Organization",
    "name": "NUYU Dental & Aesthetics",
    "url": "https://www.nuyu-dental.co.uk/",
    "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
    "sameAs": [
      "https://www.facebook.com/nuyudentalcheltenham",
      "https://www.instagram.com/nuyu.dental.cheltenham",
      "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
      "https://www.tiktok.com/@nuyu.dental.cheltenham",
      "https://g.co/kgs/LZCRwvP"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Cirencester"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-cirencester",
    "priceCurrency": "GBP",
    "price": "Contact for pricing",
    "eligibleRegion": "GB"
  }
};

function Page() {
  return (
    <div>
      <Script
        id="json-id"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Script
        id="json-id2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
      />
      <Main />
    </div>
  );
}

export default Page;
