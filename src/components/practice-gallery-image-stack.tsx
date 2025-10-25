"use client";
import { IPracticeGallery } from "@/types";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const PracticeGalleryImageStack = ({ data }: { data: IPracticeGallery }) => {
  const mainRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLDivElement>(".item");

      items.forEach((item, index) => {
        const isLastItem = index === items.length - 1;

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 60%",
            end: isLastItem ? "bottom 50%" : "bottom 10%",
            scrub: true,
            toggleActions: "play reverse play reverse",
            onEnter: () => {
              if (isLastItem) {
                setTimeout(() => {
                  ScrollTrigger.refresh();
                  // console.log("ScrollTrigger refreshed on last item");
                }, 500);
              }
            },
          },
        });
      });

      // Force refresh after a small delay to fix any layout shift issues
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 1000);
    },
    { scope: mainRef }
  );

  // useGSAP(
  //   () => {
  //     // console.log("called");
  //     // let a = 1;
  //     const items = gsap.utils.toArray<HTMLDivElement>(".item");

  //     items.forEach((item, index) => {
  //       gsap.timeline({
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 60%",
  //           end: index === items.length - 1 ? "bottom 50%" : "bottom 10%",
  //           scrub: true,
  //           toggleActions: "play reverse play reverse",
  //           onLeave: () => {
  //             if (index === items.length - 1) {
  //               ScrollTrigger.refresh();
  //               // console.log("its");
  //             }
  //           },
  //         },
  //       });
  //     });
  //     // gsap.to(item, {
  //     //   scale: 0.9,
  //     //   scrollTrigger: {
  //     //     trigger: item,
  //     //     start: "top 0%",
  //     //     end: "+=100",
  //     //     scrub: true,
  //     //     markers: true,
  //     //   },
  //     // });
  //   },
  //   { scope: mainRef }
  // );

  return (
    <div
      ref={mainRef}
      className={`home py-5 lg:py-10 ${
        data.texture ? "bg-[url(/white-textured.webp)]" : ""
      }`}
    >
      <Container>
        <div className=" mx-auto mb-8">
          <HeadingTwo classes="text-center mb-8">{data.heading}</HeadingTwo>
        </div>
        <div className="main relative">
          {data.boxes.map((item, index) => (
            <div key={index} className="sticky top-[20%]">
              <div
                className={`item flex will-change-auto flex-col rounded-3xl md:flex-row ${
                  item.reverse ? "lg:flex-row-reverse " : ""
                } mb-6 lg:mb-12 overflow-hidden ${
                  data.boxes.length - 1 === index ? "item-last" : ""
                }`}
              >
                <div className="w-full">
                  <Image
                    src={item.image}
                    width={1200}
                    height={1000}
                    alt={"gallery image"}
                    quality={100}
                    className="w-full h-[350px] object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default PracticeGalleryImageStack;
