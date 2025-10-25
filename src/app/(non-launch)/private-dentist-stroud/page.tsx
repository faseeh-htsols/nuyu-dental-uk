import Main from "@/views/stroud/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist near Stroud | NUYU Dental & Aesthetics",
  description:
    "Looking for a trusted private dentist near Stroud? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — all just a short drive away. Book your consultation today.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-stroud",
  },
  openGraph: {
    title: "Private Dentist near Stroud | NUYU Dental & Aesthetics",
    description:
      "Looking for a trusted private dentist near Stroud? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — all just a short drive away. Book your consultation today.",
    url: "https://www.nuyu-dental.co.uk/private-dentist-stroud",
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
      name: "How do I choose the right dentist near Stroud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a dental clinic that combines clinical expertise with a friendly approach. NUYU Dental offers advanced treatments, modern technology, and personalised care, making it easy to find the right solution for your needs.",
      },
    },
    {
      "@type": "Question",
      name: "Is Invisalign® suitable for everyone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Invisalign® works for most mild to moderate alignment issues, but a consultation is the best way to know for sure. Our experts assess your teeth, bite, and goals before recommending the most effective treatment.",
      },
    },
    {
      "@type": "Question",
      name: "Can I replace several missing teeth at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Depending on your case, we may recommend full arch implants, dental bridges, or custom dentures. Our team will guide you through all available options to restore both function and appearance.",
      },
    },
    {
      "@type": "Question",
      name: "Is professional teeth whitening safe for sensitive teeth?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we use clinically approved whitening systems designed to protect enamel and reduce sensitivity. During your consultation, we assess your suitability and tailor the treatment for maximum comfort.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do in a dental emergency near Stroud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call NUYU Dental immediately if you experience severe pain, swelling, or broken teeth. We offer same-day emergency appointments wherever possible to provide quick relief and protect your oral health.",
      },
    },
    {
      "@type": "Question",
      name: "Are cosmetic treatments like veneers permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veneers are a long-lasting solution but not permanent. With proper care, they can last 10–15 years before needing replacement, and we’ll provide full aftercare guidance to keep them looking their best.",
      },
    },
    {
      "@type": "Question",
      name: "Can dental treatments improve overall confidence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Straightening, whitening, or restoring your teeth doesn’t just improve your smile — it can boost self-esteem and overall wellbeing. Many NUYU Dental patients notice a positive change in both appearance and confidence.",
      },
    },
    {
      "@type": "Question",
      name: "Can children start orthodontic treatment early?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, early orthodontic assessments are recommended from around age 7. Detecting alignment issues early can make future treatments simpler and more effective for your child’s smile.",
      },
    },
    {
      "@type": "Question",
      name: "Are facial aesthetics treatments safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when carried out by trained professionals like our team at NUYU Dental. We use clinically approved products and techniques to deliver subtle, natural results safely and effectively.",
      },
    },
    {
      "@type": "Question",
      name: "What’s the best way to prevent gum disease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Good oral hygiene is key — regular brushing, flossing, and professional cleaning reduce the risk significantly. Our Smile Clean treatments are designed to keep gums healthy and prevent long-term damage.",
      },
    },
  ],
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-stroud",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Looking for a trusted private dentist near Stroud? NUYU Dental & Aesthetics in Cheltenham offers Invisalign®, teeth whitening, dental implants, smile makeovers, and gentle family dentistry — all just a short drive away. Book your consultation today.",
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
      "name": "Stroud"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-stroud",
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
