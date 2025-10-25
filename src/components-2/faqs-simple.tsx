import React from "react";
import Container from "./container";
import HeadingTwo from "./heading-two";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import ChevronSvg from "./chevron-svg";
import { IFaqs } from "@/types/index";
import SimpleButton from "./simple-button";
const FaqsSimple = ({ data }: { data: IFaqs }) => {
  return (
    <div className="py-10">
      <Container>
        <HeadingTwo classes="text-center mb-8">{data.heading}</HeadingTwo>
        <div className="shadow[0_0_11px_6px_rgba(0, 0, 0, 0.0118)] p-5 bg-primary rounded-tr-3xl rounded-bl-3xl overflow-hidden">
          {data.accordion.map((inneritem) => (
            <Disclosure as="div" key={inneritem.question} className="w-full">
              <DisclosureButton className="w-full text-white group border-b border-beige pb-5 text-left flex justify-between">
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
                  <div className="text-beige">
                    <p dangerouslySetInnerHTML={{ __html: inneritem.answer }} />
                    {inneritem.lists && (
                      <ul className="mt-5 list-disc ps-5 marker:text-white">
                        {inneritem.lists.map((list, index) => (
                          <li key={index}>{list}</li>
                        ))}
                      </ul>
                    )}
                    <div className="my-5">
                      {inneritem.btn && inneritem.href && (
                        <SimpleButton
                          classes=""
                          variant="olive-dark"
                          href={inneritem.href}
                        >
                          {inneritem.btn}
                        </SimpleButton>
                      )}
                    </div>
                    {inneritem.botPara && (
                      <p className="mt-4">{inneritem.botPara}</p>
                    )}
                  </div>
                </DisclosurePanel>
              </div>
            </Disclosure>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FaqsSimple;
