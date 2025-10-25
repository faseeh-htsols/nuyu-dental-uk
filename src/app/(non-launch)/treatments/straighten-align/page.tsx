import Main from "@/views/(straighten-align)/teeth-straight/main";
import Script from "next/script";
import React from "react";

const TeethStraightening = () => {
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
          "https://www.nuyu-dental.co.uk/treatments/straighten-align#service",
        name: "Straighten & Align Treatments",
        url: "https://www.nuyu-dental.co.uk/treatments/straighten-align",
        description:
          "Straighten & Align treatments at NUYU Dental include Invisalign®, Adult Braces, and Kids Braces for tailored, comfortable orthodontic care.",
        provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        serviceType: "Orthodontic Treatment",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Aligner & Braces Options",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Invisalign®",
              itemOffered: {
                "@type": "Service",
                name: "Invisalign®",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
            {
              "@type": "Offer",
              name: "Adult Braces",
              itemOffered: {
                "@type": "Service",
                name: "Adult Braces",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
            {
              "@type": "Offer",
              name: "Kids Braces",
              itemOffered: {
                "@type": "Service",
                name: "Kids Braces",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
          ],
        },
      },
    ],
  };
  const schemaData2 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What teeth straightening options do you offer at NUYU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer a range of discreet, effective solutions including clear aligners and cosmetic braces, carefully chosen to suit your lifestyle and smile goals.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know which straightening treatment is right for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At your consultation, we’ll take the time to listen to your concerns, assess your smile, and recommend the best option to achieve your desired results.",
        },
      },
      {
        "@type": "Question",
        name: "Are clear aligners really invisible?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Clear aligners are designed to be virtually invisible, fitting snugly over your teeth so you can straighten your smile discreetly and confidently.",
        },
      },
      {
        "@type": "Question",
        name: "How long does teeth straightening usually take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Treatment times vary depending on your individual needs, but many patients start seeing results within a few months. We’ll give you a personalised timeline during your consultation.",
        },
      },
      {
        "@type": "Question",
        name: "Will teeth straightening be uncomfortable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may experience some mild pressure when you begin treatment or change aligners, but it’s a sign your teeth are gently moving. Most patients adapt quickly and find the process very manageable.",
        },
      },
      {
        "@type": "Question",
        name: "Can adults have their teeth straightened?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! It’s never too late to achieve the smile you’ve always wanted. Many of our patients are adults seeking a beautifully straight, confident smile.",
        },
      },
      {
        "@type": "Question",
        name: "How often will I need to visit during treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We’ll see you for regular reviews to check your progress and make any necessary adjustments, but appointments are usually quick and flexible around your schedule.",
        },
      },
      {
        "@type": "Question",
        name: "Will I need to wear a retainer after treatment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, wearing a retainer is essential to maintain your beautiful new smile. Don’t worry - we’ll guide you through everything and make sure your retainer is comfortable and easy to wear.",
        },
      },
      {
        "@type": "Question",
        name: "Is teeth straightening safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When carried out by experienced professionals like our team at NUYU Cheltenham, teeth straightening is extremely safe. Your oral health and comfort are always our top priorities.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply get in touch with us to arrange your consultation. We can't wait to help you start your journey towards a straighter, more confident smile.",
        },
      },
    ],
  };

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
        <title>Straighten & Align Your Smile | NUYU Cheltenham</title>
        <meta
          name="description"
          content="Achieve a straighter, more confident smile with NUYU Cheltenham’s orthodontic treatments for adults and children."
        />
        <meta
          property="og:title"
          content="Straighten & Align Your Smile | NUYU Cheltenham
"
        />
        <meta
          property="og:description"
          content="Achieve a straighter, more confident smile with NUYU Cheltenham’s orthodontic treatments for adults and children."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/straighten-align"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/straighten-align"
        />
      </head>
      <Main />
    </>
  );
};

export default TeethStraightening;
