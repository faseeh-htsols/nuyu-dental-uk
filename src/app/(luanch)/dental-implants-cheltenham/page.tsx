import LandingPage from "@/views/implants-landing/main";
import { Metadata } from "next";
import Script from "next/script";
import React from "react";
export const metadata: Metadata = {
  title: "Dental Implants in Cheltenham | Fill Missing Gaps Today",
  description:
    "Get 10% off dental implants in Cheltenham + FREE CBCT scan, consultation, and 1st-year review. Book your smile makeover today with flexible 0% payment options.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/dental-implants-cheltenham",
  },
  openGraph: {
    title: "Dental Implants in Cheltenham | Fill Missing Gaps Today",
    description:
      "Get 10% off dental implants in Cheltenham + FREE CBCT scan, consultation, and 1st-year review. Book your smile makeover today with flexible 0% payment options.",
    url: "https://www.nuyu-dental.co.uk/dental-implants-cheltenham",
    siteName: "NUYU Dental & Aesthetics",
    images: [
      {
        url: "https://www.nuyu-dental.co.uk/landing-og-img.png",
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/dental-implants-cheltenham",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "NUYU Dental provides expert dental implant treatments to restore missing teeth with natural-looking, durable results, improving both function and aesthetics.",
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
    "latitude": 51.9020,
    "longitude": -2.0701
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44 1242 339233",
    "contactType": "Customer Service",
    "areaServed": "GB",
    "availableLanguage": "English"
  },
  "priceRange": "£2,236",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:30"
  ],
  "serviceType": "Dental Implants",
  "provider": {
    "@type": "Organization",
    "name": "NUYU Dental & Aesthetics",
    "url": "https://www.nuyu-dental.co.uk",
    "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
    "sameAs": [
      "https://www.facebook.com/nuyudentalcheltenham",
      "https://www.instagram.com/nuyu.dental.cheltenham",
      "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
      "https://www.tiktok.com/@nuyu.dental.cheltenham",
      "https://g.co/kgs/LZCRwvP"
    ]
  },
  "areaServed": {
    "@type": "Place",
    "name": "Cheltenham"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/dental-implants-cheltenham",
    "priceCurrency": "GBP",
    "price": "2236",
    "eligibleRegion": "GB"
  }
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Am I suitable for implants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people are. Your consultation confirms the best approach for you."
      }
    },
    {
      "@type": "Question",
      "name": "Is the treatment comfortable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We use guided, minimally invasive techniques with local anaesthetic - and offer IV sedation if you prefer extra reassurance."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most treatments take 3–6 months from placement to final crown, with temporary solutions available during healing."
      }
    },
    {
      "@type": "Question",
      "name": "How long will it last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With the right care, implants can last for decades - many patients keep them for life."
      }
    }
  ]
};

function Page() {
  return (
    <div>
      <Script
        id="script1"
        src="https://www.googletagmanager.com/gtag/js?id=G-1YHFXTN7LV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1YHFXTN7LV');
        `}
      </Script>
      <Script id="json-id" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="json-id2" type="application/ld+json">
        {JSON.stringify(schemaData2)}
      </Script>
      <LandingPage />
    </div>
  );
}

export default Page;
