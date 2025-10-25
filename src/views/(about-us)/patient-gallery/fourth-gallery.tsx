"use client";
import Container from "@/components/container";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const FourthGallery = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from(".image-gsap", {
        y: "-220px",
        scrollTrigger: {
          trigger: ".image-gsap",
          start: "top 100%",
          scrub: 3,
          end: "top 0%",
        },
      });
    },
    { scope: mainRef }
  );
  return (
    <div className="-mt-[207px] " ref={mainRef}>
      <Container>
        <div className="flex flex-row justify-end">
          <div className="w-[60%]">
            <Image
              src={"/practice-gallery/10.webp"}
              height={500}
              width={500}
              quality={100}
              className="w-full rounded-3xl h-auto"
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-row -mt-11">
          <div className="w-[50%] flex justify-end">
            {" "}
            <Image
              src={"/practice-gallery/11.webp"}
              height={500}
              width={500}
              className="w-[80%] image-gsap rounded-3xl h-auto"
              alt="image"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FourthGallery;
