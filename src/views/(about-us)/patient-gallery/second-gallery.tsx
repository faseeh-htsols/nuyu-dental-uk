"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/container";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
// import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
// gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger);
const SecondGallery = () => {
  // const mainRef = useRef<HTMLDivElement>(null);
  // useGSAP(
  //   () => {
  //     gsap.to(mainRef.current, {
  //       scrollTrigger: {
  //         onLeave: () => {
  //           ScrollTrigger.refresh();
  //           console.log("reached 0");
  //         },
  //       },
  //     });
  //     // ScrollTrigger.create({
  //     //   markers: true,
  //     //   onLeave: () => {
  //     //     ScrollTrigger.refresh();
  //     //   },
  //     // });
  //   },
  //   { scope: mainRef }
  // );
  return (
    <div>
      {/* ref={mainRef} */}
      <Container>
        <div className="py-5 lg:py-10 grid lg:grid-cols-2 gap-6">
          <div className=" w-full h-[500px]">
            <Fade
              cascade
              damping={0.4}
              direction="left"
              triggerOnce
              className="h-full"
            >
              <Image
                src={"/practice-gallery2/IMG_3382.jpg"}
                fill={true}
                className="w-full h-full object-cover rounded-3xl   last-image-gsap"
                alt="image"
              />
            </Fade>
          </div>
          <div className="flex justify-between flex-col h-[500px]">
            <Fade
              cascade
              damping={0.4}
              triggerOnce
              direction="right"
              className="h-[45%]"
            >
              <Image
                src={"/practice-gallery2/pg-land-small-mid1.webp"}
                fill={true}
                className="w-full rounded-tr-3xl rounded-bl-3xl h-full object-cover"
                alt="image"
              />
              <Image
                src={"/practice-gallery2/pg-land-small-mid2.webp"}
                fill={true}
                className="w-full rounded-tr-3xl rounded-bl-3xl h-full object-cover"
                alt="image"
              />
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecondGallery;
