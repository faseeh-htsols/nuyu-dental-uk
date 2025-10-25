import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { ALL_ON_4_WHY_CHOOSE } from "@/constants/data";
import Image from "next/image";
import React from "react";

const WhyChoose = () => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <HeadingTwo classes="text-center mb-8">
          Why Choose Full Arch Implants?
        </HeadingTwo>
        <div className="flex flex-col lg:flex-row gap-6 justify-center flex-wrap">
          {ALL_ON_4_WHY_CHOOSE.map((item) => (
            <div
              key={item.title}
              className="w-full lg:w-[calc(33.333%-16px)] rounded-bl-3xl rounded-tr-3x flex flex-col gap-4 shadow-[0_2px_11px_1px_#0000001c] py-8 px-6">
              <div className="bg-primary rounded-tr-xl rounded-bl-xl w-[50px] mx-auto h-[50px] flex justify-center items-center">
                <Image
                  src={item.number}
                  alt={item.title}
                  width={30}
                  className="max-w-full h-auto"
                  height={30}
                />
              </div>
              <h3 className="text-2xl text-primary font-season text-center">
                {item.title}
              </h3>
              <p className="text-center"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
