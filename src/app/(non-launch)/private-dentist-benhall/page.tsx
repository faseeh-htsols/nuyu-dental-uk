import Main from "@/views/dentist-benhall/main";
import React from "react";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Private Dentist Near Benhall | NUYU Dental & Aesthetics",
  description:
    "Trusted private dentist in Cheltenham, just a short drive from Benhall. Offering Invisalign®, implants, teeth whitening & family-friendly dental care.",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/private-dentist-benhall",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it safe to get dental treatment during pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, routine check-ups and preventive care are safe during pregnancy. Most dentists can carry out cleanings and minor treatments, but elective cosmetic procedures are usually postponed until after delivery."
      }
    },
    {
      "@type": "Question",
      "name": "Can I continue orthodontic treatment if I need to move temporarily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many orthodontists provide guidance for travel or temporary relocation. Your dentist can supply the necessary tools and instructions to maintain braces or Invisalign® aligners while you’re away."
      }
    },
    {
      "@type": "Question",
      "name": "How should I manage a dental abscess before seeing a dentist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rinse your mouth with warm salt water, keep up with oral hygiene, and use over-the-counter pain relief if needed. Avoid squeezing or attempting to drain it yourself and book urgent treatment promptly."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to take painkillers before a dental appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, over-the-counter painkillers can help ease discomfort. Always follow the dosage instructions and inform your dentist, particularly if you have any allergies or pre-existing medical conditions."
      }
    },
    {
      "@type": "Question",
      "name": "How can I prevent dental problems during long trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Keep up regular brushing and flossing, carry a travel dental kit, limit sugary snacks, and drink plenty of water. It’s also wise to have a check-up before you travel."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do if my child’s tooth gets knocked out during sports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rinse the tooth gently and place it back in the socket or store it in milk. Contact a dentist immediately, as prompt attention increases the chances of saving the tooth."
      }
    },
    {
      "@type": "Question",
      "name": "Are there special considerations for dental implants if I have diabetes or heart conditions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, chronic conditions can affect healing. Your dentist will review your medical history, liaise with your GP if necessary, and adapt the treatment plan to ensure safe implant placement."
      }
    },
    {
      "@type": "Question",
      "name": "How can I manage dental anxiety before a cosmetic procedure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Be open with your dentist about your concerns, consider sedation options if needed, and schedule shorter, gradual appointments. Being informed and prepared can significantly reduce stress."
      }
    },
    {
      "@type": "Question",
      "name": "Can teeth bonding fix minor chips or gaps without affecting existing teeth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Composite bonding is minimally invasive, strengthens teeth, and enhances appearance without removing significant enamel."
      }
    },
    {
      "@type": "Question",
      "name": "How can I help prevent my child’s teeth from becoming misaligned?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Encourage early orthodontic check-ups, discourage thumb-sucking, and maintain good oral hygiene. Early detection makes corrective treatments simpler and often quicker."
      }
    }
  ]
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
      </head>
      <Main />
    </>
  );
}

export default Page;
