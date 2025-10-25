import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import React from "react";

const WhatCosts = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row items-center  border-2 border-secondary rounded-tr-[50px] rounded-bl-[50px]  overflow-hidden">
          <div className="py-6 px-6 grow">
            <HeadingTwo>How Much Does It Cost?</HeadingTwo>
            <p className="mb-4">
              We keep all our pricing as clear and transparent as possible with
              no hidden cost and our flexible payment plans make treatment
              affordable for all.
              <br />
              <br />
              0% Finance Available On Request
            </p>
            <div className="mt-3 lg:mt-8 flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="w-full lg:w-[55%] shrink-0 bg-primary text-white rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl lg:rounded-bl-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">
                Same Day Full Arch Dental Implants
              </h3>
              <p className="text-right md:text-left">
                <span className="text-sm">from</span>{" "}
                <span className="line-through text-lg">£14,995</span>{" "}
                <span className="text-2xl">£11,996</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">TCO Consultation </h3>
              <p className="text-right md:text-left">
                {/* <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£100</span>{" "} */}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Examination</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">from</span>{" "}
                <span className="line-through text-lg">£99</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
            {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Electric Toothbrush</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£60</span>{" "}
                <span className="text-2xl">Free</span>
              </p>
            </div> */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6">
              <h3 className="text-2xl font-season">CBCT Scan</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£249</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="px-5 text-center">*where treatment is carried out</p>
        </div>
      </Container>
    </div>
  );
};

export default WhatCosts;
