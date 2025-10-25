// app/composite-bonding/page.tsx
import LandingPage from "@/views/composite-bondind-landing/main";
import Script from "next/script";

export const metadata = {
  title: "Composite Bonding in Cheltenham | Free Consultation + Smile Preview",
  description:
    "Reveal your dream smile with composite bonding in Cheltenham. Get 10% off plus FREE smile assessment, digital preview & whitening. Book now!",
  alternates: {
    canonical: "https://www.nuyu-dental.co.uk/composite-bonding-cheltenham",
  },
  openGraph: {
    title:
      "Composite Bonding in Cheltenham | Free Consultation + Smile Preview",
    description:
      "Reveal your dream smile with composite bonding in Cheltenham. Get 10% off plus FREE smile assessment, digital preview & whitening. Book now!",
    url: "https://www.nuyu-dental.co.uk/composite-bonding-cheltenham",
    siteName: "NUYU Dental & Aesthetics ",
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
  "url": "https://www.nuyu-dental.co.uk/composite-bonding-cheltenham",
  "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
  "description": "NUYU Dental provides expert composite bonding treatments to enhance your smile, restoring teeth with natural-looking, durable results. Currently offering a 10% discount on composite bonding treatments.",
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
  "priceRange": "£3200",
  "openingHours": [
    "Mo-Fr 09:00-18:00",
    "Sa 09:00-13:30"
  ],
  "serviceType": "Composite Bonding",
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
    "url": "https://www.nuyu-dental.co.uk/composite-bonding-cheltenham",
    "priceCurrency": "GBP",
    "price": "£3200",
    "eligibleRegion": "GB",
    "description": "10% discount currently available. Contact for exact pricing."
  }
};

const schemaData2 = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is composite bonding, and how does it work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Composite bonding is a cosmetic dental treatment that uses a tooth-coloured resin material to repair chips, cracks, gaps, or discolouration and enhance the appearance of teeth. The resin is applied, shaped, and hardened with a special light, resulting in a natural-looking finish."
      }
    },
    {
      "@type": "Question",
      "name": "How long does composite bonding last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With proper care, composite bonding can last between 5 and 10 years. Its durability depends on factors such as oral hygiene, diet, and habits like teeth grinding or biting on hard objects."
      }
    },
    {
      "@type": "Question",
      "name": "Is composite bonding painful?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Composite bonding is typically a painless procedure and often does not require anaesthetic. The tooth surface is lightly prepared, and the resin is applied without causing discomfort."
      }
    },
    {
      "@type": "Question",
      "name": "Who can benefit from composite bonding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Anyone who has slight imperfections in the size, shape, or colour of their teeth can benefit from composite bonding to achieve a lovely new smile."
      }
    },
    {
      "@type": "Question",
      "name": "How much does composite bonding cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Composite bonding costs as little as £350 per tooth, but a consultation is recommended to assess your smile and provide an accurate quotation."
      }
    },
    {
      "@type": "Question",
      "name": "Can composite bonding close gaps between teeth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, composite bonding is an effective way to close small gaps between teeth, improving the appearance of your smile without the need for orthodontic treatment."
      }
    },
    {
      "@type": "Question",
      "name": "How should I care for my teeth after composite bonding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To maintain composite bonding, practice good oral hygiene, avoid staining foods and drinks like tea, coffee, and red wine, and refrain from biting hard objects. Regular dental check-ups and cleanings are also important."
      }
    },
    {
      "@type": "Question",
      "name": "Can composite bonding repair chipped or broken teeth?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Composite bonding is a cost-effective solution to repairing chipped or broken teeth."
      }
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J63Z6594N0"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J63Z6594N0');
          `,
        }}
      />
      <Script id="json-id" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      <Script id="json-id2" type="application/ld+json">
        {JSON.stringify(schemaData2)}
      </Script>
      <LandingPage />
    </>
  );
}
