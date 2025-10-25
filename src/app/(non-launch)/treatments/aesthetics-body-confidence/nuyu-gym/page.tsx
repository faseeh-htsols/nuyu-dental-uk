import Main from "@/views/(aesthetics-confidence)/nuyu-gym/main";
import Script from "next/script";

const NuyuGymPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://www.nuyu-dental.co.uk/",
    name: "Nuyu Dental",
    url: "https://www.nuyu-dental.co.uk/",
    telephone: "+441242 339233",
    sameAs: [
      "https://www.instagram.com/nuyu.dental.cheltenham/",
      "https://g.co/kgs/vGpwcAZ",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "64 Winchcombe Street",
      addressLocality: "Cheltenham",
      postalCode: "GL52 2ND",
      addressCountry: {
        "@type": "Country",
        name: "UK",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.901722,
      longitude: -2.071942,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Monday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Tuesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Wednesday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Thursday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Friday",
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "https://schema.org/Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };
  const schemaData2 = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nuyu Dental",
    url: "https://www.nuyu-dental.co.uk/",
  };
  const schemaData3 = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "NUYU Gym Cheltenham | Boutique Fitness for Total Confidence",
    serviceType: "Invisalign",
    url: "https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/nuyu-gym",
    description:
      "Transform your body and boost your wellness with NUYU Gym Cheltenham. Private fitness designed to inspire confidence inside and out.",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://www.nuyu-dental.co.uk/#localbusiness",
      name: "Nuyu Dental",
      image:
        "https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.webp&w=384&q=75",
      url: "https://www.nuyu-dental.co.uk/",
      telephone: "+441242339233",
      openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:30"],
      priceRange: "££",
      sameAs: [
        "https://www.instagram.com/nuyu.dental.cheltenham/",
        "https://g.co/kgs/LZCRwvP",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "64 Winchcombe Street",
        addressLocality: "Cheltenham",
        postalCode: "GL52 2ND",
        addressCountry: {
          "@type": "Country",
          name: "UK",
        },
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.901722,
        longitude: -2.07194,
      },
    },
  };
  const schemaData4 = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is NUYU Gym different from other personal training options?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NUYU Gym is part of a wider wellness experience—with dentistry, facial aesthetics, and personal training all under one roof. It’s private, calm, and fully focused on one-to-one care. No busy gym floor. No distractions. Just expert-led sessions in a beautifully designed space where your goals come first.",
        },
      },
      {
        "@type": "Question",
        name: "What types of training do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We focus on low-impact, strength-based training tailored to your body, goals, and lifestyle. Whether you want to build strength, stay healthy, improve tone, or work toward sustainable weight loss, each session is personalised to help you move with purpose and feel good doing it.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of results can I expect — and when?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may notice improved energy and mood within the first few sessions. Strength, posture, and tone usually improve over 4–6 weeks of consistent training. We focus on sustainable progress, not quick fixes.",
        },
      },
      {
        "@type": "Question",
        name: "I don’t like crowded gyms. Will this feel different?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—completely. NUYU Gym is a boutique-style space with no shared equipment or group sessions. It’s just you and your trainer in a calm, private environment designed for focus.",
        },
      },
      {
        "@type": "Question",
        name: "I’ve had personal trainers before. What’s different at NUYU?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NUYU is different because it’s highly personal. We train with purpose, aligning your sessions with your goals and lifestyle. It’s one-to-one attention in a calm, focused space — free from distractions or pressure.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add B12 injections to my training plan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes—B12 injections are available as an optional wellness add-on to support energy, focus, and recovery. A short suitability check will be done before treatment.",
        },
      },
    ],
  };

  return (
    <>
      <head>
        <title>
          NUYU Gym Cheltenham | Boutique Fitness for Total Confidence
        </title>
        <meta
          name="description"
          content="Transform your body and boost your wellness with NUYU Gym Cheltenham. Private fitness designed to inspire confidence inside and out."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/nuyu-gym"
        />
        <meta
          property="og:title"
          content="NUYU Gym Cheltenham | Boutique Fitness for Total Confidence"
        />
        <meta
          property="og:description"
          content="Transform your body and boost your wellness with NUYU Gym Cheltenham. Private fitness designed to inspire confidence inside and out."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/treatments/aesthetics-body-confidence/nuyu-gym"
        />

        <Script
          id="ld-json1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="ld-json2"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData2) }}
        />
        <Script
          id="ld-json3"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData3) }}
        />
        <Script
          id="ld-json4"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData4) }}
        />
      </head>
      <Main />
    </>
  );
};

export default NuyuGymPage;
