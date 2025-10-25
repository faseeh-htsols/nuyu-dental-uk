"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
import { CORE_SERVICES_TEAM } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CoreServicesNew = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  // console.log(expanded);
  const toggleExpand = (name: number) => {
    setExpanded((prev) => (prev === name ? null : name));
  };
  // const links
  return (
    <div className="py-5 lg:py-10 scroll-m-10" id="specialized-services">
      <Container>
        <div className="mb-6">
          <HeadingTwo classes="text-center">
            NUYU Dental & Aesthetic Solutions
          </HeadingTwo>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-auto-flow-dense">
          {CORE_SERVICES_TEAM.map((item, index) => (
            <div
              key={item.name}
              onClick={() => toggleExpand(index)}
              className={`flex flex-col relative gap-4 text-olive-dark shadow-[0_2px_11px_1px_#0000001c] transition-all duration-300 hover:shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer ${
                expanded === index ? "shadow-[0_2px_11px_1px_#9E7F61]" : ""
              }`}
              style={{ order: index < 3 ? `${index}` : `${index + 3}` }}
            >
              <div className="flex items-center justify-center">
                <Image
                  width={150}
                  height={150}
                  quality={95}
                  className={`w-14 ${item.imageSmall ? "h-10 mb-3" : "h-14"}`}
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h3 className="text-center text-black">{item.name}</h3>
              <div className="flex justify-center">
                {expanded === index ? (
                  <>
                    <span className="absolute top-5 right-5 border border-secondary rounded-full flex justify-center items-center w-8 h-8">
                      <Image
                        src={"/bottom-arrow.svg"}
                        alt="arrow"
                        width={30}
                        height={30}
                        className="w-4 h-4 rotate-180"
                      />
                    </span>
                    <div className={`text-center animate-opacity-anim`}>
                      <span className={`text-sm text-black`}>{item.para}</span>
                    </div>
                  </>
                ) : (
                  <div className="">
                    <span className="border border-secondary rounded-full flex justify-center items-center w-8 h-8">
                      <Image
                        src={"/bottom-arrow.svg"}
                        alt="arrow"
                        width={30}
                        height={30}
                        className="w-4 h-4"
                      />
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {expanded !== null && (
            <>
              {CORE_SERVICES_TEAM[expanded].buttons.map((item, index) => (
                <Link
                  //shadow-[0_2px_11px_1px_#0000001c]
                  className="flex justify-center bg-primary text-white relative gap-4 transition-all duration-300 shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer hover:bg-transparent hover:text-olive-dark"
                  key={index}
                  style={{ order: index + 3 }}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CoreServicesNew;
