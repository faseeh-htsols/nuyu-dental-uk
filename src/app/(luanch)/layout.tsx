// import Footer from "@/layout/footer";
import FooterLaunch from "@/layout/launch-footer";
// import Script from "next/script";
import { ReactNode } from "react";

const NonLaunchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B51T0QBXCE"
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
              
              gtag('config', 'G-B51T0QBXCE');
              gtag('config', 'G-1YHFXTN7LV');
              gtag('config', 'G-J63Z6594N0');
              gtag('config', 'G-H7W4K6MYF7');
            `,
        }}
      /> */}
      {children}
      <FooterLaunch />
    </>
  );
};

export default NonLaunchLayout;
