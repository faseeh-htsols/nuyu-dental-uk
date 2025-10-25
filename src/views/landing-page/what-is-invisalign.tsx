import Container from "@/components-2/container";
import HeadingTwo from "@/components-2/heading-two";
import Image from "next/image";
import React from "react";

const WhatIsInvisalign = () => {
  return (
    <div className="py-10">
      <div>
        <Image
          src={"/what-is-invis.webp"}
          alt="what is Invisalign"
          width={1000}
          height={1000}
          className="w-full lg:h-auto min-h-[350px] object-cover"
          quality={100}
        />
      </div>
      <Container classes="">
        <div className="bg-white -mt-32 shadow-xl relative py-10 px-9">
          <HeadingTwo classes="mb-4 text-center lg:text-left">
            What is Invisalign®?
          </HeadingTwo>
          <div className="">
            <p>
              At NUYU Cheltenham, Invisalign® offers a discreet and modern way
              to straighten your teeth with clear, comfortable aligners.
              Custom-made to gently guide your teeth into place, each set of
              aligners brings you closer to your dream smile. Worn for most of
              the day but easily removed for meals, hot drinks and brushing,
              Invisalign® fits seamlessly into your lifestyle. With your
              dedication and our expert guidance, you can achieve the
              beautifully aligned smile you’ve always wanted – all without the
              need for fixed braces.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsInvisalign;
