import Container from "@/components/container";
// import HeadingOne from "@/components/heading-one";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import React from "react";

type BannerData = {
  headingOne: string;
  tag?: string;
  headingTwo?: string;
  description?: string;
  image: string;
  lists?: string[];
  buttonText?: string;
  buttonHref?: string;
  video?: string;
  flowerImage?: boolean;
  paddingBot?: boolean;
};

type BannerProps = {
  data: BannerData;
};

const BannerVideo: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className={`${data.paddingBot ? "pb-5 lg:pb-0" : ""} pt-5`}>
      <Container>
        <div className="flex flex-col-reverse gap-4 lg:gap-5 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 lg:gap-2 lg:w-[50%]">
            <h1 className="text-xl md:text-xl font-season  tracking-wider font-medium text-primary">
              Private Dental Practice Cheltenham
            </h1>
            <h2 className="text-3xl md:text-5xl font-season  tracking-wider font-medium lg:!leading-[4rem] text-primary">
              {data.headingOne}
            </h2>
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

          <div className={`w-full lg:w-[50%] relative`}>
            <Image
              width={400}
              height={400}
              src={data.image}
              alt="banner image"
              priority
              className="w-full h-auto rounded-3xl relative object-cover"
            />
            {/* <video
              muted
              autoPlay
              loop
              playsInline
              webkit-playsinline="true"
              preload="auto"
              src={data.video}
              className="w-full h-auto rounded-bl-3xl rounded-tr-3xl"
            /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerVideo;
