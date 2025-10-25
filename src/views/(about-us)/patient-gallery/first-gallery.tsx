"use client";
import Container from "@/components/container";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const FirstGallery = () => {
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
      // gsap.from(".last-image-gsap", {
      //   x: 300,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: ".last-image-gsap",
      //     start: "top 80%", // adjust trigger point as needed
      //     end: "bottom 60%",
      //     scrub: 1,
      //   },
      // });
    },
    { scope: mainRef }
  );
  return (
    <div ref={mainRef}>
      <Container>
        <div className="">
          <div className="">
            <Image
              src={"/practice-gallery/pg-1-landscape.webp"}
              height={1000}
              width={1000}
              className="w-full rounded-tr-3xl rounded-bl-3xl h-[50vh] object-cover object-center  image-gsap"
              alt="image"
            />
          </div>
        </div>
        <div className="py-5 lg:py-10 grid lg:grid-cols-2 gap-6">
          <div className="flex justify-between flex-col lg:h-[500px]">
            <Fade
              cascade
              damping={0.4}
              direction="left"
              triggerOnce
              className="h-[45%]"
            >
              <Image
                src={"/practice-gallery2/pg-land-small-top1.webp"}
                height={500}
                width={500}
                className="w-full rounded-tr-3xl rounded-bl-3xl h-full object-cover"
                alt="image"
              />
              <Image
                src={"/practice-gallery2/pg-land-small-top2.webp"}
                height={500}
                width={500}
                className="w-full rounded-tr-3xl rounded-bl-3xl h-full object-cover"
                alt="image"
              />
            </Fade>
          </div>
          <div>
            <Fade
              cascade
              triggerOnce
              damping={0.4}
              direction="right"
              className="h-[45%]"
            >
              <Image
                src={"/practice-gallery/about-dr-natalia.webp"}
                height={500}
                width={500}
                className="w-full h-[500px] object-cover rounded-3xl   last-image-gsap"
                alt="image"
              />
            </Fade>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FirstGallery;
