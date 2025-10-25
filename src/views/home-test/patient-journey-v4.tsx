"use client";
import { ITreatmentJourney } from "@/types";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SimpleButton from "@/components/simple-button";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const TreatmentJourneyV4 = ({ data }: { data: ITreatmentJourney }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // console.log("called");
      // let a = 1;
      // gsap.to(mainRef.current, {
      //   scrollTrigger: {
      //     start: "top 100%",
      //     end: "+=50",
      //     markers: true,
      //     onLeave: () => {
      //       ScrollTrigger.refresh();
      //       console.log("refre");
      //     },
      //   },
      // });
      const items = gsap.utils.toArray<HTMLDivElement>(".item");

      items.forEach((item, index) => {
        gsap.to(item, {
          scale: items.length - 1 === index ? 1 : 0.9,
          opacity: items.length - 1 === index ? 1 : 0,
          scrollTrigger: {
            trigger: item,
            start: "top 35%",
            end: index === items.length - 1 ? "bottom 100%" : "bottom 32%",
            scrub: true,
            pin: true,
            pinSpacing: false,
            toggleActions: "play reverse play reverse",
            // invalidateOnRefresh: true, // Add this
            // markers: true,
            onEnter: function () {
              if (index !== items.length - 1) {
                ScrollTrigger.refresh();
                // console.log("its");
              }
            },
            // onLeave: () => {
            //   if (index === items.length - 1) {
            //     ScrollTrigger.refresh();
            //     // console.log("its");
            //   }
            // },
            // onLeaveBack: () => {
            //   gsap.to(item, { scale: 1 });
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
        <div className="main relative min-h-[150vh]">
          {data.boxes.map((item, index) => (
            <div key={index} className="relative">
              <div
                className={`item flex will-change-auto flex-col  md:flex-row rounded-2xl ${
                  item.reverse ? "lg:flex-row-reverse " : ""
                } mb-12 overflow-hidden`}
              >
                <div className="w-full max-h-[290px] md:w-44 lg:w-[26.25rem] shrink-0">
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
        <div className="flex justify-center flex-col items-center gap-3">
          <SimpleButton href="/" variant="outline">
            Discover the NUYU Experience
          </SimpleButton>
          <SimpleButton href="/" variant="primary">
            Start Your Journey – Schedule Your Visit
          </SimpleButton>
        </div>
      </Container>
    </div>
  );
};

export default TreatmentJourneyV4;
