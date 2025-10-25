import React from "react";
import Container from "./container";
import Image from "next/image";
import HeadingTwo from "./heading-two";
import { IGoodCandidate } from "@/types";
import SimpleButton from "./simple-button";
const TreatmentBookSection = ({ data }: { data: IGoodCandidate }) => {
  return (
    <div
      className={`py-12 ${data.texture ? "bg-[url(/white-textured.webp)]" : ""}`}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className={`relative ${data.reverse ? "order-2" : ""}`}>
            <Image
              src={data.image}
              alt="quality"
              width={1000}
              height={1000}
              className="w-full h-auto"
              quality={100}
            />
            {/* <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <div className="relative bg-primary rounded-2xl text-white px-7 pt-12 pb-9">
            <div className="absolute top-2 flex justify-center items-center right-2 w-9 h-9 border border-secondary rounded-full ">
              <ChevronSvg fill="#fff" classes="w-4 h-4 -rotate-90" />
            </div>
            <div className="price-card-title">
              Payment plans starting from just
            </div>
            <div className="price-card-price w-embed">£17.75 P/Month</div>
          </div>
        </div> */}
          </div>
          <div
            className={`flex flex-col gap-4 justify-center ${
              data.reverse ? "order-1" : ""
            }`}
          >
            <HeadingTwo>{data.heading}</HeadingTwo>
            <p
              className="text-base text-[#333]"
              dangerouslySetInnerHTML={{ __html: data.para }}
            />
            {data.buttons && (
              <div className="mt-3 flex lg:justify-start justify-center gap-4">
                {data.buttons.map((item, index) => (
                  <SimpleButton
                    variant={
                      index === 1
                        ? "outline"
                        : index === 2
                        ? "secondary"
                        : "primary"
                    }
                    key={item.name}
                    href={item.href}
                  >
                    {item.name}
                  </SimpleButton>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TreatmentBookSection;
