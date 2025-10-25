import React from "react";
import Container from "./container";
import { ITreatmentWorks } from "@/types";
import HeadingTwo from "./heading-two";
import Image from "next/image";

const TreatmentWorks = ({ data }: { data: ITreatmentWorks }) => {
  return (
    <div
      className={`py-5 lg:py-10 ${
        data.texture ? "bg-[url(/white-textured.webp)]" : ""
      }`}
    >
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between bg-cover p-9 py-14 rounded-tr-3xl rounded-bl-3xl`}
          style={{
            backgroundImage: `linear-gradient(#87766370, #87766370), url(${data.image})`,
          }}
        >
          <div className="w-full lg:w-[40%]">
            <HeadingTwo classes="text-white mb-4">{data.heading}</HeadingTwo>
            {data.para && (
              <div
                className="text-white text-base"
                dangerouslySetInnerHTML={{ __html: data.para }}
              />
            )}
            {data.lists && (
              <ul>
                {data.lists.map((list, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: list }} />
                ))}
              </ul>
            )}
          </div>
          {!data.logoImageRemoval && (
            <div className="w-full lg:w-[40%]">
              <Image
                src={"/header-image-v3.webp"}
                alt="logo"
                width={500}
                height={500}
                className="w-full h-96 object-contain"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TreatmentWorks;
