import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import React from "react";

const TeethWhite = () => {
  return (
    <div className="py-12 bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <Image
              width={500}
              height={500}
              quality={100}
              alt="Denplan"
              className="w-full h-auto rounded-tr-3xl rounded-bl-3xl"
              src={"/tj-6.webp"}
            />
          </div>
          <div className=" flex flex-col justify-center">
            <div className="mb-5">
              <HeadingTwo classes="text-white mb-4">
                Teeth Whitening – On Us
              </HeadingTwo>
              <p className="text-white ">
                As a valued NUYU plan patient, your dream of a brighter, whiter
                smile is already within reach. We’re delighted to offer
                complimentary professional teeth whitening as part of your
                membership – so there’s no need to look elsewhere.
                <br />
                <br />
                Receive free <strong>Teeth Whitening</strong> gels at each check
                up included in your plan.
                <br />
                <br />
                Forget the guesswork of high street kits. At NUYU, your
                whitening is safe, tailored, and designed to deliver
                long-lasting radiance you’ll love.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TeethWhite;
