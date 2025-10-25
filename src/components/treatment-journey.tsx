"use client";
import { ITreatmentJourney } from "@/types";
import Container from "./container";
import HeadingTwo from "./heading-two";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TreatmentJourney = ({ data }: { data: ITreatmentJourney }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // console.log("called");
      let a = 1;
      const items = gsap.utils.toArray<HTMLDivElement>(".item");

      items.forEach((item, index) => {
        gsap.to(item, {
          opacity: index === items.length - 1 ? 1 : 0,
          scale: 0.9,
          transformOrigin: "center center", // Set transform origin to center
          scrollTrigger: {
            trigger: item,
            start: "top 35%",
            end: index === items.length - 1 ? "bottom 100%" : "bottom 32%",
            // scroller: "[data-scroll-container]",
            pin: true,
            pinSpacing: false,
            // markers: true,
            scrub: 4,
            // onUpdate: () => ScrollTrigger.refresh(),
            onEnter: function () {
              ++a;
              if (index !== items.length - 1) {
                ScrollTrigger.refresh();
              }
              console.log(a);
            },
            // onLeaveBack: () => {
            //   ScrollTrigger.refresh();
            // },
            // markers: true,
            // Pin each item only after the previous one
            // onEnter: () => {
            //   items.slice(0, index).forEach((prevItem) => {
            //     gsap.set(prevItem, { position: "fixed", top: 0 });
            //   });
            // },
            // Reset previous items when scrolling back
            // onLeaveBack: () => {
            //   items.slice(0, index).forEach((prevItem) => {
            //     gsap.set(prevItem, { position: "static" });
            //   });
            // },
          },
        });
      });
    },
    { scope: mainRef }
  );

  return (
    <div ref={mainRef} className="home py-5 lg:py-10">
      <Container>
        <div className="max-w-[48rem] mx-auto mb-8">
          <HeadingTwo classes="text-center mb-8">{data.heading}</HeadingTwo>
          <p className="text-center text-[#333]">{data.para}</p>
        </div>
        <div className="main relative">
          {data.boxes.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`item flex flex-col  md:flex-row ${
                  item.reverse
                    ? "lg:flex-row-reverse rounded-bl-full rounded-se-full"
                    : "rounded-ss-full rounded-br-full"
                } mb-12 overflow-hidden`}
              >
                <div className="w-full md:w-44 lg:w-[26.25rem] shrink-0">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt={item.heading}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`lg:px-[3.125rem] p-4 grow lg:py-4 bg-primary text-white`}
                  // className={`lg:px-[3.125rem] p-4 grow lg:py-[6.25rem] flex flex-col gap-6 bg-white ${
                  //   item.reverse
                  //     ? "lg:rounded-s-[50rem] lg:ps-[9rem] ps-6 rounded-s-lg"
                  //     : "lg:rounded-r-[50rem] rounded-r-lg"
                  // }`}
                >
                  <div
                    className={` flex flex-col gap-6 justify-center h-full ${
                      item.reverse ? "w-10/12 ms-auto" : "w-10/12"
                    }`}
                  >
                    <h3 className="text-2xl text-white font-medium">
                      {item.heading}
                    </h3>
                    <p className="text-white text-sm">{item.para}</p>
                    {item.list && (
                      <ul className="ps-5 marker:text-white">
                        {item.list.map((innerItem, idx) => (
                          <li
                            key={idx}
                            className="list-disc text-sm text-white"
                          >
                            {innerItem}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TreatmentJourney;
