import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type BannerTwoProps = {
  headingOne: string; // required
  degreesLine?: string;
  gdcNo?: string;
  gdcUrl?: string;
  image?: string;
};

const BannerTwo = ({
  headingOne,
  degreesLine,
  gdcNo,
  gdcUrl,
  image,
}: BannerTwoProps) => {
  return (
    <div className={`lg:pb-0 pb-5`}>
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-3 lg:gap-6 lg:w-[62.6%]">
            <HeadingOne classes="text-primary">
              {headingOne}
              {/* Dr Naiz Khan – Cosmetic Dentist & Invisalign® Diamond Apex Provider */}
            </HeadingOne>

            <div>
              {degreesLine && <p>{degreesLine}</p>}
              {/* <p>BDS (Bristol, UK), 2005</p> */}
              {gdcNo && <Link href={gdcUrl ?? "#"}>GDC No: {gdcNo}</Link>}
              {/* <Link href="https://olr.gdc-uk.org/...">GDC No: 101469</Link> */}
            </div>
          </div>

          <div className={`lg:w-[34%] lg:block hidden`}>
            {image && (
              <Image
                width={400}
                height={400}
                src={image}
                alt="banner image"
                className="w-full h-auto rounded-br-3xl"
              />
            )}
            {/* <Image src="/dr-naiz-invisalign-header-NUYU-Dental.webp" ... /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerTwo;
