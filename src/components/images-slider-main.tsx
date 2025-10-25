import HeadingTwo from "@/components/heading-two";
import { IImagesCarousel } from "@/types";
import React from "react";
import ImageComparisonSlider from "./image-comparison";
import Container from "./container";
import SimpleButton from "./simple-button";

const ImagesSliderMain = ({ data }: { data: IImagesCarousel }) => {
  return (
    <div
      className={`py-5 lg:py-10 ${
        data.texture ? "bg-[url(/white-textured.webp)]" : ""
      }`}
    >
      <Container>
        <HeadingTwo classes="text-center mb-3">{data.heading}</HeadingTwo>
        {data.para && (
          <p
            className="mb-6 text-center"
            dangerouslySetInnerHTML={{ __html: data.para }}
          ></p>
        )}
        {data.buttonText && data.buttonHref && (
          <div className="flex justify-center my-6">
            <SimpleButton
              classes="inline-block"
              href={data.buttonHref}
              variant="primary"
            >
              {data.buttonText}
            </SimpleButton>
          </div>
        )}
        <div className="grid lg:grid-cols-3 gap-5">
          {data.images.map((item, index) => (
            <ImageComparisonSlider
              beforeImage={item.before}
              afterImage={item.after}
              name={item.name}
              key={index}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ImagesSliderMain;
