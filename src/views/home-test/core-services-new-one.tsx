"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
import { CORE_SERVICES3 } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CoreServicesNewOne = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  // console.log(expanded);
  const toggleExpand = (name: number) => {
    setExpanded((prev) => (prev === name ? null : name));
  };
  // const links
  return (
    <div
      className="py-5 hidden lg:block lg:py-10 bg-[url(/white-textured.webp)] scroll-m-10"
      id="specialized-services"
    >
      <Container>
        <div className="mb-6">
          <HeadingTwo classes="text-center">
            NUYU Dental & Aesthetic Solutions
          </HeadingTwo>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {CORE_SERVICES3.map((item, index) => (
            <div
              key={item.name}
              onClick={() => toggleExpand(index)}
              className={`flex flex-col relative gap-4 bg-[#faf6f5] text-olive-dark shadow-[0_2px_11px_1px_#0000001c] transition-all duration-300 hover:shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer ${
                expanded === index ? "shadow-[0_2px_11px_1px_#9E7F61]" : ""
              }`}
              style={{
                order:
                  index < 3
                    ? `${index}`
                    : expanded === null || expanded < 3
                    ? `${index + 3}`
                    : `${index}`,
              }}
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
              <h3
                dangerouslySetInnerHTML={{ __html: item.name }}
                className="text-center text-black"
              ></h3>
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
                      <span
                        dangerouslySetInnerHTML={{ __html: item.para }}
                        className={`text-sm text-black`}
                      ></span>
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
          {expanded !== null && expanded < 3 && (
            <>
              {CORE_SERVICES3[expanded].buttons.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl dynamic-order"
                  style={{
                    ["--dynamic-order" as string]: `${
                      expanded < 3 ? index + 3 : index + 6
                    }`,
                  }}
                >
                  <Image
                    src={item.image}
                    width={400}
                    height={400}
                    quality={100}
                    className="w-full h-auto"
                    alt={item.name}
                  />
                  <div className="p-4 flex flex-col justify-center items-center absolute left-0 w-full bg-primary bg-opacity-75 transition-all duration-500 h-full bottom-0">
                    <h3
                      dangerouslySetInnerHTML={{ __html: item.name }}
                      className="text-2xl text-white text-center"
                    ></h3>
                    <p
                      className="text-base text-center text-white hidden group-hover:block group-hover:animate-opacity-anim"
                      dangerouslySetInnerHTML={{ __html: item.para }}
                    />
                  </div>
                  <Link
                    className="flex absolute inset-0 w-full h-full justify-center  gap-4 text-olive-dark  transition-all duration-300 shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer"
                    href={item.href}
                  ></Link>
                </div>
              ))}
            </>
          )}
        </div>
        <div>
          {expanded !== null && expanded >= 3 && (
            <>
              <div className="grid grid-cols-3 mt-4 gap-4">
                {CORE_SERVICES3[expanded].buttons.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={item.image}
                      width={400}
                      height={400}
                      quality={100}
                      className="w-full h-auto"
                      alt={item.name}
                    />
                    <div className="p-4 absolute flex flex-col justify-center items-center left-0  w-full bg-primary bg-opacity-75 transition-all duration-500 h-full bottom-0">
                      <h3 className="text-2xl text-white text-center">
                        {item.name}
                      </h3>
                      <p className="text-base text-center text-white hidden group-hover:block group-hover:animate-opacity-anim">
                        {item.para}
                      </p>
                    </div>
                    <Link
                      className="flex absolute inset-0 w-full h-full justify-center  gap-4 text-olive-dark  transition-all duration-300 shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer"
                      href={item.href}
                    ></Link>
                  </div>
                  // <Link
                  //   className="flex justify-center relative gap-4 text-olive-dark  transition-all duration-300 shadow-[0_2px_11px_1px_#9E7F61] p-4 py-6 rounded-2xl cursor-pointer"

                  //   //   style={{ order: expanded < 3 ? index + 3 : index + 6 }}
                  //   href={item.href}
                  // >
                  //   {item.name}
                  // </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CoreServicesNewOne;
