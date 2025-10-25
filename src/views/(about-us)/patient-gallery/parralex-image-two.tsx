"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxGalleryTwo = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        panelRef.current,
        { backgroundPositionY: "80%" },
        {
          backgroundPositionY: "20%",
          ease: "none",
          scrollTrigger: {
            trigger: panelRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, // smooth scrub
          },
        }
      );
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="w-full h-full">
      <div
        ref={panelRef}
        className="h-[80vh] w-full bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/practice-gallery2/IMG_3383.jpg)",
          backgroundSize: "cover", // or try "100% 150%" for stretch effect
          backgroundPositionY: "80%", // match the animation start
        }}
      />
    </div>
  );
};

export default ParallaxGalleryTwo;
