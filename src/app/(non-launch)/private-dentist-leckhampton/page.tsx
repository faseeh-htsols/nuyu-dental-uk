import Main from "@/views/dentist-leckhampton/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist Leckhampton | NUYU Dental & Aesthetics Cheltenham",
  description:
    "Looking for a private dentist near Leckhampton? NUYU Dental & Aesthetics in Cheltenham provides Invisalign®, braces, whitening, veneers, implants, smile makeovers, and skin treatments with a caring local service.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-leckhampton",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I bring my child from Leckhampton for orthodontic check-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For growing children, we recommend a check-up every 6–12 months. This lets us monitor development and decide if early intervention, such as guidance for braces, is needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine dental treatments with aesthetic procedures in one visit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In some cases, yes. Whitening and a routine check-up can often be combined, but more complex procedures are usually booked separately for safety and quality."
      }
    },
    {
      "@type": "Question",
      "name": "Are payment plans available for treatments like implants or smile makeovers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We offer interest-free finance on larger treatments so you can spread the cost with manageable monthly payments rather than paying in full straight away."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide sedation for anxious or long appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can discuss inhalation or oral sedation for nervous patients, or for longer or more complex procedures, to keep you comfortable throughout."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my child’s retainer breaks or no longer fits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bring it in as soon as possible. We’ll check and adjust it quickly; if it cannot be repaired, we’ll make a replacement to protect your child’s progress."
      }
    },
    {
      "@type": "Question",
      "name": "How long does teeth whitening last, and can I get top-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Results usually last 6–12 months, depending on lifestyle factors such as coffee, tea, or smoking. We provide safe top-ups to maintain your brighter smile."
      }
    },
    {
      "@type": "Question",
      "name": "Will facial aesthetic treatments affect my upcoming dental work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically no, but we review your dental plan first. We may adjust timing or injection sites to ensure the best outcome for both dental and aesthetic results."
      }
    },
    {
      "@type": "Question",
      "name": "Can I claim back NUYU treatment costs on health insurance or employee benefits in Leckhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many private health and wellness schemes cover part of the cost. We provide detailed invoices and treatment codes to support your claim."
      }
    },
    {
      "@type": "Question",
      "name": "What parking or transport options are there when visiting from Leckhampton?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer free on-site parking at our Cheltenham clinic. Public transport is straightforward, with regular bus routes and nearby train links from Leckhampton."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my gums bleed when brushing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bleeding gums are often an early sign of gum disease. Book a check-up and hygienist clean so we can treat the issue before it worsens."
      }
    }
  ]
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-leckhampton",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Looking for a private dentist near Leckhampton? NUYU Dental & Aesthetics in Cheltenham provides Invisalign®, braces, whitening, veneers, implants, smile makeovers, and skin treatments with a caring local service.",
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
      "name": "Leckhampton"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-leckhampton",
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
