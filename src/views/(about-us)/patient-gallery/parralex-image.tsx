"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ParallaxGallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        {
          small: "(max-width: 767px)",
          large: "(min-width: 768px)",
        },
        (ctx) => {
          // console.log("reached 1");
          const { small } = ctx.conditions as Record<
            "small" | "large",
            boolean
          >;
          gsap.from(".for-wall", {
            y: 150,
            scrollTrigger: {
              trigger: ".for-wall",
              start: small ? "top 120%" : "top 90%",
              // onEnter: () => {
              //   ScrollTrigger.refresh();
              //   console.log("reached 2");
              // },
              // markers: true,
            },
          });
          gsap.from(".windows", {
            x: -150,
            scrollTrigger: {
              trigger: ".windows",
              start: small ? "top 100%" : "top 30%",
              end: small ? "top 60%" : "top 70%",
              scrub: 3,
            },
          });
          gsap.from(".base", {
            y: 150,
            scrollTrigger: {
              trigger: ".base",
              start: small ? "top 100%" : "top 60%",
              end: small ? "top 70%" : "top 80%",
              scrub: 3,
              // markers: true,
            },
          });
          gsap.from(".seat", {
            y: 150,
            scrollTrigger: {
              trigger: ".seat",
              start: small ? "top 90%" : "top 90%",
              end: small ? "top 80%" : "top 40%",
              scrub: 3,
              // markers: true,
            },
          });
          gsap.from(".seat-background", {
            x: 300,
            scrollTrigger: {
              trigger: ".seat-background",
              start: small ? "top 90%" : "top 50%",
              end: small ? "top 80%" : "top 90%",
              scrub: 3,
            },
          });
          // Refresh triggers once all are set
          // ScrollTrigger.refresh();
        }
      );
      // Run after images load
    },
    { scope: galleryRef }
  );

  return (
    <div>
      <div
        ref={galleryRef}
        className="relative parallax-container w-full   overflow-hidden"
      >
        <div className="absolute inset-0 parallax-layer z-[1]">
          <Image
            src="/practice-gallery/5-seat-background.png"
            alt=""
            className="w-full h-auto seat-background"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="absolute inset-0 parallax-layer z-[2]">
          <Image
            src="/practice-gallery/4-wall.png"
            alt=""
            className="w-full h-auto for-wall"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="absolute inset-0 parallax-layer z-[6]">
          <Image
            src="/practice-gallery/3-seat.png"
            alt=""
            className="w-full h-auto seat"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="absolute inset-0 parallax-layer z-[4] windows">
          <Image
            src="/practice-gallery/2-windows.png"
            alt=""
            className="w-full h-auto"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
        <div className="absolute inset-0 parallax-layer z-[5]">
          <Image
            src="/practice-gallery/1-base.png"
            alt=""
            className="w-full h-auto base"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>

        {/* Optional static top layer */}
        <Image
          src="/practice-gallery/full-trans.png"
          alt=""
          className="w-full h-auto relative z-[6]"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>
    </div>
  );
};

export default ParallaxGallery;
