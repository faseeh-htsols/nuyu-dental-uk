"use client";
import { IGeneral_Tabs } from "@/types";
import Image from "next/image";
import ArrowSvg from "./arrow-svg";
import Container from "./container";
import { useState } from "react";
import SimpleButton from "./simple-button";

const TabsSection = ({ data }: { data: IGeneral_Tabs[] }) => {
  const [tab, setTab] = useState<number>(0);
  return (
    <div>
      <Container>
        <div
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.802), rgba(0, 0, 0, 0.802)), url(${data[tab].imgSrc}) no-repeat center/cover`,
          }}
          className="rounded-tr-3xl rounded-bl-3xl overflow-hidden"
        >
          <div className="flex gap-[1px] bg-transparent">
            <div className="px-8 flex items-center grow text-white text-2xl">
              {data[tab].name}
            </div>
            {data.map((item, index) => (
              <button
                key={item.name}
                className={`w-[200px] bg-primary transition-all text-white hover:bg-opacity-75 ${
                  tab === index ? "" : "bg-opacity-55"
                } p-3 outline-none ${index === 0 ? "rounded-bl-lg" : ""}`}
                onClick={() => setTab(index)}
              >
                <div className="flex h-full flex-col justify-between">
                  <p className="text-left">{item.name}</p>
                  <div className="flex flex-row gap-6 justify-between items-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={30}
                      height={30}
                      className="w-10 h-10 "
                    />
                    <ArrowSvg fill="#fff" classes="w-6 h-6" />
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div>
            {data.map((item, index) => (
              <div key={`${item.name}${index}`} className={`text-white`}>
                <div
                  className={`relative p-8  ${
                    tab === index ? "block animate-tabsanim" : "hidden"
                  }`}
                >
                  {/* <h3>{item.name}</h3> */}
                  <p className="mb-4">{item.copy}</p>
                  <ul className="flex flex-col gap-3 list-disc ps-3 mb-7">
                    {item.list.map((innerItem, innerindex) => (
                      <li key={innerindex}>{innerItem}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3 items-start">
                    {item.buttons.map((button, index) => (
                      <SimpleButton
                        key={button.content}
                        variant={index === 1 ? "primary" : ""}
                        href={button.href}
                      >
                        {button.content}
                      </SimpleButton>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TabsSection;
