import { IGeneral_Tabs, INavItem, ITeamMember } from "@/types";
export const FOOTER_LINKS = [
  [
    {
      name: "Cosmetic dentistry",
      link: "/",
    },
    {
      name: "Everyday dentistry",
      link: "/",
    },
    {
      name: "Teeth straightening",
      link: "/",
    },
  ],
  [
    {
      name: "Fees & payment plans",
      link: "/",
    },
    {
      name: "Nervous patients",
      link: "/",
    },
    {
      name: "Smile gallery",
      link: "/",
    },
  ],
  [
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Your treatment journey",
      link: "/",
    },
    {
      name: "Emergencies",
      link: "/",
    },
  ],
];
export const NAV_ITEMS: INavItem[] = [
  {
    name: "About Us",
    link: "/about-us",
    dropdownType: "simple", // "simple" dropdown
    subItems: [
      { name: "Why Choose Us", link: "/about-us/why-choose-us" },
      { name: "Your Patient Journey", link: "/about-us/patient-journey" },
      { name: "Practice Gallery", link: "/about-us/practice-gallery" },
      { name: "Meet The Team", link: "/about-us/team" },
    ],
  },
  {
    name: "Treatments",
    dropdownType: "mega", // "mega" dropdown
    link: "/treatments",
    subItems: [
      {
        title: "Straighten & Align",
        // title: "Straighten",
        link: "/treatments/straighten-align",
        navLinks: [
          {
            name: "Invisalign<sup>®</sup>",
            link: "/treatments/straighten-align/invisalign",
          },
          {
            name: "Adult Braces",
            link: "/treatments/straighten-align/adult-braces",
          },
          // /kids-braces
          {
            name: "Kids Braces",
            link: "/treatments/straighten-align/kids-braces",
          },
        ],
      },
      {
        title: "Whiten & Enhance",
        // title: "Enhance",
        link: "/treatments/whiten-enhance",
        navLinks: [
          {
            name: "Composite Bonding",
            link: "/treatments/whiten-enhance/composite-bonding",
          },
          {
            name: "Smile Makeovers",
            link: "/treatments/whiten-enhance/smile-makeover",
          },
          {
            name: "Teeth Whitening",
            link: "/treatments/whiten-enhance/teeth-whitening",
          },
          { name: "Veneers", link: "/treatments/whiten-enhance/veneers" },
        ],
      },
      {
        // title: "Repair",
        title: "Prevent & Protect",
        link: "/treatments/prevent-protect",
        navLinks: [
          {
            name: "Oral Health Assessment",
            link: "/treatments/prevent-protect/oral-health-assessment",
          },
          {
            name: "Smile Clean",
            link: "/treatments/prevent-protect/smile-clean",
          },
          {
            name: "Implant & Bonding Care",
            link: "/treatments/prevent-protect/implants-bonding",
          },
        ],
      },
      {
        title: "Implant and Replace",
        // title: "Restore",
        link: "/treatments/implant-replace",
        navLinks: [
          {
            name: "Custom Dentures",
            link: "/treatments/implant-replace/dentures",
          },
          {
            name: "Dental Implants",
            link: "/treatments/implant-replace/dental-implants",
          },
          {
            name: "Full Arch Implants",
            link: "/treatments/implant-replace/full-arch-implants",
          },
        ],
      },
      {
        // title: "Maintain",
        title: "Everyday Dentistry",
        navLinks: [
          { name: "Fillings", link: "/treatments/everyday-dentistry/fillings" },
          {
            name: "Root Canal Treatment",
            link: "/treatments/everyday-dentistry/root-canal",
          },
          {
            name: "Dental Crowns",
            link: "/treatments/everyday-dentistry/dental-crowns",
          },
          {
            name: "Emergencies",
            link: "/treatments/everyday-dentistry/emergency",
          },
          // { name: "Routine Consultation", link: "/" },
        ],
      },
      {
        title: "Aesthetics & Body Confidence",
        link: "/treatments/aesthetics-body-confidence",
        navLinks: [
          {
            name: "Facial Rejuvenation",
            link: "/treatments/aesthetics-body-confidence/facial-rejuvenation",
          },
          {
            name: "Skin Treatments",
            link: "/treatments/aesthetics-body-confidence/skin-treatments",
          },
          {
            name: "NUYU Gym (Coming Soon)",
            link: "/treatments/aesthetics-body-confidence/nuyu-gym",
          },
        ],
      },
    ],
  },
  { name: "Patient Stories", link: "/patient-stories" },
  {
    name: "Our Pricing",
    link: "/our-pricing",
    dropdownType: "simple", // "simple" dropdown
    subItems: [
      { name: "Fees", link: "/our-pricing/fees" },
      { name: "Dental Plans", link: "/our-pricing/dental-plans" },
      {
        name: "Finance Options",
        link: "https://cfl-retailer.chrysalisfinance.com/nuyu-dental-and-aesthetics-4080",
      },
    ],
  },
  {
    name: "Referrals",
    dropdownType: "simple", // "simple" dropdown
    subItems: [
      { name: "CBCT", link: "/referral/cbct" },
      { name: "Dental Implants", link: "/referral/dental-implant" },
      { name: "Extractions", link: "/referral/extractions" },
    ],
  },

  // { name: "Book Now", link: "/" }, // Add link for consistency
];

