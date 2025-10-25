import Main from "@/views/gloucestershire/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist in Gloucester | NUYU Dental Cheltenham",
  description:
    "Expert dental care in Gloucester. Invisalign®, whitening, implants & more at NUYU Dental Cheltenham. Gentle, modern, and patient-focused.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-gloucester",
  },
  openGraph: {
    title: "Private Dentist in Gloucester | NUYU Dental Cheltenham",
    description:
      "Expert dental care in Gloucester. Invisalign®, whitening, implants & more at NUYU Dental Cheltenham. Gentle, modern, and patient-focused.",
    url: "https://www.nuyu-dental.co.uk/private-dentist-gloucester",
    images: [
      {
        url: "https://www.nuyu-dental.co.uk/header-image-v3.webp",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-gloucester",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Expert dental care in Gloucester. Invisalign®, whitening, implants & more at NUYU Dental Cheltenham. Gentle, modern, and patient-focused.",
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
      "name": "Gloucester"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-gloucester",
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
      <Main />
    </div>
  );
}

export default Page;
