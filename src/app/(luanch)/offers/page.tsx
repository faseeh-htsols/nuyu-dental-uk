import Main from "@/views/offers/main";

const LaunchPage = () => {
  return (
    <>
      <head>
        <title>NUYU Dental Cheltenham | Grand Opening & Patient Offers</title>
        <link rel="canonical" href="https://www.nuyu-dental.co.uk/offers" />
        <meta
          name="description"
          content="Celebrate NUYU Dental & Aesthetics’ grand opening in Cheltenham with exclusive new patient offers, advanced treatments, and luxury, personalised dental care."
        />
        {/* Open Graph Tags */}
        <meta property="og:title" content="NUYU Dental Cheltenham | Grand Opening & Patient Offers" />
        <meta
          property="og:description"
          content="Celebrate NUYU Dental & Aesthetics’ grand opening in Cheltenham with exclusive new patient offers, advanced treatments, and luxury, personalised dental care."
        />
        <meta property="og:site_name" content="NUYU Dental & Aesthetics" />
        <meta property="og:url" content="https://www.nuyu-dental.co.uk/offers" />
        <meta property="og:image" content="https://www.nuyu-dental.co.uk/landing-og-img.png" />
      </head>
      <Main />
    </>
  );
};

export default LaunchPage;
