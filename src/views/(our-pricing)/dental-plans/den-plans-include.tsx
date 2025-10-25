import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import React from "react";

const DenPlansInclude = () => {
  return (
    <div className="py-12 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className=" flex flex-col justify-center">
            <div className="mb-5">
              <HeadingTwo classes="text-white mb-4">
                What Does Denplan Essentials Include?
              </HeadingTwo>
              <ul className="ps-6 list-disc marker:text-white">
                <li>Dental check-ups</li>
                <li>Dental hygiene visits</li>
                <li>Dental x-rays</li>
                <li>Preventive dental advice and therapy</li>
                <li>
                  10% off everyday dentistry and Invisalign<sup>&reg;</sup>*
                </li>
              </ul>
            </div>
            <div>
              <HeadingTwo classes="text-white mb-4">
                Why choose Denplan Essentials?
              </HeadingTwo>
              <ul className="ps-6 list-disc marker:text-white">
                <li>Encourages you to attend regular dental visits</li>
                <li>Allows you to budget for routine oral care</li>
                <li>You can join the practice easily by signing up online</li>
                <li>Simple to set up with no patient assessments required</li>
                <li>Discounted restorative dentistry</li>
              </ul>
            </div>
          </div>

          <div>
            <Image
              width={500}
              height={500}
              quality={100}
              alt="Denplan"
              className="w-full h-auto"
              src={"/dental-plans-include.webp"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DenPlansInclude;
