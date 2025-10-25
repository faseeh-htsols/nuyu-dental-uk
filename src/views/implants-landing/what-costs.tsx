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
            <HeadingTwo classes="text-center lg:text-left">
              Transparent Pricing - All Inclusive
            </HeadingTwo>
            <p className="my-1">Your NUYU Implant Package:</p>
            <ul className="text-sm space-y-2 list-disc list-inside marker:text-primary">
              <li>£2,236 (normally £2,795)</li>
              <li>
                {" "}
                Includes implant, crown, minor bone regeneration at time of
                placement, and gum graft if required
              </li>
              <li>
                No hidden add-ons for single implant treatment
                <br />
                note: major bone augmentation or sinus lift, if required, are
                additional
              </li>
              <li>
                Treatment carried out using premium Straumann dental implants -
                globally recognised for exceptional quality and longevity
              </li>
            </ul>
            <div className="mt-4 flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="w-full lg:w-[55%] shrink-0 bg-primary text-white rounded-tl-2xl lg:rounded-tr-none rounded-tr-2xl lg:rounded-bl-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-7 border-b border-white">
              <h3 className="text-2xl font-season">Dental Implant Treatment</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">from</span>{" "}
                <span className="line-through text-lg">£2,795</span>{" "}
                <span className="text-2xl">£2,236</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">
                Clinical care coordinator Consultation
              </h3>
              <p className="text-right md:text-left">
                <span className="text-2xl">FREE*</span>{" "}
                {/* <span className="line-through text-lg">£395</span>{" "}
                <span className="text-2xl">Free</span> */}
              </p>
            </div>
            {/* <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Treatment Simulation</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">From</span>{" "}
                <span className="line-through text-lg">£300</span>{" "}
                <span className="text-2xl">Free</span>
              </p>
            </div> */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6 border-b border-white">
              <h3 className="text-2xl font-season">Dentist assessment</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">from</span>{" "}
                <span className="line-through text-lg">£99</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center px-3 py-6">
              <h3 className="text-2xl font-season">CBCT Scan</h3>
              <p className="text-right md:text-left">
                <span className="text-sm">from</span>{" "}
                <span className="line-through text-lg">£249</span>{" "}
                <span className="text-2xl">FREE*</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="px-5 text-center">
            *where treatment is carried out
            <br /> Cheltenham clinics typically charge £3,100–£3,800 for a
            single implant with crown. At NUYU, your complete, all-inclusive
            package is £2,236. We’re opening up{" "}
            <span className="font-bold text-primary">
              30 implant treatment
            </span>{" "}
            places at this special rate - available until they’re filled.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default WhatCosts;
