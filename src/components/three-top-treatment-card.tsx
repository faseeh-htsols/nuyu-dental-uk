import React from "react";
import Container from "./container";
import { ITopThreeCardsTreatment } from "@/types";
import Link from "next/link";
import ArrowSvg from "./arrow-svg";
const ThreeTopTreatmentCard = ({
  data,
}: {
  data: ITopThreeCardsTreatment[];
}) => {
  return (
    <div className={`py-5 lg:py-10 bg-[url(/white-textured.webp)]`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className={`rounded-tr-3xl rounded-bl-3xl p-9 flex flex-col gap-6 text-white ${
                index % 2 === 0 ? "bg-secondary" : "bg-primary"
              }`}>
              <h2 className="text-2xl text-white">{item.title}</h2>
              <div className="flex justify-start">
                <Link
                  href={item.btnHref}
                  target={
                    item.btnHref?.includes("https") ? "_blank" : undefined
                  }
                  className="flex gap-2 uppercase  pb-3 text-sm text-white relative after:content-[''] after:absolute after:bottom-1 after:h-[2px] after:w-full after:bg-white after:transition-[width] hover:after:w-0 after:duration-300">
                  {item.btnText}
                  <ArrowSvg classes="-rotate-45 w-5 h-auto" fill="#fff" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ThreeTopTreatmentCard;
