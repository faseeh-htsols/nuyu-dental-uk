import Main from "@/views/(straighten-align)/invisalign/main";
import Script from "next/script";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invisalign® in Cheltenham | Clear Aligners at NUYU",
  description:
    "Straighten your teeth discreetly with Invisalign® clear aligners at NUYU Cheltenham. Comfortable, effective and almost invisible.",
  alternates: {
    canonical:
      "https://www.nuyu-dental.co.uk/treatments/straighten-align/invisalign",
  },
  openGraph: {
    title: "Invisalign® in Cheltenham | Clear Aligners at NUYU",
    description:
      "Straighten your teeth discreetly with Invisalign® clear aligners at NUYU Cheltenham. Comfortable, effective and almost invisible.",
    url: "https://www.nuyu-dental.co.uk/treatments/straighten-align/invisalign",
    siteName: "NUYU Dental & Aesthetics",
    images: [
      {
        url: "https://www.nuyu-dental.co.uk/header-image-v3.webp",
      },
    ],
  },
};

const InvisalignPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "@id": "https://www.nuyu-dental.co.uk/#dentist",
        name: "NUYU Dental & Aesthetics",
        url: "https://www.nuyu-dental.co.uk",
        logo: "https://www.nuyu-dental.co.uk/logo-main.webp",
        address: {
          "@type": "PostalAddress",
          streetAddress: "64 Winchcombe Street",
          addressLocality: "Cheltenham",
          addressRegion: "Gloucestershire",
          postalCode: "GL52 2ND",
          addressCountry: "GB",
        },
        telephone: "+44 1242 339233",
        sameAs: [
          "https://www.facebook.com/nuyudentalcheltenham",
          "https://www.instagram.com/nuyu.dental.cheltenham/",
          "https://maps.app.goo.gl/oid8cTKMRdYuw5Ep6",
          "https://www.tiktok.com/@nuyu.dental.cheltenham",
        ],
      },
      {
        "@type": "Service",
        "@id":
          "https://www.nuyu-dental.co.uk/treatments/straighten-align/invisalign#service",
        name: "Invisalign® Treatment",
        url: "https://www.nuyu-dental.co.uk/treatments/straighten-align/invisalign",
        description:
          "Professional Invisalign® clear-aligner treatment offered at NUYU Dental & Aesthetics for straightening and aligning teeth discreetly and effectively.",
        provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        serviceType: "Orthodontic Aligner Treatment",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Invisalign® Options",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Invisalign Comprehensive Package",
              itemOffered: {
                "@type": "Service",
                name: "Invisalign® Comprehensive",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
            {
              "@type": "Offer",
              name: "Invisalign Lite & Express",
              itemOffered: {
                "@type": "Service",
                name: "Invisalign® Lite & Express",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
          ],
        },
      },
    ],
  };

  const schemaData4 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are Invisalign® aligners painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While some patients may experience slight discomfort during the first few days of wearing a new aligner, it is typically mild and a sign that your teeth are moving into position.",
        },
      },
      {
        "@type": "Question",
        name: "I’ve had braces before but didn’t wear my retainers. Can Invisalign® fix my teeth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Invisalign® is a great option for correcting alignment issues that have returned after braces. It can help refine and restore your smile.",
        },
      },
      {
        "@type": "Question",
        name: "What if I wear my Invisalign® aligners in the wrong order?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you realise you’ve worn the aligners out of sequence, contact your dentist immediately for guidance. Continuing to wear them incorrectly could disrupt your treatment plan.",
        },
      },
      {
        "@type": "Question",
        name: "Are Invisalign® aligners breakable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Invisalign® aligners are designed to be durable, but they can crack or break if not handled properly. Always store them in their case when not in use and avoid exposing them to extreme temperatures.",
        },
      },
      {
        "@type": "Question",
        name: "Will wearing Invisalign® affect my speech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may notice a slight lisp when you first begin wearing aligners, but this typically disappears within a few days as you adjust to them.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Invisalign® treatment cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of Invisalign® treatment depends on the complexity of your case. During your consultation, we will provide a detailed breakdown of costs and payment options tailored to your needs.",
        },
      },
    ],
  };

  return (
    <>
      <Script id="json-id" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="json-id3" type="application/ld+json">
        {JSON.stringify(schemaData4)}
      </Script>
      <Main />
    </>
  );
};

export default InvisalignPage;
