"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { CORE_SERVICES3 } from "@/constants/data";
import Image from "next/image";
import React, { useState } from "react";

const CoreServices = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpanded((prev) => (prev === name ? null : name));
  };

  return (
    <div className="py-5 lg:py-10 scroll-m-10" id="specialized-services">
      <Container>
        <div className="mb-6">
          <HeadingTwo classes="text-center">
            NUYU Dental & Aesthetic Solutions
          </HeadingTwo>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CORE_SERVICES3.map((item) => (
            <div
              key={item.name}
              onClick={() => toggleExpand(item.name)}
              className="flex flex-col relative gap-4 text-olive-dark shadow-[0_2px_11px_1px_#0000001c] transition-all duration-300 hover:shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <Image
                  width={150}
                  height={150}
                  quality={95}
                  className="w-14 h-14"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <h3 className="text-center text-black">{item.name}</h3>
              <div className="flex justify-center">
                {expanded === item.name ? (
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
        </div>
      </Container>
    </div>
  );
};

export default CoreServices;
