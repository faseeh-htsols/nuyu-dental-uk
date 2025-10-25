"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { ILookAfter } from "@/types";
import Image from "next/image";
import ChevronSvg from "./chevron-svg";
import { useState } from "react";
const LookingAfter = ({ data }: { data: ILookAfter }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`py-5 lg:py-10 scroll-mt-14 ${
        data.texture ? "bg-[url(/white-textured.webp)]" : ""
      }`}
      id={data.id}>
      <Container>
        <div className="relative mb-8">
          <HeadingTwo classes="text-center">{data.heading}</HeadingTwo>
          {data.btnContent && data.btnLink && (
            <div className="absolute hidden lg:flex top-0 left-0  justify-end items-center w-full h-full">
              <a
                href={data.btnLink}
                className="group bg-transparent rounded-full flex justify-center items-center border-[1px] border-olive-dark overflow-hidden transition-all duration-300 w-10 h-10 hover:w-[230px] hover:bg-secondary hover:border-transparent"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className="uppercase text-white w-0 hidden opacity-0 transition-opacity duration-300 group-hover:inline-block group-hover:opacity-100 group-hover:whitespace-nowrap group-hover:break-keep group-hover:w-fit group-hover:will-change-width-height">
                  {data.btnContent}
                </div>
                <div>
                  {/* <Image
                  src={"/bottom-arrow.svg"}
                  alt="arrow"
                  width={30}
                  height={30}
                  className="w-4 h-4 group-hover:ms-1"
                /> */}
                  <ChevronSvg
                    classes="w-4 h-4 group-hover:ms-1 text-black group-hover:!text-white rotate-180"
                    fill={hover ? "#fff" : "#000"}
                  />
                </div>
              </a>
            </div>
          )}
        </div>
        <div>
          <p
            className="text-center mb-7 text-base  text-[#333]"
            dangerouslySetInnerHTML={{ __html: data.para }}
          />
          <div className="flex flex-row justify-center flex-wrap">
            {data.gridData.map((item, index) => (
              <div
                key={item.text}
                className={`flex w-full md:w-1/2 ${
                  data.gridData.length === 6 ? "lg:w-[16%]" : "lg:w-1/4"
                } group relative flex-col gap-7 items-center ${
                  data.gridData.length - 1 === index
                    ? ""
                    : "lg:before:block before:hidden before:content-[''] before:absolute before:right-0 before:top-1/2 before:h-[70%] before:w-[1px] before:-translate-y-1/2 before:bg-secondary"
                }`}>
                <div>
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.text}
                    quality={100}
                    className="w-20 h-20 object-contain transition-all duration-200 group-hover:drop-shadow-[0_0_20px_rgba(239,191,4,.69)]"
                  />
                </div>
                <p className="text-black text-sm px-2 transition-all duration-200 text-center group-hover:text-shadow-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LookingAfter;
