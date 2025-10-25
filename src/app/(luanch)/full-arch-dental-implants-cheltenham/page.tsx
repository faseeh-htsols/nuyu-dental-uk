import LandingPage from "@/views/full-arch-landing/main";
import Script from "next/script";
import React from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/full-arch-landing",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "NUYU Dental provides Full Arch Dental Implant treatments, restoring complete arches with natural-looking, durable results for optimal function and aesthetics.",
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
  "priceRange": "£11,996 (normally £14,995) (Cheltenham average £14,995+)",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:30"
  ],
  "serviceType": "Full Arch Dental Implant Treatment",
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
    "url": "https://www.nuyu-dental.co.uk/full-arch-landing",
    "priceCurrency": "GBP",
    "price": "11996",
    "eligibleRegion": "GB"
  }
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the procedure actually completed in one day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this is one of the main advantages of the All on 4 dental implants. Due to the angle of placement, the implants can support a temporary bridge from day one for most patients. After approximately 4 months, the temporary bridge is replaced with a permanent one over a few visits."
      }
    },
    {
      "@type": "Question",
      "name": "How are full arch implants different from traditional dentures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unlike traditional dentures, full arch implants are permanently anchored to the jawbone, offering greater stability, chewing power, and a more natural look and feel. They don’t slip or need adhesives and help prevent bone loss in the jaw."
      }
    },
    {
      "@type": "Question",
      "name": "Who is suitable for All on 4 dental implants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All on 4 Same Day Teeth are ideal for patients with very few remaining teeth or failing teeth and those who want a secure, permanent alternative to dentures. They are also suitable for patients who have experienced jawbone loss, as the implants use the thicker bone in the front of the jaw, often avoiding the need for bone grafting."
      }
    },
    {
      "@type": "Question",
      "name": "I’m a really nervous patient - what are my options?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NUYU provides a calm, patient-first environment. For anxious patients, IV sedation is available, allowing you to remain conscious but deeply relaxed, with minimal memory of the procedure. Our team also offers extra reassurance and step-by-step guidance to ensure comfort throughout treatment."
      }
    },
    {
      "@type": "Question",
      "name": "Will I experience pain during or after the implant procedure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "During the procedure, local anaesthetic is used, so you should not feel pain, though some pressure or mild discomfort may occur. After the procedure, mild soreness and swelling are normal for a few days and are usually manageable with over-the-counter pain relievers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average lifespan of dental implants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dental implants have high success rates, with studies showing that 90% of implants placed ten years ago are still functional today. Long-term success depends on regular professional cleaning, annual check-ups, and proper brushing and flossing at home."
      }
    },
    {
      "@type": "Question",
      "name": "Can I spread the cost of treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, NUYU offers flexible finance options, including interest-free plans, allowing you to spread the cost of treatment over time. The team guides patients through options clearly and sensitively."
      }
    }
  ]
};

function Page() {
  return (
    <div>
      <head>
        <title>
          Full Arch Dental Implants in Cheltenham | Fixed Teeth in a Day
        </title>
        <meta
          name="description"
          content="Get 10% off full arch dental implants in Cheltenham. FREE CBCT scan, consultation & first-year review. Restore your smile in one day with fixed teeth & 0% finance."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/full-arch-dental-implants-cheltenham"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Full Arch Dental Implants in Cheltenham | Fixed Teeth in a Day" />
        <meta
          property="og:description"
          content="Get 10% off full arch dental implants in Cheltenham. FREE CBCT scan, consultation & first-year review. Restore your smile in one day with fixed teeth & 0% finance."
        />
        <meta property="og:site_name" content="NUYU Dental & Aesthetics" />
        <meta property="og:url" content="https://www.nuyu-dental.co.uk/full-arch-dental-implants-cheltenham" />
        <meta property="og:image" content="https://www.nuyu-dental.co.uk/landing-og-img.png" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-H7W4K6MYF7"
        strategy="afterInteractive"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-H7W4K6MYF7');
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
