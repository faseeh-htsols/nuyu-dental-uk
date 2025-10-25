import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import React from "react";

const WhatIsDentalImplants = () => {
  return (
    <div className="py-10">
      <div>
        <Image
          src={"/what-is-composite.webp"}
          alt="what is Invisalign"
          width={1000}
          height={1000}
          className="w-full lg:h-auto min-h-[350px] object-cover"
          quality={100}
        />
      </div>
      <Container>
        <div className="bg-white -mt-32 shadow-xl relative py-10 px-9">
          <HeadingTwo classes="mb-4 text-center lg:text-left">
            What are Full Arch Implants?
          </HeadingTwo>
          <div className="">
            <p>
              At NUYU Cheltenham, full arch dental implants restore your smile
              with natural-looking results that feel secure and effortless.
              Anchored to the jawbone, they free you from the limits of
              dentures, giving lasting comfort, confidence and quality of life.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsDentalImplants;
