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

const TreatmentJourneyV5 = ({ data }: { data: ITreatmentJourney }) => {
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
  const dental = window.location.pathname.includes(
    "/treatments/implant-replace/dental-implants"
  );
  return (
    <div
      ref={mainRef}
      className={`home py-5 lg:py-10 ${data.texture ? "bg-[url(/white-textured.webp)]" : ""
        }`}>
      <Container>
        <div className=" mx-auto mb-8">
          <HeadingTwo classes="text-center mb-8">{data.heading}</HeadingTwo>
          {data.para && (
            <p
              className="text-center"
              dangerouslySetInnerHTML={{ __html: data.para }}
            />
          )}
        </div>
        <div className="main relative">
          {data.boxes.map((item, index) => (
            <div key={index} className="sticky top-[16%] lg:top-[30%]">
              <div
                className={`item flex will-change-auto flex-col rounded-3xl md:flex-row ${item.reverse ? "lg:flex-row-reverse " : ""
                  } mb-5 lg:mb-12 overflow-hidden ${data.boxes.length - 1 === index ? "item-last" : ""
                  }`}>
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
                    className={` flex flex-col gap-6 justify-center h-full ${item.reverse ? "lg:w-10/12 lg:ms-auto" : "lg:w-10/12"
                      }`}>
                    <h3 className="text-2xl text-white font-medium">
                      {item.heading}
                    </h3>

                    {/* New subHeading */}
                    {item.subHeading && (
                      <p
                        className="text-white text-base font-light"
                        dangerouslySetInnerHTML={{ __html: item.subHeading }}
                      />
                    )}

                    {item.para && (<p
                      className="text-white text-sm"
                      dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                    )}
                    {item.list && (
                      <ul className="ps-5 marker:text-white">
                        {item.list.map((innerItem, idx) => (
                          <li
                            key={idx}
                            className="list-disc text-sm text-white"
                            dangerouslySetInnerHTML={{
                              __html: innerItem,
                            }}></li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {data.buttons && (
          <div
            className={`flex flex-col items-center gap-4 justify-center ${dental ? "!flex-row" : ""
              }`}>
            {data.buttons.map((button, index) => (
              <SimpleButton
                key={index}
                href={button.href}
                variant={index === 0 ? "outline" : "primary"}>
                {button.name}
              </SimpleButton>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default TreatmentJourneyV5;
