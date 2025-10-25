"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const ThirdGallery = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".image-gsap", {
        y: "-400px",
        scrollTrigger: {
          trigger: ".image-gsap",
          start: "top 100%",
          scrub: 3,
          end: "top 0%",
        },
      });
      gsap.from(".image-gsap-2", {
        y: "220px",
        scrollTrigger: {
          trigger: ".image-gsap-2",
          start: "top 100%",
          scrub: 3,
          end: "top 0%",
        },
      });
    },
    { scope: mainRef }
  );
  return (
    <div ref={mainRef}>
      <Container>
        <div className="flex flex-row justify-end">
          <div className="w-[65%]">
            <Image
              src={"/practice-gallery/8.webp"}
              height={500}
              className="w-full rounded-3xl h-auto"
              width={500}
              quality={100}
              alt="image"
            />
          </div>
        </div>
        <div className="-mt-[207px] flex flex-row justify-between">
          <div className="w-[40%]">
            <Image
              src={"/practice-gallery/6.webp"}
              height={500}
              width={500}
              quality={100}
              className="w-full image-gsap rounded-3xl h-auto"
              alt="image"
            />
          </div>
          <div className="w-[34%]  self-center">
            <Image
              src={"/practice-gallery/9.webp"}
              height={500}
              width={500}
              quality={100}
              className="w-full image-gsap-2 rounded-3xl h-auto"
              alt="image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ThirdGallery;
