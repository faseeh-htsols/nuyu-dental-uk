import Container from "@/components-2/container";
import HeadingTwo from "@/components-2/heading-two";
import SimpleButton from "@/components-2/simple-button";
import Image from "next/image";
import React from "react";

const SmileView = () => {
  return (
    <div className="py-10 bg-[#faf6f5]">
      <Container>
        <HeadingTwo classes="text-center mb-6">
          Invisalign® Smile View
        </HeadingTwo>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <Image
              src={"/smile-view-main.webp"}
              width={1000}
              height={1000}
              className="w-full h-auto"
              alt="Invisalign Smile view"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 items-center">
            <div>
              <Image
                src={"/smile-view1.jpg"}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-full"
                alt="Invisalign Smile view"
              />
              <p className="text-center">Before</p>
            </div>
            <div>
              <Image
                src={"/smile-view2.jpg"}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-full"
                alt="Invisalign Smile view"
              />
              <p className="text-center">After</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <SimpleButton
            variant="primary"
            href="https://www.invisalign.co.uk/SV/1807257">
            TAKE THE FREE SMILE ASSESSMENT
          </SimpleButton>
        </div>
      </Container>
    </div>
  );
};

export default SmileView;
