import Main from "@/views/dentist-prestbury/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trusted Private Dentist for Prestbury | NUYU Dental & Aesthetics",
  description:
    "Private dental care for Prestbury patients without the hassle. NUYU Dental in Cheltenham offers everything from check-ups to implants and braces.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-prestbury",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you accept new private patients from Prestbury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we’re happy to welcome new patients from Prestbury and nearby areas. You can register online or by phone, and we’ll arrange your first appointment without long waits."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if I have a dental emergency at night in Prestbury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If it’s outside our opening hours, please contact NHS 111 for urgent advice. For daytime emergencies, we can usually offer same-day private appointments at NUYU."
      }
    },
    {
      "@type": "Question",
      "name": "Can children from Prestbury be registered as private patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we see children of all ages. Families often choose us for regular check-ups, early orthodontic care, and a gentle approach that helps children feel at ease."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can I book an Invisalign\u00ae consultation from Prestbury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most consultations can be arranged within a couple of weeks. We’ll take digital scans, show a preview of potential results, and explain your options clearly."
      }
    },
    {
      "@type": "Question",
      "name": "How do I travel from Prestbury to your Cheltenham clinic if I don’t drive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Regular buses run from Prestbury to Cheltenham town centre, and our clinic is a short walk from the stop. Cheltenham Spa station is also nearby for rail connections."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide check-ups for elderly patients from Prestbury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we care for patients of all ages and adapt treatments to individual needs. From dentures to gum health, we make long-term oral care straightforward and comfortable."
      }
    },
    {
      "@type": "Question",
      "name": "Can I transfer my dental records from another practice in Prestbury?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with your consent we can request records from your previous dentist. This helps us understand your history and continue your care seamlessly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you see patients with braces fitted elsewhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can review and in some cases continue treatment started elsewhere. We’ll assess your braces and advise on the best way forward."
      }
    },
    {
      "@type": "Question",
      "name": "Do you remove wisdom teeth privately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide private wisdom tooth extractions when needed—for pain, infection, or overcrowding. We’ll take X-rays and explain your options in full."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer check-ups before overseas travel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many patients book a quick check-up before going abroad. It helps spot and treat minor issues in advance, reducing the risk of emergencies while away."
      }
    }
  ]
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-prestbury",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Private dental care for Prestbury patients without the hassle. NUYU Dental in Cheltenham offers everything from check-ups to implants and braces.",
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
      "name": "Prestbury"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-prestbury",
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
