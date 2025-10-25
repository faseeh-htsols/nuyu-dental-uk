import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import React from "react";

const WhatIsInvisalign = () => {
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
            What is Composite Bonding ?
          </HeadingTwo>
          <div className="">
            <p>
              At NUYU Cheltenham, composite bonding offers a gentle yet
              transformative way to perfect your smile. Using a finely crafted,
              tooth-coloured resin, our skilled clinicians carefully shape and
              bond the material to your natural teeth, seamlessly correcting
              chips, gaps and discolouration. The treatment is comfortable,
              minimally invasive and usually completed in just one visit –
              giving you an instantly refreshed, confident smile without the
              need for more complex procedures.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsInvisalign;