export const IMPLANTS_CROWNS_TABS: IGeneral_Tabs[] = [
  {
    name: "Implants",
    icon: "/teeth.svg",
    imgSrc: "/implants-oral-tabs.avif",
    copy: "Achieve your dream smile with cutting-edge implants and precision. Say goodbye to gaps and hello to a confident, seamless smile that feels as good as it looks.",
    list: [
      "Reclaim your confidence with strong, natural-looking dental implants that last.",
      "Expert oral surgery to tackle complex dental concerns and prepare for flawless results.",
      "Bite, chew, and speak with ease thanks to stable, reliable restorations.",
      "Protect your jawline and prevent further tooth loss with advanced care.",
      "Smile your way with bespoke treatment plans tailored just for you",
    ],
    buttons: [
      {
        content: "Implants & oral surgery",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
  {
    name: "Crowns",
    icon: "/crowns.svg",
    imgSrc: "/crowns-tabs.avif",
    copy: "Dental crowns are a versatile solution for restoring and protecting damaged teeth, helping you maintain both function and aesthetics.",
    list: [
      "Protect and strengthen weak or damaged teeth",
      "Restore the shape, size, and appearance of your teeth",
      "Ideal for teeth with large fillings or after root canal treatment",
      "Custom-made for a natural look and comfortable fit",
      "Durable and long-lasting with proper care",
    ],
    buttons: [
      {
        content: "Crowns",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
];
export const FILLINGS_ROOT_TABS: IGeneral_Tabs[] = [
  {
    name: "Fillings",
    icon: "/teeth.svg",
    imgSrc: "/implants-oral-tabs.avif",
    copy: "Protect your smile and restore the health of your teeth with expertly crafted dental fillings. Whether you're addressing decay or damage, our fillings provide a seamless and natural finish to keep you smiling confidently",
    list: [
      "Restore damaged teeth by repairing areas affected by decay, bringing back their full function and appearance.",
      "Prevent further damage by sealing and protecting the affected tooth.",
      "Enjoy a natural look with tooth-coloured composite fillings designed to blend perfectly with your smile",
    ],
    buttons: [
      {
        content: "Fillings",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
  {
    name: "Root canal treatment",
    icon: "/crowns.svg",
    imgSrc: "/crowns-tabs.avif",
    copy: "Root canal is a straightforward treatment that saves infected teeth by removing the inner pulp, cleaning the canal, and sealing it, preserving your natural smile.",
    list: [
      "Also known as endodontic therapy, a root canal can save a severely infected or damaged tooth",
      "Often the best option for preserving a natural tooth and avoiding extraction",
      "Helps alleviate severe toothache and sensitivity associated with the infection or inflammation of the tooth pulp, restoring comfort and function",
    ],
    buttons: [
      {
        content: "Root Canal",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
];
export const INVISALIGN_FIXED_BRACES_TABS: IGeneral_Tabs[] = [
  {
    name: "Cutting-edge 3D imaging technology",
    icon: "/teeth.svg",
    imgSrc: "/implants-oral-tabs.avif",
    copy: "The elegant and subtle approach to perfectly aligned teeth",
    list: [
      "Exceptional Invisalign<sup>®</sup> treatment offered in the heart of Cheltenham",
      "A sophisticated and discreet alternative to traditional metal braces.",
      "Designed for unparalleled comfort, effortless removability, and outstanding effectiveness.",
      "A bespoke teeth-straightening solution tailored to complement your lifestyle",
    ],
    buttons: [
      {
        content: "Invisalign® & clear aligners",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
  {
    name: "Fixed braces",
    icon: "/crowns.svg",
    imgSrc: "/crowns-tabs.avif",
    copy: "An effective solution for complex orthodontic issues.",
    list: [
      "Traditional treatment method",
      "Choose your own colours",
      "A fixed solution for predictability",
      "Accurate results",
    ],
    buttons: [
      {
        content: "Fixed braces",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
];
export const HYGIENE_ROUTINE_MEMBER_TABS: IGeneral_Tabs[] = [
  {
    name: "Dental Hygiene",
    icon: "/teeth.svg",
    imgSrc: "/implants-oral-tabs.avif",
    copy: "Regular appointments with our hygienist involve:",
    list: [
      "Unveiling the True Beauty of Your Smile, with regular dental hygiene visits with us. Expert-Level Teeth Cleaning, Removing plaque and tartar to leave your teeth feeling polished and refreshed.",
      "Comprehensive Oral Health Monitoring",
      "Keeping a close eye on your dental health to prevent potential issues.",
      "Early Detection of Gum Disease",
      " Identifying and addressing gum health concerns before they escalate.",
      "Promoting Long-Lasting Fresh Breath ",
      "Ensuring your mouth feels revitalised with every visit.",
    ],
    buttons: [
      {
        content: "Dental hygiene",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
  {
    name: "Routine consultation",
    icon: "/crowns.svg",
    imgSrc: "/crowns-tabs.avif",
    copy: "We recommend all patients have regular routine dental check-ups to:",
    list: [
      "Monitor and maintain good oral health",
      "Address developing issues promptly",
      "Sustain a beautiful smile",
    ],
    buttons: [
      {
        content: "Routine consultations",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
  {
    name: "Become a member",
    icon: "/teeth.svg",
    imgSrc: "/implants-oral-tabs.avif",
    copy: "Join our dental practice and enjoy tailored care designed just for you.",
    list: [
      "Affordable membership plans with exclusive perks",
      "Annual check-ups and regular hygiene appointments",
      "Accident and emergency cover",
      "Access to interest-free payment plans",
      "Discounts on a wide range of treatments",
      "Priority access to our highly skilled dental team",
    ],
    buttons: [
      {
        content: "join our practice",
        href: "/",
      },
      {
        content: "Book a consultation",
        href: "/",
      },
    ],
  },
];
export const FIVE_BOXES = [
  {
    content: "Tailored dental solutions designed around your unique needs",
    imageSrc: "/box-one.webp",
  },
  {
    content: "Flexible payment options and exclusive dental plan benefits",
    imageSrc: "/box-two.svg",
  },
  {
    content: "Convenient appointments, including evenings and weekends",
    imageSrc: "/box-three.svg",
  },
  {
    content:
      "Experts in easing dental fears, ensuring a calm and relaxing experience",
    imageSrc: "/box-four.webp",
  },
  // {
  //   content:
  //     "Trained to ease your dental anxieties, ensuring a stress-free visit",
  //   imageSrc: "/box-five.webp",
  // },
];
export const FIVE_BOXES2 = [
  {
    head: "Advanced Digital Dentistry",
    content:
      " Precision and Accuracy in digitally guided treatments for your confidence.",
    imageSrc: "/version-two/advanced-digital-dentistry.svg",
  },
  {
    head: "Relaxing Lounge Experience",
    content: " Concierge-led check-in with a warm welcome and coffee.",
    steam: true,
    imageSrc: "/version-two/cup-on-saucer.svg",
  },
  {
    head: "Your Smile in Trusted Hands",
    content:
      "Trusted for expertise in Invisalign<sup>®</sup>, smile aesthetics, and implants with Dr Naiz and Dr Natalia.",
    imageSrc: "/version-two/handshake.svg",
  },
  {
    head: "Your Time, Your Schedule",
    content: " Late nights, weekends, and flexible payment plans.",
    imageSrc: "/version-two/calendar.svg",
  },
  {
    head: "NUYU Gym",
    content:
      " On-site personal training for health, confidence, and wellbeing.",
    imageSrc: "/version-two/dumbells.svg",
  },
];
export const DR_NAIZ = [
  {
    head: "15 years of clinical experience",
    content:
      "  Over 15 years of clinical experience in cosmetic and restorative dentistry",
    imageSrc: "/experience.svg",
  },
  {
    head: "Top 1% Invisalign®",
    content: "One of the UK’s top 1% Invisalign® providers (Apex Group)",
    imageSrc: "/number-1.svg",
  },
  {
    head: "Friendly, Ethical and Patient-focused",
    content:
      "Recognised for his friendly, ethical and patient-focused approach",
    imageSrc: "/version-two/handshake.svg",
  },
  {
    head: "Natural, confident smiles",
    content: "Passionate about delivering natural, confident smiles",
    imageSrc: "/version-two/calendar.svg",
  },
  {
    head: "Dental mentorship",
    content: "Actively engaged in dental mentorship and continuous learning",
    imageSrc: "/mentorship.svg",
  },
];
export const LOGOS_CAROUSEL = [
  "/logos/1.png",
  "/logos/2.png",
  "/logos/3.png",
  "/logos/4.png",
  "/logos/5.avif",
  "/logos/6.avif",
  "/logos/7.avif",
  "/logos/8.avif",
  "/logos/9.avif",
];
export const CORE_SERVICES = [
  {
    targetId: "#exquisite",
    name: "Examine and preserve",
    image: "/assess-maintain.svg",
    link: "",
  },
  {
    targetId: "#straighten",
    name: "Straighten",
    image: "/straighten.svg",
    link: "/",
  },
  {
    targetId: "#refine",
    name: "Refine",
    image: "/enhance.svg",
    link: "/",
  },
  {
    targetId: "#repair",
    name: "Rejuvenate",
    image: "/repair.svg",
    link: "/",
  },
  {
    targetId: "#restore",
    name: "Restore",
    image: "/restore.svg",
    link: "/",
  },
];
export const CORE_SERVICES2 = [
  {
    targetId: "#exquisite",
    name: "Prevent & Protect",
    para: "Comprehensive oral health assessments and hygiene care to safeguard your smile.",
    image: "/assess-maintain.svg",
    link: "",
  },
  {
    targetId: "#straighten",
    name: "Straighten & Align",
    para: "Invisalign<sup>®</sup> and discreet orthodontics for a harmonised, confident smile.",
    image: "/straighten.svg",
    link: "/",
  },
  {
    targetId: "#refine",
    name: "Whiten & Enhance",
    para: "Teeth whitening, composite bonding and bespoke veneers for a refined, brighter smile.",
    image: "/enhance.svg",
    link: "/",
  },
  {
    targetId: "#repair",
    name: "Implant & Replace",
    para: "expert solutions for missing teeth, including dental implants, full arch implants (All-on-X), dental bridges, and custom dentures for a natural, lasting smile.",
    image: "/repair.svg",
    link: "/",
  },
  {
    targetId: "#restore",
    name: "Everyday Dentistry",
    para: "Advanced care for your fillings, crowns, root canals and gum health to secure your oral health.",
    image: "/restore.svg",
    link: "/",
  },
  {
    targetId: "#restore",
    name: "Aesthetics & Body Confidence",
    para: "Non-surgical facial aesthetics to enhance & restore natural beauty and On-site gym & personal training to refine your overall wellness.",
    image: "/restore.svg",
    link: "/",
  },
];
export const CORE_SERVICES3 = [
  {
    targetId: "#exquisite",
    name: "Prevent & Protect",
    para: "Comprehensive oral health assessments and hygiene care to safeguard your smile.",
    image: "/assess-maintain.svg",
    link: "",
    buttons: [
      {
        name: "Oral Health Assessment",
        image: "/oral-health-home.webp",
        href: "/treatments/prevent-protect/oral-health-assessment",
        para: "At NUYU Cheltenham, we offer gentle, thorough oral health assessments to support your long-term dental wellness",
      },
      {
        name: "Smile Clean",
        image: "/smile-clean-home.webp",
        href: "/treatments/prevent-protect/smile-clean",
        para: "At NUYU Cheltenham, our dental hygiene treatments keep your smile fresh, healthy, and beautifully maintained",
      },
      {
        name: "Implant & Bonding Care",
        image: "/implant-bonding-care-home.webp",
        href: "/treatments/prevent-protect/implants-bonding",
        para: "At NUYU Cheltenham, we provide thorough implant and bonding care to ensure lasting strength and a flawless finish",
      },
    ],
  },
  {
    targetId: "#straighten",
    name: "Straighten & Align",
    para: "Invisalign<sup>®</sup> and discreet orthodontics for a harmonised, confident smile.",
    image: "/straighten.svg",
    link: "/",
    buttons: [
      {
        name: "Invisalign<sup>®</sup> & Clear Aligners",
        image: "/invisalign-home.webp",
        href: "/treatments/straighten-align/invisalign",
        para: "Invisalign<sup>®</sup> treatments gently straighten your teeth for a confident, seamless smile with Diamond Apex provider Dr Naiz",
      },
      {
        name: "Adult Braces",
        image: "/adult-braces-home.webp",
        href: "/treatments/straighten-align/adult-braces",
        para: "At NUYU Cheltenham, our adult orthodontics offer discreet, effective solutions for beautifully aligned smiles",
      },
      {
        name: "Kids Braces",
        image: "/kids-braces-home.webp",
        href: "/treatments/straighten-align/kids-braces",
        para: "At NUYU Cheltenham, our children's braces gently guide growing smiles towards lifelong confidence and health",
      },
    ],
  },
  {
    targetId: "#refine",
    name: "Whiten & Enhance",
    para: "Teeth whitening, composite bonding and bespoke veneers for a refined, brighter smile.",
    image: "/enhance.svg",
    link: "/whiten-enhance",
    imageSmall: true,
    buttons: [
      {
        name: "Composite Bonding",
        image: "/composite-bonding-home.webp",
        href: "/treatments/whiten-enhance/composite-bonding",
        para: "At NUYU Cheltenham, our composite bonding perfects your smile with natural-looking, seamless enhancements",
      },
      {
        name: "Teeth Whitening",
        image: "/teeth-whitening-home.webp",
        href: "/treatments/whiten-enhance/teeth-whitening",
        para: "At NUYU Cheltenham, our teeth whitening treatments brighten your smile safely, effectively, and beautifully",
      },
      {
        name: "Veneers",
        image: "/veneers-home.webp",
        href: "/treatments/whiten-enhance/veneers",
        para: "At NUYU Cheltenham, our bespoke veneers transform your smile with elegance, precision, and lasting beauty",
      },
    ],
  },
  {
    targetId: "#repair",
    name: "Implant & Replace",
    para: "Expert solutions for missing teeth, including dental implants, Full Arch implants (All-on-X), dental bridges, and custom dentures for a natural, lasting smile.",
    image: "/restore.svg",
    link: "/",
    buttons: [
      {
        name: "Custom Dentures",
        image: "/custom-dentures-home.webp",
        href: "/treatments/implant-replace/dentures",
        para: "At NUYU Cheltenham, our bespoke dentures restore your smile with comfort, confidence, and natural elegance",
      },
      {
        name: "Dental Implants",
        image: "/dental-implants-home.webp",
        href: "/treatments/implant-replace/dental-implants",
        para: "At NUYU Cheltenham, our dental implants offer a long-lasting, natural-looking solution for missing teeth",
      },
      {
        name: "Full Arch Implants",
        image: "/full-arch-home.webp",
        href: "/treatments/implant-replace/full-arch-implants",
        para: "At NUYU Cheltenham, our Full Arch solutions restore complete smiles with stability, comfort, and confidence",
      },
    ],
  },
  {
    targetId: "#restore",
    name: "Everyday Dentistry",
    para: "Advanced care for your fillings, crowns, root canals and gum health to secure your oral health.",
    image: "/repair.svg",
    link: "/",
    buttons: [
      {
        name: "Fillings",
        image: "/fillings-home.webp",
        href: "/treatments/everyday-dentistry/fillings",
        para: "At NUYU Cheltenham, our natural-looking fillings restore strength and beauty to your teeth with care",
      },
      {
        name: "Root Canal Treatment",
        image: "/root-canal-home.webp",
        href: "/treatments/everyday-dentistry/root-canal",
        para: "At NUYU Cheltenham, our gentle root canal treatment relieves discomfort while preserving your natural tooth",
      },
      {
        name: "Dental Crown",
        image: "/dental-crown-home.webp",
        href: "/treatments/everyday-dentistry/dental-crowns",
        para: "At NUYU Cheltenham, our custom dental crowns restore strength and beauty with a seamless, natural finish.",
      },
    ],
  },
  {
    targetId: "#restore",
    name: "Aesthetics & Body Confidence",
    para: "Non-surgical facial aesthetics to enhance & restore natural beauty and on-site gym & personal training to refine your overall wellness.",
    image: "/female-yoga.svg",
    link: "/",
    buttons: [
      {
        name: "Facial rejuvenation",
        image: "/facial-rejuvenation-home.webp",
        href: "/treatments/aesthetics-body-confidence/facial-rejuvenation",
        para: "At NUYU Cheltenham, our facial rejuvenation treatments restore youthful radiance with subtle, expert care.",
      },
      {
        name: "Skin treatments",
        image: "/skin-treatment-home.webp",
        href: "/treatments/aesthetics-body-confidence/skin-treatments",
        para: "At NUYU Cheltenham, our bespoke skin treatments rejuvenate your complexion for a radiant, youthful glow.",
      },
      {
        name: "NUYU gym",
        image: "/nuyu-gym-home.webp",
        href: "/treatments/aesthetics-body-confidence/nuyu-gym",
        para: "At NUYU Cheltenham, our private gym supports your wellbeing with personalised fitness in a luxurious setting",
      },
    ],
  },
];
export const CORE_SERVICES_TEAM = [
  {
    targetId: "#exquisite",
    name: "Prevent & Protect",
    para: "Comprehensive oral health assessments and hygiene care to safeguard your smile.",
    image: "/assess-maintain.svg",
    link: "",
    buttons: [
      {
        name: "Oral Health Assessment",
        image: "/oral-health-home.webp",
        href: "/treatments/prevent-protect/oral-health-assessment",
        para: "At NUYU Cheltenham, we offer gentle, thorough oral health assessments to support your long-term dental wellness",
      },
      {
        name: "Smile Clean",
        image: "/smile-clean-home.webp",
        href: "/treatments/prevent-protect/smile-clean",
        para: "At NUYU Cheltenham, our dental hygiene treatments keep your smile fresh, healthy, and beautifully maintained",
      },
      {
        name: "Implant & Bonding Care",
        image: "/implant-bonding-care-home.webp",
        href: "/treatments/prevent-protect/implants-bonding",
        para: "At NUYU Cheltenham, we provide thorough implant and bonding care to ensure lasting strength and a flawless finish",
      },
    ],
  },
  {
    targetId: "#straighten",
    name: "Straighten & Align",
    para: "Invisalign<sup>®</sup> and discreet orthodontics for a harmonised, confident smile.",
    image: "/straighten.svg",
    link: "/",
    buttons: [
      {
        name: "Invisalign<sup>®</sup> & Clear Aligners",
        image: "/invisalign-home.webp",
        href: "/treatments/straighten-align/invisalign",
        para: "Invisalign<sup>®</sup> treatments gently straighten your teeth for a confident, seamless smile with Diamond Apex provider Dr Naiz",
      },
      {
        name: "Adult Braces",
        image: "/adult-braces-home.webp",
        href: "/treatments/straighten-align/adult-braces",
        para: "At NUYU Cheltenham, our adult orthodontics offer discreet, effective solutions for beautifully aligned smiles",
      },
      {
        name: "Kids Braces",
        image: "/kids-braces-home.webp",
        href: "/treatments/straighten-align/kids-braces",
        para: "At NUYU Cheltenham, our children's braces gently guide growing smiles towards lifelong confidence and health",
      },
    ],
  },
  {
    targetId: "#refine",
    name: "Whiten & Enhance",
    para: "Teeth whitening, composite bonding and bespoke veneers for a refined, brighter smile.",
    image: "/enhance.svg",
    link: "/whiten-enhance",
    imageSmall: true,
    buttons: [
      {
        name: "Composite Bonding",
        image: "/composite-bonding-home.webp",
        href: "/treatments/whiten-enhance/composite-bonding",
        para: "At NUYU Cheltenham, our composite bonding perfects your smile with natural-looking, seamless enhancements",
      },
      {
        name: "Teeth Whitening",
        image: "/teeth-whitening-home.webp",
        href: "/treatments/whiten-enhance/teeth-whitening",
        para: "At NUYU Cheltenham, our teeth whitening treatments brighten your smile safely, effectively, and beautifully",
      },
      {
        name: "Veneers",
        image: "/veneers-home.webp",
        href: "/treatments/whiten-enhance/veneer",
        para: "At NUYU Cheltenham, our bespoke veneers transform your smile with elegance, precision, and lasting beauty",
      },
    ],
  },
  {
    targetId: "#repair",
    name: "Implant & Replace",
    para: "Expert solutions for missing teeth, including dental implants, Full Arch implants (All-on-X), dental bridges, and custom dentures for a natural, lasting smile.",
    image: "/restore.svg",
    link: "/",
    buttons: [
      {
        name: "Custom Dentures",
        image: "/custom-dentures-home.webp",
        href: "/treatments/implant-replace/dentures",
        para: "At NUYU Cheltenham, our bespoke dentures restore your smile with comfort, confidence, and natural elegance",
      },
      {
        name: "Dental Implants",
        image: "/dental-implants-home.webp",
        href: "/treatments/implant-replace/dental-implants",
        para: "At NUYU Cheltenham, our dental implants offer a long-lasting, natural-looking solution for missing teeth",
      },
      {
        name: "Full Arch Implants",
        image: "/full-arch-home.webp",
        href: "/treatments/implant-replace/full-arch-implants",
        para: "At NUYU Cheltenham, our Full Arch solutions restore complete smiles with stability, comfort, and confidence",
      },
    ],
  },
  {
    targetId: "#restore",
    name: "Everyday Dentistry",
    para: "Advanced care for your fillings, crowns, root canals and gum health to secure your oral health.",
    image: "/repair.svg",
    link: "/",
    buttons: [
      {
        name: "Fillings",
        image: "/fillings-home.webp",
        href: "/treatments/everyday-dentistry/fillings",
        para: "At NUYU Cheltenham, our natural-looking fillings restore strength and beauty to your teeth with care",
      },
      {
        name: "Root Canal Treatment",
        image: "/root-canal-home.webp",
        href: "/treatments/everyday-dentistry/root-canal",
        para: "At NUYU Cheltenham, our gentle root canal treatment relieves discomfort while preserving your natural tooth",
      },
      {
        name: "Dental Crown",
        image: "/dental-crown-home.webp",
        href: "/treatments/everyday-dentistry/dental-crowns",
        para: "At NUYU Cheltenham, our custom dental crowns restore strength and beauty with a seamless, natural finish.",
      },
    ],
  },
  {
    targetId: "#restore",
    name: "Aesthetics & Body Confidence",
    para: "Non-surgical facial aesthetics to enhance & restore natural beauty and on-site gym & personal training to refine your overall wellness.",
    image: "/female-yoga.svg",
    link: "/",
    buttons: [
      {
        name: "Facial rejuvenation",
        image: "/facial-rejuvenation-home.webp",
        href: "/treatments/aesthetics-body-confidence/facial-rejuvenation",
        para: "At NUYU Cheltenham, our facial rejuvenation treatments restore youthful radiance with subtle, expert care.",
      },
      {
        name: "Skin treatments",
        image: "/skin-treatment-home.webp",
        href: "/treatments/aesthetics-body-confidence/skin-treatments",
        para: "At NUYU Cheltenham, our bespoke skin treatments rejuvenate your complexion for a radiant, youthful glow.",
      },
      {
        name: "NUYU gym",
        image: "/nuyu-gym-home.webp",
        href: "/treatments/aesthetics-body-confidence/nuyu-gym",
        para: "At NUYU Cheltenham, our private gym supports your wellbeing with personalised fitness in a luxurious setting",
      },
    ],
  },
];
export const LOOKING_AFTER = {
  id: "exquisite",
  heading: "Exquisite Care for Timeless Smiles",
  para: "NUYU are commited to providing you with exceptional dental wellness",
  btnContent: "Our core services",
  btnLink: "#specialized-services",
  gridData: [
    {
      image: "/oral-health.avif",
      text: "Oral health",
    },
    {
      image: "/clean-teeth.avif",
      text: "Clean teeth",
    },
    {
      image: "/healthy-gums.avif",
      text: "Healthy gums",
    },
    {
      image: "/oral-screenings.avif",
      text: "Oral cancer screenings",
    },
  ],
};
export const STRAIGTHEN_YOUR_TEETH = {
  id: "straighten",
  heading: "The Journey to a Beautifully Aligned Smile",
  para: "Orthodontic treatment can help with:",
  btnContent: "Our core services",
  btnLink: "#specialized-services",
  gridData: [
    {
      image: "/oral-health.avif",
      text: "Crooked teeth",
    },
    {
      image: "/clean-teeth.avif",
      text: "Gaps in your smile",
    },
    {
      image: "/healthy-gums.avif",
      text: "Underbite/protruding jaw",
    },
    {
      image: "/oral-screenings.avif",
      text: "Overbite/recessed jaw",
    },
  ],
};
export const ENHANCE_YOUR_SMILE = {
  id: "refine",
  heading: "Smiles That Last a Lifetime",
  para: "Cosmetic treatment can help with:",
  btnContent: "Our core services",
  btnLink: "#specialized-services",
  gridData: [
    {
      image: "/oral-health.avif",
      text: "Chipped teeth",
    },
    {
      image: "/clean-teeth.avif",
      text: "Worn teeth",
    },
    {
      image: "/healthy-gums.avif",
      text: "Small teeth",
    },
    {
      image: "/oral-screenings.avif",
      text: "Discoloured teeth",
    },
  ],
};
export const REPAIR_DAMAGED_TEETH = {
  id: "repair",
  heading: "Restore Your Natural Teeth",
  para: "General dentistry treatment can help with:",
  btnContent: "Our core services",
  btnLink: "#specialized-services",
  gridData: [
    {
      image: "/oral-health.avif",
      text: "Cavities",
    },
    {
      image: "/clean-teeth.avif",
      text: "Tooth decay",
    },
  ],
};
export const RESTORE_MISSING_TEETH = {
  id: "restore",
  heading: "Rebuild Your Smile",
  para: "Restorative dentistry treatment can help with:",
  btnContent: "Our core services",
  btnLink: "#specialized-services",
  gridData: [
    {
      image: "/oral-health.avif",
      text: "Cracked or chipped teeth",
    },
    {
      image: "/clean-teeth.avif",
      text: "Missing teeth",
    },
    {
      image: "/oral-health.avif",
      text: "Damaged or worn teeth",
    },
  ],
};
export const INVISALIGN_BEFORE_AND_AFTERS = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a class='font-bold' href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  images: [
    {
      before: "/carousel/invisalign/before-1.avif",
      after: "/carousel/invisalign/after-1.avif",
      name: "Specialist Orthodontics",
    },
    {
      before: "/carousel/invisalign/before-2.avif",
      after: "/carousel/invisalign/after-2.avif",
      name: "Invisalign<sup>®</sup>",
    },
    {
      before: "/carousel/invisalign/before-3.avif",
      after: "/carousel/invisalign/after-3.avif",
      name: "Invisalign<sup>®</sup> / Composite Bonding",
    },
    {
      before: "/carousel/invisalign/before-4.avif",
      after: "/carousel/invisalign/after-4.avif",
      name: "Specialist Orthodontics",
    },
    {
      before: "/carousel/invisalign/before-2.avif",
      after: "/carousel/invisalign/after-2.avif",
      name: "Invisalign<sup>®</sup>",
    },
  ],
};
export const COSMETIC_BEFORE_AND_AFTERS = {
  heading: "See the Difference Our Cosmetic Treatments Make",
  images: [
    {
      before: "/carousel/invisalign/before-1.avif",
      after: "/carousel/invisalign/after-1.avif",
    },
    {
      before: "/carousel/invisalign/before-2.avif",
      after: "/carousel/invisalign/after-2.avif",
    },
    {
      before: "/carousel/invisalign/before-3.avif",
      after: "/carousel/invisalign/after-3.avif",
    },
    {
      before: "/carousel/invisalign/before-4.avif",
      after: "/carousel/invisalign/after-4.avif",
    },
  ],
};
export const COSMETIC_BEFORE_AND_AFTERS_NEW = {
  heading: "See the Difference Our Cosmetic Treatments Make",
  images: [
    {
      before: "/patient-stories/1-before.webp",
      after: "/patient-stories/1-after.webp",
      name: "SmileFast Composite Bonding",
    },
    {
      before: "/patient-stories/2-before.webp",
      after: "/patient-stories/2-after.webp",
      name: "Invisalign<sup>®</sup> and Edge Bonding",
    },
    {
      before: "/patient-stories/3-before.webp",
      after: "/patient-stories/3-after.webp",
      name: "Dental Implant",
    },
  ],
};
export const INVISALIGN_TEETH_STRAIGHT = {
  heading: "Smile Success Stories",
  texture: true,
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a class='font-bold' href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  images: [
    {
      before: "/patient-stories/22-before.webp",
      after: "/patient-stories/22-after.webp",
      name: "SmileFast Composite Bonding",
    },
    {
      before: "/patient-stories/23-before.webp",
      after: "/patient-stories/23-after.webp",
      name: "Composite Bonding",
    },
    {
      before: "/patient-stories/24-before.webp",
      after: "/patient-stories/24-after.webp",
      name: "Composite Bonding",
    },
  ],
};
export const FAQS_HOME = {
  heading: "Your Questions, Answered With Care and Clarity",
  tabs: [
    {
      name: "orthodontics",
      image: "/orthodontics-tab.avif",
      accordion: [
        {
          question: "What is orthodontics?",
          answer:
            "Orthodontics refers to dental treatments that are designed specifically to target the positioning of the teeth and jaws. By bringing the jaws and teeth into proper alignment, it can change your appearance, as well as improving your oral health and potentially preventing dental problems such as uneven wear on the teeth in the future.",
        },
        {
          question: "What orthodontic treatments do you offer?",
          answer:
            "We offer three types of teeth straightening treatment at our Shepherd’s Bush practice. These are Invisalign<sup>®</sup>, clear aligners and traditional fixed braces. Which type you are recommended to have will depend on your individual needs.",
        },
        {
          question: "Why should orthodontics be performed by a specialist?",
          answer:
            "As you might expect, moving the teeth and jaws is a complex and time-consuming process that requires expert understanding and experience. We have a specialist orthodontist to help ensure that our patients receive the very best care and results at every stage of their orthodontic journey.",
        },
        {
          question: "How long do orthodontic treatments take?",
          answer:
            "Every patient is unique and faces different challenges with their teeth. This is especially true for patients who require orthodontics. How long your treatment will take will depend on the level of complexity involved in bringing your teeth and jaw into perfect alignment. You will be able to get an estimate of the length of your treatment at your orthodontic consultation.",
        },
        {
          question: "Can adults have orthodontic treatment?",
          answer:
            "Yes, absolutely. There is no age limit for orthodontics, and we routinely treat adult patients with Invisalign<sup>®</sup>, clear aligners and fixed braces.",
        },
        {
          question:
            "Do I need a referral to book an orthodontic appointment with you?",
          answer:
            "No, you can book a free orthodontic consultation directly with us without the need for a referral.",
        },
        {
          question: "How much does orthodontic treatment cost?",
          answer:
            "This depends on what type of orthodontic treatment you choose. You can ask about this at your consultation appointment. You can also visit our fees & payment plans page for more information.",
        },
      ],
    },
    {
      name: "General dentistry",
      image: "/general-dentistry-tab.svg",
      accordion: [
        {
          question: "What is general dentistry?",
          answer:
            "General dentistry is the term used to describe the diagnosis, prevention and treatment of oral health conditions. It’s designed to keep your teeth, gums and mouth healthy, and ensure you don’t experience any dental pain. ",
        },
        {
          question: "What general dentistry treatments do you offer?",
          answer:
            "We offer a comprehensive range of general dentistry treatments to help ensure our patients enjoy optimal oral health. These include:<br/>Fillings<br/>Root canal<br/>Dental crowns<br/>Extractions<br/>Dentures and bridges<br/>Gum treatments including periodontal pocket cleaning<br/>Dental sealants<br/>Oral surgery<br/>Sleep apnoea treatment<br/>Professional dental cleanings<br/>Diagnostics such as x-rays",
        },
        {
          question: "Why are regular dental check-ups important?",
          answer:
            "We recommend that all patients have regular consultations with our team for us to closely monitor their dental health. Regular consultations enable us to spot health problems early on, often before you develop symptoms such as pain or swelling, and when they are generally simpler and less expensive to fix. These appointments also help prevent many oral health problems from developing at all.",
        },
        {
          question: "How often do I need to go to the dentist?",
          answer:
            "Every patient is different and there’s not a one-size-fits-all answer to this question. Instead, we recommend that you follow the specific advice given to you by our dental team.",
        },
        {
          question: "Why do I need professional dental cleaning?",
          answer:
            "Most people remember to regularly brush their teeth twice a day at home. However, professional dental cleaning offers an enhanced level of cleanliness that can’t be achieved at home with brushing and flossing. This is because your dental hygienist will have greater visibility of your teeth, enhanced access to areas that require special attention <em>and</em>  specialist tools and equipment. Regular professional cleaning improves your overall oral health, reduces the risk of dental problems and can even boost your whole body health by reducing your risk of heart disease, stroke and dementia.",
        },
        {
          question: "How do I know what general dentistry treatments I need?",
          answer:
            "You’ll have a comprehensive examination at the start of your patient journey. This will tell our team where any issues may lay and the best treatments to resolve them. We want our patients to feel actively involved in every aspect of their care and will talk you through any treatment options and help you to make an informed decision about how to best care for your long-term oral health.",
        },
        {
          question: "Do you offer pain relief?",
          answer:
            "We want our patients to feel as comfortable as possible and offer the necessary pain relief for the type of dental treatment that you are having. If you are concerned about discomfort, please speak to our compassionate team who will be happy to help.",
        },
        {
          question: "How much do general dentistry treatments cost?",
          answer:
            "We believe that everyone should have access to affordable dental care. Treatment costs vary and can be discussed with your dentist. In the meantime, you can also visit our fees & payment plans page for more information.",
        },
      ],
    },
    {
      name: "cosmetic dentistry",
      image: "/cosmetic-dentistry-tab.svg",
      accordion: [
        {
          question: "What is cosmetic dentistry?",
          answer:
            "Cosmetic dentistry refers to dental treatments that are designed to improve the appearance of your smile. This includes your teeth, gums and jaw.",
        },
        {
          question: "What cosmetic dentistry treatments do you offer?",
          answer:
            "We offer a comprehensive range of cosmetic dentistry treatments at our West London dental practice. These include:<br/>Teeth whitening for stained or discoloured teeth<br/>Porcelain veneers to cover stains, minor gaps and other imperfections<br/>Dental bonding to cover minor smile imperfections<br/>Dental implants to replace missing teeth<br/>Orthodontic treatment to straighten teeth",
        },
        {
          question:
            "How long will the results of my cosmetic dentistry treatment last?",
          answer:
            "Every cosmetic dentistry treatment has a different lifespan. For example, gum reshaping is permanent, while porcelain veneers could last up to 20 years. Teeth whitening offers the least longevity, with results typically lasting around a year before further treatment is required.",
        },
        {
          question: "Will my new smile look fake?",
          answer:
            "Many patients worry that cosmetic dentistry will alter their appearance so much that the results will look fake or that they no longer look like themselves. However, we’re committed to enhancing your natural appearance, and curate your treatments so that they complement your features and elevate the way that you look, without appearing false or over-done.",
        },
        {
          question: "Is cosmetic dentistry painful?",
          answer:
            "No, it’s not. We provide appropriate pain relief where necessary to ensure that our patients remain calm, comfortable and free from discomfort as we transform their smile. If you are particularly anxious about your treatment, please speak to our compassionate and caring team to find out how we can help.",
        },
        {
          question: "How much do cosmetic dental treatments cost?",
          answer:
            "We think that everyone deserves to have the opportunity to enjoy a beautiful smile. There’s no one-size-fits-all approach to cosmetic dentistry, but we will be happy to discuss costs with you during your appointment. You can also visit our fees & payment plans page to find out more about your payment options.",
        },
      ],
    },
  ],
};
export const IMPLANTS_LANDING_JOURNEY = {
  heading: "Your Implant Journey at NUYU",
  texture: true,
  para: "We keep your experience clear and reassuring:",
  boxes: [
    {
      heading: " Consultation & 3D Scan – detailed digital assessment of your oral health",
      image: "/tj-12.webp",
      reverse: false,
    },
    {
      heading: "Guided Implant Placement – precise, minimally invasive approach",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Custom Crown Fit – designed to blend seamlessly with your smile ",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Ongoing Care – hygienist-led support to protect your implant long-term",
      image: "/tj-4.webp",
      reverse: true,
    },
  ],
};
export const TREATMENT_JOURNEY_HOME = {
  heading: "Your NUYU Experience - From Hello to Your Best Smile",
  texture: true,
  para: "Your visit to NUYU Dental & Aesthetics is designed to feel effortless and welcoming. With bespoke care, advanced technology, and a team by your side, we guide you through each step toward a smile you’ll love.",
  boxes: [
    {
      heading: "A Warm Welcome to NUYU Dental & Aesthetics",
      para: "Settle in with a refreshment as our concierge team and treatment coordinator check you in and discuss your goals.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Smile Photography & Digital Scans",
      para: "Capture your smile with clinical photography and AI-powered 3D scans for precise digital records.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "Your dentist takes a closer look, enhancing your examination with AI-powered X-rays and CBCT imaging to create a plan just for you.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Personalised Treatment Planning & Getting Started",
      para: "Explore flexible payment choices, including 0% finance options, and book appointments that suit you best.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Treatment Begins",
      para: "Relax in a private treatment suite while we carry out your treatment with digital precision.",
      image: "/step5-treatment.webp",
      reverse: false,
    },
    {
      heading: "Ongoing Care & Smile Maintenance",
      para: "Keep your smile looking and feeling its best with check-ups, hygiene visits, and maintenance sessions.",
      image: "/tj-6.webp",
      reverse: true,
    },
    {
      heading: "Enhancing Your Confidence",
      para: "Complete your look with additional cosmetic options, facial aesthetic treatments, or by signing up with a personal trainer at the NUYU gym.",
      image: "/tj-8.webp",
      reverse: false,
    },
  ],
};
export const TEWKESBURY_TREATMENTS = {
  heading: "NUYU Cirencester Treatments",
  texture: true,
  boxes: [
    {
      heading: "Straighten Your Smile – Invisalign® & Braces Near Tewkesbury",
      para: "Dreaming of straighter teeth? Our Invisalign® Tewkesbury treatments use clear, removable aligners that work discreetly in the background while you get on with your day.<br/><br/>For cases that require more advanced correction, our <a href='/treatments/straighten-align/adult-braces' class='font-bold'>Adult Braces</a> Tewkesbury provide precise, predictable results using modern, comfortable systems.<br/><br/>We also offer <a href='/treatments/straighten-align/adult-braces' class='font-bold'>Kids Braces</a>, helping children achieve healthy, aligned smiles in a relaxed and supportive environment",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Enhance & Refresh – Cosmetic Dentistry Near Tewkesbury",
      para: "Boost your confidence with cosmetic treatments designed to give you a brighter, more balanced smile:",
      list: [
        "Teeth Whitening Tewkesbury – Professionally remove stains for a radiant, natural finish.",
        "Composite Bonding Tewkesbury – Fix chips, gaps, and uneven edges in just one visit.",
        "Veneers Tewkesbury – Achieve a flawless, long-lasting transformation.",
        "Smile Makeovers Tewkesbury – Combine treatments for a bespoke result, designed exclusively for you.",
      ],
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Protect & Maintain – Preventive Dentistry for Tewkesbury Patients",
      para: "Healthy smiles start with prevention. Our <a href='/treatments/prevent-protect/oral-health-assessment' class='font-bold'>Oral Health Assessment</a> Tewkesbury provides a detailed check-up, allowing us to spot concerns early and avoid future problems.<br/><br/>Keep your gums and teeth in top condition with our Smile Clean Tewkesbury — a deep clean that removes plaque and tartar while leaving your mouth feeling fresh.<br/><br/>If you’ve had dental restorations, our Implant & Bonding Care ensures long-lasting results. For missing teeth, Implant and Replace Tewkesbury restores comfort, appearance, and confidence.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Refresh Your Confidence – Skin Treatments & NUYU Gym Near Tewkesbury",
      para: "Missing teeth don’t have to mean compromising your confidence. NUYU Dental offers Cirencester patients a range of advanced solutions:",
      list: [
        "Your confidence goes beyond your smile. At NUYU Dental & Aesthetics, we also offer Skin Treatments, including <a href='/treatments/aesthetics-body-confidence/facial-rejuvenation' class='font-bold'>lip fillers and facial fillers</a>, to rejuvenate and refresh your appearance naturally.<br/><br/>With the NUYU Gym Tewkesbury, you can also focus on your overall wellness — combining dental health, advanced skin care, and physical wellbeing under one roof.",
      ],
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Rediscover Your Smile – Dental Implants & Dentures Near Tewkesbury",
      para: "If you’re missing one or more teeth, our <a href='/treatments/implant-replace/dental-implants' class='font-bold'>Dental Implants</a> provide a secure, natural-looking replacement that functions like your own teeth.<br/><br/>For full-mouth restoration, our Full Arch Implants Tewkesbury deliver strong, stable results designed to look and feel like the real thing.<br/><br/>We also provide General Dentistry services — including <a href='/treatments/everyday-dentistry/fillings' class='font-bold'>fillings</a>, crowns, and check-ups — to keep your smile healthy every day.",
      image: "/step5-treatment.webp",
      reverse: false,
    },
    {
      heading: "Emergency Dentist Near Tewkesbury – Fast, Gentle Relief",
      para: "Dental emergencies happen when you least expect them. Our <a href='/' class='font-bold'>Emergency Dentist</a> Tewkesbury service ensures you get fast, effective treatment when you need it most.<br/><br/>For cracked or weakened teeth, our Dental Crowns Tewkesbury restore strength and appearance, while our Root Canal Treatment saves infected teeth and relieves pain.",
      image: "/tj-6.webp",
      reverse: true,
    },
  ],
};
export const CIRENCESTER_TREATMENTS = {
  heading: "NUYU Cirencester Treatments",
  texture: true,
  boxes: [
    {
      heading: "Straighten & Align – Invisalign® and Braces for Cirencester Patients",
      para: "Dreaming of a straighter smile? At NUYU Dental, we offer flexible solutions for adults, teens, and children:",
      list: [
        "Invisalign® Near Cirencester – Clear, removable aligners that gently <a href='/treatments/straighten-align' class='font-bold'>straighten teeth</a> without brackets or wires. A discreet, comfortable way to transform your smile.",
        "Adult Braces – For more complex alignment needs, our advanced braces provide reliable results. Choose from subtle ceramic systems or traditional options.",
        "Children’s Braces – Early orthodontic treatment helps guide developing smiles. We make the process stress-free for both parents and children.",
      ],
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Whiten & Enhance – Reveal Your Natural Glow",
      para: "Enhance your smile with treatments designed for natural-looking, long-lasting results:",
      list: [
        "Teeth Whitening – Professional whitening removes deep stains from food, drinks, and daily habits, restoring a brighter, youthful glow.",
        "Composite Bonding – Repair chips, close gaps, and smooth uneven edges using <a href='/treatments/whiten-enhance/composite-bonding' class='font-bold'>tooth-coloured materials</a> for a seamless, polished finish.",
        "Porcelain Veneers – Transform the shape, colour, and symmetry of your teeth with handcrafted veneers for a flawless yet natural appearance.",
        "Smile Makeovers – Combine treatments like whitening, veneers, bonding, and Invisalign® into a bespoke plan designed entirely around your goals.",
      ],
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Prevent & Protect – Healthy Teeth, Healthy Gums",
      para: "Prevention is the key to long-term oral health. Our Cirencester patients trust us to keep their smiles in top condition through:",
      list: [
        "Comprehensive Dental Assessments – Early detection of potential issues to avoid complex treatments later.",
        "Professional Hygiene Appointments – Deep cleaning to remove plaque and tartar while keeping your gums healthy and breath fresh.",
        "Restoration Aftercare – Personalised maintenance plans to extend the lifespan and appearance of implants, bonding, and other dental work.",
        "Replacing Missing Teeth – Natural-looking, secure solutions including <a href='/treatments/implant-replace' class-'font-bold'>dental implants</a>, bridges, and dentures.",
      ],
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Dental Implants & Full Mouth Solutions",
      para: "Missing teeth don’t have to mean compromising your confidence. NUYU Dental offers Cirencester patients a range of advanced solutions:",
      list: [
        "Dental Implants: A secure, permanent replacement that looks and functions like your natural tooth. Ideal for single gaps or multiple missing teeth.",
        "Full Arch Implants near Cirencester: <a href='/treatments/implant-replace/full-arch-implants' class='font-bold'>Restore an entire row of teeth</a> with a fixed, stable solution that lets you smile, eat, and speak without worry.",
        "Custom Dentures near Cirencester: We design comfortable, bespoke dentures that fit securely and look natural — giving you confidence in everyday life.",
      ],
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Restorative Dentistry & Emergency Care",
      para: "When issues arise, we’re here to help — quickly and gently:",
      list: [
        "Root Canal Treatments – Save infected teeth and relieve discomfort with precise, pain-free techniques.",
        "Dental Crowns – Strengthen and protect weakened teeth using <a href='/treatments/everyday-dentistry/dental-crowns' class='font-bold'>custom-made crowns</a> that blend seamlessly with your smile.",
        "Emergency Dental Care – Whether it’s toothache, cracks, or accidents, we aim to offer same-day appointments to get you out of pain fast.",
      ],
      image: "/step5-treatment.webp",
      reverse: false,
    },
    {
      heading: "Facial Aesthetics & Wellness",
      para: "Your confidence goes beyond your smile. At NUYU, we also offer:",
      list: [
        "Non-Surgical Skin Treatments – Smooth fine lines, <a href='/treatments/aesthetics-body-confidence/facial-rejuvenation' class='font-bold'>restore hydration,</a> and rejuvenate your appearance naturally.",
        "NUYU Gym – Supporting your overall wellness journey by promoting body confidence alongside dental health.",
      ],
      image: "/tj-6.webp",
      reverse: true,
    },
  ],
};
export const GLOCESTERSHIRE_TREATMENTS = {
  heading: "NUYU Gloucestershire Treatments",
  texture: true,
  boxes: [
    {
      heading: "Whiten & Enhance – Smile Makeovers in Gloucester",
      para: "A brighter smile can completely change the way you feel about yourself. Our Teeth Whitening treatments safely remove stains caused by coffee, tea, wine, or everyday habits.<br/><br/>If you have chipped, uneven, or worn-down teeth, our Composite Bonding can restore shape and symmetry in a single visit. For a more dramatic transformation, our Veneers create a flawless, long-lasting smile.<br/><br/>For those looking for a complete change, our Smile Makeovers Gloucester combine treatments for a truly personalised result.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Prevent & Protect – Healthy Teeth for Life",
      para: "Healthy smiles start with prevention. Our Oral Health Assessment gives you a thorough check-up, spotting any issues early and helping you avoid more complex treatment later.<br/><br/>A Smile Clean is more than just a scale and polish – it’s a deep clean that removes plaque and tartar, protects your gums, and keeps your breath fresh.<br/><br/>If you’ve invested in restorative work, our Implant & Bonding Care ensures it stays strong for years to come. For missing teeth, Implant and Replace gives you the ability to chew, speak, and smile with confidence again.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Custom Dentures & Dental Implants in Gloucester",
      para: "For patients missing one or more teeth, our Dental Implants in Gloucester are a life-changing solution. They provide a natural look, secure fit, and long-lasting durability.<br/><br/>If you need a full-mouth restoration, our Full Arch Implants (all on four dental implants in Gloucester) provide stability and function, allowing you to enjoy your favourite foods again without worry.<br/><br/>We also offer Everyday Dentistry – including fillings, crowns, and routine check-ups – to keep your mouth healthy and problem-free.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Fillings, Crowns & Emergency Care in Gloucester",
      para: "Dental problems can happen at any time. Our Root Canal Treatment helps save natural teeth and avoid extractions.<br/><br/>For damaged or weakened teeth, Dental Crowns restore strength and appearance so you can smile and bite with confidence.<br/><br/>If you need urgent help, our Emergency Dentist service is here for you – providing fast, reliable care when it matters most.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Facial Rejuvenation & NUYU Gym in Gloucester",
      para: "Your confidence isn’t just about your smile. Our Skin Treatments help you achieve smoother, fresher-looking skin without surgery.<br/><br/>We also offer the NUYU Gym, a unique personal trainer led wellness space that supports both your health and your smile.",
      image: "/tj-6.webp",
      reverse: true,
    },
  ],
};
export const TREATMENT_JOURNEY_PATIENT = {
  heading: "Your NUYU Experience - From Hello to Your Best Smile",
  texture: true,
  para: "Your visit to NUYU Dental & Aesthetics is designed to feel effortless and welcoming. With bespoke care, advanced technology, and a team by your side, we guide you through each step toward a smile you’ll love.",
  season: true,
  boxes: [
    {
      heading: "Step 1: A Warm Welcome to NUYU Dental & Aesthetics",
      para: "Settle in with a refreshment as our concierge team and treatment coordinator check you in and discuss your goals.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Step 2: Smile Photography & Digital Scans",
      para: "Capture your smile with clinical photography and AI-powered 3D scans for precise digital records.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Step 3: Comprehensive Oral Health Assessment",
      para: "Your dentist takes a closer look, enhancing your examination with AI-powered X-rays and CBCT imaging to create a plan just for you.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Step 4: Personalised Treatment Planning & Getting Started",
      para: "Explore flexible payment choices, including 0% finance options, and book appointments that suit you best.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Step 5: Treatment Begins",
      para: "Relax in a private treatment suite while we carry out your treatment with digital precision.",
      image: "/step5-treatment.webp",
      reverse: false,
    },
    {
      heading: "Step 6: Ongoing Care & Smile Maintenance",
      para: "Keep your smile looking and feeling its best with check-ups, hygiene visits, and maintenance sessions.",
      image: "/tj-6.webp",
      reverse: true,
    },
    {
      heading: "Step 7: Enhancing Your Confidence",
      para: "Complete your look with additional cosmetic options, facial aesthetic treatments, or by signing up with a personal trainer at the NUYU gym.",
      image: "/tj-8.webp",
      reverse: false,
    },
  ],
};
export const PATIENT_GALLERY_IMAGES = {
  heading: "Your NUYU Experience - From Hello to Your Best Smile",
  texture: true,
  boxes: [
    {
      image: "/practice-gallery2/pills-1.webp",
      reverse: false,
    },
    {
      image: "/practice-gallery2/pills-2.webp",
      reverse: true,
    },
    {
      image: "/practice-gallery2/pills-3.webp",
      reverse: false,
    },
  ],
};
export const TREATMENT_JOURNEY_HOME_TWO = {
  heading: "Your Bespoke Treatment Journey",
  para: "At NUYU, we understand that every smile is as unique as the individual it belongs to. That’s why your journey with us is meticulously personalised to ensure your immediate needs and long-term smile goals are seamlessly achieved. By taking the time to truly understand you, we craft a relationship built on trust, care, and exceptional results.",
  boxes: [
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:",
      image: "/treatment-journey-1.webp",
      reverse: false,
      list: [
        "Examine the Condition of Your Teeth and Gums",
        "Advanced Imaging Technologies",
        "Identify Potential Concerns",
      ],
    },
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:",
      image: "/treatment-journey-2.webp",
      reverse: true,
      list: [
        "Examine the Condition of Your Teeth and Gums",
        "Advanced Imaging Technologies",
        "Identify Potential Concerns",
      ],
    },
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:",
      image: "/treatment-journey-1.webp",
      reverse: false,
      list: [
        "Examine the Condition of Your Teeth and Gums",
        "Advanced Imaging Technologies",
        "Identify Potential Concerns",
      ],
    },
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:",
      image: "/treatment-journey-2.webp",
      reverse: true,
      list: [
        "Examine the Condition of Your Teeth and Gums",
        "Advanced Imaging Technologies",
        "Identify Potential Concerns",
      ],
    },
    {
      heading: "Comprehensive Oral Health Assessment",
      para: "At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:At NUYU, your journey to a healthy, radiant smile begins with a thorough oral health assessment. Our expert dentists will take the time to evaluate every detail of your oral health with the utmost precision and care:",
      image: "/treatment-journey-1.webp",
      reverse: false,
      list: [
        "Examine the Condition of Your Teeth and Gums",
        "Advanced Imaging Technologies",
        "Identify Potential Concerns",
      ],
    },
    // {
    //   heading: "",
    //   para: "",
    //   image: "/treatment-journey-3.avif",
    //   reverse: false,
    //   list: ["", "", ""],
    // },
  ],
};
export const GUEST_TEAM_DATA: ITeamMember[] = [
  {
    name: "Sarah Buffin",
    designation: "Patient Concierge",
    image: "/team/sarah.webp",
    bioImage: "/team/sarah.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Sarah ensures every patient’s visit begins with warmth and effortless service. With a background in childcare and coordination, she creates a welcoming atmosphere where patients feel valued and at ease.",
      "With a warm and welcoming approach, Sarah is one of the first friendly faces you’ll meet at NUYU. With a background in childcare and team coordination, she has developed exceptional communication, problem-solving, and organisational skills, making her a natural at ensuring every patient’s experience feels effortless.",
      "Sarah thrives on creating positive connections and making sure patients feel comfortable from the moment they arrive. Whether she’s welcoming guests, assisting with scheduling, or providing a seamless guest experience, her attention to detail and ability to anticipate patient needs make her an essential part of NUYU’s concierge team.",
      "Her passion for providing exceptional service ensures that every visit begins with a warm greeting and a smooth, enjoyable experience.",
    ],
  },
  {
    name: "Samantha Gardner",
    designation: "Patient Concierge",
    image: "/team/sam.webp",
    bioImage: "/team/sam.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "With a background in luxury customer service, Samantha is devoted to creating personalised experiences for every guest. Her meticulous attention to detail ensures each patient’s visit is smooth, comfortable, and enjoyable.",
      "With a background in luxury customer service and guest experience, Samantha ensures every visit to NUYU begins with a warm welcome and seamless support. Having worked in high-end hospitality and client-focused roles, she understands the importance of creating an environment where patients feel valued and cared for.",
      "Her experience in delivering tailored service and personalised care allows her to anticipate guest needs, provide a smooth and enjoyable visit, and create an atmosphere of ease and professionalism. Whether she’s greeting guests, coordinating appointments, or offering refreshments at NUYU’s coffee bar, her attention to detail and warm approach make her an integral part of the patient experience.",
      "Her passion for delivering exceptional service ensures that every interaction at NUYU is welcoming, effortless, and truly memorable.",
    ],
  },
  {
    name: "Georgina Ireland",
    designation: "Patient Concierge",

    image: "/team/geogie-ireland.webp",
    bioImage: "/team/geogie-ireland.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Georgina brings a wealth of experience in guest services and patient care, ensuring that NUYU’s concierge service feels as seamless and refined as the treatments themselves.",
      "Georgina is dedicated to creating a seamless and welcoming experience for every patient at NUYU. With a strong background in guest services, administration, and patient care, she is passionate about ensuring that every visit feels effortless and enjoyable.",
      "Her experience in private healthcare and aesthetics settings has given her a deep understanding of the importance of clear communication, attention to detail, and personalised service. Whether she’s welcoming guests, coordinating appointments, or providing guidance throughout their visit, Georgina’s warm approach ensures patients feel at ease from the moment they arrive.",
      "With an eye for organisation and a natural ability to connect with people, Georgina plays a vital role in delivering the elevated, patient-first experience that sets NUYU apart.",
    ],
  },
  {
    name: "Ellie Cooke",
    designation: "Clinical Care Coordinator",
    gdc: "294401",
    image: "/team/elie-new.webp",
    bioImage: "/team/ellie.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Ellie brings a standout mix of clinical expertise and genuine, feel-good energy to NUYU. With six years of experience supporting patients in both surgical and digital-led environments, she’s known for her ability to make complex treatments feel easy to understand and even easier to navigate.",
      "She’s trained internationally in radiography, sedation, CBCT, intraoral scanning, and photogrammetry, and previously led implant care as Head Nurse in a high-tech implant clinic. Ellie blends advanced skill with a naturally warm and upbeat personality, making her someone patients immediately feel comfortable with.",
      "When she’s not delivering world-class coordination, she’s outdoors running or catching up on the latest series—bringing that same energetic balance into every interaction.",
    ],
  },
  {
    name: "Chelsea Meats",
    designation: "Clinical Care Coordinator",
    gdc: "297077",
    image: "/team/chelsea.webp",
    bioImage: "/team/chelsea.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Chelsea combines genuine warmth with razor-sharp clinical focus, making her a reassuring and relatable presence at every stage of care. With seven years of experience in general dentistry, orthodontics, and sedation, she’s confident, capable, and highly tuned in to what patients need to feel comfortable and informed.",
      "She’s completed advanced training in radiography and sedation, and her calm clarity helps patients feel grounded and cared for—even during more complex treatments. Chelsea brings a cool, unforced confidence to the NUYU experience, where everything feels smooth, but never routine.",
      "She’s most at home outdoors with her two dogs, or catching up with friends—which speaks to her easygoing charm and strong sense of connection, both in and out of clinic.",
    ],
  },
  {
    name: "Poppy Buckland",
    designation: "Clinical Care Coordinator",

    image: "/team/poopy-buckland.webp",
    bioImage: "/team/poopy-buckland.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Poppy blends her role as a trainee dental nurse with a strong background in medical aesthetics, having worked in Cheltenham’s leading skin clinic alongside her dental career. With experience in both clinical dentistry and aesthetic consultations, she brings a naturally polished, patient-focused approach to every interaction.",
      "She has supported treatments across implants, cosmetic dentistry, and facial aesthetics, and understands the confidence that comes from subtle, well-planned enhancements. Calm, thoughtful, and detail-oriented, Poppy is skilled at guiding patients through their care in a way that feels both technically assured and emotionally reassuring.",
      "At NUYU, Poppy helps deliver a patient journey that balances clinical precision with aesthetic vision, ensuring every detail feels considered—and every result feels just right.",
    ],
  },

  {
    name: "Bethany Adkins",
    designation: "Dental Nurse",
    gdc: "310629",
    image: "/team/beth.webp",
    bioImage: "/team/beth.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Bethany’s friendly and reassuring nature makes her an integral part of the clinical team, assisting in a range of treatments from implants to smile transformations.",
      "Warm, approachable, and highly skilled, Bethany is dedicated to making every visit to NUYU as comfortable and reassuring as possible. A qualified dental nurse since 2023, she has assisted in a wide range of treatments, from implants and Invisalign<sup>®</sup> to surgical procedures and smile transformations.",
      "Her passion for patient care goes beyond the clinic—Bethany has traveled the world, volunteering in orphanages and schools, teaching, and coaching young athletes. These experiences have shaped her ability to connect with people from all walks of life, making her an invaluable part of the NUYU team.",
      "At NUYU, Bethany ensures that every treatment is delivered with precision, warmth, and attention to detail, helping patients feel at ease every step of the way.",
    ],
  },
  {
    name: "Cerys Redfern",
    designation: "Dental Nurse",
    gdc: "311900",
    image: "/team/default.webp",
    bioImage: "/team/default.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    name: "Ruby Soule",
    designation: "Dental Nurse",
    // gdc: "311900",
    image: "/team/default.webp",
    bioImage: "/team/default.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  {
    name: "Victoria Bennett",
    designation: "Dental Nurse",
    gdc: "327403",
    image: "/team/default.webp",
    bioImage: "/team/default.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
  },
  // {
  //   name: "Jennifer Bassett",
  //   designation: "Dental Nurse",
  //   gdc: "282274",
  //   image: "/team/jenny.webp",
  //   bioImage: "/team/jenny.webp",
  //   imageHover: "/team/team-one-hover.avif",
  //   paras: [
  //     "Jenny’s experience in both general and digital workflows allows her to support high-tech treatments while keeping patient comfort a priority.",
  //     "Jenny is a highly experienced dental nurse with a passion for precision, patient care, and advanced technology in dentistry. With years of experience assisting in both general and digital workflows, she has worked alongside dentists in orthodontics, restorative care, and clear aligner treatments.",
  //     "Beyond her clinical expertise, Jenny has a strong creative background in hairdressing, which has refined her attention to detail and ability to make patients feel at ease. She brings a calm, welcoming presence to every appointment, ensuring that patients feel comfortable and confident throughout their treatment.",
  //     "At NUYU, Jenny plays a key role in supporting state-of-the-art digital dentistry, working with 3D scanners, laser technology, and precision-driven treatment planning. Whether assisting in complex procedures or guiding patients through their visit, she is committed to making every experience as seamless as possible.",
  //   ],
  // },

  {
    name: "Sienna Mayo",
    designation: "Trainee Dental Nurse",

    image: "/team/sienna.webp",
    bioImage: "/team/sienna.webp",
    imageHover: "/team/sienna.webp",
    paras: [
      "Sienna is developing her clinical skills while assisting in a variety of treatments, ensuring a supportive and smooth experience for every patient.",
      "Sienna is developing her clinical skills while assisting in a variety of treatments, ensuring a supportive and smooth experience for every patient. She is passionate about patient care and is committed to providing a welcoming and reassuring presence in the clinic.",
      "At NUYU Dental & Aesthetics, Sienna plays an important role in supporting both the clinical team and patients, ensuring treatments are delivered with efficiency and care while continuing to grow her knowledge in modern dentistry.",
    ],
  },
];
export const CLINICS_TEAM_DATA: ITeamMember[] = [
  {
    name: "Dr Alex Eremia",
    designation: "Dentist with a Special Interest in Orthodontics",
    gdc: "279510",
    image: "/team/alex.webp",
    bioImage: "/team/alex.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Alex offers both everyday dentistry and orthodontic treatments, offering metal and ceramic braces for children, teenagers, and adults.",
      "Dr Alex Eremia provides both everyday dentistry and orthodontic care, with a special interest in braces for adults, teenagers, and children. He offers metal and ceramic braces to improve alignment, function, and bite correction, ensuring long-term stability and a well-balanced smile.",
      "With a warm but results-driven approach, Alex is committed to helping patients and parents make informed choices about orthodontic care. Whether guiding a young patient through their first braces appointment or helping an adult achieve the smile they’ve always wanted, he ensures that every treatment plan is tailored to individual needs.",
      "At NUYU, Alex blends comprehensive dentistry with orthodontics, providing high-quality care that supports both dental health and aesthetics for patients of all ages.",
    ],
    buttons: [
      {
        name: "Braces & Orthodontics at NUYU",
        link: "/",
      },
    ],
  },
  // {
  //   name: "Dr Toby Mitchell-Innes",
  //   designation: "Dentist",
  //   gdc: "264511",
  //   image: "/team/default.webp",
  //   bioImage: "/team/default.webp",
  //   imageHover: "/team/team-one-hover.avif",
  //   paras: [
  //     "Toby provides comprehensive dental care with a focus on sedation dentistry, helping nervous patients feel comfortable with both inhalation and IV sedation.",
  //     "Dr Toby Mitchell-Innes provides comprehensive dental care with a strong focus on patient comfort and sedation dentistry. He is passionate about making dental visits easier for those who feel anxious, offering both inhalation and intravenous (IV) sedation to help patients feel at ease during treatment.",
  //     "With experience in oral surgery, restorative care, and working with nervous patients, Toby takes a calm and reassuring approach, ensuring that every patient feels heard and supported. Whether performing routine treatments, extractions, or advanced restorative care, his focus is always on delivering high-quality care with a patient-first mindset.",
  //     "At NUYU, Toby plays an integral role in making dentistry more accessible and comfortable, helping patients regain confidence in their smiles while ensuring their experience is as smooth and relaxed as possible.",
  //   ],
  // },
  {
    name: "Dr Goce Gigovski",
    designation: "Dentist",
    gdc: "287637",
    image: "/team/goce.webp",
    bioImage: "/team/goce.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Dr Goce Gigovski brings over 15 years of private practice experience to NUYU, having worked across the UK and internationally. Originally based in Wales and now settled in Cheltenham, he’s known for his calm approach, attention to detail, and commitment to high-quality everyday dentistry.",
      "He provides a full range of care, with a particular focus on restorative treatments and root canal therapy, creating results that are both functional and natural in appearance. With a foundation that began in clinical dental technology, Goce brings an additional layer of precision and aesthetic understanding to his work—refined further through regular advanced training in modern techniques and materials.",
      "Patients value his kind, reassuring manner and his clear, thoughtful explanations at every stage of treatment. Alongside routine care, he also offers support for emergency dental appointments where prompt, considered attention is needed.",
      "At NUYU, Goce focuses on delivering everyday care with a high standard of detail, empathy, and patient confidence.",
    ],
  },
  {
    name: "Lana Gorospe ",
    designation: "Aesthetic Practitioner ",
    nmc: "12J0887E",
    image: "/team/lana.webp",
    bioImage: "/team/lana.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Lana is NUYU’s lead facial aesthetics provider, offering expert-led treatments that blend the latest advancements in aesthetics with a results-driven approach.",
      "As the lead facial aesthetics provider at NUYU Dental & Aesthetics, Lana  brings a refined, expert-led approach to non-surgical enhancements. With a background as a medical nurse prescriber, she combines technical skill with the latest trends in aesthetics, offering treatments designed to refresh, enhance, and define facial features with confidence.",
      "Lana stays at the forefront of aesthetic advancements, delivering treatments that range from subtle refinements to transformative enhancements, depending on each patient’s vision. Known for her keen eye for detail and dynamic approach, she ensures that every treatment is tailored to complement facial balance while embracing modern techniques that shape the future of aesthetics.",
      "At NUYU, Lana provides high-end aesthetic treatments in a setting designed for luxury and expertise, making cutting-edge facial rejuvenation both accessible and innovative.",
    ],
    buttons: [
      {
        name: "Facial Aesthetic Treatments",
        link: "/",
      },
    ],
  },
  {
    name: "Rema Miah",
    designation: "Hygienist",
    gdc: "277284",
    image: "/team/rema.webp",
    bioImage: "/team/rema.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Rema Miah is dedicated to helping patients achieve and maintain optimal oral health, providing expert hygiene care with a focus on prevention, education, and gentle treatment techniques",
      "She believes that a healthy smile is the foundation of confidence and works closely with patients to tailor care routines that support long-term dental wellness.",
      "With a calm and encouraging approach, Rema ensures that every visit is a positive experience, whether she’s providing a thorough clean, offering gum health advice, or guiding patients on the best ways to care for their smile at home. Her focus on comfort and education makes her a trusted partner in helping patients keep their teeth and gums healthy for life.",
      "At NUYU, Rema plays a key role in preventative care, ensuring that patients not only leave with a fresher, cleaner smile but also with the knowledge and confidence to maintain it.",
    ],
    buttons: [
      {
        name: "Hygiene & Preventative Dentistry",
        link: "/",
      },
    ],
  },
];
export const LEADER_TEAM_DATA: ITeamMember[] = [
  {
    name: "Dr Natalia Agalakova",
    designation: "Director & Lead Implant & Cosmetic Dentist ",
    gdc: "100225",
    image: "/team/natalia.webp",
    bioImage: "/team/natalia.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Natalia has an expertise in implants and cosmetic dentistry, ensuring every treatment is designed with both precision and artistry.",
      "Dr Natalia Agalakova combines precision with an artistic approach to implant and cosmetic dentistry, creating natural, confident smiles through advanced techniques. As co-founder and director of NUYU Dental & Aesthetics, she has helped shape a practice where innovation, patient experience, and world-class dentistry come together seamlessly.",
      "Recognised for her skills in smile transformations, she has been awarded SmileFast Centre of Excellence status and is part of the SmileFast Clinical & Lecture Team, sharing her expertise with fellow dentists. Her commitment to advancing modern implantology has also led her to publish a case report with Straumann, further highlighting her dedication to precision-led treatment planning.",
      "Dr Natalia’s extensive postgraduate training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics ensures that every treatment is grounded in both science and artistry. She is passionate about digital workflows to enhance precision and predictability, allowing for meticulously planned treatments that deliver outstanding results. While she focuses on implants and composite bonding, she continues to enjoy all aspects of everyday dentistry, providing patients with high-quality, beautifully planned care at every stage of their treatment.",
      "At NUYU, Dr Natalia leads with a vision for modern, patient-focused dentistry, where expertise and innovation come together to create exceptional, long-lasting smiles in a space designed for comfort and care.",
    ],
    buttons: [
      {
        name: "Dental Implants at NUYU",
        link: "/implants",
      },
      {
        name: "Composite Bonding at NUYU",
        link: "/cosmetic-dentistry",
      },
    ],
  },

  {
    name: "Dr Naiz Khan",
    designation: "Director & Diamond Apex Invisalign<sup>®</sup> Provider ",
    image: "/team/naiz.webp",
    bioImage: "/team/niaz.webp",
    gdc: "101469",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "A leading Invisalign<sup>®</sup> provider, Naiz has transformed thousands of smiles and is the visionary behind NUYU’s experience-led approach.",
      "Dr Naiz Khan is the visionary behind NUYU Dental & Aesthetics, shaping it into a place where patients don’t just visit the dentist, they experience a new standard of care. As a Diamond Apex Invisalign<sup>®</sup> Provider—placing him in the top 1% of Invisalign<sup>®</sup> providers worldwide—he has helped thousands of patients achieve beautifully aligned smiles with a precise, results-driven approach.",
      "With a natural charm and a quick-witted sense of humor, Dr Naiz makes every patient feel comfortable and at ease. He brings a lighthearted yet expert touch to every treatment, ensuring that patients not only achieve the best results but actually enjoy the journey.",
      "His influence in dentistry extends beyond patient care—having worked as a Clinical Dental Advisor for the UK’s largest dental group, he played a key role in introducing innovative treatment concepts that have since become industry standards.",
      "At NUYU, his focus goes beyond straightening teeth; he has designed the practice to feel effortless, welcoming, and unlike any traditional dental visit. Every detail reflects his commitment to modern, patient-first dentistry, ensuring that Invisalign<sup>®</sup> treatment is not just transformative, but an experience in itself.",
      "Connect with Dr Naiz on Instagram <a href='https://www.instagram.com/drnaiz/' style='text-decoration: underline'> @drnaiz </a>, where he showcases real Invisalign<sup>®</sup> journeys and smile transformation.",
    ],
    buttons: [
      {
        name: "Invisalign® at NUYU",
        link: "/invisalign",
      },
    ],
  },
  // {
  //   name: "Kerry Nicks",
  //   designation: "Practice Manager",
  //   image: "/team/kerry.JPG",
  //   bioImage: "/team/kerry.JPG",
  //   imageHover: "/team/team-one-hover.avif",
  //   paras: [
  //     "Kerry ensures NUYU’s day-to-day operations run smoothly, coordinating the team and overseeing patient experience.",
  //     "Kerry plays a key role in ensuring NUYU operates smoothly, efficiently, and with a seamless patient experience. With a strong focus on organisation and coordination, she works closely with the team to keep everything running effortlessly behind the scenes.",
  //     "She is dedicated to creating a well-structured and welcoming environment, ensuring that patients feel supported from the moment they step through the doors. Whether managing daily workflows, assisting with scheduling, or supporting the team in delivering exceptional care, Kerry ensures that every detail is taken care of with precision and care.",
  //     "Her approachable nature and commitment to efficiency and patient experience make her an integral part of NUYU, where excellence in service is just as important as excellence in dentistry.",
  //   ],
  // },
];
export const TOTAL_MEMBERS = [
  {
    heading: "Guest Experience & Clinical Care Support Team",
    para: "Get to know our one-of-a-kind team that will guide and support you on your smile journey",
    members: [
      // {
      //   name: "Sarah Buffin",
      //   designation: "Patient Concierge",
      //   image: "/team/sarah.webp",
      //   bioImage: "/team/sarah.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Sarah ensures every patient’s visit begins with warmth and effortless service. With a background in childcare and coordination, she creates a welcoming atmosphere where patients feel valued and at ease.",
      //     "With a warm and welcoming approach, Sarah is one of the first friendly faces you’ll meet at NUYU. With a background in childcare and team coordination, she has developed exceptional communication, problem-solving, and organisational skills, making her a natural at ensuring every patient’s experience feels effortless.",
      //     "Sarah thrives on creating positive connections and making sure patients feel comfortable from the moment they arrive. Whether she’s welcoming guests, assisting with scheduling, or providing a seamless guest experience, her attention to detail and ability to anticipate patient needs make her an essential part of NUYU’s concierge team.",
      //     "Her passion for providing exceptional service ensures that every visit begins with a warm greeting and a smooth, enjoyable experience.",
      //   ],
      // },
      // {
      //   name: "Samantha Gardner",
      //   designation: "Patient Concierge",
      //   image: "/team/sam.webp",
      //   bioImage: "/team/sam.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "With a background in luxury customer service, Samantha is devoted to creating personalised experiences for every guest. Her meticulous attention to detail ensures each patient’s visit is smooth, comfortable, and enjoyable.",
      //     "With a background in luxury customer service and guest experience, Samantha ensures every visit to NUYU begins with a warm welcome and seamless support. Having worked in high-end hospitality and client-focused roles, she understands the importance of creating an environment where patients feel valued and cared for.",
      //     "Her experience in delivering tailored service and personalised care allows her to anticipate guest needs, provide a smooth and enjoyable visit, and create an atmosphere of ease and professionalism. Whether she’s greeting guests, coordinating appointments, or offering refreshments at NUYU’s coffee bar, her attention to detail and warm approach make her an integral part of the patient experience.",
      //     "Her passion for delivering exceptional service ensures that every interaction at NUYU is welcoming, effortless, and truly memorable.",
      //   ],
      // },
      // {
      //   name: "Georgina Ireland",
      //   designation: "Patient Concierge",

      //   image: "/team/geogie-ireland.webp",
      //   bioImage: "/team/geogie-ireland.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Georgina brings a wealth of experience in guest services and patient care, ensuring that NUYU’s concierge service feels as seamless and refined as the treatments themselves.",
      //     "Georgina is dedicated to creating a seamless and welcoming experience for every patient at NUYU. With a strong background in guest services, administration, and patient care, she is passionate about ensuring that every visit feels effortless and enjoyable.",
      //     "Her experience in private healthcare and aesthetics settings has given her a deep understanding of the importance of clear communication, attention to detail, and personalised service. Whether she’s welcoming guests, coordinating appointments, or providing guidance throughout their visit, Georgina’s warm approach ensures patients feel at ease from the moment they arrive.",
      //     "With an eye for organisation and a natural ability to connect with people, Georgina plays a vital role in delivering the elevated, patient-first experience that sets NUYU apart.",
      //   ],
      // },
      {
        name: "Ellie Cooke",
        designation: "Clinical Care Coordinator",
        gdc: "294401",
        image: "/team/elie.JPG",
        bioImage: "/team/ellie.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Ellie brings a standout mix of clinical expertise and genuine, feel-good energy to NUYU. With six years of experience supporting patients in both surgical and digital-led environments, she’s known for her ability to make complex treatments feel easy to understand and even easier to navigate.",
          "She’s trained internationally in radiography, sedation, CBCT, intraoral scanning, and photogrammetry, and previously led implant care as Head Nurse in a high-tech implant clinic. Ellie blends advanced skill with a naturally warm and upbeat personality, making her someone patients immediately feel comfortable with.",
          "When she’s not delivering world-class coordination, she’s outdoors running or catching up on the latest series—bringing that same energetic balance into every interaction.",
        ],
      },
      {
        name: "Chelsea Meats",
        designation: "Clinical Care Coordinator",
        gdc: "297077",
        image: "/team/chelsea.webp",
        bioImage: "/team/chelsea.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Chelsea combines genuine warmth with razor-sharp clinical focus, making her a reassuring and relatable presence at every stage of care. With seven years of experience in general dentistry, orthodontics, and sedation, she’s confident, capable, and highly tuned in to what patients need to feel comfortable and informed.",
          "She’s completed advanced training in radiography and sedation, and her calm clarity helps patients feel grounded and cared for—even during more complex treatments. Chelsea brings a cool, unforced confidence to the NUYU experience, where everything feels smooth, but never routine.",
          "She’s most at home outdoors with her two dogs, or catching up with friends—which speaks to her easygoing charm and strong sense of connection, both in and out of clinic.",
        ],
      },
      {
        name: "Ellen Nokes",
        designation: "Concierge & Clinical Care Support",
        gdc: "312182",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "With her outgoing personality and contagious smile, Ellen Nokes is part of NUYU’s concierge team. Drawing on her clinical background as a dental nurse, she combines warmth and reassurance with the ability to support and coordinate patient care when needed.",
          "With a naturally outgoing personality and a contagious smile, Ellen brings warmth and positivity to every patient interaction. As part of NUYU’s concierge team, she creates a welcoming atmosphere from the moment patients arrive, making sure their experience feels smooth, relaxed, and personal.",
          "Alongside her concierge role, Ellen is also a qualified dental nurse with experience in general, sedation, and specialist dentistry. This clinical background allows her to bridge both patient care and coordination, giving patients extra reassurance as she guides them through their appointments.",
          "Whether she is arranging visits, supporting clinicians, or simply sharing a kind word in the lounge, Ellen is dedicated to helping every patient feel comfortable and cared for. Outside of NUYU, she enjoys running, fitness, and spending time outdoors with her dog, Millie.",
        ],
      },
      {
        name: "Bethany Adkins",
        designation: "Dental Nurse",
        gdc: "310629",
        image: "/team/beth.webp",
        bioImage: "/team/beth.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Bethany’s friendly and reassuring nature makes her an integral part of the clinical team, assisting in a range of treatments from implants to smile transformations.",
          "Warm, approachable, and highly skilled, Bethany is dedicated to making every visit to NUYU as comfortable and reassuring as possible. A qualified dental nurse since 2023, she has assisted in a wide range of treatments, from implants and Invisalign<sup>®</sup> to surgical procedures and smile transformations.",
          "Her passion for patient care goes beyond the clinic—Bethany has traveled the world, volunteering in orphanages and schools, teaching, and coaching young athletes. These experiences have shaped her ability to connect with people from all walks of life, making her an invaluable part of the NUYU team.",
          "At NUYU, Bethany ensures that every treatment is delivered with precision, warmth, and attention to detail, helping patients feel at ease every step of the way.",
        ],
      },
      {
        name: "Cerys Redfern",
        designation: "Dental Nurse",
        gdc: "311900",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Cerys Redfern is a qualified dental nurse with a passion for 3D printing and digital dentistry. Friendly and supportive, she enjoys helping patients feel at ease while being part of advanced treatments that transform smiles.",
          "Cerys is a qualified dental nurse with a strong interest in the digital side of modern dentistry. At NUYU she plays an active role in supporting advanced treatments, with a particular enthusiasm for 3D printing and new technologies that enhance patient care.",
          "Her approachable nature and attentive style mean patients feel supported throughout their visits, whether it’s for everyday dentistry or more complex procedures. Cerys takes pride in making sure every appointment feels calm, comfortable, and well-organised.",
          "What excites her most is seeing how technology and teamwork come together to transform smiles. For Cerys, being part of those results — from digital planning to the final reveal — is the most rewarding part of her role.",
        ],
      },
      {
        name: "Ruby Soule",
        designation: "Dental Nurse",
        // gdc: "311900",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Ruby Soule qualified as a dental nurse before the age of 18. She brings warmth, maturity, and dedication to NUYU, supporting patients across general, cosmetic, orthodontic, and implant dentistry.",
          "Ruby qualified as a dental nurse before turning 18, showing dedication and maturity well beyond her years. Since then, she has gained experience across general dentistry, cosmetic treatments, orthodontics, and implant procedures, always with a focus on supporting patients with care and attention.",
          "Her warm personality and calm approach help patients feel comfortable from the moment they meet her. Ruby takes pride in guiding people through their appointments, making each stage of treatment feel smooth and reassuring.",
          "For Ruby, the most rewarding part of her role is building trust and seeing the confidence that comes when patients feel happy with their smile.",
        ],
      },
      {
        name: "Victoria Bennett",
        designation: "Dental Nurse",
        gdc: "327403",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Victoria Bennett is a qualified dental nurse with experience in general, cosmetic, implant, and Invisalign care. Friendly and approachable, she is passionate about supporting patients and helping them feel confident in their smiles.",
          "Victoria is a qualified and experienced dental nurse with a strong background in general dentistry, implants, cosmetic treatments, and Invisalign. She has a genuine passion for patient care and is dedicated to creating a calm, welcoming environment where patients feel relaxed and supported throughout their visit.",
          "Known for her friendly and approachable nature, Victoria helps appointments run smoothly and comfortably from start to finish. She takes pride in guiding patients through their treatments, whether it’s a simple procedure or a full smile makeover.",
          "For Victoria, the most rewarding part of her role is seeing the confidence that comes when patients leave with a smile they truly love.",
        ],
      },
      // {
      //   name: "Jennifer Bassett",
      //   designation: "Dental Nurse",
      //   gdc: "282274",
      //   image: "/team/jenny.webp",
      //   bioImage: "/team/jenny.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Jenny’s experience in both general and digital workflows allows her to support high-tech treatments while keeping patient comfort a priority.",
      //     "Jenny is a highly experienced dental nurse with a passion for precision, patient care, and advanced technology in dentistry. With years of experience assisting in both general and digital workflows, she has worked alongside dentists in orthodontics, restorative care, and clear aligner treatments.",
      //     "Beyond her clinical expertise, Jenny has a strong creative background in hairdressing, which has refined her attention to detail and ability to make patients feel at ease. She brings a calm, welcoming presence to every appointment, ensuring that patients feel comfortable and confident throughout their treatment.",
      //     "At NUYU, Jenny plays a key role in supporting state-of-the-art digital dentistry, working with 3D scanners, laser technology, and precision-driven treatment planning. Whether assisting in complex procedures or guiding patients through their visit, she is committed to making every experience as seamless as possible.",
      //   ],
      // },

      {
        name: "Sienna Mayo",
        designation: "Trainee Dental Nurse",
        title: "Dr Natalia Agalakova | Cosmetic Dentist",
        description: "Dr Natalia Agalakova | Cosmetic Dentist",
        image: "/team/sienna.webp",
        bioImage: "/team/sienna.webp",
        imageHover: "/team/sienna.webp",
        paras: [
          "Sienna is developing her clinical skills while assisting in a variety of treatments, ensuring a supportive and smooth experience for every patient.",
          "Sienna is developing her clinical skills while assisting in a variety of treatments, ensuring a supportive and smooth experience for every patient. She is passionate about patient care and is committed to providing a welcoming and reassuring presence in the clinic.",
          "At NUYU Dental & Aesthetics, Sienna plays an important role in supporting both the clinical team and patients, ensuring treatments are delivered with efficiency and care while continuing to grow her knowledge in modern dentistry.",
        ],
      },
    ],
  },
  {
    heading: "Clinical Team",
    para: "Get to know our clinical team who are committed to putting you at ease and delivering you the very best dentistry",
    members: [
      {
        name: "Dr Alex Eremia",
        title: "Dr Alex Eremia | Dentist & Orthodontics at NUYU Dental & Aesthetics",
        description: "Meet Dr Alex Eremia at NUYU Dental & Aesthetics. Dentist with a special interest in orthodontics, offering braces and everyday dental care for children, teens, and adults.",
        designation: "Dentist with a Special Interest in Orthodontics",
        gdc: "279510",
        image: "/team/alex.webp",
        bioImage: "/team/alex.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Alex offers both everyday dentistry and orthodontic treatments, offering metal and ceramic braces for children, teenagers, and adults.",
          "Dr Alex Eremia provides both everyday dentistry and orthodontic care, with a special interest in braces for adults, teenagers, and children. He offers metal and ceramic braces to improve alignment, function, and bite correction, ensuring long-term stability and a well-balanced smile.",
          "With a warm but results-driven approach, Alex is committed to helping patients and parents make informed choices about orthodontic care. Whether guiding a young patient through their first braces appointment or helping an adult achieve the smile they’ve always wanted, he ensures that every treatment plan is tailored to individual needs.",
          "At NUYU, Alex blends comprehensive dentistry with orthodontics, providing high-quality care that supports both dental health and aesthetics for patients of all ages.",
        ],
        buttons: [
          {
            name: "Read More",
            link: "/about-us/team/dr-alex-eremia",
          },
        ],
      },
      // {
      //   name: "Dr Toby Mitchell-Innes",
      //   designation: "Dentist",
      //   gdc: "264511",
      //   image: "/team/default.webp",
      //   bioImage: "/team/default.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Toby provides comprehensive dental care with a focus on sedation dentistry, helping nervous patients feel comfortable with both inhalation and IV sedation.",
      //     "Dr Toby Mitchell-Innes provides comprehensive dental care with a strong focus on patient comfort and sedation dentistry. He is passionate about making dental visits easier for those who feel anxious, offering both inhalation and intravenous (IV) sedation to help patients feel at ease during treatment.",
      //     "With experience in oral surgery, restorative care, and working with nervous patients, Toby takes a calm and reassuring approach, ensuring that every patient feels heard and supported. Whether performing routine treatments, extractions, or advanced restorative care, his focus is always on delivering high-quality care with a patient-first mindset.",
      //     "At NUYU, Toby plays an integral role in making dentistry more accessible and comfortable, helping patients regain confidence in their smiles while ensuring their experience is as smooth and relaxed as possible.",
      //   ],
      // },
      {
        name: "Dr Goce Gigovski",
        title: "Dr Goce Gigovski | Dentist in Cheltenham | NUYU Dental & Aesthetics",
        description: "Meet Dr Goce Gigovski at NUYU Denta l& Aesthetics, Cheltenham. With 15+ years’ experience, he specialises in restorative dentistry, root canal therapy & everyday care.",
        designation: "Dentist",
        gdc: "287637",
        image: "/team/goce.webp",
        bioImage: "/team/goce.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Dr Goce Gigovski brings over 15 years of private practice experience to NUYU, having worked across the UK and internationally. Originally based in Wales and now settled in Cheltenham, he’s known for his calm approach, attention to detail, and commitment to high-quality everyday dentistry.",
          "He provides a full range of care, with a particular focus on restorative treatments and root canal therapy, creating results that are both functional and natural in appearance. With a foundation that began in clinical dental technology, Goce brings an additional layer of precision and aesthetic understanding to his work—refined further through regular advanced training in modern techniques and materials.",
          "Patients value his kind, reassuring manner and his clear, thoughtful explanations at every stage of treatment. Alongside routine care, he also offers support for emergency dental appointments where prompt, considered attention is needed.",
          "At NUYU, Goce focuses on delivering everyday care with a high standard of detail, empathy, and patient confidence.",
        ],
        buttons: [
          {
            name: "Read More",
            link: "/about-us/team/dr-goce-gigovski",
          },
        ],
      },
      {
        name: "Dr Shazia Parveen",
        designation: "Everyday & Cosmetic Dentist",
        title: "Dr Shazia Parveen  Cosmetic & Everyday Dentist | NUYU Dental & Aesthetics",
        description: "Meet Dr Shazia Parveen at NUYU Dental & Aesthetics. Gentle, precise dentist specialising in Invisalign®, smile makeovers, veneers & facial aesthetics in Hereford.",
        gdc: "265195",
        image: "/team/dr-shazia.webp",
        bioImage: "/team/dr-shazia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Cosmetic and general dentist known for her gentle manner and meticulous eye, blending everyday care with beautifully balanced smile transformations and facial aesthetics.",
          "Thoughtful, intuitive and effortlessly precise, Dr Shazia Parveen brings a calm confidence to every smile she transforms at NUYU.",
          "Her work is defined by balance. Technical accuracy with a lightness of touch. Cosmetic enhancement that respects natural beauty. And results that feel like you, only brighter. With a background in advanced surgical, restorative and aesthetic dentistry, Shazia blends everyday care with Invisalign, smile makeovers and facial aesthetics that lift more than just your features — they elevate how you carry yourself.",
          "Patients love her for her gentle manner, meticulous eye for detail and how easy she is to talk to. She’s the kind of clinician who makes you feel instantly at ease, and whose results speak quietly but confidently.",
          "For a closer look at her style and signature cases, explore <a href='https://www.instagram.com/dr.shazia.parveen/' target='_blank'>‌@dr.shazia.parveen</a>",
          "At NUYU, she’s a seamless fit, blending clinical excellence with warmth, artistry and an instinct for what makes a smile feel truly yours.",
        ],
        buttons: [
          {
            name: "Read More",
            link: "/about-us/team/dr-shazia-parveen",
          },
        ],
      },
      {
        name: "Dr Tinashe Nhova",
        title: "Dr. Tinashe Nhova Cosmetic Restorative Dentist | NUYU Dental & Aesthetics",
        description: "Meet Dr. Tinashe Nhova, Cosmetic Restorative Dentist at NUYU Dental & Aesthetics. Known as The Smile Expert, he creates natural smiles with Invisalign®, bonding & veneers.",
        designation: "Cosmetic Restorative Dentist",
        gdc: "244846",
        image: "/team/tinashe-blank.webp",
        bioImage: "/team/tinashe-blank.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Dr. Tinashe Nhova is a Cosmetic Restorative Dentist with a gentle touch and an easy-going style. Known as The Smile Expert, he creates natural, confident smiles with Invisalign, bonding, and veneers - always making the process enjoyable along the way.",
          "Gentle, calm, and always quick with a smile, Dr. Tinashe Nhova makes dental visits feel far more relaxed than most people expect. Patients often comment on how easy it is to sit back in the chair with him, as his light-hearted nature and reassuring approach make even longer treatments surprisingly enjoyable.",
          "Tinashe’s focus is on cosmetic and restorative dentistry, where he has transformed countless smiles with Invisalign, composite bonding, and veneers. His style is all about natural results delivered through the most minimally invasive techniques, creating smiles that look effortless and feel completely your own.",
          "What makes Tinashe stand out is the way he shares in the excitement of every smile reveal. Those genuine, joy-filled moments are what he loves most about his work, and they are exactly why patients look forward to seeing him.",
          "Find him on Instagram as <a class='underline' href='https://www.instagram.com/drnhova/#' target='_blank'>@‌drnhova</a>, known by many as The Smile Expert.",
        ],
      },
      // {
      //   name: "Lana Gorospe ",
      //   designation: "Aesthetic Practitioner ",
      //   nmc: "12J0887E",
      //   image: "/team/lana.webp",
      //   bioImage: "/team/lana.webp",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Lana is NUYU’s lead facial aesthetics provider, offering expert-led treatments that blend the latest advancements in aesthetics with a results-driven approach.",
      //     "As the lead facial aesthetics provider at NUYU Dental & Aesthetics, Lana  brings a refined, expert-led approach to non-surgical enhancements. With a background as a medical nurse prescriber, she combines technical skill with the latest trends in aesthetics, offering treatments designed to refresh, enhance, and define facial features with confidence.",
      //     "Lana stays at the forefront of aesthetic advancements, delivering treatments that range from subtle refinements to transformative enhancements, depending on each patient’s vision. Known for her keen eye for detail and dynamic approach, she ensures that every treatment is tailored to complement facial balance while embracing modern techniques that shape the future of aesthetics.",
      //     "At NUYU, Lana provides high-end aesthetic treatments in a setting designed for luxury and expertise, making cutting-edge facial rejuvenation both accessible and innovative.",
      //   ],
      //   buttons: [
      //     {
      //       name: "Facial Aesthetic Treatments",
      //       link: "/",
      //     },
      //   ],
      // },
      {
        name: "Imogen Johnson",
        title: "Dr Natalia Agalakova | Cosmetic Dentist",
        description: "Dr Natalia Agalakova | Cosmetic Dentist",
        designation: "Dental Therapist",
        gdc: "303048",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Imogen Johnson is the world’s first dental sports therapist and a speaker for the UK Sports Dentistry Association. At NUYU she provides restorative care, hygiene, and facial aesthetics, combining passion and artistry to help patients feel confident in both their health and appearance.",
          "Imogen is a passionate dental therapist who brings warmth, energy, and real dedication to everything she does. Patients love how she takes the time to explain, encourage, and support them, creating an atmosphere where every visit feels positive and personal.",
          "Her career has already broken new ground: after completing her MSc at University College London, Imogen became the world’s first dental sports therapist. As a speaker for the UK Sports Dentistry Association, she shares her expertise on how oral health impacts athletic performance, making her uniquely placed to care for both professional athletes and active individuals alike.",
          "At NUYU, Imogen provides restorative care, hygiene treatments, and facial aesthetics. Her approach to aesthetics is centered on natural, confidence-enhancing results, blending clinical skill with an artistic touch to help patients feel refreshed and at their best.",
          "Find her on Instagram as <a class='underline' href='https://www.instagram.com/imogenthedht/#' target='_blank' >@‌imogenthedht.</a>",
        ],
      },
      {
        name: "Rema Miah",
        title: "Dr Natalia Agalakova | Cosmetic Dentist",
        description: "Dr Natalia Agalakova | Cosmetic Dentist",
        designation: "Hygienist",
        gdc: "277284",
        image: "/team/rema.webp",
        bioImage: "/team/rema.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Rema Miah is dedicated to helping patients achieve and maintain optimal oral health, providing expert hygiene care with a focus on prevention, education, and gentle treatment techniques",
          "She believes that a healthy smile is the foundation of confidence and works closely with patients to tailor care routines that support long-term dental wellness.",
          "With a calm and encouraging approach, Rema ensures that every visit is a positive experience, whether she’s providing a thorough clean, offering gum health advice, or guiding patients on the best ways to care for their smile at home. Her focus on comfort and education makes her a trusted partner in helping patients keep their teeth and gums healthy for life.",
          "At NUYU, Rema plays a key role in preventative care, ensuring that patients not only leave with a fresher, cleaner smile but also with the knowledge and confidence to maintain it.",
        ],
      },
    ],
  },
  {
    heading: "Leadership Team",
    para: "Get to know the team leading NUYU's vision to ensure you have both the very best care and the very best experience",
    members: [
      {
        name: "Dr Natalia Agalakova",
        title: "Dr Natalia Agalakova - Lead Implant & Cosmetic Dentist | NUYU Dental & Aesthetics",
        description: "Meet Dr Natalia Agalakova, Director at NUYU Dental & Aesthetics. Expert in implants, cosmetic dentistry, and smile transformations with advanced techniques.",
        designation: "Director & Lead Implant & Cosmetic Dentist ",
        gdc: "100225",
        image: "/team/natalia.webp",
        bioImage: "/team/natalia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Natalia has an expertise in implants and cosmetic dentistry, ensuring every treatment is designed with both precision and artistry.",
          "Dr Natalia Agalakova combines precision with an artistic approach to implant and cosmetic dentistry, creating natural, confident smiles through advanced techniques. As co-founder and director of NUYU Dental & Aesthetics, she has helped shape a practice where innovation, patient experience, and world-class dentistry come together seamlessly.",
          "Recognised for her skills in smile transformations, she has been awarded SmileFast Centre of Excellence status and is part of the SmileFast Clinical & Lecture Team, sharing her expertise with fellow dentists. Her commitment to advancing modern implantology has also led her to publish a case report with Straumann, further highlighting her dedication to precision-led treatment planning.",
          "Dr Natalia’s extensive postgraduate training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics ensures that every treatment is grounded in both science and artistry. She is passionate about digital workflows to enhance precision and predictability, allowing for meticulously planned treatments that deliver outstanding results. While she focuses on implants and composite bonding, she continues to enjoy all aspects of everyday dentistry, providing patients with high-quality, beautifully planned care at every stage of their treatment.",
          "At NUYU, Dr Natalia leads with a vision for modern, patient-focused dentistry, where expertise and innovation come together to create exceptional, long-lasting smiles in a space designed for comfort and care.",
        ],
        buttons: [
          {
            name: "Read More",
            link: "/about-us/team/dr-natalia-agalakova",
          },
        ],
      },

      {
        name: "Dr Naiz Khan",
        title: "Dr Naiz Khan | Cosmetic Dentist & Invisalign® Diamond Apex Provider",
        description: "Dr. Naiz Khan, a Diamond Apex Invisalign® provider at NUYU Dental, specialises in smile makeovers and clear aligners. With 15+ years of experience, he offers personalised care to enhance your smile and boost confidence.",
        designation: "Director & Diamond Apex Invisalign<sup>®</sup> Provider ",
        image: "/team/naiz.webp",
        bioImage: "/team/niaz.webp",
        gdc: "101469",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "A leading Invisalign<sup>®</sup> provider, Naiz has transformed thousands of smiles and is the visionary behind NUYU’s experience-led approach.",
          "Dr Naiz Khan is the visionary behind NUYU Dental & Aesthetics, shaping it into a place where patients don’t just visit the dentist, they experience a new standard of care. As a Diamond Apex Invisalign<sup>®</sup> Provider—placing him in the top 1% of Invisalign<sup>®</sup> providers worldwide—he has helped thousands of patients achieve beautifully aligned smiles with a precise, results-driven approach.",
          "With a natural charm and a quick-witted sense of humor, Dr Naiz makes every patient feel comfortable and at ease. He brings a lighthearted yet expert touch to every treatment, ensuring that patients not only achieve the best results but actually enjoy the journey.",
          "His influence in dentistry extends beyond patient care—having worked as a Clinical Dental Advisor for the UK’s largest dental group, he played a key role in introducing innovative treatment concepts that have since become industry standards.",
          "At NUYU, his focus goes beyond straightening teeth; he has designed the practice to feel effortless, welcoming, and unlike any traditional dental visit. Every detail reflects his commitment to modern, patient-first dentistry, ensuring that Invisalign<sup>®</sup> treatment is not just transformative, but an experience in itself.",
          "Connect with Dr Naiz on Instagram <a href='https://www.instagram.com/drnaiz/' style='text-decoration: underline'> @drnaiz </a>, where he showcases real Invisalign<sup>®</sup> journeys and smile transformation.",
        ],
        buttons: [
          {
            name: "Read More",
            link: "/about-us/team/dr-naiz-khan",
          },
        ],
      },
      // {
      //   name: "Kerry Nicks",
      //   designation: "Practice Manager",
      //   image: "/team/kerry.JPG",
      //   bioImage: "/team/kerry.JPG",
      //   imageHover: "/team/team-one-hover.avif",
      //   paras: [
      //     "Kerry ensures NUYU’s day-to-day operations run smoothly, coordinating the team and overseeing patient experience.",
      //     "Kerry plays a key role in ensuring NUYU operates smoothly, efficiently, and with a seamless patient experience. With a strong focus on organisation and coordination, she works closely with the team to keep everything running effortlessly behind the scenes.",
      //     "She is dedicated to creating a well-structured and welcoming environment, ensuring that patients feel supported from the moment they step through the doors. Whether managing daily workflows, assisting with scheduling, or supporting the team in delivering exceptional care, Kerry ensures that every detail is taken care of with precision and care.",
      //     "Her approachable nature and commitment to efficiency and patient experience make her an integral part of NUYU, where excellence in service is just as important as excellence in dentistry.",
      //   ],
      // },
    ],
  },
];
export const INVIS_MEMBERS = [
  {
    heading: "Meet Your Invisalign® Dentists",
    members: [
      {
        name: "Dr Naiz Khan",
        designation: "Director & Diamond Apex Invisalign<sup>®</sup> Provider ",
        image: "/team/naiz.webp",
        bioImage: "/team/niaz.webp",
        gdc: "101469",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "A leading Invisalign<sup>®</sup> provider, Naiz has transformed thousands of smiles and is the visionary behind NUYU’s experience-led approach.",
          "Dr Naiz Khan is the visionary behind NUYU Dental & Aesthetics, shaping it into a place where patients don’t just visit the dentist, they experience a new standard of care. As a Diamond Apex Invisalign<sup>®</sup> Provider—placing him in the top 1% of Invisalign<sup>®</sup> providers worldwide—he has helped thousands of patients achieve beautifully aligned smiles with a precise, results-driven approach.",
          "With a natural charm and a quick-witted sense of humor, Dr Naiz makes every patient feel comfortable and at ease. He brings a lighthearted yet expert touch to every treatment, ensuring that patients not only achieve the best results but actually enjoy the journey.",
          "His influence in dentistry extends beyond patient care—having worked as a Clinical Dental Advisor for the UK’s largest dental group, he played a key role in introducing innovative treatment concepts that have since become industry standards.",
          "At NUYU, his focus goes beyond straightening teeth; he has designed the practice to feel effortless, welcoming, and unlike any traditional dental visit. Every detail reflects his commitment to modern, patient-first dentistry, ensuring that Invisalign<sup>®</sup> treatment is not just transformative, but an experience in itself.",
          "Connect with Dr Naiz on Instagram <a href='https://www.instagram.com/drnaiz/' style='text-decoration: underline'> @drnaiz </a>, where he showcases real Invisalign<sup>®</sup> journeys and smile transformation.",
        ],
        buttons: [
          {
            name: "Invisalign® at NUYU",
            link: "/invisalign",
          },
        ],
      },
      {
        name: "Dr Shazia Parveen",
        designation: "Everyday & Cosmetic Dentist",
        gdc: "265195",
        image: "/team/dr-shazia.webp",
        bioImage: "/team/dr-shazia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Cosmetic and general dentist known for her gentle manner and meticulous eye, blending everyday care with beautifully balanced smile transformations and facial aesthetics.",
          "Thoughtful, intuitive and effortlessly precise, Dr Shazia Parveen brings a calm confidence to every smile she transforms at NUYU.",
          "Her work is defined by balance. Technical accuracy with a lightness of touch. Cosmetic enhancement that respects natural beauty. And results that feel like you, only brighter. With a background in advanced surgical, restorative and aesthetic dentistry, Shazia blends everyday care with Invisalign, smile makeovers and facial aesthetics that lift more than just your features — they elevate how you carry yourself.",
          "Patients love her for her gentle manner, meticulous eye for detail and how easy she is to talk to. She’s the kind of clinician who makes you feel instantly at ease, and whose results speak quietly but confidently.",
          "For a closer look at her style and signature cases, explore <a href='https://www.instagram.com/dr.shazia.parveen/' target='_blank'>‌@dr.shazia.parveen</a>",
          "At NUYU, she’s a seamless fit, blending clinical excellence with warmth, artistry and an instinct for what makes a smile feel truly yours.",
        ],
      },
      {
        name: "Dr Alex Eremia",
        designation: "Dentist with a Special Interest in Orthodontics",
        gdc: "279510",
        image: "/team/alex.webp",
        bioImage: "/team/alex.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Alex offers both everyday dentistry and orthodontic treatments, offering metal and ceramic braces for children, teenagers, and adults.",
          "Dr Alex Eremia provides both everyday dentistry and orthodontic care, with a special interest in braces for adults, teenagers, and children. He offers metal and ceramic braces to improve alignment, function, and bite correction, ensuring long-term stability and a well-balanced smile.",
          "With a warm but results-driven approach, Alex is committed to helping patients and parents make informed choices about orthodontic care. Whether guiding a young patient through their first braces appointment or helping an adult achieve the smile they’ve always wanted, he ensures that every treatment plan is tailored to individual needs.",
          "At NUYU, Alex blends comprehensive dentistry with orthodontics, providing high-quality care that supports both dental health and aesthetics for patients of all ages.",
        ],
        buttons: [
          {
            name: "Braces & Orthodontics at NUYU",
            link: "/treatments/straighten-align",
          },
        ],
      },
      {
        name: "Dr Natalia Agalakova",
        designation: "Director & Lead Implant & Cosmetic Dentist ",
        gdc: "100225",
        image: "/team/natalia.webp",
        bioImage: "/team/natalia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Natalia has an expertise in implants and cosmetic dentistry, ensuring every treatment is designed with both precision and artistry.",
          "Dr Natalia Agalakova combines precision with an artistic approach to implant and cosmetic dentistry, creating natural, confident smiles through advanced techniques. As co-founder and director of NUYU Dental & Aesthetics, she has helped shape a practice where innovation, patient experience, and world-class dentistry come together seamlessly.",
          "Recognised for her skills in smile transformations, she has been awarded SmileFast Centre of Excellence status and is part of the SmileFast Clinical & Lecture Team, sharing her expertise with fellow dentists. Her commitment to advancing modern implantology has also led her to publish a case report with Straumann, further highlighting her dedication to precision-led treatment planning.",
          "Dr Natalia’s extensive postgraduate training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics ensures that every treatment is grounded in both science and artistry. She is passionate about digital workflows to enhance precision and predictability, allowing for meticulously planned treatments that deliver outstanding results. While she focuses on implants and composite bonding, she continues to enjoy all aspects of everyday dentistry, providing patients with high-quality, beautifully planned care at every stage of their treatment.",
          "At NUYU, Dr Natalia leads with a vision for modern, patient-focused dentistry, where expertise and innovation come together to create exceptional, long-lasting smiles in a space designed for comfort and care.",
        ],
        buttons: [
          {
            name: "Dental Implants at NUYU",
            link: "/implants",
          },
          {
            name: "Composite Bonding at NUYU",
            link: "/cosmetic-dentistry",
          },
        ],
      },
      {
        name: "Dr. Tinashe Nhova",
        designation: "Cosmetic Restorative Dentist",
        gdc: "244846",
        image: "/team/tinashe.png",
        bioImage: "/team/tinashe.png",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Dr. Tinashe Nhova is a Cosmetic Restorative Dentist with a gentle touch and an easy-going style. Known as The Smile Expert, he creates natural, confident smiles with Invisalign, bonding, and veneers - always making the process enjoyable along the way.",
          "Gentle, calm, and always quick with a smile, Dr. Tinashe Nhova makes dental visits feel far more relaxed than most people expect. Patients often comment on how easy it is to sit back in the chair with him, as his light-hearted nature and reassuring approach make even longer treatments surprisingly enjoyable.",
          "Tinashe’s focus is on cosmetic and restorative dentistry, where he has transformed countless smiles with Invisalign, composite bonding, and veneers. His style is all about natural results delivered through the most minimally invasive techniques, creating smiles that look effortless and feel completely your own.",
          "What makes Tinashe stand out is the way he shares in the excitement of every smile reveal. Those genuine, joy-filled moments are what he loves most about his work, and they are exactly why patients look forward to seeing him.",
          "Find him on Instagram as <a class='underline' href='https://www.instagram.com/drnhova/#' target='_blank'>@‌drnhova</a>, known by many as The Smile Expert.",
        ],
      },
    ],
  },
];
export const KID_OTHO = [
  {
        name: "Dr Alex Eremia",
        designation: "Dentist with a Special Interest in Orthodontics",
        gdc: "279510",
        image: "/team/alex.webp",
        bioImage: "/team/alex.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Alex offers both everyday dentistry and orthodontic treatments, offering metal and ceramic braces for children, teenagers, and adults.",
          "Dr Alex Eremia provides both everyday dentistry and orthodontic care, with a special interest in braces for adults, teenagers, and children. He offers metal and ceramic braces to improve alignment, function, and bite correction, ensuring long-term stability and a well-balanced smile.",
          "With a warm but results-driven approach, Alex is committed to helping patients and parents make informed choices about orthodontic care. Whether guiding a young patient through their first braces appointment or helping an adult achieve the smile they’ve always wanted, he ensures that every treatment plan is tailored to individual needs.",
          "At NUYU, Alex blends comprehensive dentistry with orthodontics, providing high-quality care that supports both dental health and aesthetics for patients of all ages.",
        ],
        buttons: [
          {
            name: "Braces & Orthodontics at NUYU",
            link: "/treatments/straighten-align",
          },
        ],
      },
]
export const IMPLANTS_MEMBERS = [
  {
    name: "Dr Natalia Agalakova",
    designation: "Director & Lead Implant & Cosmetic Dentist ",
    gdc: "100225",
    image: "/team/natalia.webp",
    bioImage: "/team/natalia.webp",
    imageHover: "/team/team-one-hover.avif",
    paras: [
      "Natalia has an expertise in implants and cosmetic dentistry, ensuring every treatment is designed with both precision and artistry.",
      "Dr Natalia Agalakova combines precision with an artistic approach to implant and cosmetic dentistry, creating natural, confident smiles through advanced techniques. As co-founder and director of NUYU Dental & Aesthetics, she has helped shape a practice where innovation, patient experience, and world-class dentistry come together seamlessly.",
      "Recognised for her skills in smile transformations, she has been awarded SmileFast Centre of Excellence status and is part of the SmileFast Clinical & Lecture Team, sharing her expertise with fellow dentists. Her commitment to advancing modern implantology has also led her to publish a case report with Straumann, further highlighting her dedication to precision-led treatment planning.",
      "Dr Natalia’s extensive postgraduate training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics ensures that every treatment is grounded in both science and artistry. She is passionate about digital workflows to enhance precision and predictability, allowing for meticulously planned treatments that deliver outstanding results. While she focuses on implants and composite bonding, she continues to enjoy all aspects of everyday dentistry, providing patients with high-quality, beautifully planned care at every stage of their treatment.",
      "At NUYU, Dr Natalia leads with a vision for modern, patient-focused dentistry, where expertise and innovation come together to create exceptional, long-lasting smiles in a space designed for comfort and care.",
    ],
    buttons: [
      {
        name: "Dental Implants at NUYU",
        link: "/implants",
      },
      {
        name: "Composite Bonding at NUYU",
        link: "/cosmetic-dentistry",
      },
    ],
  },
]
export const COMPOSITE_MEMBERS = [
  {
    heading: "Meet Your Composite Bonding Dentists",
    members: [
      {
        name: "Dr Natalia Agalakova",
        designation: "Director & Lead Implant & Cosmetic Dentist ",
        gdc: "100225",
        image: "/team/natalia.webp",
        bioImage: "/team/natalia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Natalia has an expertise in implants and cosmetic dentistry, ensuring every treatment is designed with both precision and artistry.",
          "Dr Natalia Agalakova combines precision with an artistic approach to implant and cosmetic dentistry, creating natural, confident smiles through advanced techniques. As co-founder and director of NUYU Dental & Aesthetics, she has helped shape a practice where innovation, patient experience, and world-class dentistry come together seamlessly.",
          "Recognised for her skills in smile transformations, she has been awarded SmileFast Centre of Excellence status and is part of the SmileFast Clinical & Lecture Team, sharing her expertise with fellow dentists. Her commitment to advancing modern implantology has also led her to publish a case report with Straumann, further highlighting her dedication to precision-led treatment planning.",
          "Dr Natalia’s extensive postgraduate training in aesthetic and restorative dentistry, clinical implantology, and facial aesthetics ensures that every treatment is grounded in both science and artistry. She is passionate about digital workflows to enhance precision and predictability, allowing for meticulously planned treatments that deliver outstanding results. While she focuses on implants and composite bonding, she continues to enjoy all aspects of everyday dentistry, providing patients with high-quality, beautifully planned care at every stage of their treatment.",
          "At NUYU, Dr Natalia leads with a vision for modern, patient-focused dentistry, where expertise and innovation come together to create exceptional, long-lasting smiles in a space designed for comfort and care.",
        ],
        buttons: [
          {
            name: "Dental Implants at NUYU",
            link: "/implants",
          },
          {
            name: "Composite Bonding at NUYU",
            link: "/cosmetic-dentistry",
          },
        ],
      },
      {
        name: "Dr Shazia Parveen",
        designation: "Everyday & Cosmetic Dentist",
        gdc: "265195",
        image: "/team/dr-shazia.webp",
        bioImage: "/team/dr-shazia.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Cosmetic and general dentist known for her gentle manner and meticulous eye, blending everyday care with beautifully balanced smile transformations and facial aesthetics.",
          "Thoughtful, intuitive and effortlessly precise, Dr Shazia Parveen brings a calm confidence to every smile she transforms at NUYU.",
          "Her work is defined by balance. Technical accuracy with a lightness of touch. Cosmetic enhancement that respects natural beauty. And results that feel like you, only brighter. With a background in advanced surgical, restorative and aesthetic dentistry, Shazia blends everyday care with Invisalign, smile makeovers and facial aesthetics that lift more than just your features — they elevate how you carry yourself.",
          "Patients love her for her gentle manner, meticulous eye for detail and how easy she is to talk to. She’s the kind of clinician who makes you feel instantly at ease, and whose results speak quietly but confidently.",
          "For a closer look at her style and signature cases, explore <a href='https://www.instagram.com/dr.shazia.parveen/' target='_blank'>‌@dr.shazia.parveen</a>",
          "At NUYU, she’s a seamless fit, blending clinical excellence with warmth, artistry and an instinct for what makes a smile feel truly yours.",
        ],
      },
      {
        name: "Dr. Tinashe Nhova",
        designation: "Cosmetic Restorative Dentist",
        gdc: "244846",
        image: "/team/default.webp",
        bioImage: "/team/default.webp",
        imageHover: "/team/team-one-hover.avif",
        paras: [
          "Dr. Tinashe Nhova is a Cosmetic Restorative Dentist with a gentle touch and an easy-going style. Known as The Smile Expert, he creates natural, confident smiles with Invisalign, bonding, and veneers - always making the process enjoyable along the way.",
          "Gentle, calm, and always quick with a smile, Dr. Tinashe Nhova makes dental visits feel far more relaxed than most people expect. Patients often comment on how easy it is to sit back in the chair with him, as his light-hearted nature and reassuring approach make even longer treatments surprisingly enjoyable.",
          "Tinashe’s focus is on cosmetic and restorative dentistry, where he has transformed countless smiles with Invisalign, composite bonding, and veneers. His style is all about natural results delivered through the most minimally invasive techniques, creating smiles that look effortless and feel completely your own.",
          "What makes Tinashe stand out is the way he shares in the excitement of every smile reveal. Those genuine, joy-filled moments are what he loves most about his work, and they are exactly why patients look forward to seeing him.",
          "Find him on Instagram as <a class='underline' href='https://www.instagram.com/drnhova/#' target='_blank'>@‌drnhova</a>, known by many as The Smile Expert.",
        ],
      },
    ],
  },
];
export const PrivacyJourney = {
  headingOne: "Welcome to Your NUYU Experience",
  tag: "HOME > PATIENT JOURNEY",
  headingTwo: "With you at every step.",
  description: `Welcome to a new era of dentistry at NUYU Dental & Aesthetics—where advanced technology meets bespoke care in a beautifully designed space that ensures your comfort.<br/><br/>

  From comprehensive consultations enhanced by AI-driven diagnostics to precisely planned treatments in cosmetic dentistry, implants, and smile transformations, every step is designed to give you a smile you can trust, love, and feel confident in. We’re redefining your modern dental care experience with expertise and innovation.<br/><br/>
  
  Advanced dentistry, bespoke care - experience NUYU today.`,
  buttonText: "Schedule Your Consultation Today",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const MainVersion3 = {
  headingOne: "Your Smile, Our Passion",
  headingTwo: "Designed with Digital Precision",
  description: `Welcome to a new era of dentistry at NUYU Dental & Aesthetics, where advanced technology meets bespoke care in a beautifully designed space that ensures your comfort.<br/><br/>

  From comprehensive consultations enhanced by AI-driven diagnostics to precisely planned treatments in cosmetic dentistry, implants, and smile transformations, every step is designed to give you a smile you can trust, love, and feel confident in. We’re redefining your modern dental care experience with knowledge and innovation.<br/><br/>
  
  Advanced dentistry, bespoke care - experience NUYU today.`,
  buttonText: "Schedule Your Consultation Today",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
  flowerImage: true,
  // imageSrc: "/header-image.webp",
};
export const MainVersion3Video = {
  headingOne: "Your Smile, Our Passion",
  headingTwo: "Designed with Digital Precision",
  description: `Welcome to a new era of dentistry at NUYU Dental & Aesthetics, where advanced technology meets bespoke care in a beautifully designed space that ensures your comfort.<br/><br/>Whether you’re searching for a private dentist near me taking new patients or simply looking to enhance your smile, we’re here to help.<br/><br/>

  From comprehensive consultations enhanced by AI-driven diagnostics to precisely planned treatments in cosmetic dentistry, implants, and smile transformations, every step is designed to give you a smile you can trust, love, and feel confident in. We’re redefining your modern dental care experience with knowledge and innovation.<br/><br/>
  
  Advanced dentistry, bespoke care - experience NUYU today.`,
  buttonText: "Schedule Your Consultation Today",
  buttonHref: "/contact-us",
  image: "/edited-nat-and-caris.webp",
  flowerImage: true,
  // imageSrc: "/header-image.webp",
};
export const INVISALIGN_HEADER = {
  headingone2: "Invisalign Dentist Cheltenham",
  headingtwo2:
    "Confidence Redefined with Invisalign® – Clear, Simple, Beautiful",
  tag: "HOME > Treatments > Invisalign® & clear aligners",
  description: `At NUYU in Cheltenham, we’re proud to offer these revolutionary orthodontic treatments to help you attain your best smile. Our specialist team provides expert care using cutting-edge aligner technology to straighten your teeth discreetly and comfortably. With a personalised treatment plan, you’ll enjoy exceptional results that look natural and beautiful.`,
  buttonText:
    "Experience the confidence of a beautifully aligned smile today at NUYU",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
};
export const Terms_OF_USE = {
  headingOne: "Terms of Use",
  image: "/header-image-v3.webp",
};
export const Complaints_Policy = {
  headingOne: "Complaints Policy",
  image: "/header-image-v3.webp",
};
export const Privacy_Policy = {
  headingOne: "Privacy & Cookie Policy",
  image: "/header-image-v3.webp",
};
export const FEES_HEADER = {
  headingOne:
    "Fair, Transparent Pricing at NUYU Cheltenham — No Surprises, Just Exceptional Care",
  description: `At NUYU in Cheltenham, we believe that top-quality dental care should be accessible to everyone, which is why we are committed to fair and transparent pricing. We provide clear cost breakdowns with no hidden fees, ensuring you can make informed decisions about your treatment. Our goal is to make exceptional dentistry affordable, so you never have to compromise on your oral health. To help with this, we offer flexible payment options, including plans that allow you to spread the cost of your treatment. Whether it’s routine care or advanced procedures, we are dedicated to providing high-quality, patient-centred dentistry that fits your budget.`,
  buttonText: "Book a consultation",
  buttonHref: "/",
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const KIDS_HEADER = {
  headingone2:
    "Private Orthodontic - Children’s Braces & Teeth Straightening Cheltenham",
  headingtwo2: "Achieve Your Perfect Smile with Fixed Braces at NUYU Dental",
  tag: "HOME > Treatments > Invisalign® & clear aligners",
  description: `If you're dealing with orthodontic concerns such as crooked, twisted, gapped, or overlapping teeth, or if your bite alignment needs correction, fixed braces could be the ideal solution for you. At NUYU Dental in Cheltenham, our expert orthodontic team offers personalised treatment using both metal and ceramic braces, designed to transform your child’s smile beautifully and effectively. With our dedicated care, they can look forward to a healthy, confident smile they’ll love to share.`,
  // buttonText:
  //   "Experience the confidence of a beautifully aligned smile today at NUYU.",
  // buttonHref: "/",
  image: "/header-image-v3.webp",
};
export const INVISALIGN_TOP_THREE_CARDS = [
  {
    title: "Get started on your journey to a perfect smile",
    btnText: "BOOK YOUR CONSULTATION TODAY",
    btnHref: "/contact-us",
  },
  {
    title: "Ask about our patient finance options",
    btnText: "SMILE STRAIGHTENING MADE SIMPLE",
    btnHref:
      "https://app.practihealth.co.uk/finance-promo?id=f154c83a-faf9-4161-b33a-759e7be0d10b",
  },
  {
    title: "See our smile transformations",
    btnText: "SMILE SUCCESS STORIES",
    btnHref: "/patient-stories",
  },
];
export const KIDS_TOP_THREE_CARDS = [
  {
    title: "Book Your Consultation Today",
    btnText: "Book a consultation",
    btnHref: "/contact-us",
  },
  {
    title: "Smile Straightening Made Simple",
    btnText: "Fees & payment plans",
    btnHref: "/fees",
  },
  {
    title: "Smile Success Stories",
    btnText: "Smile gallery",
    btnHref: "/",
  },
];
export const WHAT_IS_INVISALIGN = {
  heading: "Enhance Your Smile with Invisalign®?",
  para: `Invisalign<sup>®</sup> is a world-renowned clear aligner system designed to <a class='font-bold' href='/treatments/straighten-align'>straighten teeth</a> with precision and comfort. Using nearly invisible, removable trays made from transparent material, Invisalign<sup>®</sup> gradually moves your teeth into their optimal alignment without the need for traditional braces.<br/><br/>
  This innovative treatment offers a fully tailored approach, with aligners customised to fit your unique dental needs. It’s a discreet and flexible solution that helps you achieve a straighter smile without interrupting your daily life.`,
  subHeading: "Key benefits of Invisalign<sup>®</sup>:",
  points: [
    "<strong>Nearly Invisible:</strong> Invisalign<sup>®</sup> aligners are transparent, making them an inconspicuous way to straighten your teeth.",
    "<strong>Custom Fit:</strong> Each set of aligners is made specifically for your teeth, ensuring a comfortable and effective treatment.",
    "<strong>Removable:</strong> Enjoy the convenience of removing your aligners to eat, drink, or brush your teeth.",
  ],
  imageSrc: "/invisalign-enhance.jpg",
  // reverse?: boolean;
};
export const WHAT_IS_KIDS_BRACES = {
  heading: "What Are Braces?",
  para: `Braces are one of the most trusted and widely used <a class='font-bold' href='/treatments/straighten-align'>orthodontic treatments</a>, with a long history of successfully addressing complex dental alignment issues. Over the years, braces have evolved significantly. While traditional metal braces remain popular, modern advancements now offer discreet options like ceramic braces, which are designed to blend seamlessly with your natural teeth.`,
  subHeading: "How Braces Can Transform Your Smile",
  points: [
    "<strong>Time-Tested Success:</strong> Braces have reliably straightened teeth for over two centuries.",
    "<strong>Tackling Complex Cases:</strong> They effectively address even the most challenging alignment and bite concerns.",
    "<strong>Improved Balance:</strong> Braces enhance the symmetry of your smile and overall facial aesthetics.",
  ],
  imageSrc: "/kids-braces-1.webp",
  // reverse?: boolean;
};
export const INVISALIGN_WORKS = {
  heading: "How Does Invisalign® Work?",
  para: `Invisalign<sup>®</sup> aligners are a series of custom-made, clear trays designed to fit snugly over your teeth. They work by applying gentle, controlled pressure to gradually move your teeth into their desired positions. Each aligner is worn for approximately two weeks before progressing to the next in the series, with every new tray bringing you closer to your beautifully aligned smile.<br/><br/>
  Advanced technology is used to carefully plan the movements your teeth need to make, breaking the process into precise stages. Each aligner is crafted to reflect these subtle adjustments, ensuring your teeth shift smoothly and effectively throughout the treatment journey.`,
  image: "/invisalign/invis-works.jpg",
  texture: true,
};
export const KIDS_WORKS = {
  heading: "The Science Behind Braces",
  para: `Braces use a combination of small brackets, wires, and elastics to gently and gradually move your teeth into the ideal position. The brackets are carefully attached to each tooth and connected with a wire that applies consistent pressure to align your teeth and jaw over time. This process is precise and effective, ensuring a beautifully straight smile.<br/><br/>
 Regular visits to our experienced team at NUYU Dental in Cheltenham are essential throughout your treatment. These appointments, usually every 2 to 4 weeks, allow us to make necessary adjustments and keep your progress on track.`,
  image: "/invisalign/invis-works.jpg",
  texture: true,
};

export const INVISALIGN_WITH_DOCTOR = {
  heading: "Teeth Straightening by a Leading Invisalign® Diamond Apex Provider",
  para: `Choosing to straighten your teeth is a significant step, and aligning your smile requires expert care and precision.<br/><br/>
  At NUYU in Cheltenham, our teeth straightening treatments, including Invisalign<sup>®</sup>, are delivered by a skilled Invisalign dentist in Cheltenham with extensive experience in creating beautifully aligned, natural smiles. With a commitment to personalised care, we ensure every patient receives the highest standard of treatment tailored to their unique needs.<br/><br/>
  Trust NUYU to guide you through your teeth straightening journey with expertise and compassion.`,
  reverse: true,
  image: "/invisalign-teeth-straightening.webp",
};
export const KIDS_WITH_DOCTOR = {
  heading: "Orthodontic Treatments For Teenagers Wanting Straighter Smiles",
  para: `Correcting the alignment of your bite or the position of your teeth is a detailed and transformative process. At <a class='font-bold' href='/'>NUYU</a>, we understand the importance of feeling confident in the care you receive. With a wealth of expertise, advanced training, and a commitment to excellence, Dr Alex ensures that every treatment is tailored to your unique needs.<br/><br/>
  <a class='font-bold' href='/about-us/team'>Dr Alex</a> works closely with you to address your concerns and create a personalised plan, delivering a straighter, healthier smile that radiates beauty and confidence. Experience the difference of expert care at NUYU.`,
  drName: "TBD",
  designation: "TBD",
  reverse: true,
  image: "/braces-expert.webp",
};
export const INVISALIGN_TIPS = {
  heading: "Essential Tips for Using Your Clear Aligners",
  para: "Clear aligners, such as Invisalign<sup>®</sup>, should be worn for at least 22 hours a day to ensure effective treatment. Only remove them when eating or brushing your teeth.",
  lists: [
    "Always wear your aligners in the correct sequence to avoid delaying your progress.",
    "When not in use, keep your aligners in the protective case provided to prevent damage or loss.",
    "Clean your aligners regularly, as instructed, to maintain hygiene and avoid the build-up of food particles or bacteria.",
  ],
  botPara:
    "Following these tips will help you achieve the best results from your clear aligner treatment.",
  image: "/invisalign/invis-tips.jpg",
  texture: true,
};
export const KIDS_TIPS = {
  heading: "Secrets to Success with Your Braces",
  // para: "Clear aligners, such as Invisalign®, should be worn for at least 22 hours a day to ensure effective treatment. Only remove them when eating or brushing your teeth.",
  lists: [
    "Adhere to the dietary advice provided by our orthodontic team. Certain foods should be avoided as they can damage your braces.",
    "Cut your meals into small, manageable pieces to minimise the risk of harming your braces.",
    "Maintain excellent oral hygiene by brushing your teeth thoroughly at least twice a day. Take your time to clean around the brackets and wires with care.",
    "Consider using disclosing tablets to identify areas where plaque may be building up, ensuring a more effective brushing routine.",
    "If you experience discomfort after an adjustment, over-the-counter pain relief can help ease any sensitivity.",
    "If your child’s braces become damaged, contact us immediately to arrange a repair.",
  ],
  image: "/invis-tips-latest.webp",
  texture: true,
};
export const KIDS_FOOD = {
  heading: "Foods to Refrain from While Having Fixed Braces",
  para: "Certain foods can damage your braces or get stuck in the brackets and wires, causing discomfort or delays in your treatment. Here’s what to steer clear of:",
  lists: [
    "Nuts, seeds, and popcorn",
    "Corn on the cob",
    "Raw fruits and vegetables",
    "Hard sweets and candies",
    "Sticky treats like caramel, toffee, or chewy sweets",
    "Tough cuts of meat",
    "Sugary snacks and desserts, as they can harm your teeth even without braces",
  ],
  image: "/braces-refrain.webp",
  reverse: true,
};
export const INVISALIGN_RIGHT_FOR_ME = {
  id: "",
  heading: "Is Invisalign® the Right Option for You?",
  para: "Invisalign<sup>®</sup> is often recommended for teenagers and adults who wish to enhance their smile without the need for traditional fixed braces. It offers a discreet, comfortable solution for those looking to correct their teeth while maintaining a natural appearance throughout the treatment process.",
  gridData: [
    {
      image: "/bites/crowdedteeth.svg",
      text: "Crooked teeth",
    },
    {
      image: "/bites/gapteeth.svg",
      text: "Gaps between teeth",
    },
    {
      image: "/bites/underbite.svg",
      text: "Mild underbite",
    },
    {
      image: "/bites/overbite.svg",
      text: "Mild overbite",
    },
  ],
};
export const KIDS_RIGHT_FOR_ME = {
  id: "",
  texture: true,
  heading: "Could Fixed Braces Be the Perfect Solution for You?",
  para: "Fixed braces are often recommended for both teenagers and adults dealing with moderate to severe tooth misalignment or bite issues. They’re also ideal for children or teens who may find it difficult to commit to wearing clear aligners for 22 hours per day.",
  gridData: [
    {
      image: "/bites/crowdedteeth.svg",
      text: "Crooked teeth",
    },
    {
      image: "/bites/crowdedteeth.svg",
      text: "Overlapping teeth",
    },
    {
      image: "/bites/gapteeth.svg",
      text: "Gaps between teeth",
    },
    {
      image: "/bites/overbite.svg",
      text: "Moderate to severe overbite",
    },
    {
      image: "/bites/underbite.svg",
      text: "Moderate to severe underbite",
    },
    {
      image: "/bites/crossbite.svg",
      text: "Crossbite",
    },
  ],
};
export const INVISALIGN_GOOD_CANDIDATE = {
  heading: "Could Invisalign® Be Right for You?",
  para: `If you have complex issues with your bite, severe crowding, or large gaps between your teeth, Invisalign<sup>®</sup> may not be the ideal solution. However, many patients with mild to moderate alignment concerns find Invisalign<sup>®</sup> to be a highly effective and discreet option.<br/><br/>
  Book a consultation at NUYU in Cheltenham to determine if <a href='/invisalign-cheltenham'>Invisalign</a><sup>®</sup> is the best fit for your needs. Our expert team will assess your smile and guide you through the treatment options available to help you achieve your desired results.`,
  image: "/invisalign/invis-right-for-u.jpg",
  flowerRemove: true,
  texture: true,
};
export const KIDS_GOOD_CANDIDATE = {
  heading: "Who is an Ideal Candidate for Fixed Braces?",
  para: `Fixed braces are a reliable option for most children and teenagers looking to achieve a straighter, healthier smile. However, if you your child has significant oral health issues, this treatment may not be the best choice for them.<br/><br/>
  Schedule your consultation to determine if fixed braces are the right orthodontic solution to meet your needs and help you achieve your dream smile.`,
  image: "/invisalign/kids-ortho-sect-bg.webp",
  flowerRemove: true,
};
export const INVISALIGN_WHY_CHOOSE = {
  heading: "Why Choose Invisalign®?",
  para: "Experience the convenience and effectiveness of Invisalign<sup>®</sup> at NUYU in Cheltenham, and take the first step towards the smile you’ve always wanted.",
  lists: [
    "<strong>Discreet Appearance:</strong> Invisalign<sup>®</sup> aligners are crafted from clear, transparent material, making them nearly invisible while being worn.",
    "<strong>Improved Oral Hygiene:</strong> Unlike traditional braces, Invisalign<sup>®</sup> aligners can be removed, allowing you to brush and floss your teeth with ease, reducing the risk of cavities and gum disease.",
    "<strong>Enhanced Comfort:</strong> With no sharp brackets or wires, Invisalign<sup>®</sup> aligners are designed to fit snugly over your teeth, offering a smooth and comfortable experience.",
    "<strong>Freedom with Food:</strong> Invisalign<sup>®</sup> aligners can be taken out during meals, so you can enjoy all your favourite foods without restrictions.",
  ],
  image: "/invisalign/why-choose-invisalign.webp",
};
export const KIDS_WHY_CHOOSE = {
  heading: "Why Choose Fixed Braces?",
  para: "Fixed braces remain a popular and trusted solution for a wide range of orthodontic needs. Here’s why they might be the perfect choice for you:",
  lists: [
    "<strong>Highly Versatile:</strong> Fixed braces can effectively treat everything from minor misalignment and overcrowding to complex bite issues, providing a tailored solution for your unique smile.",
    "<strong>Secure and Reliable:</strong> Permanently attached to your teeth, fixed braces can’t be misplaced or forgotten, ensuring consistent treatment progress without interruption.",
    "<strong>Convenience Throughout the Day:</strong> While dietary adjustments are necessary, fixed braces eliminate the need to remove aligners for meals or snacks, saving you time and effort.",
    "<strong>Proven Results:</strong> With a history spanning centuries, fixed braces are known for their unparalleled ability to achieve precise, long-lasting results.",
    "<strong>Cost-Effective Option:</strong> Fixed braces are one of the most affordable orthodontic treatments, offering excellent value while delivering outstanding results. Flexible payment plans are available to suit your budget.",
  ],
  image: "/why-choose-fixed-braces-kids.webp",
  texture: true,
};
export const INVISALIGN_BUSY_LIFE = {
  heading: "Teeth Straightening Made Simple for Dynamic Lifestyles",
  para: `Invisalign<sup>®</sup> is the ideal choice for those with sophisticated and demanding schedules, offering a seamless solution to achieving a perfectly aligned smile. Unlike <a class='font-bold' href='/treatments/straighten-align/kids-braces'>traditional braces</a> that require frequent in-practice adjustments, Invisalign<sup>®</sup> provides a custom series of aligners that you progress through at your convenience, typically changing them every two weeks.<br/><br/>
  Crafted for elegance and ease, Invisalign<sup>®</sup> allows you to enjoy fewer appointments while maintaining exceptional results. It’s the ultimate teeth straightening system designed to complement a modern, refined lifestyle.`,
  image: "/invis-naz-pic.webp",
  reverse: true,
  texture: true,
};
export const INVISALIGN_RESULTS = {
  heading: "How Soon Will You Notice Results with Invisalign®?",
  para: `We understand that you’re excited to see your new smile, but Invisalign<sup>®</sup> works gradually, moving your teeth with precision at every stage of the process.<br/><br/>
  Most patients begin to notice changes in their smile within 10 to 12 weeks of starting treatment. However, the total duration of your Invisalign<sup>®</sup> journey depends on your unique dental needs. On average, treatment typically lasts between 6 and 18 months.<br/><br/>
  With Invisalign<sup>®</sup>, you’ll enjoy a transformative experience that brings you closer to the smile you’ve always dreamed of, one aligner at a time`,
  image: "/invisalign/results.jpg",
};
export const INVISALIGN_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Are Invisalign<sup>®</sup> aligners painful?",
      answer:
        "While some patients may experience slight discomfort during the first few days of wearing a new aligner, it is typically mild and a sign that your teeth are moving into position.",
    },
    {
      question:
        "I’ve had braces before but didn’t wear my retainers. Can Invisalign<sup>®</sup> fix my teeth?",
      answer:
        "Yes, Invisalign<sup>®</sup> is a great option for correcting alignment issues that have returned after braces. It can help refine and restore your smile.",
    },
    {
      question:
        "What if I wear my Invisalign<sup>®</sup> aligners in the wrong order?",
      answer:
        "If you realise you’ve worn the aligners out of sequence, contact your dentist immediately for guidance. Continuing to wear them incorrectly could disrupt your treatment plan.",
    },
    {
      question: "Are Invisalign<sup>®</sup> aligners breakable?",
      answer:
        "Invisalign<sup>®</sup> aligners are designed to be durable, but they can crack or break if not handled properly. Always store them in their case when not in use and avoid exposing them to extreme temperatures.",
    },
    {
      question: "Will wearing Invisalign<sup>®</sup> affect my speech?",
      answer:
        "You may notice a slight lisp when you first begin wearing aligners, but this typically disappears within a few days as you adjust to them.",
    },
    {
      question: "How much does Invisalign<sup>®</sup> treatment cost?",
      answer:
        "The cost of Invisalign<sup>®</sup> treatment depends on the complexity of your case. During your consultation, we will provide a detailed breakdown of costs and payment options tailored to your needs.",
    },
  ],
};
export const COMPOSITE_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "What is composite bonding, and how does it work?",
      answer:
        " Composite bonding is a cosmetic dental treatment that uses a tooth-coloured resin material to repair chips, cracks, gaps, or discolouration and enhance the appearance of teeth. The resin is applied, shaped, and hardened with a special light, resulting in a natural-looking finish.",
    },
    {
      question: "How long does composite bonding last?",
      answer:
        "With proper care, composite bonding can last between 5 and 10 years. Its durability depends on factors such as oral hygiene, diet, and habits like teeth grinding or biting on hard objects.",
    },
    {
      question: "Is composite bonding painful?",
      answer:
        "Composite bonding is typically a painless procedure and often does not require anaesthetic. The tooth surface is lightly prepared, and the resin is applied without causing discomfort.",
    },
    {
      question: "Who can benefit from composite bonding?",
      answer:
        "Anyone who has any slight imperfections with the size, shape or colour of their teeth can get a lovely new smile using composite bonding.",
    },
    {
      question: "How much does composite bonding cost?",
      answer:
        "Composite bonding costs as little as £350 per tooth but we always suggest coming in for a consultation so we can assess your smile and give you an accurate quotation.",
    },
    {
      question: "Can composite bonding close gaps between teeth?",
      answer:
        "Yes, composite bonding is an effective way to close small gaps between teeth. It can improve the appearance of your smile without the need for orthodontic treatment.",
    },
    {
      question: "How should I care for my teeth after composite bonding?",
      answer:
        "To maintain your composite bonding, practice good oral hygiene, avoid staining foods and drinks like tea, coffee, and red wine, and refrain from biting hard objects. Regular dental check-ups and cleanings are also important.",
    },
    {
      question: "Can composite bonding repair chipped or broken teeth?",
      answer:
        " Yes! Composite bonding is the most cost effective solution to repairing chipped or broken teeth.",
    },
  ],
};
export const PATIENT_CONSULTAION_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "What is an oral health assessment?",
      answer:
        "An oral health assessment is a thorough examination of your teeth, gums, and mouth to ensure everything is healthy and to catch any potential issues early.",
    },
    {
      question: "How often should I have an oral health assessment?",
      answer:
        "We usually recommend a check-up every six months, but your dentist will advise you based on your individual needs to keep your smile at its very best.",
    },
    {
      question: "What happens during my assessment?",
      answer:
        "Your dentist will gently examine your mouth, check for any signs of decay, gum disease, or other concerns, and may also take digital x-rays if needed - all in a calm, reassuring setting.",
    },
    {
      question: "Will I need treatment after my assessment?",
      answer:
        "If we spot anything that needs attention, we’ll discuss it with you openly and create a personalised plan to restore your oral health gently and effectively.",
    },
    {
      question: "Is an oral health assessment suitable for children?",
      answer:
        "Absolutely. We welcome patients of all ages and believe in building strong foundations for healthy smiles right from the very start.",
    },
    {
      question: "How do I book my oral health assessment at NUYU Cheltenham?",
      answer:
        "Booking with us is simple. You can call our friendly team on <a href='tel:01242339233'>01242 339233</a>, send us an enquiry through our website by <a href='/contact-us'>clicking here</a> or <a href='https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason' target='_blank'>click here</a> to choose a convienient time using our online booking system. If you’re in the area then pop in to arrange your appointment, we’re at <a href='https://www.google.com/maps/place/NUYU+Dental+%26+Aesthetics/@51.9020212,-2.0741989,17z/data=!3m1!4b1!4m6!3m5!1s0x48711b72c182049f:0x7658e1128104e9dc!8m2!3d51.9020179!4d-2.071624!16s%2Fg%2F11x03z2yr5?entry=tts&g_ep=EgoyMDI1MDIxMi4wIPu8ASoASAFQAw%3D%3D' target='_blank'>64 Winchcombe Street, Cheltenham, GL52 6ND</a>.",
    },
  ],
};
export const HOMEPAGE_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Where is NUYU Dental & Aesthetics located?",
      answer:
        "You’ll find NUYU Cheltenham in the heart of beautiful Cheltenham, offering a calm and elegant space where you can feel completely at ease.",
    },
    {
      question: "What treatments do you offer at NUYU Dental & Aesthetics?",
      answer:
        "We provide a full range of private dental and facial aesthetic treatments, including general dentistry, cosmetic dentistry, dental implants, Invisalign, teeth whitening, and facial rejuvenation.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "Booking with us is simple. You can call our friendly team on <a href='tel:01242339233'>01242 339233</a>, send us an enquiry through our website by <a href='/contact-us'>clicking here</a> or <a href='https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason' target='_blank'>click here</a> to choose a convienient time using our online booking system. If you’re in the area then pop in to arrange your appointment, we’re at <a href='https://www.google.com/maps/place/NUYU+Dental+%26+Aesthetics/@51.9020212,-2.0741989,17z/data=!3m1!4b1!4m6!3m5!1s0x48711b72c182049f:0x7658e1128104e9dc!8m2!3d51.9020179!4d-2.071624!16s%2Fg%2F11x03z2yr5?entry=tts&g_ep=EgoyMDI1MDIxMi4wIPu8ASoASAFQAw%3D%3D' target='_blank'>64 Winchcombe Street, Cheltenham, GL52 6ND</a>.",
    },
    {
      question: "Are you accepting new patients?",
      answer:
        "Yes, we are delighted to welcome new patients to NUYU Dental & Aesthetics. Whether you're looking for a full smile makeover or simply a fresh, gentle approach to your dental care, we're here for you.",
    },
    {
      question: "Do you offer consultations?",
      answer:
        "Absolutely. We believe every smile journey should begin with a personal consultation to understand your wishes and tailor a plan just for you.",
    },
    {
      question: "Is NUYU Dental & Aesthetics a fully private practice?",
      answer:
        "Yes, NUYU Dental & Aesthetics is a fully private dental and wellness practice, allowing us to offer an exceptional level of care, time, and bespoke service to each of our patients.",
    },
    {
      question: "What makes NUYU Dental & Aesthetics different?",
      answer:
        "At NUYU Dental & Aesthetics, we combine clinical excellence with an unwavering focus on your comfort and experience. Every detail of your journey with us is thoughtfully designed to help you feel relaxed, valued, and truly cared for.",
    },
    {
      question: "Do you offer finance options for treatment?",
      answer:
        "We do. We understand that investing in your smile is a big decision, so we offer flexible finance plans to help make your dream smile more accessible.",
    },
    {
      question: "I’m nervous about visiting the dentist – can you help?",
      answer:
        "Of course. You are in very safe hands at NUYU Cheltenham. We specialise in caring for nervous patients with kindness, patience, and a genuinely gentle approach.",
    },
    {
      question: "How can I find out more about a specific treatment?",
      answer:
        "Our website offers a detailed overview of our treatments, but the best way to find out more is to arrange a consultation with our team. We’ll be delighted to guide you through your options with warmth and honesty.",
    },
  ],
};
export const KIDS_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Are braces painful?",
      answer:
        "Many patients find that braces can take some getting used to, and there can be considerable pressure on your teeth and jaw, particularly in the hours following an adjustment. Over-the-counter pain relief can help, however, any discomfort should subside within a few days.",
    },
    {
      question:
        "I’ve had braces in the past, but I didn’t wear my retainers. Can I have braces again?",
      answer:
        "It’s not unusual for people to fail to wear their retainers after orthodontic treatment. However, this doesn’t mean that you’ll need to have braces again. Our orthodontic team will be able to tell you which treatment will be most effective to correct your smile again.",
    },
    {
      question: "Are braces breakable?",
      answer:
        "Although braces are very durable, damage and breakages can occur if you don’t follow the instructions and advice given to you by our orthodontic team, particularly in relation to what you shouldn’t eat. While repairs can be carried out, these may incur a charge.",
    },
    {
      question: "Will wearing braces affect my speech?",
      answer:
        "Braces can feel very unusual at first, and many patients find that their speech changes while they get used to them.",
    },
    {
      question: "How much do braces cost?",
      answer:
        "The cost of braces can vary depending on your individual treatment. Your orthodontist will be able to provide an estimate at the time of your consultation. To help spread the cost of your treatment, we also offer financing options. Visit our fees and payment plans pag for more information.",
    },
    {
      question: "How do champagne braces compare to silver metal braces?",
      answer:
        "Functionally, they are identical—both are made from stainless steel and work in the same way to straighten teeth. The key difference is the champagne-coloured coating, which offers a more stylish and refined look.",
    },
  ],
};
export const WHY_CHOSE_US_SERENE = {
  heading: "Caring for Health, Inspiring Wellbeing",
  para: "From everyday check-ups to advanced cosmetic dentistry, we’re here to keep your smile healthy, confident, and uniquely you. At NUYU Dental & Aesthetics, we offer a full range of general dentistry, restorative treatments, implants, and aesthetic dental care—thoughtfully tailored to your goals. Whether you’re enhancing your smile or maintaining your oral health, every step is designed to leave you feeling cared for, supported, and completely at ease.<br/><br/>At our private dental clinic in Cheltenham, we’ve created a calm, design-led space where your comfort comes first. Our experienced team combines clinical precision with the latest technology to deliver beautifully considered care. From digital scans to bespoke treatment plans—including expertly placed dental implants—everything is aligned to your wellbeing, so you can feel confident in both the process and the results.",
  image: "/about-us-serene.webp",
  reverse: true,
  texture: true,
};
export const WHY_CHOSE_US_TRUST = {
  heading: "Expertise You Can Trust",
  para: "At NUYU Dental, our team of skilled dentists brings years of advanced training and experience to deliver exceptional care. We remain at the forefront of modern dentistry, ensuring every treatment is carried out with precision and attention to detail.<br/> <br/> We prioritise patient-centred care, taking the time to understand your needs and goals. With clear advice and tailored treatment plans, you can trust us to provide the highest standard of dentistry and a truly personalised experience.",
  image: "/invisalign-teeth.webp",
};
export const WHY_CHOSE_US_DENTISTRY = {
  heading: "State of the Art Dentistry",
  para: "At NUYU Dental, we embrace cutting-edge technology to deliver exceptional care. AI-assisted diagnostics enhance the precision of X-rays and scans, ensuring early detection and effective treatment planning.<br/><br/> Our advanced tools, including 3D imaging, digital impressions, and laser dentistry, provide minimally invasive, comfortable, and efficient treatments. This commitment to innovation ensures every procedure is precise, personalised, and designed to achieve stunning, long-lasting results.",
  image: "/why-choose-us-dentistry.JPG",
  reverse: true,
  texture: true,
};
export const FIXED_BRACES_TEETH = {
  heading: "Fixed Braces",
  para: "<a class='font-bold' href='/treatments/straighten-align/adult-braces'> Fixed braces</a> remain one of the most reliable solutions for straightening teeth, particularly for individuals with complex orthodontic concerns. They are often recommended for cases involving severe misalignment, overcrowding, noticeable gaps between teeth, or issues with your bite alignment (how your upper and lower teeth meet when the jaw is closed). These braces work by utilising a combination of brackets, wires, and elastics to carefully guide teeth into their ideal position over time. Whether you’re addressing a long-standing dental issue or seeking a more confident smile, fixed braces provide a consistent and effective treatment option.",
  image: "/invisalign/straightAlign-fix.webp",
  buttons: [
    {
      name: "ITS TIME TO TAKE THE NEXT STEP",
      href: "/treatments/straighten-align/adult-braces",
    },
  ],
  reverse: true,
  texture: true,
};
export const INVISALIGN_TEETH = {
  heading: "Invisalign® Aligners",
  para: `Invisalign<sup>®</sup> is the leading name in clear aligner technology, revolutionising orthodontic treatment. Designed using cutting-edge imaging systems,<a class='font-bold' href='/treatments/straighten-align/invisalign'> Invisalign<sup>®</sup></a> aligners offer millimetre-perfect precision to plan your journey and predict the final position of your teeth before treatment even begins.<br/><br/> Discreet, removable, and incredibly convenient, <a class='font-bold' href='/treatments/straighten-align/invisalign'>Invisalign<sup>®</sup></a> fits seamlessly into your lifestyle, allowing you to achieve a beautifully aligned smile without the need for <a class='font-bold' href='/treatments/straighten-align/adult-braces'>traditional braces</a>. Trusted by millions worldwide, Invisalign<sup>®</sup> is the preferred choice for those seeking a comfortable and effective way to transform their smile.`,
  image: "/invis-naz-pic.webp",
  buttons: [
    {
      name: "Ready for Invisalign® Aligners",
      href: "/treatments/straighten-align/invisalign",
    },
  ],
};
export const SPECAIL_TEETH = {
  heading: "Advanced Orthodontic Care",
  para: `At <a class='font-bold' href='/'>NUYU<a/>, we provide advanced orthodontic care, personalised to suit your individual needs. Under the expertise of our dedicated specialists, we offer a range of tailored solutions to help you achieve the smile you’ve always wanted. From <a class='font-bold' href='/treatments/straighten-align/kids-braces'>traditional braces</a> to cutting-edge discreet treatments, our approach focuses on precision, comfort, and exceptional outcomes.<br/><br/>With a commitment to providing the highest standard of care, we’re here to guide you every step of the way on your journey to a beautifully aligned smile. Trust Dr Alex Eremia for professional, compassionate treatment that always puts you first. `,
  image: "/invisalign/results.jpg",
  buttons: [
    {
      name: "Ready to Skip the NHS Waiting List",
      href: "/treatments/straighten-align/kids-braces",
    },
  ],
  reverse: true,
  texture: true,
};
export const AbOUT_US_HEADER = {
  headingOne: "Caring for Health, Inspiring Wellbeing",
  tag: "HOME > ABOUT US",
  description: `Offering a comprehensive range of general dentistry, restorative treatments, and cosmetic and aesthetic enhancements, we’re here to help you achieve a beautifully healthy smile that leaves you feeling confident and cared for.Offering a comprehensive range of general dentistry, restorative treatments, and cosmetic and aesthetic enhancements, we’re here to help you achieve a beautifully healthy smile that leaves you feeling confident and cared for.<br/><br/>Our practice in the heart of Cheltenham is devoted to delivering exceptional care for the whole family. Led by our compassionate team of dentists, we bring together years of experience, advanced technology, and a deep commitment to your comfort. Every detail of our modern, spa-like setting has been thoughtfully designed to make your visit as relaxing and positive as possible.`,
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const GLOUCESTER_BANNER = {
  headingOne: "NUYU Dental – Your Private Dentist in Gloucester",
  description: `Looking for a private dentist in Gloucester who offers expert care with a personal touch.
At NUYU Dental, we’re proud to care for patients from Gloucester. Our modern clinic is in Cheltenham, just up the A40 from Gloucester. We’re a short drive from Cheltenham Spa station and close to the M5, so getting to us is quick and easy.<br/><br/>
We understand that visiting the dentist isn’t just about fixing teeth – it’s about trust, comfort, and feeling confident every time you smile. Whether you’re coming in for a routine check-up, a full smile makeover, or urgent emergency dental care, we combine gentle treatment with the latest technology to make your visit stress-free.<br/><br/>
From Invisalign® and braces to teeth whitening, dental implants, and skin treatments, we’re here to help you look and feel your best. We serve Gloucester patients from our Cheltenham clinic with friendly, expert care.
`,
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const TEWKESBURY_BANNER = {
  headingOne: "Your Smile Journey Starts Here – NUYU Dental & Aesthetics, Near Tewkesbury",
  description: `Dentistry designed around you — your smile, your confidence, your lifestyle.`,
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const CIRENCESTER_BANNER = {
  headingOne: "Private Dentist for Cirencester Patients",
  description: `Your Trusted Dentist for Cirencester Residents – Based in Cheltenham`,
  image: "/header-image-v3.webp",
  flowerImage: true,
};
export const TEETH_STRAIGHT_HEADER = {
  headingOne: "Confidence Redefined with Beautiful Straight Teeth",
  tag: "HOME > TEETH STRAIGHTENING",
  description: `At NUYU in Cheltenham, we believe everyone deserves to feel confident in their smile. Whether you’re an adult looking to improve your smile or a parent exploring options for your child, teeth straightening can make a lasting difference - not only in appearance but also in long-term oral health. We offer a range of modern, carefully tailored treatments – from discreet clear aligners to advanced fixed braces – designed to gently guide your teeth into perfect alignment.<br/><br/>Whatever your lifestyle or goals, our experienced team is here to support you every step of the way, ensuring your journey to a straighter smile is as comfortable and seamless as possible.`,
  buttonHref: "/contact-us",
  buttonText: "Start Your Journey to a More Confident Smile Today",
  image: "/header-image-v3.webp",
};
export const ABOUT_US_TRUSTED = {
  heading: "Trusted By Thousands Over Multiple Decades",
  para: "Our team has cared for thousands of patients over multiple decades, helping each person achieve a healthy foundation for a long-lasting smile. With a commitment to excellence, we continually refine our skills and stay at the forefront of advancements in dentistry. Our team has undertaken hundreds of hours of additional training, covering the latest technologies and innovative techniques to ensure we deliver the very best care.<br/><br/>Whether it’s routine dental maintenance, complex restorative treatments, or cosmetic enhancements, our expertise allows us to provide exceptional outcomes tailored to your individual needs. We pride ourselves on combining technical precision with a compassionate approach, creating a patient experience that is as effective as it is comfortable. At NUYU, you can trust that your smile is in the hands of a highly skilled and dedicated team.",
  image: "/invisalign/about-nuyu.webp",
  texture: true,
};
export const GLOUCESTER_WHY = {
  heading: "Why Patients from Gloucester Choose NUYU Dental",
  para: "We mix skill with kindness. Our team uses the latest dental technology and explains everything in plain words. We know you have choices. Here’s why people travel to us:",
  lists: [
    "Offer expert treatments with proven results.",
    "Friendly, expert team that takes time to listen",
    "Give clear prices before we start.",
    "Provide flexible appointment times to suit busy lives.",
    "Create a calm, welcoming space where you can feel at ease.",
  ],
  image: "/invisalign/about-nuyu.webp",
  texture: true,
};
export const TEWKESBURY_GENTLE = {
  heading: "NUYU Dental & Aesthetics – Caring for Tewkesbury Patients",
  para: "Searching for a private dentist in Tewkesbury who combines expertise with a personal, welcoming touch? At NUYU Dental & Aesthetics, we proudly welcome patients from Tewkesbury and nearby areas to our <a href='/' class='font-bold'>modern Cheltenham clinic</a> — just a short drive away.<br/><br/>With simple access via the M5 and A38, free parking, and a friendly team, your journey to a healthier, brighter smile has never been easier. Whether you need a routine check-up, a full smile makeover, or urgent dental care, we provide gentle, patient-focused dentistry designed around your needs.",
  image: "/invisalign/about-nuyu.webp",
  buttons: [
    {
      name: "Schedule Your Consultation Today",
      href: "/contact-us",
    }
  ],
  texture: true,
};
export const CIRENCESTER_GENTLE = {
  heading: "Advanced, Gentle Dentistry Just a Short Drive from Cirencester",
  para: "Looking for a private dentist near Cirencester? At NUYU Dental & Aesthetics, we deliver exceptional dental care in a relaxed, welcoming environment.<br/><br/>Our modern clinic in Cheltenham is less than 30 minutes from Cirencester, with free on-site parking and easy access via the A417 and M5. Whether you’re after routine check-ups, cosmetic enhancements, or complete smile transformations, we make it simple to achieve a healthy, confident smile.<br/><br/>From Invisalign® and teeth whitening to dental implants and <a href='/treatments/straighten-align' class='font-bold'>full smile makeovers</a>, every treatment is designed around you — your comfort, your goals, and your lifestyle.",
  image: "/invisalign/about-nuyu.webp",
  buttons: [
    {
      name: "Schedule Your Consultation Today",
      href: "/contact-us",
    }
  ],
  texture: true,
};
export const GLOUCESTER_LOCAL = {
  heading: "Your Local Private Dental Clinic in Gloucester",
  para: "If you’re searching for a private dentist near me in Gloucester, NUYU Dental is here for you. Patients come to us for:",
  lists: [
    "Private dentist – for comprehensive, high-quality care in a modern clinic.",
    "Private dentist Cheltenham – offering advanced treatments with a friendly touch.",
    "Cheltenham dentist – trusted by locals and visitors alike.",
    "Dental practice Gloucester – combining prevention, restoration, and aesthetics under one roof.",
  ],
  botPara: "Coming from Gloucester? We’re just up the A40 and near the M5. Arrive by car (free patient parking on-site) or by train via Cheltenham Spa—both are quick and easy.",
  image: "/invisalign/about-nuyu.webp",
  reverse: true,
  texture: true,
};
export const TEWKESBURY_LOCAL = {
  heading: "Your Trusted Private Dentist Near Tewkesbury",
  para: "Choosing the right dentist matters. At NUYU Dental & Aesthetics, we make dental care simple, stress-free, and tailored to you.<br/><br/>At our Cheltenham clinic, you’ll find:",
  list: [
    "<a href='/' class='font-bold'>Modern treatments</a> designed for exceptional results",
    "Personalised dental plans to suit your lifestyle",
    "A warm, welcoming team focused on your comfort",
  ],
  botPara: "With free parking, easy access, and a wide range of treatments, achieving your best smile has never been simpler.",
  image: "/invisalign/about-nuyu.webp",
  reverse: true,
  texture: true,
};
export const CIRENCESTER_LOCAL = {
  heading: "Your Local Private Dental Clinic Near Cirencester",
  para: "For patients in Cirencester, <a href='/' class='font-bold'>NUYU Dental & Aesthetics</a> brings everything under one roof — from routine check-ups to complete smile transformations. With modern facilities, expert clinicians, and a warm, welcoming environment, we make high-quality dental care simple and convenient.",
  image: "/invisalign/about-nuyu.webp",
  reverse: true,
  texture: true,
};
export const GLOUCESTERSHIRE_YOUR = {
  heading: "What Your Visit Will Be Like",
  para: "IFrom the moment you arrive, we aim to make your experience enjoyable and stress-free:",
  lists: [
    "Warm welcome – Our concierge team greets you with a smile, ensuring you feel comfortable straight away.",
    "Clear advice – We explain your treatment options in everyday language so you can make informed decisions.",
    "Gentle care – We work at your pace, regularly checking in to make sure you’re comfortable.",
    "Ongoing support – We follow up after treatment to make sure you’re happy with your results and answer any questions.",
  ],
  image: "/invisalign/about-nuyu.webp",
  texture: true,
};
export const TEWKESBURY_YOUR = {
  heading: "What to Expect on Your First Visit",
  lists: [
    "<strong>A warm welcome</strong> – You’ll be greeted by our friendly team and made to feel at home.",
    "<strong>Clear, simple advice</strong> – We explain your options without jargon so you can make informed decisions.",
    "<strong>Gentle, modern care</strong> – We use the latest techniques to ensure treatments are as comfortable as possible.",
    "<strong>Support beyond your visit</strong> – Our team follows up to make sure you’re happy with the results and provide any aftercare you need.",
  ],
  image: "/invisalign/about-nuyu.webp",
  texture: true,
};
export const CIRENCESTER_YOUR = {
  heading: "What to Expect at Your First Visit",
  lists: [
    "<strong>A Warm Welcome </strong>– Our friendly team puts you at ease from the moment you arrive.",
    "<strong>Clear, Honest Advice </strong>– We explain every treatment option in straightforward terms.",
    "<strong>Gentle, Modern Dentistry</strong> – <a href='/about-us/why-choose-us' class='font-bold'>Advanced techniques ensure your comfort at every stage.",
    "<strong>Ongoing Aftercare</strong> – Tailored guidance to maintain your results and protect your smile.",
  ],
  image: "/invisalign/about-nuyu.webp",
  texture: true,
};
export const ABOUT_US_PERFECT = {
  heading: "Why NUYU Is The Perfect Choice For You",
  para: "Our practice in the heart of Cheltenham is devoted to delivering exceptional care for the whole family. Led by our compassionate team of dentists, we bring together years of experience, advanced technology, and a deep commitment to your comfort. Every detail of our modern, spa-like setting is thoughtfully designed to make your visit as relaxing and positive as possible.",
  lists: [
    "Personalised care in a spa-like setting",
    "Expertise you can trust",
    "Holistic approach to your wellbeing",
    "State-of-the-art technology",
    "Convenient and patient-focused",
  ],
  image: "/about-us-perfect.webp",
  reverse: true,
};
export const ABOUT_US_JOURNEY = {
  texture: true,
  heading: "The NUYU Journey Revolves Around You",
  para: "At NUYU Dental, we provide exceptional care by combining clinical excellence, expertise, and a holistic approach to your oral and overall wellbeing, all within our state-of-the-art practice.<br/><br/>Your journey with us is personal and comprehensive. By understanding your needs and smile goals, we build lasting relationships that support your dental health - now and into the future.<br/><br/>From your first visit, our tailored care ensures your comfort and confidence every step of the way.",
  buttons: [
    {
      name: "YOUR PATIENT JOURNEY",
      href: "/about-us/patient-journey",
    },
    {
      name: "BOOK YOUR CONSULTATION TODAY",
      href: "/contact-us",
    },
  ],
  image: "/about-us-1.webp",
};
export const TREATMENT_JOURNEY_INVISALIGN = {
  heading: "Your Path to a Refined Smile Experience",
  texture: true,
  boxes: [
    {
      heading: "Planning your Smile",
      para: "Your smile should be as unique as you so we spend time to understand what you want to achieve and what’s motivated you to take the step to a beautiful new smile.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Dental Wellness Check",
      para: "Before starting  treatment, we ensure your oral health is in top condition, addressing issues like cavities or gum disease to lay a healthy foundation for success.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Innovative Teeth Imaging",
      para: "A precise digital scan of your mouth is taken without the mess or discomfort of traditional impressions, providing your dentist with highly detailed images of your teeth.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Visualising Your Smile",
      para: " We will generate a detailed image of your expected results. This visual preview allows you to see how your smile will look at the end of your treatment, giving you confidence in your journey ahead",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Custom Aligner Fitting",
      para: "The digital scans are used to craft your bespoke Invisalign<sup>®</sup> aligners, tailored specifically to your teeth. Once your aligners are ready, you’ll return for a fitting appointment where we’ll ensure they fit perfectly and guide you on when and how to change them throughout your treatment",
      image: "/tj-5.webp",
      reverse: false,
    },
    {
      heading: "Tracking Your Progress",
      para: "Attend regular consultations to monitor the progress of your treatment. These appointments ensure everything is on track and allow us to make any necessary adjustments to achieve your ideal smile",
      image: "/tj-6.webp",
      reverse: true,
    },
  ],
};
export const TREATMENT_JOURNEY_KIDS = {
  heading: "Your Fixed Braces Journey at NUYU",
  texture: true,
  boxes: [
    {
      heading: "Your Consultation",
      para: "Let’s discuss your smile aspirations. Share your concerns, and together, we’ll create a plan to achieve your perfect smile",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Dental Wellness Check",
      para: "Before starting  treatment, we ensure your oral health is in top condition, addressing issues like cavities or gum disease to lay a healthy foundation for success.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Innovative Teeth Imaging",
      para: "A precise digital scan of your mouth is taken without the mess or discomfort of traditional impressions, providing your dentist with highly detailed images of your teeth.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Custom Brace Fitting",
      para: "Brackets are precisely placed on your teeth for optimal tooth movement which ensures your teeth are moved precisely and efficiently to the correct place. A wire is then placed through all the brackets to apply the optimal amount of pressure to move the teeth.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Tracking Your Progress",
      para: "Attend regular consultations to monitor the progress of your treatment. These appointments ensure everything is on track and allow us to make any necessary adjustments to achieve your ideal smile",
      image: "/tj-5.webp",
      reverse: false,
    },
  ],
};
export const INVISALIGN_ADVANCED = {
  heading: "Advanced Orthodontic Technology",
  para: `At NUYU, we utilise state-of-the-art technology to deliver exceptional orthodontic care. One of the cornerstones of our advanced approach is the iTero Lumina scanner.<br/><br/>
  This cutting-edge device creates precise 3D images of your teeth and jaw, enabling us to design your bespoke Invisalign<sup>®</sup> aligners with unparalleled accuracy. Additionally, the scanner allows you to preview how your teeth will look at the end of your treatment, providing clarity and confidence before you embark on your journey to a beautifully aligned smile.<br/><br/>
  With innovative technology at the heart of our practice, NUYU ensures a seamless and comfortable experience every step of the way.`,
  image: "/full-arch-implants.webp",
  reverse: true,
};
export const ORTHO_KIDS_PATIENTS = {
  texture: true,
  heading: "What our patients say",
  lists: [
    "“I can finally eat without thinking twice — it’s completely changed how I feel about myself.”",
    " “The whole process at NUYU felt calm and supportive. My implant looks and feels so natural, I forget it’s there.”",
    "“I smile without covering my mouth for the first time in years — I wish I had done this sooner.”",
  ],
  image: "/dental-crown.webp",
};
export const IMPLANTS_LANDING_PATIENT = {
  texture: true,
  heading: "What our patients say",
  lists: [
    "“I can finally eat without thinking twice — it’s completely changed how I feel about myself.”",
    " “The whole process at NUYU felt calm and supportive. My implant looks and feels so natural, I forget it’s there.”",
    "“I smile without covering my mouth for the first time in years — I wish I had done this sooner.”",
  ],
  image: "/dental-veneers-what.webp",
};
export const IMPLANTS_LANDING_NEW = {
  texture: true,
  heading: "Flexible Finance Options ",
  para: `We believe your new smile should be within reach.`,
  lists: [
    "Interest-free finance available",
    "Custom monthly payment plans to suit your budget"
  ],
  button: [
    {
      name: "Book Your Free Consultation & Explore Finance Options ",
      href: "#contact-us",
    },
  ],
  image: "/dental-implant-work.webp",
  reverse: true,
};
export const INVISALIGN_BOOK = {
  heading: "How Can I Book Teeth Straightening in Cheltenham?",
  para: "During your consultation, we’ll discuss your smile aspirations, explore your treatment options, and address any questions you may have. Start your journey to a beautifully aligned smile today—book your consultation now.",
  buttons: [
    {
      name: "BOOK YOUR CONSULTATION NOW",
      href: "/contact-us",
    },
  ],
  image: "/invisalign/book.webp",
  texture: true,
};
export const KIDS_BOOK = {
  heading: "When Will You Start to See Results from Fixed Braces?",
  para: `We understand you're eager to notice the changes from your orthodontic treatment. While every individual’s progress varies, most patients begin to see improvements within 10 to 12 weeks. Complete treatment with fixed braces typically spans 18 to 24 months.<br/><br/>
  During your consultation, our orthodontic team can provide a personalised timeline and discuss what to expect throughout your journey to a beautifully aligned smile.`,
  image: "/kids-book.webp",
  reverse: true,
};
export const INVISALIGN_SMILE_SUCCESS = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  texture: true,
  images: [
    {
      before: "/patient-stories/2-before.webp",
      after: "/patient-stories/2-after.webp",
      name: "Invisalign<sup>®</sup>",
    },
    {
      before: "/patient-stories/3-before.webp",
      after: "/patient-stories/3-after.webp",
      name: "Invisalign<sup>®</sup> / Composite Bonding",
    },
    {
      before: "/patient-stories/4-before.webp",
      after: "/patient-stories/4-after.webp",
      name: "Composite Bonding",
    },
  ],
};
export const IMPLANTS_SMILE = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  texture: true,
  images: [
    {
      before: "/carousel/1-before-implants.webp",
      after: "/carousel/1-after-implants.webp",
      name: "Dental Implants",
    },
    {
      before: "/carousel/2-before-implants.webp",
      after: "/carousel/2-after-implants.webp",
      name: "Dental Implants",
    },
    {
      before: "/carousel/3-before-implants.webp",
      after: "/carousel/3-after-implants.webp",
      name: "Dental Implants",
    },
  ],
};
export const FULL_SMILE = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  texture: true,
  images: [
    {
      before: "/carousel/1-before.webp",
      after: "/full-arch/after.webp",
      name: "Full Arch Implants",
    },
    {
      before: "/carousel/2-before.webp",
      after: "/carousel/2-after.webp",
      name: "Full Arch Implants",
    },
    {
      before: "/carousel/3-before.webp",
      after: "/carousel/3-after.webp",
      name: "Full Arch Implants",
    },
  ],
};
export const PATIENT_TESTIMONIALS = [
  "“I went for an Invisalign<sup>®</sup> consultation, covid precautions were well done throughout the practice. The Invisalign<sup>®</sup> consultant was very knowledgeable, and the scanning process was quick, easy and painless. She (the treatment co-ordinator) didn’t pressure me into signing up for anything. Dr Naiz was professional and courteous, he made sure I understood everything properly and again there was no pressure to go ahead. I definitely recommend this practice.”",
  "“Natalia has given me so much confidence with my new teeth and I can’t stop smiling! The amount of compliments I’ve had is unbelievable. I couldn’t recommend Natalia enough, it was such an easy and warming process. I enjoyed every moment of it!”",
  "“Before composite bonding with Natalia I was very self-conscious as I had a baby tooth that was much small than the rest of my teeth. I would never smile in photos as I hated my smile! Since having composite bonding, I have a lot more confidence and I'm so happy with my new smile! I've had so many compliments on my teeth since composite bonding and couldn't be any happier with the result! I would 100% recommend Natalia as she was very patient and understanding with how I wanted my teeth to be, she made me feel at ease and explained everything perfectly.”",
  "“Recently had my teeth straightened and whitened with Dr Naiz and I feel so confident with my new smile.<br><br> Would highly recommend :)”",
  "“I'm Rebecca Griffiths and two years ago I decided i wanted that perfect smile. From the very beginning Dr Naiz and Dr Natalia were so helpful, talking me through every step of the journey and always answering my many questions! I started off with Invisalign<sup>®</sup> and then had whitening and composite bonding to finish it all off. I am so so happy with my new smile and can't thank them, the dental nurses and the TCOs enough for helping me feel 100x more confident.”",
  "“Great service! Seen doctor Khan, everything was explained to me, absolutely no pain during treatment and professional and skilled nurse - and I need to mention that before I was always scared of dentists 😁 highly recommend!”",
  "“I am so glad that I have taken the decision to have implants. Natalia was very patient and caring. She is a perfectionist and flexible in her patient plan. She took great care to explain every step of the procedure and is happy to repeat. She is reassuring at every step and I am happy with my implants. I don’t know I took so long to do this and I won’t hesitate in future. I can heartfully recommend Natalia and I have great confidence in her skill.”",
  "“I had braces before but my teeth moved from not wearing my retainers. I got Invisalign<sup>®</sup> with Dr Naiz and couldn't be happier, <br><br>highly recommend!!!”",
  "“I wanted my teeth straightened an whitened as I had braces before but they had started to move back. I have never had so many compliments on my smile before, I am so happy with them and can't stop smiling.<br><br> Thanks Naiz”",
  "“My teeth moved since I had braces when I was 18. I didn't want to have fixed braces again so decided to go for Invisalign<sup>®</sup>. I'm so glad I found Dr Naiz, he's so friendly and my journey has been great!”",
  "“I wanted straighter teeth and one of my top ones to move down like the others. I didn't feel any pain when wearing the aligners. I am really happy with my straight teeth, I feel more confident and I smile more now. Dr Khan has been great all through my treatment. I would recommend to anyone looking to straighten their teeth.”",
  "“My teeth moved after having braces when I was younger and I came to Naiz to get them straightened and the gap closed. He was amazing throughout the whole journey, very helpful, friendly and made me feel at ease. Now I have my perfect smile and I love it. Thank you Naiz and team :)”",
  "“Just started my Invisalign<sup>®</sup> journey with Dr Naiz and it's been brilliant so far. The consultation and clincheck stages went so smoothly and I'm so glad I chose to do it. <br><br>Can't wait to start noticing changes :)”",
  "“I was very nervous at the start of my first consultation with Natalia as I was unsure of the treatment she would recommend. Natalia  welcomed me with a warm smile & made me feel very relaxed & calm. She explained everything in great detail; listening attentively to my concerns & gave me sound advice as to how we could proceed & what would be the best result.”",
  "“On the day of my treatment with all the facts outlined she gave me the confidence that a good result would be achieved. During the treatment both Natalia & her assistant were attentive, caring & very professional checking constantly that I was comfortable. I am delighted with the result which looks very natural. It has made a huge difference & I feel able to smile naturally without being conscious of not showing my teeth.”",
];
export const SLIDES_TEAM = [
  {
    videoSrc: "/team-corousel1.mp4",
    text: "",
    poster: "/team-corousel-poster1-alt.webp",
  },
  {
    videoSrc: "/team-corousel2.mp4",
    text: "",
    poster: "/team-corousel-poster2.webp",
  },
  {
    videoSrc: "/team-corousel3.mp4",
    text: "",
    poster: "/team-corousel-poster3.webp",
  },
  {
    imageSrc: "/meet-the-team-corousel.JPG",
    text: "The NUYU Team in Action",
  },
  {
    imageSrc: "/meet-the-team-corousel2.JPG",
    text: "Your Smile in Trusted Hands",
  },
  {
    imageSrc: "/meet-the-team-corousel3.webp",
    text: "A Concierge-led Experience from Start to Finish",
  },
  {
    imageSrc: "/meet-the-team-corousel4.webp",
    text: "A Concierge-led Experience from Start to Finish",
  },
  {
    imageSrc: "/meet-the-team-corousel5.webp",
    text: "A Concierge-led Experience from Start to Finish",
  },
  {
    imageSrc: "/meet-the-team-corousel6.JPG",
    text: "A Concierge-led Experience from Start to Finish",
  },
];
export const TEAM_HOVER_IMAGE = {
  description:
    "At NUYU Dental & Aesthetics, every patient is treated with the utmost care and attention. Whether you're visiting for everyday dentistry, a transformative treatment, or a confidence boost, our team is here to make every step feel seamless.",
  buttonText: "Get to Know Us",
  buttonLink: "#team",
  hoverImage: "/on_hover.webp",
  defaultImage: "/normal.webp",
};
export const SINGLE_TEAM_HOVER_IMAGE = {
  description:
    "At NUYU Dental & Aesthetics, every patient is treated with the utmost care and attention. Whether you're visiting for everyday dentistry, a transformative treatment, or a confidence boost, our team is here to make every step feel seamless.",
  buttonText: "Contact us",
  buttonLink: "/contact-us",
  hoverImage: "/on_hover.webp",
  defaultImage: "/normal.webp",
};
export const APPOINTMENT_SECTION_JOURNEY = {
  title: "Book an appointment",
  description:
    "Are you ready to discover your healthiest smile? Book an appointment at our West London dental practice today.",
  buttonText: "BOOK A FREE APPOINTMENT",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const TEWKESBURY_APPOINTMENT = {
  title: "Book Your Appointment Today",
  description:
    "Why wait to achieve the smile you’ve always wanted? Whether you’re considering Invisalign®, Teeth Whitening, or simply looking for a trusted private dentist near you, NUYU Dental & Aesthetics is here to help. Visit our Cheltenham clinic — less than 20 minutes from Tewkesbury — and call today or book online in just a few clicks. Your confident, healthy smile starts here.",
  buttonText: "BOOK A FREE APPOINTMENT",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const CIRENCESTER_APPOINTMENT = {
  title: "Book Your Appointment Today",
  description:
    "Your perfect smile is closer than you think. Whether you’re considering Invisalign®, teeth whitening, or dental implants near Cirencester, NUYU Dental & Aesthetics is here to help.</br></br>Visit us in Cheltenham — just a short drive from Cirencester — or <a href='/contact-us' class='font-bold' >book your consultation online</a> today. Your journey to a healthier, more confident smile starts here.",
  buttonText: "BOOK A FREE APPOINTMENT",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const GLOUCESTERSHIRE_APPOINTMENT = {
  title: "Book Your Appointment Today",
  description:
    "Why wait to feel confident in your smile? Whether it’s Invisalign®, Teeth Whitening, or finding a private dentist near you, NUYU Dental is ready to help.<br/><br/>Visit us in Cheltenham — proudly serving patients from Gloucester. Call today or book online in minutes. Your best smile is closer than you think.",
  buttonText: "BOOK A FREE APPOINTMENT",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const APPOINTMENT_SECTION_STRAIGHT = {
  title: "NUYU, How Can We Make You Smile Today?",
  description:
    "Take the first step towards achieving a healthier, more confident smile and a rejuvenated appearance that reflects your true self. Our <a class='font-bold' href='/about-us/team'>team</a> at NUYU Dental and Aesthetics is dedicated to delivering personalised, high-quality care in a warm and welcoming environment. Contact us today to schedule your initial consultation and discover how we can redefine your <a class='font-bold' href='/'>dental and aesthetic</a> care experience.",
  buttonText: "BOOK YOUR CONSULTATION TODAY",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const APPOINTMENT_SECTION_KIDS = {
  title: "NUYU, How Can We Make You Smile Today?",
  description:
    "Take the first step towards achieving a healthier, more confident smile and a rejuvenated appearance that reflects your true self. Our <a class='font-bold' href='/about-us/team'>team</a> at NUYU Dental and Aesthetics is dedicated to delivering personalised, high-quality care in a warm and welcoming environment. Contact us today to schedule your initial consultation and discover how we can redefine your <a class='font-bold' href='/'>dental and aesthetic</a> care experience.",
  buttonText: "BOOK YOUR CONSULTATION TODAY",
  buttonLink: "/contact-us",
  backgroundImage: "/patient-journey.webp",
  imageSrc: "/book-oppointment-image.avif",
};
export const TEETH_STRAIGHT_QUALITY_CARE = {
  heading: "Smile Straightening Made Simple",
  para: `Everyone deserves to feel confident and proud of their smile. At<a href='/' class='font-bold'> NUYU Cheltenham</a>, we offer cost-effective orthodontic solutions designed to help you achieve your dream smile without breaking the bank. With <a href='/our-pricing/dental-plans' class='font-bold'>flexible payment plans</a> and upfront pricing options, we ensure that your treatment fits seamlessly into your financial circumstances.`,
  image: "/invisalign/straight-align-couple.webp",
  buttons: [{ name: "BOOK A CONSULTATION", href: "/contact-us" }],
};
export const FEES_MAIN = {
  heading: "NUYU Fee Guide",
  para: `Advanced care, bespoke to you
(Pricing starts from the listed fees and is tailored to your needs after a consultation)`,
  tabs: [
    {
      name: "Straighten & Align",
      imageSrc: "/assess-maintain.svg",
      tabsContent: [
        {
          heading: "Straighten & Align",
          subHeading: "Confidence starts with alignment",
          table: [
            {
              title: "Orthodontic Consultation",
              para: "(Explore your smile straightening options) ",
              cost: "FREE",
            },
            {
              title: "Invisalign<sup>®</sup>",
              para: "(Clear aligners for a discreet transformation)",
              cost: "from £2,295",
            },
            {
              title: "Fixed Braces",
              para: "(traditional teeth straightening)",
              cost: "from £2,995",
            },
            {
              title: "Retainers (per arch)",
              para: "(Maintain your results with custom-fit retainers)  - (first set included)",
              cost: "£149",
            },
            {
              title: "Vivera<sup>®</sup> Retainers ",
              para: "(Premium retainers for lasting results, 3 sets)",
              cost: "£550",
            },
          ],
        },
      ],
    },
    {
      name: "Whiten & Enhance",
      imageSrc: "/whiten.svg",
      tabsContent: [
        {
          heading: "Whiten & Enhance",
          subHeading: "Subtle refinements to full smile transformations",
          table: [
            {
              title: "Teeth Whitening ",
              para: "(Brighten your smile for a fresher appearance) ",
              cost: "from £395",
            },
            {
              title: "Edge Bonding ",
              para: "(Perfect minor chips and refine tooth shape) ",
              cost: "from £350/tooth",
            },
            {
              title: "Digital Smile Design & Smile Trial ",
              para: "(Visualise your future smile before treatment) ",
              cost: "£350",
            },
            {
              title: "Composite Bonding",
              para: "(Enhance, reshape, and perfect your smile with sculpted composite veneers) ",
              cost: "from £350/tooth",
            },
            {
              title: "Ceramic Veneers",
              para: "(Premium, natural-looking, and bespoke to you)",
              cost: "from £949/tooth",
            },
            {
              title: "Gum Contouring",
              para: "(Reshape and refine for a balanced smile)",
              cost: "from £195/tooth",
            },
          ],
        },
      ],
    },
    {
      name: "Prevent & Protect",
      imageSrc: "/enhance.svg",
      tabsContent: [
        {
          heading: "Prevent & Protect",
          subHeading: "Advanced restorations to rebuild and protect your smile",
          table: [
            {
              title: "New patient Oral Health Assessment",
              para: "Includes x-rays and a 3D optical scan as needed",
              cost: "£69",
            },
            {
              title: "Existing Patients Oral Health Assessment",
              cost: "£59",
            },
            {
              title: "Hygiene Therapy",
              para: "Professional clean for to your oral health needs",
              cost: "£89",
            },
            {
              title: "Extended Hygiene Therapy ",
              para: "A comprehensive deep clean (also recommended for new patient first-time hygiene visits)",
              cost: "£119",
            },
            {
              title: "Composite Bonding Maintenance (Shine & Polish) ",
              para: "Revitalise and refresh your bonding for long-lasting brilliance",
              cost: "£120",
            },
          ],
        },
      ],
    },
    {
      name: "Implant & Replace",
      imageSrc: "/restore.svg",
      tabsContent: [
        {
          heading: "Implant & Replace",
          subHeading:
            "For missing teeth, natural-looking replacements that last",
          table: [
            {
              title: "Implant Consultation",
              para: "(Discuss your options with our implant expert)",
              cost: "£99",
            },
            {
              title: "CBCT Scan",
              para: "(Precision 3D imaging for treatment planning)",
              cost: "£249",
            },
            {
              title: "Single Dental Implant with Crown ",
              para: "(A permanent, natural-looking solution)",
              cost: "£3,149",
            },
            {
              title: "Full Arch Implants",
              para: "(A complete smile with just a few implants)",
              cost: "£17,995",
            },
            {
              title: "Dentures",
              para: "(Custom-designed for comfort and aesthetics)",
              cost: "from £749",
            },
            {
              title: "Implant-Supported Dentures ",
              para: "(Custom-designed for comfort and aesthetics)",
              cost: "from £749",
            },
          ],
        },
      ],
    },
    {
      name: "Everyday Dentistry",
      imageSrc: "/repair.svg",
      tabsContent: [
        {
          heading: "Everyday Dentistry",
          subHeading: "Your long-term smile health starts here",
          table: [
            {
              title: "Composite Filling",
              para: "(Tooth-coloured repairs for a natural finish)",
              cost: "from £169",
            },
            {
              title: "Tooth Extraction ",
              para: "(Careful removal of hopeless teeth to support oral health)",
              cost: "from £199",
            },
            {
              title: "Root Canal Treatment",
              para: "(Treats infection while preserving your natural tooth)",
              cost: "from £499",
            },
            {
              title: "Periodontal Treatment",
              para: "(Comprehensive care to restore and maintain gum health)",
              cost: "from £119",
            },
            {
              title: "Ceramic Crown / Veneer / Inlay / Bridge",
              para: "(Durable, custom restorations designed for function and aesthetics)",
              cost: "from £949",
            },
            {
              title: "Emergency Consultation (Assessment & Advice)",
              para: "Includes a small x-ray, with treatment options discussed separately",
              cost: "£99",
            },
          ],
        },
      ],
    },
    {
      name: "Aesthetics & Body Confidence",
      imageSrc: "/repair.svg",
      tabsContent: [
        {
          heading: "Aesthetics & Body Confidence",
          subHeading:
            "Subtle enhancements for a refreshed, youthful appearance",
          table: [
            {
              title: "Wrinkle-relaxing treatments",
              para: "(Smooth lines & prevent signs of ageing)",
              cost: "from £180",
            },
            {
              title: "Dermal Fillers",
              para: "(Restore volume and enhance natural contours)",
              cost: "from £240",
            },
            {
              title: "Skin Boosters & Hydration Treatments ",
              para: "(Deep skin nourishment for a radiant glow)",
              cost: "from £250",
            },
            {
              title: "Lip Enhancement",
              para: "(Natural-looking definition and fullness)",
              cost: "from £240",
            },
            {
              title: "Profhilo<sup>®</sup> Skin Rejuvenation",
              para: "(A deep-acting treatment for skin elasticity)",
              cost: "£280",
            },
          ],
        },
      ],
    },
  ],
};
export const LAUNCH_OFFERS = [
  {
    heading: "Early Access - New Patient Examination",
    para: `The first 50 patients will qualify for their New Patient Examination at £65*`,
    btn: "Register Your Interest",
    href: "#form",
    image: "/launch/offer-1.webp",
    reverse: false,
  },
  {
    heading: "£1792 Off Invisalign – Limited Launch Offer!",
    para: "Achieve a straighter smile with <strong>£1792 off Invisalign,</strong> which includes <strong>free retainers and teeth whitening.</strong> 0% interest-free finance available—don’t miss out!",
    btn: "Claim Your Invisalign Offer ",
    href: "#form",
    image: "/launch/offer-2.webp",
    reverse: true,
  },
  {
    heading: "NUYU Smile Makeover Package",
    para: "Transform your smile with <strong>10% off composite bonding or veneers,</strong> plus a <strong>free digital smile design*</strong> to visualise your results.",
    btn: "Book Your Free Smile Consultation ",
    href: "#form",
    image: "/launch/offer-3.webp",
    reverse: false,
  },
  {
    heading: "Exclusive Dental Implant Offer – Restore Your Smile",
    para: "<strong>Free consultation and CBCT scan*</strong> when you go ahead with a dental implant treatment. Secure your spot today — only available for the first 25 patients!",
    btn: "Reserve Your Free Consultation ",
    href: "#form",
    image: "/launch/offer-4.webp",
    reverse: true,
  },
  {
    heading: "NUYU Facial Aesthetics – Refresh & Rejuvenate",
    para: "Enhance your natural beauty with <strong>Lana, our Medical Nurse Prescriber.</strong> Enjoy a <strong>free skin consultation + £25 off your first treatment.</strong> Anti-wrinkle, dermal fillers, and skin boosters available. Only available for the first 25 patients.",
    btn: "Book Your Free Consultation ",
    href: "#form",
    image: "/launch/offer-5.webp",
    reverse: false,
  },
  // {
  //   heading: "50% Off Boutique Teeth Whitening – Limited Offer!",
  //   para: "Brighten your smile for just <strong>£195</strong> (normally £395). Book now and save <strong>50% on professional home teeth whitening!</strong>",
  //   btn: "Book Your Whitening Treatment ",
  //   href: "#form",
  //   image: "/launch/offer-7.webp",
  //   reverse: true,
  // },
];
export const ALL_ON_4_WHY_CHOOSE = [
  {
    number: "/all-on-four/choose-1.png",
    title: "Results That Feel Like You",
    description:
      "Behind every smile is carefully planned technology and artistry. With full arch implants, your new teeth are designed to look, feel, and function naturally, blending seamlessly with your facial structure. It’s not just about replacing teeth - it’s about restoring your confidence in a way that feels completely you.",
  },
  {
    number: "/all-on-four/choose-3.png",
    title: "Live Fully, Eat Freely",
    description:
      "Missing teeth can affect the simple joys of life - sharing a meal, speaking clearly, or laughing freely. Full arch implants restore strength, stability, and comfort, so you can eat the foods you love, speak with ease, and enjoy every moment without hesitation.",
  },
  {
    number: "/all-on-four/choose-4.png",
    title: "Same Day Smile",
    description:
      "Full arch implants provide a fixed solution with same-day provisional teeth, so you walk out with a full smile on the day of your procedure in most cases. As healing progresses, your final custom bridge will be crafted for long-term comfort and aesthetics, ensuring a beautiful, lasting result.",
  },
  {
    number: "/all-on-four/choose-5.png",
    title: "A Choice That Supports Your Health",
    description:
      "Tooth loss affects more than just your smile - it can lead to bone loss, changes in facial structure, and strain on remaining teeth. Full arch implants help preserve jawbone health, maintain facial contours, and distribute bite pressure evenly, supporting your overall well-being for years to come.",
  },
  {
    number: "/implants.svg",
    title: "A Long-Term Investment in You",
    description:
      "Decades of research have shown that titanium implants provide a strong, lasting foundation for your smile. Designed for long-term durability and stability, <a href='/full-arch-dental-implants-cheltenham'>full arch implants</a> integrate naturally with your bone, offering a secure and confident solution that stands the test of time. It’s an investment not just in your smile, but in your quality of life.",
  },
];
export const ALL_ON_4_HEADER = {
  headingone2: "All on Four Dental Implants in Cheltenham",
  headingtwo2:
    "Same Day Smiles with Full Arch Dental Implants at NUYU Cheltenham",
  description: `Losing most or all of your teeth can be overwhelming, but modern implant solutions mean you don’t have to settle for removable dentures. Full arch implants (also known as ‘all-on-4’ dental implants or 'all-on-6’ dental implants) offer a permanent, natural-looking alternative - restoring function, confidence, and quality of life.<br/><br/>At NUYU Dental & Aeshetics, we use precisely planned, digitally guided techniques to design and place a full set of fixed teeth, secured by just four or six implants per arch. With this approach, many patients walk out with a fully restored smile the same day.`,
  image: "/header-image-v3.webp",
};
export const ALL_ON_4_REPLACE = {
  heading: "A Smile That Moves with You",
  para: "Losing teeth can be a deeply personal journey, and for many, the decision to seek treatment takes time. Whether you’ve been living with missing teeth for years or have found that your remaining teeth are no longer restorable, you’re not alone - and it’s never too late to regain a smile that feels like yours.<br/><br/>Your teeth do more than just help you eat; they shape how you speak, express yourself, and feel in everyday life. When they’re lost, simple things - like sharing a meal, laughing freely, or feeling confident in conversations - can start to feel different. Full arch implants are designed to bring back that ease, restoring not just the look of your smile, but its natural movement and stability.<br/><br/>With a secure, fixed foundation, full arch implants allow you to enjoy life without worry or hesitation. No slipping, no discomfort - just a smile that feels effortless, natural, and truly part of you once again.<br/><br/>At NUYU, we understand that taking this step can feel overwhelming, especially if you’ve waited a long time. Our role is to guide you forward with reassurance, expertise, and the latest technology to make your experience as smooth and comfortable as possible.",
  image: "/smile-that-moves.JPG",
  reverse: true,
  texture: true,
};
export const ALL_ON_4_WORK = {
  heading: "How Full Arch Implants Work",
  para: "Full arch implants are designed to replace an entire set of missing teeth with a secure, fixed solution, giving you a functional and natural-looking smile. Instead of replacing each missing tooth individually, four to six implants are placed strategically in the jaw to act as strong anchors for a custom-designed bridge.<br /><br/>These implants integrate with your jawbone, much like natural tooth roots, creating a stable foundation that supports your bite and maintains jawbone health. The result? A fully restored smile that stays in place, allowing you to eat, speak, and smile with confidence - without worrying about movement or discomfort.<br/><br/>For many patients, a temporary fixed bridge is placed on the same day, so you can leave your appointment with a complete smile immediately. Once healing is complete, your final custom bridge is fitted, designed for long-term comfort, aesthetics, and function.",
  image: "/full-arch-implants-step-2.webp",
  texture: true,
};
export const ALL_ON_4_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Is the procedure really completed in one day?",
      answer:
        "For many patients, yes! A key advantage of full arch implants is that a secure, temporary bridge is often fitted on the same day as your implant placement - meaning you won’t have to go without teeth at any point. The implants are placed using precisely planned angles for maximum stability, allowing them to support your new smile immediately.<br/><br/>Over the next few months, your implants will naturally integrate with your bone. Once healing is complete, your final custom-designed bridge is placed, ensuring a strong, lasting fit. This is why full arch implants are often referred to as Same-Day Teeth or Teeth in a Day.",
    },
    {
      question: "Who is suitable for full arch implants?",
      answer:
        "Full arch implants are ideal for people who have multiple failing or missing teeth and want a fixed, long-term alternative to dentures. They are also a great option for patients with bone loss in the jaw, as the implants are placed in areas of naturally stronger bone towards the front of the jaw, often eliminating the need for bone grafting.<br/><br/>The best way to know if full arch implants are right for you is through a detailed consultation and digital assessment, where we can evaluate your oral health and discuss the best solution for your needs",
    },
    {
      question: "Will the procedure be painful?",
      answer:
        "We understand that dental treatment can feel daunting, but our priority is to ensure your comfort every step of the way. Full arch implant procedures are performed under local anaesthesia, and for patients who feel anxious, IV sedation is available to help you relax throughout the process.<br/><br/>After treatment, some mild swelling, bruising, or soreness is normal. Most patients describe it as manageable, and any discomfort usually subsides within a few days. Some may experience a slight adjustment period with speech, but this typically resolves quickly. Our team will provide personalised aftercare guidance and support, ensuring you feel at ease as you heal.",
    },
    {
      question: "How much does full arch implant treatment cost?",
      answer:
        "The cost depends on factors like the number of implants needed, the complexity of your case, and the materials used for your final restoration.<br/><br/>At NUYU, we offer flexible payment options and finance plans to help make treatment accessible. If you're considering full arch implants, our team is happy to discuss costs, financing, and treatment timelines during your consultation.",
      btn: "Finance & Payment Plans",
      href: "dental-plans",
    },
    {
      question:
        "How are full arch implants different from traditional dentures?",
      answer:
        "Unlike traditional dentures, which rest on the gums, full arch implants are securely anchored to the jawbone, offering a fixed, natural-feeling smile with greater stability, chewing power, and a more natural look and feel. They don’t slip or need adhesives, and they help prevent bone loss in the jaw.<br/><br/>If you’re used to wearing dentures, full arch implants provide a life-changing alternative that feels more natural and worry-free.",
    },
    {
      question: "How long do full arch implants last?",
      answer:
        "Full- rch implants are designed to be a strong, durable, and lasting solution for replacing missing teeth. Their longevity depends on a combination of initial condition, expert planning, and proper maintenance over time.<br/><br/>Every patient starts with a unique oral health condition—factors like bone density, gum health, and bite pressure can influence long-term success. With precisely planned implant placement and high-quality materials, full arch implants provide a strong and stable solution, but like natural teeth, they require regular check-ups, professional cleanings, and good daily care to stay in top condition.<br/><br/>By following an aftercare plan, patients can enjoy a functional, secure smile for years to come.",
    },
    {
      question: "How do I care for my full arch implants?",
      answer:
        "Caring for full- rch implants is similar to looking after natural teeth.",
      lists: [
        "Brush twice daily with a soft-bristle toothbrush",
        "Use interdental brushes or a water flosser to clean around the implants",
        "Rinse with an antibacterial mouthwash",
        "Attend regular dental and hygiene visits to keep your implants in top condition",
      ],
      botPara:
        "We’ll provide a personalized aftercare plan tailored to your needs to help keep your smile looking and feeling its best.",
    },
    {
      question: "Are there any risks or complications?",
      answer:
        "Full arch implants have a high success rate, but as with any procedure, there are some risks, such as infection, implant failure, or temporary sensitivity. Choosing an experienced implant dentist and following your aftercare plan minimizes these risks.<br/<br/>At NUYU, every step of your treatment is meticulously planned using digital technology, ensuring precision, safety, and long-term success.",
    },
  ],
};
export const GLOUCESTERSHIRE_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "My child feels nervous about kids’ teeth straightening. How can you help?",
      answer:
        "We make the process friendly and stress-free with simple explanations, gentle care, and short visits. This builds trust and keeps your child comfortable during treatment.",
    },
    {
      question: "I’ve broken a tooth. Can an emergency dentist help immediately?",
      answer:
        "Yes, we offer same-day emergency appointments for urgent issues like broken teeth, severe pain, or swelling. Quick care can prevent further damage and ease discomfort fast.",
    },
    {
      question: "I’m searching for smile makeovers near me. What if I don’t know which treatment I need?",
      answer:
        "We start with a full smile consultation, discuss your goals, and recommend options such as whitening, veneers, or bonding. You choose the plan that feels right for you.",
    },
    {
      question: "Are anti wrinkle injections safe at a dental clinic?",
      answer:
        "Yes, we use clinically approved products and precise techniques for natural results. Treatments are carried out by trained professionals in a safe, hygienic setting.",
      btn: "Finance & Payment Plans",
      href: "dental-plans",
    },
    {
      question:
        "Will lip fillers make my smile look unnatural?",
      answer:
        "Not at all when done properly. We focus on subtle enhancements that balance your features, so your smile looks fresh and natural, not overdone.",
    },
    {
      question: "Can a cosmetic dentist fix both function and appearance?",
      answer:
        "Yes, cosmetic dentistry blends beauty with health. We can improve your bite and tooth alignment while enhancing your smile’s overall look.",
    },
  ],
};
export const CIRENCESTER_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Can I get dental treatment if I’m pregnant?",
      answer:
        "Yes, many treatments like check-ups, hygiene, and fillings are safe during pregnancy. We avoid unnecessary X-rays and tailor your care to keep you and your baby safe.",
    },
    {
      question: "I’ve broken a tooth. Can an emergency dentist help immediately?",
      answer:
        "Yes, we offer same-day emergency appointments for urgent issues like broken teeth, severe pain, or swelling. Quick care can prevent further damage and ease discomfort fast.",
    },
    {
      question: "Do you offer sedation for nervous patients?",
      answer:
        "Yes, we provide sedation options for those with dental anxiety or phobia. It helps you relax during procedures while our team ensures maximum comfort and safety.",
    },
    {
      question: "Can you fix gaps in teeth without braces?",
      answer:
        "Absolutely. Treatments like composite bonding, veneers, or Invisalign® Lite can close gaps effectively without needing traditional braces, depending on your case.",
    },
    {
      question:
        "How do I know if I need a root canal or extraction?",
      answer:
        "If a tooth is infected but salvageable, a root canal can save it. Extraction is considered only when the tooth is beyond repair, and we’ll guide you through the safest option.",
    },
    {
      question: "Is it possible to replace all my teeth in one day?",
      answer:
        "Yes, with same-day full arch implants (“teeth in a day”), we can replace an entire set of teeth securely and efficiently. A full consultation is required to confirm suitability.",
    },
    {
      question: "Can you help if my dentures keep slipping?",
      answer:
        "Yes, we can improve comfort and stability with implant-supported dentures or a better-fitting custom design. We’ll assess your current dentures and recommend the best fix.",
    },
    {
      question: "Do you treat bleeding gums or gum disease?",
      answer:
        "Absolutely. We offer advanced <a href='/treatments/prevent-protect/oral-health-assessment' class='font-bold'>hygiene treatments</a> and gum therapy to tackle early signs of gum disease. Early intervention prevents further complications and tooth loss.",
    },
    {
      question: "Can you remove stubborn brown stains on teeth?",
      answer:
        "Yes, our professional hygiene and stain removal treatments can safely eliminate deep discolouration caused by tea, coffee, smoking, or medication — restoring a brighter smile.",
    },
    {
      question: "Can you help with bad breath that doesn’t improve with brushing?",
      answer:
        "Yes, persistent bad breath often indicates underlying issues like gum disease or tartar build-up. We diagnose the cause and offer hygiene treatments to restore fresh breath.",
    },
    {
      question: "Do you offer second opinions on treatment plans?",
      answer:
        "Yes, we welcome patients seeking reassurance or alternative options. We’ll review your case thoroughly and provide clear, honest advice so you can make an informed decision.",
    },
  ],
};
export const TEWKESBURY_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Can I bring a child or friend with me if I feel anxious about dental treatment?",
      answer:
        "Yes, of course. You’re welcome to bring a companion for support. We’re happy to accommodate them in the waiting area or, if needed, in the treatment room to help you feel more comfortable during your visit.",
    },
    {
      question: "Are there any parking restrictions at the Cheltenham clinic for patients from Tewkesbury?",
      answer:
        "Not at all. NUYU Dental & Aesthetics offers free on-site parking for all patients. If you prefer public transport, <a href='https://www.nationalrail.co.uk/stations/cheltenham-spa/' class='font-bold'>Cheltenham Spa train station</a> is nearby, with taxis readily available to reach us easily.",
    },
    {
      question: "Can I still book emergency dental care if I’m not currently registered with you?",
      answer:
        "Absolutely. We welcome both new and returning patients for urgent appointments. If you’re experiencing pain, infection, or trauma, call us straight away, and we’ll prioritise your care.",
    },
    {
      question: "I’ve had NHS dental treatment before — can I switch to private care at NUYU Dental?",
      answer:
        "Yes, you can. We’ll review your dental history and create a personalised treatment plan that suits your needs. You’ll also receive a clear breakdown of costs and options before starting.",
    },
    {
      question:
        "How do you manage tooth sensitivity after whitening treatments?",
      answer:
        "Some people experience mild, temporary sensitivity after whitening. We recommend using a soft-bristled toothbrush and sensitivity toothpaste. Symptoms usually settle quickly, but you can contact us if they persist.",
    },
    {
      question: "Will orthodontic treatment mean lots of appointments in Cheltenham?",
      answer:
        "Not at all. With Invisalign® and modern braces, follow-up visits are typically every 6–8 weeks and are usually quick — most take less than 20 minutes. It’s easy to fit into your schedule, even if you’re travelling from Tewkesbury.",
    },
    {
      question: "Does smoking affect the success of dental implants?",
      answer:
        "Yes, it can. Smoking slows down healing and increases the risk of implant failure. We recommend stopping or reducing smoking before treatment, and our team can offer guidance to support you.",
    },
    {
      question: "Can I book a whitening top-up after my initial treatment?",
      answer:
        "Certainly. Over time, natural discolouration can return, and we can arrange top-up sessions to maintain your brightness. In most cases, home whitening every 6–12 months works well.",
    },
    {
      question: "What happens if I relocate back to Tewkesbury while I’m mid-treatment?",
      answer:
        "No problem. We’ll create a treatment plan that allows for flexibility, and if needed, we can refer you to a trusted local partner so your care continues smoothly without disruption.",
    },
    {
      question: "How long do lip fillers and facial fillers last, and are they safe?",
      answer:
        "At NUYU Dental & Aesthetics, our lip fillers and <a href='/treatments/aesthetics-body-confidence' class='font-bold'>facial fillers</a> are administered by qualified professionals using medically approved products. Results usually last 6 to 12 months, and we tailor each treatment for a natural, refreshed appearance.",
    },
  ],
};
export const ALIGN_STRAIGHT_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "What teeth straightening options do you offer at NUYU?",
      answer:
        "We offer a range of discreet, effective solutions including clear aligners and cosmetic braces, carefully chosen to suit your lifestyle and smile goals.",
    },
    {
      question: "How do I know which straightening treatment is right for me?",
      answer:
        "At your consultation, we’ll take the time to listen to your concerns, assess your smile, and recommend the best option to achieve your desired results.",
    },
    {
      question: "Are clear aligners really invisible?",
      answer:
        "Clear aligners are designed to be virtually invisible, fitting snugly over your teeth so you can straighten your smile discreetly and confidently.",
    },
    {
      question: "How long does teeth straightening usually take?",
      answer:
        "Treatment times vary depending on your individual needs, but many patients start seeing results within a few months. We’ll give you a personalised timeline during your consultation.",
    },
    {
      question: "Will teeth straightening be uncomfortable?",
      answer:
        "You may experience some mild pressure when you begin treatment or change aligners, but it’s a sign your teeth are gently moving. Most patients adapt quickly and find the process very manageable.",
    },
    {
      question: "Can adults have their teeth straightened?",
      answer:
        "Absolutely! It’s never too late to achieve the smile you’ve always wanted. Many of our patients are adults seeking a beautifully straight, confident smile.",
    },
    {
      question: "How often will I need to visit during treatment?",
      answer:
        "We’ll see you for regular reviews to check your progress and make any necessary adjustments, but appointments are usually quick and flexible around your schedule.",
    },
    {
      question: "Will I need to wear a retainer after treatment?",
      answer:
        "Yes, wearing a retainer is essential to maintain your beautiful new smile. Don’t worry - we’ll guide you through everything and make sure your retainer is comfortable and easy to wear.",
    },
    {
      question: "Is teeth straightening safe?",
      answer:
        "When carried out by experienced professionals like our team at NUYU Cheltenham, teeth straightening is extremely safe. Your oral health and comfort are always our top priorities.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply get in touch with us to arrange your consultation. We can't wait to help you start your journey towards a straighter, more confident smile.",
    },
  ],
};
export const TREATMENT_JOURNEY_ALL_ON_4 = {
  heading: "Your Full Arch Implant Journey at NUYU",
  texture: true,
  para: "Restoring your smile is a big step, and we’re here to make the experience as comfortable and rewarding as possible. At <a class='font-bold' href='/'>NUYU</a>, every stage of your journey is carefully planned using advanced digital technology and expert-led care. From the moment you walk through our doors to the day you leave with a beautifully restored smile, we’re with you every step of the way.",
  boxes: [
    {
      heading: "Consultation & Digital Assessment – Understanding Your Smile",
      para: "Your journey starts with a one-on-one consultation, where we take the time to listen to your goals and answer any questions. Using high-resolution CBCT scans and digital impressions, we build a detailed 3D model of your mouth to assess your bone structure, gum health, and suitability for full arch implants.<br/><br/>At NUYU, we believe knowledge is power—so we’ll guide you through every detail of your treatment options, ensuring you feel informed and confident before moving forward.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Custom Smile Design & Digital Preview – See the Possibilities",
      para: "A new smile should feel as natural as it looks. Using innovative digital software, we design your full arch restoration to complement your facial structure, bite alignment, and natural aesthetics.<br/><br/>For those who want to be more involved, we can even show you a digital preview of your future smile, allowing you to visualise your results before treatment even begins. Every aspect is carefully considered, so your final smile feels just right.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Precision-Guided Implant Placement – A Secure Foundation",
      para: "Using computer-guided accuracy, your implants are placed to ensure maximum precision, comfort, and efficiency. Between four, six or eight implants are strategically positioned to act as a strong foundation for your new teeth, restoring strength and stability to your bite.<br/><br/>This is the step where science meets artistry, as we place your implants with precision to create a smile that looks, feels, and functions naturally.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "A New Smile from Day One – Immediate Confidence",
      para: "One of the most exciting aspects of Full Arch implants is that, in most cases, you won’t leave with gaps or waiting periods - we fit a provisional fixed bridge on the same day as your implant placement, so you can step out with a secure, functional, and natural-looking smile immediately.<br/><br/>It’s an instant transformation, allowing you to eat, speak, and smile with confidence from day one while your implants heal.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Healing & Integration – A Stronger Foundation Every Day",
      para: "Over the next few months, your implants naturally integrate with your jawbone, becoming a fixed, stable foundation for your final bridge. During this time, you’ll wear your provisional smile, giving you the freedom to enjoy life while your body does the rest of the work.<br/><br/>Our team will be here throughout your healing process, ensuring everything progresses smoothly and providing guidance on caring for your implants and maintaining oral health.",
      image: "/tj-5.webp",
      reverse: false,
    },
    {
      heading: "Final Fit & Long-Term Smile Care – A Lasting, Confident Smile",
      para: "Once your implants are fully integrated, it’s time for the final step—the placement of your custom-designed, final bridge. Crafted with expert attention to detail, your final restoration is designed to be strong, natural-looking, and built to last.<br/><br/>Beyond just placement, we’re here for the long run. With regular hygiene visits and an aftercare plan, we’ll help you keep your new smile looking and feeling its best for years to come.<br/><br/>At NUYU, your smile isn’t just about replacing teeth—it’s about restoring confidence, function, and the ability to enjoy life fully again.",
      image: "/tj-6.webp",
      reverse: true,
    },
  ],
};
export const ALL_ON_4_SMILE_SUCCESS = {
  heading: "Smile Success Stories",
  para: "A beautifully restored smile can make a real difference - see how Full Arch implants provide a natural look, lasting comfort, and the confidence to enjoy life fully.",
  images: [
    {
      before: "/full-arch-pge/1.png",
      after: "/full-arch-pge/2.png",
      name: "Full Arch Treatment",
    },
    {
      before: "/full-arch-pge/3.png",
      after: "/full-arch-pge/4.png",
      name: "Full Arch Treatment",
    },
    {
      before: "/full-arch-pge/5.png",
      after: "/full-arch-pge/6.png",
      name: "Full Arch Treatment",
    },
  ],
};
export const IMPLANTS_BONDONG_HEADER = {
  headingOne: "Maintaining Implants & Bonding for Lasting Confidence",
  description: `At NUYU Cheltenham, we understand that choosing dental implants or composite bonding is more than just a treatment – it’s an investment in your smile, confidence, and wellbeing. As with any meaningful investment, long-term care is essential to protect and preserve the results.<br/><br/>Implants and bonding are designed for longevity, but like all aspects of your health, they require thoughtful maintenance to remain at their best. Our expert team in Cheltenham is here to support you every step of the way – offering personalised guidance, regular check-ups, and the latest in preventive care.`,
  image: "/header-image-v3.webp",
};
export const DENTAL_CROWNS_HEADER = {
  headingOne: "Beautifully Crafted Dental Crowns at NUYU Cheltenham",
  description: `A dental crown is a popular and long-lasting solution for weakened or damaged teeth. In some cases, a crown may also be used to enhance the appearance of your smile.<br/><br/> At NUYU Cheltenham, we ensure you benefit from the latest advancements in dental technology when receiving a crown.<br/><br/>We offer a variety of high-quality materials to suit a range of budgets, and thanks to our in-house 3D printing technology, same-day crowns are now possible for many patients. Digital scanning ensures a precise fit from the start, while the shape and shade of each crown is fully customised to blend seamlessly with your natural smile.`,
  buttonText: "BOOK YOUR CONSULTATION",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
};
export const DENTAL_CROWNS_BENEFITS = {
  heading: "The Benefits of a Dental Crown",
  para: "A dental crown is a highly effective solution for restoring and protecting a damaged or weakened tooth. It provides essential strength and support - preventing further breakage while allowing you to bite and chew comfortably. Crowns are custom-made to match the natural shape and colour of your teeth, ensuring a seamless and aesthetically pleasing result.<br/><br/>They are particularly beneficial for teeth that have undergone a root canal, have large fillings, or are at risk of further decay. Acting as a protective barrier, a crown helps to preserve your natural tooth structure while enhancing durability and longevity. With the right care, a high-quality crown can last for many years, offering both functional and cosmetic benefits.<br/><br/>At <a class='font-bold' href='/'>NUYU in Cheltenham</a>, we use the latest technology and materials to craft crowns that restore strength, function, and confidence, giving you a healthy, beautiful smile that lasts.",
  image: "/dental-crown.webp",
  reverse: true,
  texture: true,
};
export const DENTAL_CROWNS_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Will my dental crown feel different to my natural teeth?",
      answer:
        "Initially, you might notice that the crown feels slightly different from your natural tooth. This is because the shape and texture of the crown can be a bit unfamiliar at first. However, this sensation is typically temporary. As you get used to the new crown, it should begin to feel completely normal within a few days.<br/><br/> The adjustment period can vary from person to person, but it's common for any minor discomfort or odd sensation to subside quickly. If you continue to feel that the crown is not fitting properly or if it causes discomfort after a week or so, it's important to contact your dentist. They can make any necessary adjustments to ensure a perfect fit. ",
    },
    {
      question: "How should I take care of my dental crown?",
      answer:
        "The longevity of a dental crown largely depends on your oral hygiene practices. While the crown itself cannot decay, decay can occur at the junction where the crown meets the natural tooth.<br/>To ensure the best care for your crown, follow these steps:",
      lists: [
        "Visit your dentist and hygienist at NUYU Dental and Facial regularly for check-ups and cleanings.",
        "Brush your teeth twice a day with fluoride toothpaste.",
        "Floss daily and use interdental cleaners, such as specially shaped brushes and sticks, to remove plaque around the crown.",
      ],
      botPara:
        "By maintaining good oral hygiene, you can help ensure your crown lasts for many years.",
    },
    {
      question: "Can I eat normally with a temporary crown?",
      answer:
        "While you can eat with a temporary crown, it's best to avoid hard, sticky, or chewy foods that could dislodge it. Stick to softer foods until your permanent crown is in place to ensure the temporary crown stays secure.",
    },
  ],
};
export const DENTAL_PLANS_HEADER = {
  headingone2: "Private Dental Payment Plans – Affordable Options Near You",
  headingtwo2: "Dental Plans",
  description: `At NUYU Dental & Aesthetics, our dental plans are designed to make exceptional dental care more accessible and affordable for our patients. By joining a plan, you can enjoy regular check-ups, hygiene appointments, and preventative care, ensuring your oral health is always a priority.<br/><br/>Our plans help spread the cost of your routine dental care into manageable monthly payments, giving you peace of mind and helping to prevent unexpected dental issues. Plus, as a member, you’ll benefit from exclusive discounts on treatments and priority access to appointments, ensuring you receive the highest standard of care whenever you need it.`,
  // buttonText:
  //   "Experience the confidence of a beautifully aligned smile today at NUYU.",
  // buttonHref: "/",
  image: "/header-image-v3.webp",
  flowerImage: true,
  paddingBot: true,
};
export const HYGIENE_HEADER = {
  headingOne:
    "Refresh Your Smile with Expert Hygiene Care in Cheltenham at NUYU!",
  description: `Brushing and flossing are essential for maintaining good oral health and a bright smile, but regular hygiene appointments provide a deeper level of care that at-home routines can’t achieve.<br/><br/> At <a class='font-bold' href='/'>NUYU in Cheltenham</a>, we have invested in the latest EMS technology with Guided Biofilm Therapy, ensuring a gentle yet highly effective cleaning experience. Our hygienists use this state-of-the-art equipment to remove plaque, tartar, and harmful bacteria with precision, helping to keep your teeth and gums in optimal condition. Regular hygiene visits not only enhance your smile but also play a vital role in preventing gum disease and maintaining long-term oral health.`,
  buttonText: "BOOK A HYGIENE APPOINTMENT",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
};
export const HYGIENE_GUM = {
  heading: "Preventing Gum Disease",
  para: `One of the biggest benefits of regular hygiene appointments is the prevention of gum disease, which often develops silently without noticeable symptoms until it reaches an advanced stage. <a class='font-bold' href='/about-us/team'>Our hygienists</a> can detect early signs of gum disease before it becomes a serious issue, helping to protect both your oral and overall health. Research has linked gum disease to serious conditions such as heart disease and stroke, making prevention essential.<br/><br/>Signs of Gum Disease`,
  lists: [
    "Red, swollen, or tender gums",
    "Bleeding gums after brushing or flossing",
    "Persistent bad breath",
    "An unpleasant taste in the mouth",
    "Loose or shifting teeth",
    "Abscesses on the gums or under a tooth",
  ],
  botPara:
    "If you have any of these symptoms it's best to book in so we can start treating and stabilising your gums.",
  image: "/smile-clean-gum.webp",
  buttons: [{ href: "/contact-us", name: "BOOK A PROFESSIONAL CLEAN TODAY" }],
};
export const HYGIENE_ROUTINE = {
  heading: "How A Professional Clean Differs From Your Home Routine",
  texture: true,
  lists: [
    "<strong>Depth of Cleaning</strong>  – Flossing removes plaque and food debris from between teeth, but professional cleaning eliminates hardened tartar (calculus) that brushing and flossing alone can’t remove.",
    "<strong>Advanced Equipment</strong> – Dentists and hygienists use specialised tools, such as ultrasonic scalers and EMS Guided Biofilm Therapy, to thoroughly clean areas that are difficult to reach with a toothbrush or floss.",
    "<strong>Gum Health Protection</strong> – Professional cleanings target hidden bacteria beneath the gumline, reducing the risk of gum disease and inflammation, which at-home flossing can’t fully prevent.",
    "<strong>Polishing & Stain Removal</strong> – Hygienists use professional polishing techniques to remove surface stains, leaving your teeth smoother, brighter and healthier.",
    "<strong>Prevention & Early Detection</strong> – Regular hygiene appointments help identify potential dental issues before they become serious problems, allowing for early intervention.",
  ],
  image: "/hygiene-pro.webp",
  reverse: true,
};
export const HYGIENE_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  texture: true,
  accordion: [
    {
      question: "What is a Smile Clean?",
      answer:
        "A Smile Clean is our gentle yet thorough hygiene treatment, designed to remove plaque, tartar, and stains, leaving your teeth beautifully clean and refreshed.",
    },
    {
      question: "How often should I have a Smile Clean?",
      answer:
        "For most patients, we recommend a professional clean every six months, but some may benefit from more frequent visits - we’ll advise you based on your individual needs.",
    },
    {
      question: "Will the treatment be uncomfortable?",
      answer:
        "Not at all. At NUYU Dental & Aesthetics, we take great care to ensure your Smile Clean is as comfortable and soothing as possible, even for patients with sensitive teeth.",
    },
    {
      question: "What are the benefits of having a Smile Clean?",
      answer:
        "A Smile Clean not only brightens your smile but also helps prevent gum disease, tooth decay, and bad breath, keeping your mouth healthy and fresh.",
    },
    {
      question: "Can a Smile Clean remove staining from tea, coffee, or wine?",
      answer:
        "Yes, our advanced techniques can lift everyday surface stains, giving your smile a noticeably cleaner, more radiant appearance.",
    },
    {
      question: "How do I book a Smile Clean at NUYU Cheltenham?",
      answer:
        "Booking with us is simple. You can call our friendly team on <a href='tel:01242339233'>01242 339233</a>, send us an enquiry through our website by <a href='/contact-us'>clicking here</a> or <a href='https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason' target='_blank'>click here</a> to choose a convienient time using our online booking system. If you’re in the area then pop in to arrange your appointment, we’re at <a href='https://www.google.com/maps/place/NUYU+Dental+%26+Aesthetics/@51.9020212,-2.0741989,17z/data=!3m1!4b1!4m6!3m5!1s0x48711b72c182049f:0x7658e1128104e9dc!8m2!3d51.9020179!4d-2.071624!16s%2Fg%2F11x03z2yr5?entry=tts&g_ep=EgoyMDI1MDIxMi4wIPu8ASoASAFQAw%3D%3D' target='_blank'>64 Winchcombe Street, Cheltenham, GL52 6ND</a>.",
    },
  ],
};
export const DENTAL_IMPLANTS_HEADER = {
  headingone2: "Dental Implants Near You in Cheltenham",
  headingtwo2: "Digitally Driven Dental Implants at NUYU Cheltenham",
  description: `A complete smile is more than just aesthetics - it enhances your ability to eat, speak, and enjoy life with ease. At NUYU Dental & Aesthetics, we focus on giving you back a strong, natural-looking tooth using the most precise and comfortable techniques available today.<br/><br/>With advanced digital planning and guided implant placement, we make sure your new tooth feels, functions, and looks just right - and if you’d like, you can even see and be part of your digital treatment plan before we begin. Dr Natalia Agalakova, a <a target=_blank href="https://www.straumann.com/en/discover/youtooth/article/digital/2024/agalakova-immediate-implant-placement-using-restorative-dentistry-360-digital-workflow-solution.html">published implant dentist,</a> leads Dental implant care at NUYU with precision-driven, digitally guided treatments, ensuring every detail is carefully planned for a seamless experience. Her expertise in implantology and digital workflows has been recognised in this published case report, demonstrating the advanced techniques used at NUYU.`,
  buttonText: "Start Your Implant Journey Today – Schedule a Consultation",
  buttonHref: "/contact-us",
  image: "/header-image-v3.webp",
};
export const DENTAL_IMPLANTS_REPLACE = {
  heading: "A New Tooth, Not Just an Implant",
  texture: true,
  para: "A dental implant is simply the foundation - the real goal is to give you back a complete, natural-feeling tooth that fits effortlessly into your smile. Unlike removable options, an implant stays in place, letting you eat, speak, and smile with natural confidence.",
  lists: [
    "Feels secure and natural – Fixed in place, no slipping, just a strong, stable tooth",
    "Designed to blend in – Matched to your smile for a natural look",
    "Protects your oral health – Keeps neighbouring teeth stable and supports bone health",
    "Long-Term Investment – Designed for long-lasting function",
    "Digitally guided for comfort and precision – Modern techniques mean a smoother experience, more accuracy, less time in a chair",
  ],
  buttons: [
    {
      name: "Ready For A new smile?",
      href: "/contact-us",
    },
  ],
  image: "/implant-new.webp",
  reverse: true,
};
export const DENTAL_IMPLANTS_SOLUTION = {
  heading: "Fixed Implant Solutions for Every Smile",
  para: `At NUYU, we create implant solutions designed around you - whether you're replacing a single tooth or transforming your entire smile.</strong><br/><br/><span style=" font-size:1.875rem; font-family:'TheSeason' ;">Single Tooth Implants</span><br/><br/>For a missing tooth, an implant provides a strong, stable replacement without affecting neighbouring teeth.<br/><br/><span style=" font-size:1.875rem; font-family:'TheSeason' ;">Multiple Teeth Replacement & Implant-supported Bridges</span><br/><br/>Implants can support multiple missing teeth, offering a secure, long-term alternative to traditional bridges.<br/><br/><a href="/all-on-4-dental-implants" style=" font-size:1.875rem; font-family:'TheSeason' ;">Full Arch Implants</a><br/><br/>For those missing most or all teeth, Full Arch implants provide a fixed, natural-feeling alternative to dentures.</strong><br/><br/><span style=" font-size:1.875rem; font-family:'TheSeason' ;">Same-Day Implants & Immediate Teeth</span><br/><br/>In some cases, a temporary tooth can be placed on the same day as the implant – so you never have to go without a smile.`,
  image: "/fixed-implant.webp",
  reverse: true,
};
export const DENTAL_IMPLANTS_WORKS = {
  heading: "How Do Dental Implants Work?",
  para: "A dental implant is an advanced solution to replace a missing tooth, designed to feel secure and as close to natural as possible. Instead of just filling the gap, it recreates both the visible tooth and the support beneath it, so you can eat, speak, and laugh with confidence.<br/><br/>Think of it like replanting a tree - where the root holds everything in place, and the crown (the visible tooth) completes the look.<br/><br/>A dental implant is placed gently where your tooth root once was. It integrates naturally with your body, creating a solid, reliable foundation.<br/><br/>Once the foundation is ready, your final custom-made tooth is carefully crafted to match your smile in shape and colour.<br/><br/>The result? A strong, comfortable, and natural-looking tooth designed to function just like the real thing.",
  image: "/dental-implant-work.webp",
  reverse: true,
  texture: true,
};
export const DENTAL_IMPLANTS_SMILE_SUCCESS = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a class='font-bold' href='/'>NUYU Dental & Aesthetics</a> with transforming their smiles. <i>“Every smile is unique. That’s why we take the time to plan your treatment with the latest digital technology - so you get a long-lasting result created just for you.”</i> Dr Natalia ",
  buttonText: "See what’s possible - start your implant journey today",
  buttonHref: "/patient-stories",
  images: [
    {
      before: "/patient-stories/1-before.webp",
      after: "/patient-stories/1-after.webp",
      name: "SmileFast Composite Bonding",
    },
    {
      before: "/patient-stories/2-before.webp",
      after: "/patient-stories/2-after.webp",
      name: "Invisalign<sup>®</sup> and Edge Bonding",
    },
    {
      before: "/patient-stories/3-before.webp",
      after: "/patient-stories/3-after.webp",
      name: "Dental Implant",
    },
  ],
};
export const IMPLANTS_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Am I suitable for implants?",
      answer:
        "Most people are. Your consultation confirms the best approach for you.",
    },
    {
      question: "Is the treatment comfortable?",
      answer:
        "Yes. We use guided, minimally invasive techniques with local anaesthetic - and offer IV sedation if you prefer extra reassurance.",
    },
    {
      question: "How long does it take?",
      answer:
        "Most treatments take 3–6 months from placement to final crown, with temporary solutions available during healing.",
    },
    {
      question: "How long will it last? ",
      answer:
        "With the right care, implants can last for decades - many patients keep them for life.",
    },
  ],
};
export const ARCH_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "Is the procedure actually completed in one day?",
      answer: ` This is one of the main advantages of the All on 4 dental
                implants. When you imagine having to replace multiple teeth it
                sounds as though it could be a long, painstaking process with
                multiple trips to the dentist. Thankfully, due to the angle of
                placement of All on 4, the implants can support a temporary
                bridge from day one for most patients! After approximately 4
                months, we will replace your temporary bridge with a permanent
                one over a few visits.`,
    },
    {
      question:
        "How are full arch implants different from traditional dentures?",
      answer:
        "Unlike traditional dentures, full arch implants are permanently anchored to the jawbone, offering greater stability, chewing power, and a more natural look and feel. They don’t slip or need adhesives, and they help prevent bone loss in the jaw.",
    },
    {
      question: "Who is suitable for All on 4 dental implants?",
      answer:
        "All on 4 Same Day Teeth are perfect for patients who have very few of their own teeth remaining (which may be failing) and would like a more secure, permanent solution to dentures. They are also ideal for patients who have suffered bone loss in the jaw area, making single tooth implants unsuitable because of the reduced bone density. The All on 4 implants use the natural thicker bone towards the front of the jaw, meaning that patients can often receive a full new arch of teeth without having to undergo graft surgery.",
    },
    {
      question: "I’m a really nervous patient - what are my options?",
      answer:
        "We understand that dental treatment can feel overwhelming, and we’re here to make the experience as comfortable as possible. At NUYU’s calm and modern environment, our team takes a patient-first approach, giving you time and guidance at every step to ensure you feel relaxed and supported throughout your treatment.<br/><br/>For those who feel especially anxious, we offer IV sedation - a safe and controlled option that helps you feel deeply relaxed throughout treatment. While you remain conscious, many patients feel as though they’ve drifted through the appointment, with little or no memory of the procedure afterward.<br/><br/>If fear has been holding you back, we’ll work with you to find the best way forward, whether that’s through extra reassurance, a gentle step-by-step process, or sedation options. Your comfort is always our priority.",
    },
    {
      question: "Will I experience pain during or after the implant procedure?",
      answer:
        "During the dental implant procedure, you shouldn’t feel any pain because wea will use a local anaesthetic to numb the area. You may feel some pressure or mild discomfort, but it shouldn’t be painful. We also provide intravenous sedation for patients who are anxious. After the procedure, it’s normal to experience some soreness, swelling, and mild discomfort for a few days. This is usually manageable with over-the-counter pain relievers like ibuprofen or paracetamol. Most people find the discomfort improves significantly within a 24-48 hours.",
    },
    {
      question: "What is the average lifespan of dental implants?",
      answer:
        "Implants have high success rates and there are reports that have assessed their performance over a period of more than 25 years. The most recent studies indicate that 90% of implants placed ten years ago are still functional today. The long-term success of implants also depends greatly on how well they are cleaned and maintained. In most cases, as a minimum, an annual check-up and regular hygienist visits are recommended so the implants can be professionally cleaned. Moreover, brushing and flossing at home is of paramount importance.",
    },
    {
      question: "Can I spread the cost of treatment?",
      answer:
        "Yes - at NUYU we offer a range of flexible finance options, including interest-free plans, to make implant treatment more manageable.This allows you to spread the cost over time in a way that suits your budget, without compromising on the quality of your care. Our team will guide you through the options with clarity and sensitivity, so you can focus on achieving your new smile with complete peace of mind.",
    },
  ],
};
export const TREATMENT_JOURNEY_IMPLANTS = {
  heading: "Your Implant Journey at NUYU: A Fully Digital Experience",
  texture: true,
  para: "At NUYU Dental & Aesthetics, we make <a href='/dental-implants-cheltenham'>implant treatment</a> precise, comfortable, and easy to understand. Using advanced digital technology and guided techniques, we ensure a seamless experience from start to finish.",
  boxes: [
    {
      heading: "Consultation & Digital Assessment",
      para: "Your journey begins with a detailed consultation, where we take high-resolution CBCT scans and digital impressions to assess your oral health. This creates a 3D model of your mouth, allowing us to evaluate bone quality and plan your treatment with pinpoint accuracy before any procedure begins.",
      image: "/tj-1.webp",
      reverse: false,
    },
    {
      heading: "Implant Planning & Digital Preview",
      para: "Using advanced 3D planning software, we map out the ideal position for your implant. This ensures maximum precision, a natural fit, and optimal long-term stability. If you'd like, we can even show you a digital preview of how your new tooth will look, so you feel confident before treatment starts.",
      image: "/tj-2.webp",
      reverse: true,
    },
    {
      heading: "Precision-Guided Implant Placement",
      para: "Your implant is placed using computer-guided techniques for millimeter-level accuracy. This minimally invasive approach reduces discomfort, improves healing, and ensures a predictable, efficient placement with less time in the chair.",
      image: "/tj-3.webp",
      reverse: false,
    },
    {
      heading: "Healing, Temporary Option & Custom Tooth Design",
      para: "Over the next few months, your body naturally integrates with the implant, creating a strong, stable foundation for your new tooth. If needed, we can provide a temporary restoration, allowing you to maintain your smile while healing. Once integration is complete, we take a final digital scan to design a custom-made tooth that blends seamlessly into your smile.",
      image: "/tj-4.webp",
      reverse: true,
    },
    {
      heading: "Final Fit & Ongoing Care",
      para: "The final step is the most rewarding - your new tooth is securely placed, designed to blend naturally with your smile. To keep it looking and feeling its best, our hygienist-led aftercare program ensures your implant stays strong and healthy for years to come. With professional cleanings, regular check-ups, and tailored care plans, we help you maintain the confidence and comfort of your restored smile.",
      image: "/tj-5.webp",
      reverse: false,
    },
  ],
  buttons: [
    {
      name: "Restore Your Smile – Book a Consultation",
      href: "/contact-us",
    },
    {
      name: "Curious About Implants? Let’s Talk",
      href: "/contact-us",
    },
  ],
};
export const LAUNCH_SMILE_SUCCESS = {
  heading: "Just a few of the happy patients we’ve treated",
  para: "Our team have been transforming smiles for decades - here are just some of the smiles we’ve transformed",
  images: [
    {
      before: "/launch/before-1.webp",
      after: "/launch/after-1.webp",
    },
    {
      before: "/launch/before-2.webp",
      after: "/launch/after-2.webp",
    },
    {
      before: "/launch/before-3.webp",
      after: "/launch/after-3.webp",
    },
  ],
};
export const LAUNCH_HEADER = {
  headingOne: "Welcome to NUYU Dental & Aesthetics",
  headingTwo: "Smile Brighter, Feel Better, Love Your Teeth.",
  description: `At NUYU Dental & Aesthetics, advanced technology meets bespoke care in a beautifully designed space. From the moment you arrive <strong>at our state-of-the-art dental practice in Cheltenham,</strong> our concierge-led welcome ensures a seamless and relaxing experience. Combining expert hands with AI-powered technology, we enhance accuracy in key treatments while ensuring a calm and comfortable experience.<br/><br/>Whether you're here for everyday dentistry, Invisalign, dental implants, composite bonding, or professional teeth whitening, our treatments are crafted to create <strong>beautiful, natural results to help you look and feel your best.</strong>`,
  // buttonText: "Explore our limited time launch offers.",
  // buttonHref: "/",
  image: "/header-image-v3.webp",
  // imageSrc: "/header-image.webp",
};
export const IMPLANT_REPLACE_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "how often should I have my dental implants checked?",
      answer:
        "We recommend visiting us every six months for a tailored maintenance appointment, although some patients may benefit from more frequent reviews. These visits allow us to gently clean around the implants and monitor their health to ensure everything is stable and healthy.",
    },
    {
      question: "Can I clean my dental implants like natural teeth?",
      answer:
        "Yes - but with extra care. Use a soft-bristled toothbrush and non-abrasive toothpaste, along with interdental brushes or floss recommended by your hygienist and implant surgeon. Our team will show you the best technique for keeping the area plaque-free.",
    },
    {
      question: "What happens during an implant maintenance appointment?",
      answer:
        "Your clinician will carefully examine the implant site, assess your gum health, and gently remove any plaque or tartar using specialist tools designed for implants. We may also take X-rays periodically to check the supporting bone.",
    },
    {
      question: "What are signs something might be wrong with my implant?",
      answer:
        "Persistent bleeding, tenderness, swelling or movement around the implant are all signs to contact us promptly. Early intervention can prevent more serious issues and help protect your smile.",
    },
    {
      question: "Will my implants last forever with good care?",
      answer:
        "While no dental treatment lasts forever, implants have the potential to last many years, even decades, with the right home care and regular professional maintenance. At NUYU, we’re here to support their longevity with gentle, ongoing care.",
    },
    {
      question: "How long does composite bonding typically last?",
      answer:
        "With good care, bonding can last anywhere from 3 to 7 years, sometimes longer. Avoiding excessive force or staining foods and attending regular reviews will help maintain your results beautifully.",
    },
    {
      question: "Can composite bonding stain or discolour over time?",
      answer:
        "Yes, bonding is more porous than natural enamel and can stain over time. We recommend limiting coffee, red wine, and smoking, and coming in for regular professional polishings to keep your smile fresh and bright.",
    },
    {
      question: "Can I still whiten my teeth if I’ve had bonding?",
      answer:
        "Teeth whitening will not affect bonded areas. If you’re considering whitening, it’s best done before bonding so we can match the shade. We’ll always guide you on the best timing for treatments.",
    },
    {
      question: "What happens if my bonding chips or wears down?",
      answer:
        "Bonding can be easily repaired or refreshed. If you notice a chip or feel a change in texture, just get in touch - our clinicians can restore it quickly and seamlessly.",
    },
    {
      question: "Do I need to use any special products for my bonded teeth?",
      answer:
        "A non-abrasive toothpaste and a soft toothbrush are ideal to prevent unnecessary wear. Avoid hard or sticky foods where possible, and our team will recommend any additional care to suit your lifestyle.",
    },
  ],
};
export const IMPLANT_BONDING_FAQS = {
  heading: "Your Questions, Answered With Care and Clarity",
  accordion: [
    {
      question: "How often should I have my dental implants checked?",
      answer:
        "We recommend visiting us every six months for a tailored maintenance appointment, although some patients may benefit from more frequent reviews. These visits allow us to gently clean around the implants and monitor their health to ensure everything is stable and healthy.",
    },
    {
      question: "Can I clean my dental implants like natural teeth?",
      answer:
        "Yes - but with extra care. Use a soft-bristled toothbrush and non-abrasive toothpaste, along with interdental brushes or floss recommended by your hygienist and implant surgeon. Our team will show you the best technique for keeping the area plaque-free.",
    },
    {
      question: "What happens during an implant maintenance appointment?",
      answer:
        "Your clinician will carefully examine the implant site, assess your gum health, and gently remove any plaque or tartar using specialist tools designed for implants. We may also take X-rays periodically to check the supporting bone.",
    },
    {
      question: "What are signs something might be wrong with my implant?",
      answer:
        "Persistent bleeding, tenderness, swelling or movement around the implant are all signs to contact us promptly. Early intervention can prevent more serious issues and help protect your smile.",
    },
    {
      question: "Will my implants last forever with good care?",
      answer:
        "While no dental treatment lasts forever, implants have the potential to last many years, even decades, with the right home care and regular professional maintenance. At NUYU, we’re here to support their longevity with gentle, ongoing care.",
    },
    {
      question: "How long does composite bonding typically last?",
      answer:
        "With good care, bonding can last anywhere from 3 to 7 years, sometimes longer. Avoiding excessive force or staining foods and attending regular reviews will help maintain your results beautifully.",
    },
    {
      question: "Can composite bonding stain or discolour over time?",
      answer:
        "Yes, bonding is more porous than natural enamel and can stain over time. We recommend limiting coffee, red wine, and smoking, and coming in for regular professional polishings to keep your smile fresh and bright.",
    },
    {
      question: "Can I still whiten my teeth if I’ve had bonding?",
      answer:
        "Teeth whitening will not affect bonded areas. If you’re considering whitening, it’s best done before bonding so we can match the shade. We’ll always guide you on the best timing for treatments.",
    },
    {
      question: "What happens if my bonding chips or wears down?",
      answer:
        "Bonding can be easily repaired or refreshed. If you notice a chip or feel a change in texture, just get in touch - our clinicians can restore it quickly and seamlessly.",
    },
    {
      question: "Do I need to use any special products for my bonded teeth?",
      answer:
        "A non-abrasive toothpaste and a soft toothbrush are ideal to prevent unnecessary wear. Avoid hard or sticky foods where possible, and our team will recommend any additional care to suit your lifestyle.",
    },
  ],
};
export const PATIENT_STORIES_SMILE_SUCCESS = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a class='font-bold' href='/'>NUYU Dental and Aesthetics</a> with transforming their smiles.",
  images: [
    {
      before: "/patient-stories/6-before.webp",
      after: "/patient-stories/6-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Dental Implant",
    },
    {
      before: "/patient-stories/1-before.webp",
      after: "/patient-stories/1-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Composite Bonding",
    },
    {
      before: "/patient-stories/2-before.webp",
      after: "/patient-stories/2-after.webp",
      name: "Edge Bonding",
    },
    {
      before: "/patient-stories/15-before.webp",
      after: "/patient-stories/15-after.webp",
      name: "Composite Bonding",
    },
    {
      before: "/patient-stories/3-before.webp",
      after: "/patient-stories/3-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Composite Bonding",
    },
    {
      before: "/patient-stories/4-before.webp",
      after: "/patient-stories/4-after.webp",
      name: "Dental Implant",
    },
    {
      before: "/patient-stories/5-before.webp",
      after: "/patient-stories/5-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Dental Implant",
    },

    {
      before: "/patient-stories/8-before.webp",
      after: "/patient-stories/8-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Composite Bonding",
    },

    {
      before: "/patient-stories/16-before.webp",
      after: "/patient-stories/16-after.webp",
      name: "Teeth Whitening & Composite Veneers",
    },
    {
      before: "/patient-stories/11-before.webp",
      after: "/patient-stories/11-after.webp",
      name: "SmileFast Composite Bonding",
    },

    {
      before: "/patient-stories/12-before.webp",
      after: "/patient-stories/12-after.webp",
      name: "SmileFast Composite Bonding",
    },
    {
      before: "/patient-stories/13-before.webp",
      after: "/patient-stories/13-after.webp",
      name: "Composite Bonding",
    },
    {
      before: "/patient-stories/14-before.webp",
      after: "/patient-stories/14-after.webp",
      name: "Composite Bonding",
    },
    {
      before: "/patient-stories/7-before.webp",
      after: "/patient-stories/7-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Dental Implant",
    },
    {
      before: "/patient-stories/17-before.webp",
      after: "/patient-stories/17-after.webp",
      name: "Teeth Whitening & Composite Veneers",
    },

    {
      before: "/patient-stories/19-before.webp",
      after: "/patient-stories/19-after.webp",
      name: "Invisalign<sup>®</sup> and Composite Bonding",
    },
    {
      before: "/patient-stories/24-before.webp",
      after: "/patient-stories/24-after.webp",
      name: "Teeth Whitening",
    },
    {
      before: "/patient-stories/9-before.webp",
      after: "/patient-stories/9-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & Composite Bonding",
    },
    {
      before: "/patient-stories/20-before.webp",
      after: "/patient-stories/20-after.webp",
      name: "Invisalign<sup>®</sup> and Composite Bonding",
    },
    {
      before: "/patient-stories/18-before.webp",
      after: "/patient-stories/18-after.webp",
      name: "Teeth Whitening & Composite Veneers",
    },
    {
      before: "/patient-stories/22-before.webp",
      after: "/patient-stories/22-after.webp",
      name: "SmileFast Composite Bonding",
    },

    {
      before: "/patient-stories/23-before.webp",
      after: "/patient-stories/23-after.webp",
      name: "Teeth Whitening",
    },
    {
      before: "/patient-stories/21-before.webp",
      after: "/patient-stories/21-after.webp",
      name: "Invisalign<sup>®</sup> and Composite Bonding",
    },
    {
      before: "/patient-stories/10-before.webp",
      after: "/patient-stories/10-after.webp",
      name: "Invisalign<sup>®</sup>, Teeth Whitening & SmileFast Composite Bonding",
    },
  ],
};
export const LANDING_INVIS_FAQS = {
  heading: "Your Questions, Answered with Care and Clarity",
  accordion: [
    {
      question: "Are Invisalign® aligners painful?",
      answer:
        "While some patients may experience slight discomfort during the first few days of wearing a new aligner, it is typically mild and a sign that your teeth are moving into position.",
    },
    {
      question:
        "I’ve had braces before but didn’t wear my retainers. Can Invisalign® fix my teeth?",
      answer:
        "Yes, Invisalign® is a great option for correcting alignment issues that have returned after braces. It can help refine and restore your smile.",
    },
    {
      question: "What if I wear my Invisalign® aligners in the wrong order?",
      answer:
        "If you realise you’ve worn the aligners out of sequence, contact your dentist immediately for guidance. Continuing to wear them incorrectly could disrupt your treatment plan.",
    },
    {
      question: "Are Invisalign® aligners breakable?",
      answer:
        "Invisalign® aligners are designed to be durable, but they can crack or break if not handled properly. Always store them in their case when not in use and avoid exposing them to extreme temperatures.",
    },
    {
      question: "Will wearing Invisalign® affect my speech?",
      answer:
        "You may notice a slight lisp when you first begin wearing aligners, but this typically disappears within a few days as you adjust to them.",
    },
    {
      question: "How much does Invisalign® treatment cost?",
      answer:
        "The cost of Invisalign® treatment depends on the complexity of your case. During your consultation, we will provide a detailed breakdown of costs and payment options tailored to your needs.",
    },
  ],
};
export const LANDING_SMILE_SUCCESS = {
  heading: "Smile Success Stories",
  para: "Everyone deserves a smile they can wear with pride and joy, one that lights up every room. Our smile gallery showcases just a glimpse of the many happy clients who have entrusted <a class='font-bold' href='/'>NUYU Dental and Aesthics</a> with transforming their smiles.",
  images: [
    {
      before: "/carousel/invisalign/before-1.avif",
      after: "/carousel/invisalign/after-1.avif",
      name: "Invisalign<sup>®</sup>",
    },
    {
      before: "/carousel/invisalign/before-2.avif",
      after: "/carousel/invisalign/after-2.avif",
      name: "Invisalign<sup>®</sup>",
    },
    {
      before: "/carousel/invisalign/before-3.avif",
      after: "/carousel/invisalign/after-3.avif",
      name: "Invisalign<sup>®</sup>",
    },
  ],
};
export const HOME_CAROUSEL = [
  "/home-carousel/1.webp",
  "/home-carousel/2.webp",
  "/home-carousel/3.webp",
  "/home-carousel/4.webp",
  "/home-carousel/5.webp",
  "/home-carousel/6.webp",
  "/home-carousel/7.webp",
];
