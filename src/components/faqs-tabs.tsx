import { IFaq_Tabs } from "@/types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import ArrowSvg from "./arrow-svg";
import Container from "./container";
import HeadingTwo from "./heading-two";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ChevronSvg from "./chevron-svg";

const FaqsTabs = ({ data }: { data: IFaq_Tabs }) => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <HeadingTwo classes="mb-7 text-center">{data.heading}</HeadingTwo>
        <TabGroup
          className={
            "shadow[0_0_11px_6px_rgba(0, 0, 0, 0.0118)] bg-primary rounded-tr-3xl rounded-bl-3xl overflow-hidden"
          }
        >
          <TabList className={`grid grid-cols-1 md:grid-cols-3 gap-1 w-full`}>
            {data.tabs.map((item) => (
              <Tab
                key={item.name}
                // ${
                //   index === 0
                //     ? "bg-secondary text-white"
                //     : "bg-light-gray text-black"
                // }
                className={`bg-white text-primary  opacity-65 data-[selected]:opacity-100 p-3 outline-none`}
              >
                <div className="flex justify-between items-center">
                  <p className="uppercase">{item.name}</p>
                  <div className="flex flex-row gap-6 justify-between items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={30}
                      height={30}
                      className="w-10 h-10 object-contain"
                    />
                    <ArrowSvg fill="#000" classes="w-6 h-6" />
                  </div>
                </div>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.tabs.map((item, index) => (
              <TabPanel
                key={`${item.name}${index}`}
                className={" p-10 text-white"}
              >
                {item.accordion.map((inneritem) => (
                  <Disclosure
                    as="div"
                    key={inneritem.question}
                    className="w-full"
                  >
                    <DisclosureButton className="w-full group border-b border-beige pb-5 text-left flex justify-between ">
                      {inneritem.question}
                      <ChevronSvg
                        classes="w-5 transition-all duration-300 group-data-[open]:rotate-180"
                        fill="#fff"
                      />
                    </DisclosureButton>
                    <div className="overflow-hidden py-5">
                      <DisclosurePanel
                        transition
                        className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
                      >
                        <div
                          className="text-beige"
                          dangerouslySetInnerHTML={{ __html: inneritem.answer }}
                        />
                      </DisclosurePanel>
                    </div>
                  </Disclosure>
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </div>
  );
};

export default FaqsTabs;
