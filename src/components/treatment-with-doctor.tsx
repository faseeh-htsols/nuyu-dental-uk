import React from "react";
import Container from "./container";
import HeadingTwo from "./heading-two";
import { ITreatmentWithDoctor } from "@/types";
import Image from "next/image";

const TreatmentWithDoctor = ({ data }: { data: ITreatmentWithDoctor }) => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-[calc(50%-12px)]">
            <HeadingTwo classes="mb-4">{data.heading}</HeadingTwo>
            <div
              className="text-[#333]"
              dangerouslySetInnerHTML={{ __html: data.para }}
            />
          </div>
          <div className="w-full lg:w-[calc(50%-12px)]">
            <div className="">
              <Image
                src={data.image}
                width={400}
                height={400}
                alt={data.drName}
                className="rounded-tr-3xl rounded-bl-3xl overflow-hidden w-full h-[300px] object-cover"
              />
            </div>
            <div className="rounded-tl-3xl rounded-br-3xl bg-white py-10 px-4 flex flex-col items-center relative -top-10">
              <h3 className="text-[#333]">{data.drName}</h3>
              <p className="text-secondary">{data.designation}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TreatmentWithDoctor;
