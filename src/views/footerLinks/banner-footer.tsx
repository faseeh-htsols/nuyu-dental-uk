import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
// import Image from "next/image";
import React from "react";

type BannerData = {
  headingOne: string;
  image: string;
  flowerImage?: boolean;
  paddingBot?: boolean;
};

type BannerProps = {
  data: BannerData;
};

const BannerFooter: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className={`${data.paddingBot ? "pb-5 lg:pb-0" : ""}`}>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row justify-center items-center">
          <div className="">
            <HeadingOne classes="text-primary">{data.headingOne}</HeadingOne>
          </div>
          {/* <div
            className={`lg:w-[34%] ${
              data.flowerImage ? "lg:block hidden" : "lg:block hidden"
            }`}>
            <Image
              width={400}
              height={400}
              src={data.image}
              alt="banner image"
              className="w-1/2 h-auto rounded-br-3xl"
            />
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default BannerFooter;
