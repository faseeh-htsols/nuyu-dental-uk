export type BannerTwoData = {
  headingOne: string;
  degreesLine?: string;
  gdcNo?: string;
  gdcUrl?: string;
  image?: string;
};

export type CreatingSmilesData = {
  heading: string;
  paragraphs?: string[];
  cta?: { label: string; href: string };
  leftImage?: string;
};

export type CreatingSmilesTwoData = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  botPara?: string;
  cta?: { label: string; href: string };
  rightImage?: string;
  invisalignProfileUrl?: string;
};

export type CreatingSmilesThreeData = {
  heading: string;
  copy?: string;
  list?: string[];
  cta?: { label: string; href: string };
  rightImage?: string;
  backgroundImage?: string;
};
export type CreatingSmilesFourData = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  cta?: { label: string; href: string };
  leftImage?: string;
};
export type CreatingSmilesFiveData = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  cta?: { label: string; href: string };
  rightImage?: string;
  invisalignProfileUrl?: string;
};
export type CreatingSmilesSixData = {
  heading: string;
  description?: string;
  botPara?: string;
  list?: string[];
  cta?: {
    label: string;
    href: string;
  };
  imageSrc: string;
};

export type SchemaData = {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  image: string;
  description: string;
  alumniOf?: {
    "@type": string;
    name: string;
  };
  hasCredential: Array<{
    "@type": string;
    credentialCategory: string;
    name: string;
    identifier?: string;
  }>;
  award?: string;
  worksFor: {
    "@type": string;
    name: string;
    url: string;
    logo: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      postalCode: string;
      addressCountry: {
        "@type": string;
        name: string;
      };
    };
  };
  sameAs: string[];
};

