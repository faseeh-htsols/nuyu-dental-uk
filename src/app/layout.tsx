import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Footer from "@/layout/footer";
// import Navbar from "@/layout/navbar";
// import LenisLayoutProvider from "@/providers/lenis-provider";
import Script from "next/script"; // ✅ Import Script
import CookieWrapper from "@/components/cookie-wrapper";
import CookieProvider from "@/providers/cookie-provider";
import EnquryProvider from "@/providers/enqury-provider";
const monopolis = localFont({
  src: [
    {
      path: "./fonts/metropolis-medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/metropolis-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-metropolis",
});

export const metadata: Metadata = {
  verification: {
    google: "eh8QPZJcw0YoLM47w2XWOOHo-hNluFEiw68VWrvtp_w",
  },
  icons: {
    icon: [
      {
        url: "/sticky-logo.webp",
        href: "/sticky-logo.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://launcher.enquirybot.com" />
        <Script
          id="google-tag"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KW2JH4M');`,
          }}
        />
        <Script
          id="google-tag2"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5H9MGXXZ');`,
          }}
        />
      </head>
      <body
        className={`${monopolis.variable} antialiased bg-[#faf6f5]`}
        suppressHydrationWarning
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16912180149"
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
          gtag('config', 'AW-16912180149');
        `,
          }}
        />
        <CookieProvider>
          {/* <Navbar /> */}
          {/* <LenisLayoutProvider> */}
          {children}
          <CookieWrapper />
        </CookieProvider>
        {/* </LenisLayoutProvider> */}
        {/* <Footer /> */}
        {/* <Script
          src="https://launcher.enquirybot.com/index.js"
          data-bot-id="b367dfc2-5681-4580-a9b4-85227fd769dc"
          strategy="afterInteractive"
          type="text/javascript"
        /> */}
        <EnquryProvider />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KW2JH4M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5H9MGXXZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
