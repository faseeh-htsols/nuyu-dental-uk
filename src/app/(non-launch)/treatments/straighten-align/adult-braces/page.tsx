import Main from "@/views/(straighten-align)/adult-braces/main";
import Script from "next/script";

const AdultBracesPage = () => {
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
          "https://www.nuyu-dental.co.uk/treatments/straighten-align/adult-braces#service",
        name: "Adult Braces Treatment",
        url: "https://www.nuyu-dental.co.uk/treatments/straighten-align/adult-braces",
        description:
          "NUYU Dental offers adult braces treatments to help straighten and align adult teeth using tailored orthodontic options.",
        provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        serviceType: "Orthodontic Braces Treatment",
        areaServed: {
          "@type": "Place",
          name: "Cheltenham, Gloucestershire",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Adult Braces Options",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Metal Braces",
              itemOffered: {
                "@type": "Service",
                name: "Metal Braces",
                provider: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
              },
            },
            {
              "@type": "Offer",
              name: "Ceramic Braces",
              itemOffered: {
                "@type": "Service",
                name: "Ceramic Braces",
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
        name: "Are braces painful?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Many patients find that braces can take some getting used to, and there can be considerable pressure on your teeth and jaw, particularly in the hours following an adjustment. Over-the-counter pain relief can help, however, any discomfort should subside within a few days.",
        },
      },
      {
        "@type": "Question",
        name: "I’ve had braces in the past, but didn’t wear my retainers. Can I have braces again?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It’s not unusual for people to fail to wear their retainers after orthodontic treatment. However, this doesn’t mean that you’ll need to have braces again. Our orthodontic team will be able to tell you which treatment will be most effective to correct your smile again.",
        },
      },
      {
        "@type": "Question",
        name: "Are braces breakable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Although braces are very durable, damage and breakages can occur if you don’t follow the instructions and advice given to you by our orthodontic team, particularly in relation to what you shouldn’t eat. While repairs can be carried out, these may incur a charge.",
        },
      },
      {
        "@type": "Question",
        name: "Will wearing braces affect my speech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Braces can feel very unusual at first, and many patients find that their speech changes while they get used to them.",
        },
      },
      {
        "@type": "Question",
        name: "How much do braces cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The cost of braces can vary depending on your individual treatment. Your orthodontic team will be able to provide an estimate at the time of your consultation. To help spread the cost of your treatment, we also offer financing options. Visit our fees and payment plans page for more information.",
        },
      },
      {
        "@type": "Question",
        name: "How do champagne braces compare to silver metal braces?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Functionally, they are identical—both are made from stainless steel and work in the same way to straighten teeth. The key difference is the champagne-coloured coating, which offers a more stylish and refined look.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>Adult Braces Cheltenham | Discreet Orthodontic Solutions</title>
        <meta
          name="description"
          content="Discover discreet, effective adult braces at NUYU Cheltenham. Modern orthodontics designed to fit beautifully into your lifestyle."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/straighten-align/adult-braces"
        />
        <meta
          property="og:title"
          content="Adult Braces Cheltenham | Discreet Orthodontic Solutions"
        />
        <meta
          property="og:description"
          content="Discover discreet, effective adult braces at NUYU Cheltenham. Modern orthodontics designed to fit beautifully into your lifestyle."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/straighten-align/adult-braces"
        />
      </head>
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

export default AdultBracesPage;
