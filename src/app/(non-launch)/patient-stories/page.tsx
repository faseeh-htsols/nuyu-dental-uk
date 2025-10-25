import Main from "@/views/patient-stories/main";
import Script from "next/script";

const PatientJourney = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.nuyu-dental.co.uk/patient-reviews#collection",
    url: "https://www.nuyu-dental.co.uk/patient-reviews",
    name: "Patient Reviews – NUYU Dental & Aesthetics",
    description:
      "Read genuine, anonymised patient reviews of NUYU Dental in Cheltenham covering Invisalign®, implants, smile makeovers and everyday dentistry.",
    inLanguage: "en-GB",
    isPartOf: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    about: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
    hasPart: [
      {
        "@type": "Review",
        "@id": "https://www.nuyu-dental.co.uk/patient-reviews#rev-invisalign",
        name: "Invisalign® review",
        reviewBody:
          "Just started my Invisalign® journey with Dr Naiz and it's been brilliant so far. The consultation and clincheck stages went so smoothly and I'm so glad I chose to do it. Can't wait to start noticing changes.",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2025-06-12",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id": "https://www.nuyu-dental.co.uk/patient-reviews#rev-implants",
        name: "Dental implants review",
        reviewBody:
          "Great service, everything was explained to me, absolutely no pain during treatment and professional and skilled nurse - and I need to mention that before I was always scared of dentists 😁 highly recommend!",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2025-05-03",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id":
          "https://www.nuyu-dental.co.uk/patient-reviews#rev-smile-makeover",
        name: "Smile makeover review",
        reviewBody:
          "I'm Rebecca Griffiths and two years ago I decided i wanted that perfect smile. From the very beginning Dr Naiz and Dr Natalia were so helpful, talking me through every step of the journey and always answering my many questions! I started off with Invisalign® and then had whitening and composite bonding to finish it all off. I am so so happy with my new smile and can't thank them, the dental nurses and the TCOs enough for helping me feel 100x more confident.",
        author: { "@type": "Person", name: "Rebecca Griffiths" },
        datePublished: "2025-03-22",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id": "https://www.nuyu-dental.co.uk/patient-reviews#rev-bonding",
        name: "Composite bonding review",
        reviewBody:
          "I was very nervous at the start of my first consultation with Natalia as I was unsure of the treatment she would recommend. Natalia  welcomed me with a warm smile & made me feel very relaxed & calm. She explained everything in great detail; listening attentively to my concerns & gave me sound advice as to how we could proceed & what would be the best result.",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2025-02-10",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id": "https://www.nuyu-dental.co.uk/patient-reviews#rev-whitening",
        name: "Teeth whitening review",
        reviewBody:
          "On the day of my treatment with all the facts outlined she gave me the confidence that a good result would be achieved. During the treatment both Natalia & her assistant were attentive, caring & very professional checking constantly that I was comfortable. I am delighted with the result which looks very natural. It has made a huge difference & I feel able to smile naturally without being conscious of not showing my teeth.",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2024-12-14",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id": "https://www.nuyu-dental.co.uk/patient-reviews#rev-root-canal",
        name: "Root canal & emergency review",
        reviewBody: "They saw me quickly, stopped the pain and saved my tooth.",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2024-11-02",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        "@id":
          "https://www.nuyu-dental.co.uk/patient-reviews#teeth-straightened",
        name: "Teeth Straightened review",
        reviewBody:
          "I wanted my teeth straightened an whitened as I had braces before but they had started to move back. I have never had so many compliments on my smile before, I am so happy with them and can't stop smiling.",
        author: { "@type": "Person", name: "Anonymous" },
        datePublished: "2024-11-02",
        itemReviewed: { "@id": "https://www.nuyu-dental.co.uk/#dentist" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
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
        <title>Real Patient Stories | NUYU Dental & Aesthetic Successes</title>
        <meta
          name="description"
          content="Hear directly from our delighted patients. Discover how NUYU Cheltenham transforms smiles, confidence and lives every day."
        />
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/patient-stories"
        />
        <meta
          property="og:title"
          content="Real Patient Stories | NUYU Dental & Aesthetic Successes"
        />
        <meta
          property="og:description"
          content="Hear directly from our delighted patients. Discover how NUYU Cheltenham transforms smiles, confidence and lives every day."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/patient-stories"
        />
      </head>
      <Main />
    </>
  );
};
export default PatientJourney;
