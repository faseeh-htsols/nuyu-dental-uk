import React from "react";
import Container from "@/components/container";
import Image from "next/image";
// import { ITreatmentTips } from "@/types";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
interface Ibuttons {
  name: string;
  link: string;
}
const TipsTreatment = ({
  image,
  paras,
  name,
  designation,
  buttons,
}: {
  image: string;
  paras: string[];
  name: string;
  designation: string;
  buttons?: Ibuttons[];
}) => {
  return (
    <div className={`py-5 lg:py-10 `}>
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between gap-6 items-center `}
        >
          <div className=" w-full lg:w-[calc(50%-12px)]">
            <Image
              src={image}
              alt={name}
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
            <div className="mb-7">
              <HeadingTwo classes="">{name}</HeadingTwo>
              <h3
                className="text-2xl text-primary"
                dangerouslySetInnerHTML={{ __html: designation }}
              ></h3>
            </div>
            {paras.map((item, index) => (
              <p
                className="text-base text-[#333] relative"
                dangerouslySetInnerHTML={{ __html: item }}
                key={index}
              />
            ))}

            {buttons && (
              <div className="flex w-full lg:w-fit lg:flex-row flex-col items-center lg:justify-start justify-center gap-3 relative  mt-5">
                {buttons.map((btn, idx) => (
                  <SimpleButton
                    key={idx}
                    href={btn.link}
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
