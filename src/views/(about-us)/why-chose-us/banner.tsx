import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[62.6%]">
            <HeadingOne classes="text-primary">
              Why NUYU is the Perfect
              <br /> Choice for You
            </HeadingOne>
            <p className="text-black">
              From the heart of Cheltenham, we offer outstanding general and
              cosmetic dentistry, ensuring you have a relaxed experience,
              surrounded by passionate and compassionate staff whose sole aim is
              to help you improve the health and appearance of your smile while
              supporting your overall wellbeing.
            </p>
            <ul className="text-black list-disc list-inside marker:text-primary marker:text-2xl">
              <li className="text-black">
                Personalised care in a spa-like setting
              </li>
              <li className="text-black">Expertise you can trust</li>
              <li className="text-black">
                Holistic approach to your wellbeing
              </li>
              <li className="text-black">State-of-the-art technology</li>
              <li className="text-black">Convenient and patient-focused</li>
            </ul>
          </div>
          <div className="w-full lg:w-[34%] hidden lg:block">
            <Image
              width={400}
              height={400}
              src={"/header-image-v3.webp"}
              alt="banner image"
              className="w-full h-auto rounded-br-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
