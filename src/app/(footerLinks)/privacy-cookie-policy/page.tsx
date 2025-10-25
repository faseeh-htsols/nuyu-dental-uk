import Main from "@/views/footerLinks/privacy-policy";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <head>
        <link
          rel="canonical"
          href="https://www.nuyu-dental.co.uk/privacy-cookie-policy"
        />
        <meta
          property="og:title"
          content="Privacy & Cookie Policy | NUYU Dental Cheltenham"
        />
        <meta
          property="og:description"
          content="Learn how NuYu Dental collects, uses, and protects your personal data. Our privacy and cookie policy ensures transparency and compliance with UK data laws."
        />
        <meta
          property="og:image"
          content="https://www.nuyu-dental.co.uk/_next/image?url=%2Flogo-main.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://www.nuyu-dental.co.uk/privacy-cookie-policy"
        />
      </head>
      <Main />
    </>
  );
}
