import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";

type CreatingSmilesProps = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  cta?: { label: string; href: string };
  leftImage?: string;
};

const CreatingSmiles = ({
  heading,
  paragraphs,
  list,
  cta,
  leftImage,
}: CreatingSmilesProps) => {
  return (
    <div className={`py-5 lg:py-10 `}>
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between gap-6 items-center`}>
          <div className="w-full lg:w-[calc(50%-12px)]">
            {leftImage && (
              <Image
                src={leftImage}
                alt={"img"}
                width={600}
                height={600}
                quality={100}
                className="rounded-tr-3xl rounded-bl-3xl"
              />
            )}
          </div>

          <div className="w-full lg:w-[calc(50%-12px)] relative">
            <Image
              src={"/logo-primary.webp"}
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-contain opacity-10"
              alt="logo"
            />
            <div className="mb-3">
              <HeadingTwo classes="">{heading}</HeadingTwo>
            </div>

            {paragraphs && (
              <div className="text-base mb-3 text-[#333] relative">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={i < paragraphs.length - 1 ? "mb-4" : ""}
                    dangerouslySetInnerHTML={{ __html: p }}></p>
                ))}
              </div>
            )}
            {list && (
              <ul className="list-disc text-sm list-inside marker:text-primary  text-[#333] relative">
                {list.map((p, i) => (
                  <li
                    key={i}
                    className={i < list.length - 1 ? "mb-4" : ""}
                    dangerouslySetInnerHTML={{ __html: p }}></li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="flex w-full lg:w-fit lg:flex-row flex-col items-center lg:justify-start justify-center gap-3 relative mt-5">
                <SimpleButton href={cta.href} variant={"primary"}>
                  {cta.label}
                </SimpleButton>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreatingSmiles;
