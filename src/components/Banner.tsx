import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import React from "react";

type BannerData = {
  headingone2?: string;
  headingtwo2?: string;
  headingOne?: string;
  tag?: string;
  headingTwo?: string;
  description?: string;
  lists?: string[];
  buttonText?: string;
  buttonHref?: string;
  image: string;
  flowerImage?: boolean;
  paddingBot?: boolean;
};

type BannerProps = {
  data: BannerData;
};

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className={`${data.paddingBot ? "pb-5 lg:pb-0" : ""}`}>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 lg:gap-3 lg:w-[62.6%]">
            {data.headingone2 && data.headingtwo2 && (
              <>
                <h1 className="text-xl md:text-xl font-season  tracking-wider font-medium text-primary">
                  {data.headingone2}
                </h1>
                <h2 className="text-3xl md:text-5xl font-season tracking-wider font-medium lg:!leading-[4rem] text-primary">
                  {data.headingtwo2}
                </h2>
              </>
            )}
            {data.headingOne && (
              <HeadingOne classes="text-primary">{data.headingOne}</HeadingOne>
            )}
            {data.headingTwo && (
              <HeadingTwo classes="text-primary">{data.headingTwo}</HeadingTwo>
            )}
            {data.description && (
              <p
                className="text-black"
                dangerouslySetInnerHTML={{ __html: data.description }}></p>
            )}
            {data.lists && (
              <ul className="list-disc ps-5 marker:text-primary flex flex-col gap-3">
                {data.lists.map((list, index) => (
                  <li key={index}>{list}</li>
                ))}
              </ul>
            )}
            {data.buttonText && data.buttonHref && (
              <div className="flex justify-center lg:block">
                <SimpleButton
                  classes="inline-block"
                  href={data.buttonHref}
                  variant="primary">
                  {data.buttonText}
                </SimpleButton>
              </div>
            )}
          </div>

          <div
            className={`lg:w-[34%] ${
              data.flowerImage ? "lg:block hidden" : "lg:block hidden"
            }`}>
            <Image
              width={400}
              height={400}
              src={data.image}
              alt="banner image"
              priority
              className="w-full h-auto rounded-br-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
