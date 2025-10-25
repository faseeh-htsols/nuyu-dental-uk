"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { IFeesMain } from "@/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import Image from "next/image";
import AssessMaintainSvg from "./assess-maintain-svg";
import EnhanceSvg from "./enhance-svg";
import RepairSvg from "./repair-svg";
import RestoreSvg from "./restore-svg";
import Whiten from "./whiten";
import Yoga from "./yoga-exercise";

const FeesMain = ({ data }: { data: IFeesMain }) => {
  return (
    <div className="bg-[url(/white-textured.webp)] py-5 lg:py-10">
      <Container>
        <div className="flex flex-col gap-3 mb-10">
          <HeadingTwo classes="text-center">{data.heading}</HeadingTwo>
          <p className="text-base text-center">{data.para}</p>
        </div>
        <div>
          {" "}
          <TabGroup className="flex lg:flex-row flex-col gap-7">
            <TabList
              className={`flex flex-wrap justify-center flex-row lg:flex-col h-fit lg:w-[250px] gap-1 lg:gap-5 shrink-0 lg:sticky lg:top-[20%]`}
            >
              {data.tabs.map((item, index) => (
                <Tab
                  key={item.name}
                  className={`outline-none bg-transparent overflow-hidden lg:border-none border-[1px] border-primary   rounded-lg`}
                >
                  {({ selected }) => (
                    <div
                      className={`${
                        selected ? "bg-primary" : "bg-white"
                      } transition-all duration-300 shadow-[0_2px_11px_1px_#9E7F61] px-1 p-2 lg:p-4 flex flex-row justify-between n items-center`}
                    >
                      {index === 0 ? (
                        <AssessMaintainSvg active={selected} />
                      ) : index === 1 ? (
                        <Whiten active={selected} />
                      ) : index === 2 ? (
                        <EnhanceSvg active={selected} />
                      ) : index === 3 ? (
                        <RestoreSvg active={selected} />
                      ) : index === 4 ? (
                        <RepairSvg active={selected} />
                      ) : (
                        <Yoga active={selected} />
                      )}
                      <h3
                        className={`text-[15px] lg:text-base ${
                          selected ? "text-white" : "text-black"
                        } transition-all duration-500`}
                      >
                        {item.name}
                      </h3>
                    </div>
                  )}
                </Tab>
              ))}
            </TabList>
            <TabPanels className={"grow"}>
              {data.tabs.map((item, index) => (
                <TabPanel key={`${item.name}${index}`}>
                  {item.tabsContent.map((tabData, tabDataIndex) => (
                    <div
                      key={tabData.heading}
                      className={`bg-primary shadow-[0_2px_11px_1px_#9E7F61] rounded-tr-3xl rounded-bl-3xl p-8 text-white ${
                        tabDataIndex === item.tabsContent.length - 1
                          ? ""
                          : "mb-7"
                      }`}
                    >
                      <h4 className="text-3xl font-season mb-6 capitalize text-[#e1d5ca]">
                        {tabData.heading}
                      </h4>
                      {tabData.subHeading && (
                        <h5
                          className="text-xl font-quicksand mb-6 text-[#e1d5ca]"
                          dangerouslySetInnerHTML={{
                            __html: tabData.subHeading,
                          }}
                        />
                      )}
                      {tabData.table.map((tabEntity, tabEntityIndex) =>
                        tabEntity.subTable ? (
                          <div key={tabEntity.title} className={`mt-7`}>
                            <h4
                              className="text-2xl font-medium font-season mb-5"
                              dangerouslySetInnerHTML={{
                                __html: tabEntity.title,
                              }}
                            />
                            <div className={`grid grid-cols-2 gap-32`}>
                              <div className="text-sm">Treatment</div>
                              <div className="text-sm">Full cost</div>
                            </div>
                            {tabEntity.subTable.map((subtab, subtabIndex) => (
                              <>
                                <div
                                  key={subtab.title}
                                  className={`grid grid-cols-2 py-3 gap-32 ${
                                    subtabIndex ===
                                    (tabEntity?.subTable?.length ?? 0) - 1
                                      ? ""
                                      : "border-b border-white"
                                  }`}
                                >
                                  <div>
                                    <h5
                                      dangerouslySetInnerHTML={{
                                        __html: subtab.title,
                                      }}
                                    />
                                    {subtab?.para && (
                                      <p className="text-sm mt-2">
                                        {subtab?.para}
                                      </p>
                                    )}
                                  </div>
                                  <div>
                                    <h5 className="text-lg ">{subtab?.cost}</h5>
                                    {subtab?.costPara && (
                                      <p className="text-sm mt-2">
                                        {subtab?.costPara}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </>
                            ))}
                          </div>
                        ) : (
                          <>
                            {tabEntityIndex === 0 && (
                              <div className={`grid grid-cols-2 gap-32`}>
                                <div className="text-sm">Treatment</div>
                                <div className="text-sm">Full cost</div>
                              </div>
                            )}
                            <div
                              key={tabEntity.title}
                              className={`grid grid-cols-2 gap-32 py-4 ${
                                tabEntityIndex === tabData.table.length - 1
                                  ? ""
                                  : "border-b border-white"
                              }`}
                            >
                              <div>
                                <h5
                                  className="text-lg font-medium"
                                  dangerouslySetInnerHTML={{
                                    __html: tabEntity.title,
                                  }}
                                />

                                {tabEntity?.para && (
                                  <p className="text-sm mt-2">
                                    {tabEntity?.para}
                                  </p>
                                )}
                              </div>
                              <div>
                                <h5 className="text-lg ">{tabEntity?.cost}</h5>
                                {tabEntity?.costPara && (
                                  <p className="text-sm mt-2">
                                    {tabEntity?.costPara}
                                  </p>
                                )}
                              </div>
                            </div>
                          </>
                        )
                      )}
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </Container>
    </div>
  );
};

export default FeesMain;
