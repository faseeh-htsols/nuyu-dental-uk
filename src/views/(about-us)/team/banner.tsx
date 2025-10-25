import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[62.6%]">
            <HeadingOne classes="text-primary">Meet the Team</HeadingOne>
            <p className="text-black">
              Meet the faces behind NUYU Dental & Aesthetics – a private dental
              practice in Cheltenham, dedicated to exceptional care with a
              personal touch.
              <br />
              <br />A team dedicated to creating a new kind of dental
              experience. From expert clinicians to our concierge-led experience
              team, every member is here to make your visit welcoming, seamless,
              and focused on achieving the best results.
            </p>
            <div className="flex justify-center lg:block">
              <SimpleButton href="#team" variant="primary">
                Discover Your NUYU Team
              </SimpleButton>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[34%]">
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
