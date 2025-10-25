import Main from "@/views/landing-page/main";
import { Metadata } from "next";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Invisalign in Cheltenham – NUYU Dental Straight Smiles",
  description:
    "Straighten your smile with Invisalign at NUYU Dental in Cheltenham. Comfortable, discreet aligners designed to fit your lifestyle and goals.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/invisalign-cheltenham",
  },
  openGraph: {
    title: "Invisalign in Cheltenham – NUYU Dental Straight Smiles",
    description:
      "Straighten your smile with Invisalign at NUYU Dental in Cheltenham. Comfortable, discreet aligners designed to fit your lifestyle and goals.",
    url: "https://www.nuyu-dental.co.uk/invisalign-cheltenham",
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
  "url": "https://www.nuyu-dental.co.uk/invisalign-cheltenham",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Straighten your smile with Invisalign at NUYU Dental in Cheltenham. Comfortable, discreet aligners designed to fit your lifestyle and goals.",
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
  "priceRange": "£1,795 to £3,995",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:30"
  ],
  "serviceType": "Invisalign",
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
    "url": "https://www.nuyu-dental.co.uk/invisalign-cheltenham",
    "priceCurrency": "GBP",
    "price": "£1,795 to £3,995",
    "eligibleRegion": "GB"
  }
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are Invisalign® aligners painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While some patients may experience slight discomfort during the first few days of wearing a new aligner, it is typically mild and a sign that your teeth are moving into position."
      }
    },
    {
      "@type": "Question",
      "name": "I’ve had braces before but didn’t wear my retainers. Can Invisalign® fix my teeth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Invisalign® is a great option for correcting alignment issues that have returned after braces. It can help refine and restore your smile."
      }
    },
    {
      "@type": "Question",
      "name": "What if I wear my Invisalign® aligners in the wrong order?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you realise you’ve worn the aligners out of sequence, contact your dentist immediately for guidance. Continuing to wear them incorrectly could disrupt your treatment plan."
      }
    },
    {
      "@type": "Question",
      "name": "Are Invisalign® aligners breakable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Invisalign® aligners are designed to be durable, but they can crack or break if not handled properly. Always store them in their case when not in use and avoid exposing them to extreme temperatures."
      }
    },
    {
      "@type": "Question",
      "name": "Will wearing Invisalign® affect my speech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may notice a slight lisp when you first begin wearing aligners, but this typically disappears within a few days as you adjust to them."
      }
    },
    {
      "@type": "Question",
      "name": "How much does Invisalign® treatment cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of Invisalign® treatment depends on the complexity of your case. During your consultation, we will provide a detailed breakdown of costs and payment options tailored to your needs."
      }
    }
  ]
};


const LaunchPage = () => {
  return (
    <>
      <Script
        id="script1"
        src="https://www.googletagmanager.com/gtag/js?id=G-B51T0QBXCE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B51T0QBXCE');
        `}
      </Script>
      <Script id="json-id" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="json-id2" type="application/ld+json">
        {JSON.stringify(schemaData2)}
      </Script>
      <Main />
    </>
  );
};

export default LaunchPage;