export type DoctorPageData = {
  slug: string;
  name: string;
  bannerTwo: BannerTwoData;
  creatingSmiles: CreatingSmilesData;
  creatingSmilesTwo: CreatingSmilesTwoData;
  creatingSmilesThree: CreatingSmilesThreeData;
  craeatingSmilesFour?: CreatingSmilesFourData;
  CreatingSmilesFive?: CreatingSmilesFiveData;
  CreatingSmilesSix?: CreatingSmilesSixData;
  schema?: SchemaData;
};
export const DOCTOR_PAGES: Record<string, DoctorPageData> = {
  "dr-naiz-khan": {
    slug: "dr-naiz-khan",
    name: "Dr Naiz Khan",
    bannerTwo: {
      headingOne:
        "Dr Naiz Khan – Cosmetic Dentist & Invisalign® Diamond Apex Provider",
      degreesLine: "BDS (Bristol, UK), 2005",
      gdcNo: "101469",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=101469",
      image: "/dr-naiz-invisalign-header-NUYU-Dental.webp",
    },
    creatingSmiles: {
      heading: "Creating Beautiful, Confident Smiles at NUYU Dental",
      paragraphs: [
        "Dr Naiz Khan is a highly experienced and respected cosmetic dentist at NUYU Dental, bringing over 15 years of expertise in aesthetic and orthodontic dentistry to the practice. Since qualifying from the University of Bristol in 2005, Dr Naiz has helped thousands of patients across the UK achieve healthy, beautiful smiles that enhance both confidence and quality of life.",
        "At NUYU Dental, Dr Naiz offers a wide range of advanced cosmetic and restorative treatments, with a particular focus on Invisalign® clear aligners, smile makeovers, and minimally invasive cosmetic procedures. His calm, reassuring manner and commitment to excellence make him a popular choice for patients seeking both routine and life-changing dental care.",
      ],
      cta: { label: "Book an Appointment", href: "/" },
      leftImage: "/invisalign-teeth-straightening.webp",
    },
    creatingSmilesTwo: {
      heading: "Top 1% Invisalign® Provider in the UK",
      paragraphs: [
        "As one of the UK’s leading Invisalign® providers, Dr Naiz is a proud member of the Apex Group, placing him in the top 1% of Invisalign® dentists nationwide. With nearly a decade of hands-on Invisalign® experience, he has successfully treated a broad spectrum of orthodontic cases—from mild crowding to more complex alignment and bite issues.",
        "At NUYU Dental, Dr Naiz offers a wide range of advanced cosmetic and restorative treatments, with a particular focus on Invisalign® clear aligners, smile makeovers, and minimally invasive cosmetic procedures. His calm, reassuring manner and commitment to excellence make him a popular choice for patients seeking both routine and life-changing dental care.",
      ],
      cta: {
        label: "View Dr Naiz on the official Invisalign® website",
        href: "https://www.invisalign.co.uk/doctor-profile/dr--naiz-khan/1410273",
      },
      rightImage: "/team/dr-naiz/naiz-creatingsmile.webp",
      invisalignProfileUrl:
        "https://www.invisalign.co.uk/doctor-profile/dr--naiz-khan/1410273",
    },
    creatingSmilesThree: {
      heading: "Book a Consultation with Dr Naiz Khan at NUYU Dental",
      copy:
        "If you're considering cosmetic dentistry or Invisalign® and want trusted care from one of the UK’s leading providers, Dr Naiz Khan at NUYU Dental is here to guide you with confidence, precision, and care.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Naiz Khan",
      "jobTitle": "Cosmetic Dentist & Invisalign® Diamond Apex Provider",
      "image": "https://www.nuyu-dental.co.uk/dr-naiz-invisalign-header-NUYU-Dental.webp",
      "description": "Dr. Naiz Khan, a Diamond Apex Invisalign® provider at NUYU Dental, specialises in smile makeovers and clear aligners. With 15+ years of experience, he offers personalised care to enhance your smile and boost confidence.",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Bristol"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "name": "BDS"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "General Dental Council Registration",
          "identifier": "101469"
        }
      ],
      "award": "Invisalign® Diamond Apex Provider (Top 1% in the UK)",
      "worksFor": {
        "@type": "Organization",
        "name": "NUYU Dental & Aesthetics",
        "url": "https://www.nuyu-dental.co.uk/",
        "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Winchcombe Street",
          "addressLocality": "Cheltenham",
          "postalCode": "GL52 2ND",
          "addressCountry": {
            "@type": "Country",
            "name": "GB"
          }
        }
      },
      "sameAs": [
        "https://www.nuyu-dental.co.uk/about-us/team/dr-naiz-khan"
      ]
    },

  },
  "dr-natalia-agalakova": {
    slug: "dr-natalia-agalakova",
    name: "Dr. Natalia Agalakova",
    bannerTwo: {
      headingOne:
        "Dr. Natalia Agalakova",
      degreesLine: "Director & Lead Implant & Cosmetic Dentist",
      gdcNo: "100225",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=100225",
      image: "/team/natalia.png",
    },
    creatingSmiles: {
      heading: "About Dr Natalia Agalakova",
      paragraphs: [
        "Dr Natalia Agalakova is the co-founder and director of NUYU Dental & Aesthetics, where she leads with a vision for modern, patient-focused dentistry. With her extensive expertise in implantology and <a href='/treatments/whiten-enhance/composite-bonding' class='font-bold'>cosmetic dentistry</a>, Natalia combines scientific precision with an artistic eye to create natural, confident smiles.",
        "Her approach is rooted in innovation and patient care, making her one of the leading figures in smile transformations across the UK.",
      ],
      leftImage: "/dental-veneers-what.webp",
    },
    creatingSmilesTwo: {
      heading: "Expertise and Achievements",
      list: [
        "<strong class='text-base'>Specialist in Implants & Cosmetic Dentistry</strong> – Natalia is known for her meticulous treatment planning, ensuring every implant and cosmetic case is designed to look and feel natural.",
        "<strong class='text-base'>SmileFast Centre of Excellence</strong> – Recognised for her excellence in smile design, Natalia is part of the <a href='https://www.smilefast.com/smile-fast/meet-the-team/24' target='_blank' class='font-bold'>SmileFast Clinical & Lecture Team</a>, where she shares her knowledge with fellow clinicians.",
        "<strong class='text-base'>Published with Straumann</strong> – Her commitment to <a href='https://www.straumann.com/en/discover/youtooth/article/digital/2024/agalakova-immediate-implant-placement-using-restorative-dentistry-360-digital-workflow-solution.html' target='_blank' class='font-bold'>advancing implant</a> dentistry includes publishing a case report with Straumann, a global leader in dental implant systems.",
        "<strong class='text-base'>Postgraduate Training</strong> – Natalia has undertaken extensive training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics.",
      ],
      rightImage: "/smile-that-moves.JPG",
    },
    creatingSmilesThree: {
      heading: "Clinical Philosophy",
      copy:
        "Dr Natalia believes dentistry should be both precise and personal. She is passionate about digital workflows that improve accuracy and predictability, allowing patients to see their smile journey clearly before treatment begins.<br/><br/>While she focuses on <a href='/treatments/prevent-protect/implants-bonding' class='font-bold'>implants</a>, <a class='font-bold' href='/treatments/whiten-enhance/composite-bonding'>cosmetic bonding</a>, and <a class='font-bold' href='/treatments/whiten-enhance/smile-makeover'>advanced smile makeovers</a>, she continues to provide all aspects of everyday dentistry, offering patients consistency and confidence at every stage of their care.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    CreatingSmilesSix: {
      heading: "Patient-Centred Care",
      description:
        "Natalia’s patients value her calm, caring nature and her ability to put even the most nervous individuals at ease. Her goal is simple: to deliver dentistry that is high-quality, long-lasting, and designed around the individual.<br/><br/>At NUYU, she has helped create a space where patients feel listened to, cared for, and proud of their smiles.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      imageSrc: "/header-image-v3.webp",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Natalia Agalakova",
      "jobTitle": "Director & Lead Implant & Cosmetic Dentist",
      "image": "https://www.nuyu-dental.co.uk/team/natalia.png",
      "description": "Dr Natalia Agalakova is the co-founder and Director of NUYU Dental & Aesthetics, bringing extensive expertise in implantology and cosmetic dentistry. She combines scientific precision with an artistic eye to craft natural, confident smiles. Renowned for her excellence, she is a member of the SmileFast Clinical & Lecture Team and has published research in collaboration with Straumann.",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "General Dental Council Registration",
          "identifier": "100225"
        }
      ],
      "award": "SmileFast Centre of Excellence",
      "worksFor": {
        "@type": "Organization",
        "name": "NUYU Dental & Aesthetics",
        "url": "https://www.nuyu-dental.co.uk/",
        "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Winchcombe Street",
          "addressLocality": "Cheltenham",
          "postalCode": "GL52 2ND",
          "addressCountry": {
            "@type": "Country",
            "name": "GB"
          }
        }
      },
      "sameAs": [
        "https://www.nuyu-dental.co.uk/about-us/team/dr-natalia-agalakova"
      ]
    },

  },
  "dr-tinashe-nhova": {
    slug: "dr-tinashe-nhova",
    name: "Dr. Tinashe Nhova",
    bannerTwo: {
      headingOne:
        "Dr. Tinashe Nhova",
      degreesLine: "Cosmetic Restorative Dentist",
      gdcNo: "244846",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=244846",
      image: "/team/tinashe-page.png",
    },
    creatingSmiles: {
      heading: "About Dr. Nhova",
      paragraphs: [
        "Dr. Tinashe Nhova is a highly skilled <a href='/treatments/whiten-enhance/composite-bonding' class='font-bold'>Cosmetic Restorative Dentist</a> with a reputation for his gentle touch and easy-going style. Affectionately known as “The Smile Expert”, he has helped countless patients achieve natural, confident smiles through Invisalign®, composite bonding, and veneers. His calm approach and light-hearted personality make every visit feel comfortable—even for patients who are usually nervous.",
        "Patients often describe their experience with Dr. Nhova as surprisingly relaxed. Whether it’s a routine appointment or a longer smile makeover, his reassuring manner and friendly energy put people at ease, allowing them to enjoy the process as much as the results.",
      ],
      leftImage: "/why-choose-us-dentistry.JPG",
    },
    creatingSmilesTwo: {
      heading: "Philosophy & Approach",
      paragraphs: [
        "Dr. Nhova’s philosophy is simple: dentistry should enhance your smile in the most natural and minimally invasive way possible. His work focuses on cosmetic and restorative treatments that feel like your own teeth—only better. Every smile he designs is tailored to the individual, blending artistry with precision for results that are both beautiful and long-lasting.",
        "What truly sets him apart is the way he shares in the excitement of each transformation. He loves the moment when a patient sees their new smile for the first time—the joy and confidence in those moments are exactly why he loves what he does.",
      ],
      rightImage: "/adult-braces-latest-sect.webp",
    },
    creatingSmilesThree: {
      heading: "Services at NUYU Dental & Aesthetic",
      copy:
        "At NUYU Dental & Aesthetics, Dr. Tinashe Nhova provides a wide range of cosmetic and restorative treatments, including:",
      list: [
        "Invisalign® Clear Aligners – discreet, <a href='/treatments/straighten-align' class-'font-bold'>removable aligners</a> for straighter teeth",
        "Composite Bonding – a quick and effective way to repair chips, gaps, or uneven edges",
        "Porcelain Veneers – bespoke, long-lasting veneers to enhance shape and colour",
        "Smile Makeovers – combining treatments to create fully personalised results",
      ],
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    CreatingSmilesSix: {
      heading: "Beyond the Practice",
      description:
        "Outside of clinical work, Dr. Nhova is widely recognised on social media as <a class='font-bold'href='http://instagram.com/drnhova/' target='_blank'>@drnhova</a>, where he shares smile transformations and inspires confidence through his artistry in cosmetic dentistry. Known by many as The Smile Expert, his reputation continues to grow both in the clinic and online.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      imageSrc: "/header-image-v3.webp",
    },
  },
  "dr-alex-eremia": {
    slug: "dr-alex-eremia",
    name: "Dr. Alex Eremia",
    bannerTwo: {
      headingOne:
        "Dr. Alex Eremia",
      degreesLine: "Dentist with a Special Interest in Orthodontics",
      gdcNo: "279510",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=279510",
      image: "/team/alex.png",
    },
    creatingSmiles: {
      heading: "About Alex",
      paragraphs: [
        "Dr Alex Eremia is a valued member of the NUYU Dental team, offering both everyday dentistry and orthodontic treatments. With a particular focus on braces, Alex provides care for <a class='font-bold' href='/treatments/straighten-align/kids-braces'>children</a>, teenagers, and <a class='font-bold' href='/treatments/straighten-align/adult-braces'>adults</a>, using both metal and ceramic appliances to help patients achieve healthy, well-aligned smiles.",
      ],
      leftImage: "/dental-crown.webp",
    },
    creatingSmilesTwo: {
      heading: "Clinical Interests",
      paragraphs: [
        "Alex has a special interest in orthodontics, supporting patients of all ages with:",
      ],
      list: [
        "Metal braces for reliable, effective alignment",
        "Ceramic braces for a more discreet treatment option",
        "Bite correction and long-term stability",
        "Orthodontic care tailored to children, teens, and adults",
      ],
      botPara: "Alongside orthodontics, Alex also delivers <a href='/treatments/everyday-dentistry/fillings' class='font-bold'>general dentistry</a>, ensuring patients benefit from a comprehensive approach to oral health.",
      rightImage: "/implant-bonding-care-home.webp",
    },
    creatingSmilesThree: {
      heading: "Approach to Care",
      copy:
        "Warm, approachable, and results-driven, Alex is passionate about helping patients and parents make confident, informed choices about orthodontic treatment. Whether guiding a young patient through their first braces appointment or supporting an adult on their journey to a straighter smile, he takes time to understand each individual’s needs and goals.<br/><br/>His philosophy is simple: combine high-quality dentistry with advanced orthodontics to deliver long-lasting results that improve both function and aesthetics.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    CreatingSmilesSix: {
      heading: "At NUYU",
      description:
        "At <a href='/' class='font-bold'>NUYU Dental & Aesthetics</a>, Alex blends orthodontic expertise with everyday dental care, providing a supportive, modern environment for every patient. He believes that a well-balanced smile is not just about appearance—it’s about confidence, comfort, and long-term oral health.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      imageSrc: "/header-image-v3.webp",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Alex Eremia",
      "jobTitle": "Dentist with a Special Interest in Orthodontics",
      "image": "https://www.nuyu-dental.co.uk/team/alex.png",
      "description": "Dr Alex Eremia is a valued member of the NUYU Dental team, providing both routine dental care and orthodontic treatments. With a particular interest in orthodontics, he offers metal and ceramic braces, bite correction, and long-term stability for patients of all ages. Alex also provides general dentistry, ensuring comprehensive oral healthcare.",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "General Dental Council Registration",
          "identifier": "279510"
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "NUYU Dental & Aesthetics",
        "url": "https://www.nuyu-dental.co.uk/",
        "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Winchcombe Street",
          "addressLocality": "Cheltenham",
          "postalCode": "GL52 2ND",
          "addressCountry": {
            "@type": "Country",
            "name": "GB"
          }
        }
      },
      "sameAs": [
        "https://www.nuyu-dental.co.uk/about-us/team/dr-alex-eremia"
      ]
    },
  },
  "dr-goce-gigovski": {
    slug: "dr-goce-gigovski",
    name: "Dr. Goce Gigovski",
    bannerTwo: {
      headingOne:
        "Dr. Goce Gigovski",
      gdcNo: "287637",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=287637",
      image: "/team/goce.png",
    },
    creatingSmiles: {
      heading: "About Dr Goce Gigovski",
      paragraphs: [
        "Dr Goce Gigovski brings over 15 years of private practice experience to NUYU Dental & Aesthetics, having worked both across the UK and internationally. Originally based in <a href='https://en.wikipedia.org/wiki/Wales' target='_blank' class='font-bold'>Wales</a> and now living in Cheltenham, he has built a reputation for his calm, patient-first approach and attention to detail. Patients describe him as reassuring, approachable, and thorough in everything he does.",
        "Goce’s journey into dentistry began with a background in clinical dental technology, which gave him an in-depth understanding of dental structures, function, and aesthetics from the ground up. This early training has shaped the way he approaches patient care, with a strong focus on precision and creating results that look natural and feel comfortable. Over the years, he has built on this foundation through ongoing advanced training, keeping up to date with modern techniques and the latest materials to give patients the very best care.",
      ],
      leftImage: "/dentures-what.webp",
    },
    creatingSmilesTwo: {
      heading: "Areas of Expertise",
      paragraphs: [
        "At NUYU, Dr Gigovski offers the full range of general and restorative dentistry, with particular strengths in:",
      ],
      list: [
        "<strong class='text-base'>Restorative Dentistry</strong> – repairing and rebuilding damaged or worn teeth with high-quality, durable materials that restore function and appearance.",
        "<a href='/treatments/everyday-dentistry/root-canal' class='font-bold text-base'>Root Canal Therapy</a> – treating infection and saving teeth whenever possible, using advanced techniques that maximise comfort and long-term results.",
        "<strong class='text-base'>Routine and Preventive Care</strong> – regular check-ups, hygiene support, and simple treatments that help patients avoid bigger dental problems in the future.",
        "<strong class='text-base'>Emergency Dentistry</strong> – providing prompt and considered treatment when urgent care is needed, always ensuring patients feel calm and supported.",
      ],
      botPara: "Goce’s combination of technical skill and gentle manner means patients can trust him for treatments ranging from everyday care to more complex restorative work.",
      rightImage: "/goce-page-1.webp",
    },
    creatingSmilesThree: {
      heading: "Patient Care Philosophy",
      copy:
        "For Dr Gigovski, dentistry is about more than just clinical results — it’s about helping patients feel at ease and confident in their care. He takes the time to listen carefully, explain clearly, and answer questions in a way that feels simple and reassuring. Nervous patients especially appreciate his calm approach and his ability to break down treatment plans into manageable, stress-free steps.<br/><strong>His philosophy is built around:</strong>",
      list: [
        "<strong class='text-base'>Empathy</strong> – understanding how patients feel and adapting care to suit them.",
        "<strong class='text-base'>Precision</strong> – paying close attention to every detail for the best outcomes.",
        "<strong class='text-base'>Trust</strong> – building long-term relationships where patients feel supported and valued.",
      ],
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    craeatingSmilesFour: {
      heading: "Beyond Dentistry",
      paragraphs: [
        "Outside of practice life, Goce enjoys balancing his professional expertise with family life in Cheltenham and a wide range of interests that keep him grounded. His international experience has given him a broad perspective on patient care and a passion for delivering high-quality dentistry in the heart of the local community.",
      ],
      leftImage: "/goce-page-2.webp",
    },
    CreatingSmilesSix: {
      heading: "Why Choose Dr Gigovski at NUYU Dental?",
      description: "Patients from Cheltenham and beyond choose Dr Goce Gigovski for his:",
      list: [
        "Over 15 years of trusted experience in private dentistry",
        "Specialist interest in restorative dentistry and root canal treatments",
        "Clear, thoughtful communication that puts patients at ease",
        "Commitment to ongoing training and advanced techniques",
        "Dedication to delivering dentistry that blends function with natural aesthetics",
      ],
      botPara: "At <a href='/' class='font-bold'>NUYU Dental & Aesthetics</a>, Dr Gigovski is focused on delivering everyday care with skill, empathy, and confidence, ensuring patients leave not only with healthier smiles but also with a sense of reassurance and trust in their treatment.",
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      imageSrc: "/book-oppointment-image.avif",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Goce Gigovski",
      "jobTitle": "Dentist",
      "image": "https://www.nuyu-dental.co.uk/team/goce.png",
      "description": "Dr Goce Gigovski brings more than 15 years of private practice experience to NUYU Dental & Aesthetics, having worked across the UK and internationally. He is recognised for his calm, patient-focused approach, meticulous attention to detail, and precision, offering a comprehensive range of general and restorative dental care.",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "General Dental Council Registration",
          "identifier": "287637"
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "NUYU Dental & Aesthetics",
        "url": "https://www.nuyu-dental.co.uk/",
        "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Winchcombe Street",
          "addressLocality": "Cheltenham",
          "postalCode": "GL52 2ND",
          "addressCountry": {
            "@type": "Country",
            "name": "GB"
          }
        }
      },
      "sameAs": [
        "https://www.nuyu-dental.co.uk/about-us/team/dr-goce-gigovski"
      ]
    },
  },
  "dr-shazia-parveen": {
    slug: "dr-shazia-parveen",
    name: "Dr. Shazia Parveen",
    bannerTwo: {
      headingOne:
        "Dr. Shazia Parveen",
      degreesLine: "Everyday & Cosmetic Dentist",
      gdcNo: "265195",
      gdcUrl:
        "https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=265195",
      image: "/team/shazia.png",
    },
    creatingSmiles: {
      heading: "Gentle, Precise, and Passionate About Smiles",
      paragraphs: [
        "Cosmetic and general dentist Dr Shazia Parveen is known for her gentle manner, meticulous eye, and ability to blend everyday care with beautifully balanced smile transformations and facial aesthetics. Patients describe her as calm, reassuring, and intuitive — a dentist who brings quiet confidence to every treatment she provides at <a href='/' class='font-bold'>NUYU Dental & Aesthetics.</a>",
      ],
      leftImage: "/treatment-quality-3.webp",
    },
    creatingSmilesTwo: {
      heading: "Her Philosophy",
      paragraphs: [
        "For Dr Shazia, dentistry is about more than fixing teeth — it’s about balance, harmony, and confidence. Her work is defined by:",
      ],
      list: [
        "<strong class='text-base'>Technical accuracy</strong> combined with a lightness of touch",
        "<strong class='text-base'>Cosmetic enhancement</strong> that respects natural beauty",
        "<strong class='text-base'>Results</strong> that feel like you — only brighter",
      ],
      botPara: "She believes a smile should never look artificial, but instead reflect your personality with natural radiance.",
      rightImage: "/full-arch-implants.webp",
    },
    creatingSmilesThree: {
      heading: "Areas of Expertise",
      copy:
        "With a background in advanced surgical, restorative, and aesthetic dentistry, Dr Shazia brings a wide skill set to NUYU. Her services include:",
      list: [
        "<strong>Everyday Dentistry:</strong> Regular check-ups, hygiene appointments, fillings, and preventive care.",
        "<strong>Cosmetic Dentistry:</strong> Invisalign®, <a href='/treatments/whiten-enhance/composite-bonding' class='font-bold'>composite bonding</a>, porcelain veneers, and full smile makeovers.",
        "<strong>Restorative Dentistry:</strong> Crowns, bridges, and carefully designed restorations that blend seamlessly.",
        "<a href='/treatments/aesthetics-body-confidence/facial-rejuvenation' class='font-bold'>Facial Aesthetics</a>: Treatments that rejuvenate and refresh, lifting more than features — helping patients feel confident inside and out.",
      ],
      cta: { label: "Book Your Consultation", href: "/contact-us" },
      rightImage: "/header-image-v3.webp",
      backgroundImage: "/invisalign/invis-works.jpg",
    },
    craeatingSmilesFour: {
      heading: "What Patients Say",
      paragraphs: [
        "Patients love Dr Shazia for her warm approach and her ability to make dentistry feel stress-free. She is approachable and easy to talk to, taking the time to listen, explain clearly, and ensure her patients feel comfortable throughout treatment. Her meticulous attention to detail means results are consistently natural, balanced, and tailored to each individual.",
      ],
      leftImage: "/about-us-serene.webp",
    },
    CreatingSmilesFive: {
      heading: "A Seamless Fit at NUYU",
      paragraphs: [
        "At NUYU, Dr Shazia is a natural <a href='/about-us/team' class='font-bold'>addition to the team</a> — blending clinical excellence with artistry, warmth, and an instinct for what makes a smile truly yours. Whether it’s everyday dental care or a complete cosmetic transformation, she ensures every patient leaves feeling looked after, understood, and proud of their smile.",
      ],
      rightImage: "/adult-braces-latest-sect.webp",
    },
    CreatingSmilesSix: {
      heading: "Beyond the Clinic",
      description: "Outside of the surgery, Dr Shazia stays at the forefront of dentistry by continually learning and sharing insights with her peers. Her signature style and cases can also be explored on Instagram at <a href='https://www.instagram.com/dr.shazia.parveen/' target='_blank' class='font-bold'>@dr.shazia.parveen</a>, where she showcases her passion for natural-looking cosmetic dentistry and subtle aesthetic enhancements.",
      imageSrc: "/book-oppointment-image.avif",
    },
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr Shazia Parveen",
      "jobTitle": "Everyday & Cosmetic Dentist",
      "image": "https://www.nuyu-dental.co.uk/team/shazia.png",
      "description": "Dr Shazia Parveen is a cosmetic and general dentist at NUYU Dental & Aesthetics, renowned for her gentle approach, meticulous attention to detail, and ability to combine routine dental care with beautifully balanced smile and facial aesthetic treatments. Her work seamlessly blends technical precision with cosmetic enhancement, respecting natural beauty and delivering results that feel both natural and confidence-boosting.",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "License",
          "name": "General Dental Council Registration",
          "identifier": "265195"
        }
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "NUYU Dental & Aesthetics",
        "url": "https://www.nuyu-dental.co.uk/",
        "logo": "https://www.nuyu-dental.co.uk/logo-main.webp",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "64 Winchcombe Street",
          "addressLocality": "Cheltenham",
          "postalCode": "GL52 2ND",
          "addressCountry": {
            "@type": "Country",
            "name": "GB"
          }
        }
      },
      "sameAs": [
        "https://www.nuyu-dental.co.uk/about-us/team/dr-shazia-parveen"
      ]
    },
  },
};
