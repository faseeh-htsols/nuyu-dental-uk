import { IWhatIsAndKeyPoints } from "@/types";
import Container from "./container";
import HeadingTwo from "./heading-two";
import Image from "next/image";

const WhatIsAndKeyBenefits = ({ data }: { data: IWhatIsAndKeyPoints }) => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-full lg:w-[calc(50%-12px)] relative">
            <Image
              src={"/logo-primary.webp"}
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-contain opacity-10"
              alt="logo"
            />
            <HeadingTwo classes="mb-4">{data.heading}</HeadingTwo>
            <div
              className="text-[#333] mb-3"
              dangerouslySetInnerHTML={{ __html: data.para }}
            />
            <div>
              <h3
                className="mb-4 text-lg text-[#333]"
                dangerouslySetInnerHTML={{ __html: data.subHeading }}
              />
              <ul className="list-disc marker:text-primary ps-4">
                {data.points.map((item, index) => (
                  <li
                    key={index}
                    className="text-[#333]"
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-12px)]">
            <Image
              src={data.imageSrc}
              alt={data.heading}
              className="w-full h-auto rounded-tr-3xl rounded-bl-3xl "
              width={700}
              height={700}
              quality={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsAndKeyBenefits;
