import Container from "@/components-2/container";
import HeadingTwo from "@/components-2/heading-two";
import SimpleButton from "@/components-2/simple-button";
import React from "react";

const WhatCosts = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row items-center  border-2 border-secondary rounded-tr-[50px] rounded-bl-[50px]  overflow-hidden">
          <div className="py-6 px-6 grow">
            <HeadingTwo classes="text-center lg:text-left">
              What&apos;s It Cost?
            </HeadingTwo>
            <p className="mb-4">
              We keep all our pricing as clear and transparent as possible with
              no hidden cost and our flexible payment plans make treatment
              affordable for all.
              <br />
              <br />
              0% Finance Available On Request
            </p>
            <div className="flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A FREE Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="w-full lg:w-[55%] shrink-0 bg-primary text-white rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl lg:rounded-bl-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">
                Invisalign® Clear Braces*
              </h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£2,295</span>{" "}
                {/* <span className="text-2xl">£1,295</span> */}
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Teeth Whitening</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£395</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
            {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Treatment Simulation</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£300</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div> */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">3D Digital Scan</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£99</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6">
              <h3 className="text-2xl font-season">Retainers</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£298</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="px-5 text-center">
            *Invisalign® pricing is based on the number of aligners needed to
            achieve your dream smile with prices ranging between £2,295 to
            £4,595. Your dentist will be able to determine the number of stages
            needed at your consultation .
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WhatCosts;
