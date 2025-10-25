import React from "react";
import Container from "./container";
import Image from "next/image";
import { ITreatmentTips } from "@/types";
import HeadingTwo from "./heading-two";
import SimpleButton from "./simple-button";

const TipsTreatment = ({ data }: { data: ITreatmentTips }) => {
  return (
    <div
      className={`py-5 lg:py-10 ${
        data.texture ? "bg-[url(/white-textured.webp)]" : ""
      }`}
    >
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between gap-6 items-center ${
            data.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className=" w-full lg:w-[calc(50%-12px)]">
            <Image
              src={data.image}
              alt={data.heading}
              width={600}
              height={600}
              quality={100}
              className="rounded-tr-3xl rounded-bl-3xl"
            />
          </div>
          <div className="w-full lg:w-[calc(50%-12px)] relative">
            <Image
              src={"/logo-primary.webp"}
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-contain opacity-10"
              alt="logo"
            />
            <HeadingTwo classes="mb-7">{data.heading}</HeadingTwo>
            {data.para && (
              <p
                className="text-base text-[#333] relative"
                dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )}
            {data.lists && (
              <ul className="list-disc marker:text-primary text-[#333] flex flex-col gap-2 ps-4 my-4">
                {data.lists.map((itm, idx) => (
                  <li
                    key={idx}
                    className="text-[#333] relative"
                    dangerouslySetInnerHTML={{ __html: itm }}
                  />
                ))}
              </ul>
            )}
            {data.botPara && (
              <p
                className="text-base text-[#333] relative"
                dangerouslySetInnerHTML={{ __html: data.botPara }}
              />
            )}
            {data.buttons && (
              <div className="flex w-full lg:w-fit lg:flex-row flex-col items-center lg:justify-start justify-center gap-3 relative  mt-5">
                {data.buttons.map((btn, idx) => (
                  <SimpleButton
                    key={idx}
                    href={btn.href}
                    variant={idx === 0 ? "primary" : "secondary"}
                  >
                    {btn.name}
                  </SimpleButton>
                ))}
              </div>
            )}
            {/* <div className="flex w-full lg:w-fit lg:flex-row flex-col items-center lg:justify-start justify-center gap-3 relative  mt-5">
              {data.buttons &&
                data.buttons.map((btn, idx) => (
                  <SimpleButton
                    key={idx}
                    href={btn.href}
                    variant={idx === 0 ? "primary" : "secondary"}
                  >
                    {btn.name}
                  </SimpleButton>
                ))}
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TipsTreatment;
