"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const QualityTreatments = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  useGSAP(
    () => {
      gsap.to(".image-gsap", {
        y: "90px",
        scrollTrigger: {
          trigger: ".image-gsap",
          start: "top 60%",
          scrub: true,
          end: "+=100%",
          onEnter: () => {
            ScrollTrigger.refresh();
          },
          // markers: true,
        },
      });
      gsap.from(".image-gsap2", {
        x: "-90px",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 60%",
          scrub: true,
          end: "+=100%",
          onLeave: () => {
            ScrollTrigger.refresh();
            // console.log("refreshed");
          },
        },
      });
    },
    { scope: mainRef }
  );
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      // no IO support → load immediately
      setVideoSrc("/videos/treatments.mp4");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoSrc("/videos/treatments.mp4");
          observer.unobserve(el);
        }
      },
      {
        rootMargin: "200px 0px", // start loading a bit before it enters view
        threshold: 0.1,
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="py-5 lg:py-10" ref={mainRef}>
      <Container>
        <div className="hidden lg:flex flex-row justify-between -mb-20">
          <div className="w-[50%] flex justify-center">
            <Image
              src={"/treatments-qualty.webp"}
              width={400}
              height={600}
              quality={95}
              className="w-[333px] h-auto rounded-3xl image-gsap2 relative will-change-transform"
              alt="img"
            />
          </div>
          <div className="w-[40%] self-start">
            <Image
              src={"/treatment-quality-3.webp"}
              className="w-full image-gsap h-auto rounded-3xl will-change-transform"
              width={400}
              height={600}
              quality={95}
              alt="img"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-8">
          <div className="lg:w-[60%] shrink-0">
            <video
              ref={videoRef}
              src={videoSrc ?? undefined}
              loop
              preload="none"
              playsInline
              muted
              autoPlay={!!videoSrc}
              className="w-full h-auto rounded-3xl"></video>
          </div>
          <div className="grow flex flex-col gap-3 lg:gap-6">
            <HeadingTwo classes="text-black mt-5">
              Experience Superior Dental Care in a Tranquil, Luxurious Setting
            </HeadingTwo>
            <p className="text-sm text-black !leading-6 ">
              At NUYU Dental, our exceptional team brings together experience
              and a passion for personalised care, all within a serene,
              spa-inspired setting. Every treatment is thoughtfully designed to
              meet your individual needs, ensuring your experience is as bespoke
              and tranquil as it is exceptional.
            </p>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              {/* <SimpleButton href="/about-us/team" variant="primary">
                MEET OUR TEAM
              </SimpleButton> */}
              <SimpleButton
                href="/about-us/practice-gallery"
                variant="secondary">
                Our practice gallery
              </SimpleButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QualityTreatments;
