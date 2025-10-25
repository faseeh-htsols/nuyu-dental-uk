import Main from "@/views/tewkesbury/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist Tewkesbury | NUYU Dental & Aesthetics",
  description:
    "Looking for a trusted private dentist near Tewkesbury? NUYU Dental & Aesthetics offers Invisalign®, teeth whitening, dental implants, emergency care, and more — just a short drive away. Book your consultation today.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-tewkesbury",
  },
  openGraph: {
    title: "Private Dentist Tewkesbury | NUYU Dental & Aesthetics",
    description:
      "Looking for a trusted private dentist near Tewkesbury? NUYU Dental & Aesthetics offers Invisalign®, teeth whitening, dental implants, emergency care, and more — just a short drive away. Book your consultation today.",
    url: "https://www.nuyu-dental.co.uk/private-dentist-tewkesbury",
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
      name: "Can I bring a child or friend with me if I feel anxious about dental treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, of course. You’re welcome to bring a companion for support. We’re happy to accommodate them in the waiting area or, if needed, in the treatment room to help you feel more comfortable during your visit.",
      },
    },
    {
      "@type": "Question",
      name: "Are there any parking restrictions at the Cheltenham clinic for patients from Tewkesbury?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. NUYU Dental & Aesthetics offers free on-site parking for all patients. If you prefer public transport, Cheltenham Spa train station is nearby, with taxis readily available to reach us easily.",
      },
    },
    {
      "@type": "Question",
      name: "Can I still book emergency dental care if I’m not currently registered with you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We welcome both new and returning patients for urgent appointments. If you’re experiencing pain, infection, or trauma, call us straight away, and we’ll prioritise your care.",
      },
    },
    {
      "@type": "Question",
      name: "I’ve had NHS dental treatment before — can I switch to private care at NUYU Dental?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can. We’ll review your dental history and create a personalised treatment plan that suits your needs. You’ll also receive a clear breakdown of costs and options before starting.",
      },
    },
    {
      "@type": "Question",
      name: "How do you manage tooth sensitivity after whitening treatments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some people experience mild, temporary sensitivity after whitening. We recommend using a soft-bristled toothbrush and sensitivity toothpaste. Symptoms usually settle quickly, but you can contact us if they persist.",
      },
    },
    {
      "@type": "Question",
      name: "Will orthodontic treatment mean lots of appointments in Cheltenham?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. With Invisalign® and modern braces, follow-up visits are typically every 6–8 weeks and are usually quick — most take less than 20 minutes. It’s easy to fit into your schedule, even if you’re travelling from Tewkesbury.",
      },
    },
    {
      "@type": "Question",
      name: "Does smoking affect the success of dental implants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it can. Smoking slows down healing and increases the risk of implant failure. We recommend stopping or reducing smoking before treatment, and our team can offer guidance to support you.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book a whitening top-up after my initial treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Certainly. Over time, natural discolouration can return, and we can arrange top-up sessions to maintain your brightness. In most cases, home whitening every 6–12 months works well.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I relocate back to Tewkesbury while I’m mid-treatment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No problem. We’ll create a treatment plan that allows for flexibility, and if needed, we can refer you to a trusted local partner so your care continues smoothly without disruption.",
      },
    },
    {
      "@type": "Question",
      name: "How long do lip fillers and facial fillers last, and are they safe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At NUYU Dental & Aesthetics, our lip fillers and facial fillers are administered by qualified professionals using medically approved products. Results usually last 6 to 12 months, and we tailor each treatment for a natural, refreshed appearance.",
      },
    },
  ],
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist", "Service"],
  "name": "NUYU Dental & Aesthetics",
  "url": "https://www.nuyu-dental.co.uk/private-dentist-tewkesbury",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "Looking for a trusted private dentist near Tewkesbury? NUYU Dental & Aesthetics offers Invisalign®, teeth whitening, dental implants, emergency care, and more — just a short drive away. Book your consultation today.",
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
      "name": "Tewkesbury"
    }
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.nuyu-dental.co.uk/private-dentist-tewkesbury",
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
