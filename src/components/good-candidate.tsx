import React from "react";
import Container from "./container";
import { IGoodCandidate } from "@/types";
import HeadingTwo from "./heading-two";
import Image from "next/image";

const GoodCandidate = ({ data }: { data: IGoodCandidate }) => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <div
          className="p-10 min-h-[36rem] rounded-tr-3xl rounded-bl-3xl relative"
          style={{
            backgroundImage: `linear-gradient(#00000080, #00000080), url(${data.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {!data.flowerRemove && (
            <Image
              src={"/logo-primary.webp"}
              className="w-full h-full absolute top-0 right-0 object-contain object-right opacity-60"
              alt="logo"
              width={700}
              height={700}
            />
          )}

          <div className="max-w-[28rem] w-full">
            <HeadingTwo classes="text-white mb-5">{data.heading}</HeadingTwo>
            <div
              className="text-white text-base"
              dangerouslySetInnerHTML={{ __html: data.para }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GoodCandidate;
