import Main from "@/views/charlton-kings/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist Charlton Kings | NUYU Dental & Aesthetics Cheltenham",
  description:
    "Looking for a trusted private dentist near Charlton Kings? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, braces, implants, smile makeovers, whitening, veneers, and skin treatments – all under one roof. Book online today.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/dentist-charlton-kings",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "I’ve just moved to Charlton Kings—how do I register at NUYU Dental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Register by calling our reception or completing the new patient form online. We’ll take your dental history and arrange your first appointment promptly."
      }
    },
    {
      "@type": "Question",
      "name": "I feel anxious about visiting the dentist—do you offer support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We take extra time with nervous patients, explain each step clearly, and can discuss gentle relaxation or sedation options where appropriate."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need to cancel or miss an appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please tell us as soon as possible if you cannot attend. We’ll help you rearrange your visit and advise on our late cancellation policy."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide evening or weekend appointments for busy families?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer extended hours on certain evenings and some weekend availability. Ask when booking to find a time that suits your schedule."
      }
    },
    {
      "@type": "Question",
      "name": "What should I bring with me for my first visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please bring identification, any recent dental records if available, and a list of current medication. A brief list of questions can also help."
      }
    },
    {
      "@type": "Question",
      "name": "Can you repair a broken crown or filling urgently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If a crown or filling breaks and causes pain or risk of further damage, we’ll do our best to see you quickly—often the same day."
      }
    },
    {
      "@type": "Question",
      "name": "Are follow-up appointments included after treatments like implants or veneers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We schedule follow-up appointments after treatments such as implants, veneers, or bonding to check healing and refine results if needed."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be given advice on aftercare at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Of course. We provide clear aftercare instructions following whitening, bonding, fillers, and other treatments to protect comfort and results."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if I have pain after treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Please contact us straight away. We’ll arrange to see you as soon as possible or offer advice by phone to help manage discomfort."
      }
    },
    {
      "@type": "Question",
      "name": "Can you advise on day-to-day dental care, such as brushing and diet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer personalised guidance on brushing techniques, diet choices, and simple daily habits to support long-term oral health."
      }
    }
  ]
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/dentist-charlton-kings",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Looking for a trusted private dentist near Charlton Kings? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, braces, implants, smile makeovers, whitening, veneers, and skin treatments – all under one roof. Book online today.",
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
      "name": "Charlton Kings"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/dentist-charlton-kings",
    "priceCurrency": "GBP",
    "price": "Contact for pricing",
    "eligibleRegion": "GB"
  }
};

function Page() {
  return (
    <>
      <head>
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
      </head>
      <Main />
    </>
  );
}

export default Page;
