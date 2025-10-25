import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// type BannerData = {
//   headingOne: string;
//   headingTwo?: string;
//   gdc?: string;
// };

// type BannerProps = {
//   data: BannerData;
// };

const Banner = ({
  headingOne,
  headingTwo,
  gdc,
  nmc,
}: {
  headingOne: string;
  headingTwo: string;
  gdc?: string;
  nmc?: string;
}) => {
  return (
    <div className={`lg:pb-0 pb-5`}>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 lg:gap-6 lg:w-[62.6%]">
            <HeadingOne classes="text-primary">{headingOne}</HeadingOne>
            {headingTwo && (
              <HeadingTwo classes="text-primary">{headingTwo}</HeadingTwo>
            )}
            {gdc && (
              <div>
                <Link
                  href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${gdc}`}
                >
                  GDC NO {gdc}
                </Link>
              </div>
            )}
            {nmc && (
              <div>
                <Link
                  href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${gdc}`}
                >
                  NMC : {nmc}
                </Link>
              </div>
            )}
          </div>

          <div className={`lg:w-[34%]  lg:block hidden`}>
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
