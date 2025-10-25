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
            What are Dental Implants?
          </HeadingTwo>
          <div className="">
            <p>
              At NUYU, your implant treatment is designed around precision,
              clarity, and your confidence.
              <br />
              <br />
              Every implant is digitally planned in 3D, and before we begin,
              we’ll show you your{" "}
              <span className="text-primary">
                personalised treatment plan
              </span>{" "}
              - including the{" "}
              <span className="text-primary">virtual implant position</span> on
              your CBCT scan. This means you can see exactly how your implant
              will be placed and{" "}
              <span className="text-primary">feel fully involved</span> in the
              process. <br />
              <br />
              Every treatment is carried out with{" "}
              <span className="text-primary">premium Straumann</span> implant
              systems, trusted worldwide for their strength, reliability, and
              long-term success.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsDentalImplants;
