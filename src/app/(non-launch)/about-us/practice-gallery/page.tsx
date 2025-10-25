import Main from "@/views/(about-us)/patient-gallery/main";
import Script from "next/script";

const PatienGallery = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.nuyu-dental.co.uk/about-us/practice-gallery#collection",
    url: "https://www.nuyu-dental.co.uk/about-us/practice-gallery",
    name: "Practice Gallery",
    description:
      "NUYU Dental Practice Gallery – view our reception, treatment rooms, and facilities in Cheltenham.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://www.nuyu-dental.co.uk/practice-gallery/pg-1-landscape.webp",
    },
    hasPart: [
      {
        "@type": "ImageObject",
        url: "https://www.nuyu-dental.co.uk/practice-gallery2/pg-land-small-top1.webp",
        contentUrl:
          "https://www.nuyu-dental.co.uk/practice-gallery2/pg-land-small-top1.webp",
        caption: "Reception and welcome area",
        author: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        copyrightHolder: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
      },
      {
        "@type": "ImageObject",
        url: "https://www.nuyu-dental.co.uk/practice-gallery2/pg-land-small-mid1.webp",
        contentUrl:
          "https://www.nuyu-dental.co.uk/practice-gallery2/pg-land-small-mid1.webp",
        caption: "Modern treatment room",
        author: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        copyrightHolder: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
      },
      {
        "@type": "ImageObject",
        url: "https://www.nuyu-dental.co.uk/practice-gallery2/bottom-strip3.webp",
        contentUrl:
          "https://www.nuyu-dental.co.uk/practice-gallery2/bottom-strip3.webp",
        caption: "Hygiene and sterilisation area",
        author: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        copyrightHolder: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
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
        <title>
          NUYU Cheltenham Practice Gallery | Discover Our Beautiful Clinic
        </title>
        <meta
          name="description"
          content="Explore NUYU Cheltenham’s stunning clinic — a calming, luxurious space designed to make your dental and wellness journey unforgettable."
        />
        <meta
          property="og:title"
          content="NUYU Cheltenham Practice Gallery | Discover Our Beautiful Clinic"
        />
        <meta
          property="og:description"
          content="Explore NUYU Cheltenham’s stunning clinic — a calming, luxurious space designed to make your dental and wellness journey unforgettable."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/about-us/practice-gallery"
        />

        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/about-us/practice-gallery"
        />
      </head>
      <Main />
    </>
  );
};

export default PatienGallery;
