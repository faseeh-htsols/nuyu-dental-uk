import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";

type CreatingSmilesTwoProps = {
  heading: string;
  paragraphs?: string[];
  botPara?: string;
  cta?: { label: string; href: string };
  list?: string[];
  rightImage?: string;
  invisalignProfileUrl?: string;
};

const CreatingSmilesTwo = ({
  heading,
  paragraphs,
  list,
  cta,
  botPara,
  rightImage,
  invisalignProfileUrl,
}: CreatingSmilesTwoProps) => {
  return (
    <div className={`py-5 lg:py-10 `}>
      <Container>
        <div
          className={`flex flex-col lg:flex-row-reverse justify-between gap-6 items-center`}>
          <div className="w-full lg:w-[calc(50%-12px)]">
            {rightImage && (
              <Image
                src={rightImage}
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
              <ul className="list-disc list-inside text-sm marker:text-primary  text-[#333] relative">
                {list.map((p, i) => (
                  <li
                    key={i}
                    className={i < list.length - 1 ? "mb-4" : ""}
                    dangerouslySetInnerHTML={{ __html: p }}></li>
                ))}
              </ul>
            )}
            {botPara && (
              <div
                className="text-base text-[#333] relative mt-3"
                dangerouslySetInnerHTML={{ __html: botPara }}></div>
            )}
            {cta && (
              <div className="flex w-full lg:w-fit lg:flex-row flex-col items-center lg:justify-start justify-center gap-3 relative mt-5">
                <SimpleButton
                  href={cta.href ?? invisalignProfileUrl ?? "#"}
                  variant={"primary"}>
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

export default CreatingSmilesTwo;
