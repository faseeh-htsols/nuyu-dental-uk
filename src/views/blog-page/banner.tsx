import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import Image from "next/image";
import React from "react";

type BannerData = {
  title: string;
  image: string;
};

const Banner = ({ title, image }: BannerData) => {
  return (
    <div className={`pb-5`}>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 lg:gap-3 lg:w-[62.6%]">
            <HeadingOne classes="text-primary">{title}</HeadingOne>
          </div>
          <div className={`lg:w-[34%] lg:block hidden`}>
            <Image
              width={400}
              height={400}
              src={image}
              alt="banner image"
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
