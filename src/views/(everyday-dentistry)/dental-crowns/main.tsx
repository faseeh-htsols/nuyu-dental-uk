import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  DENTAL_CROWNS_BENEFITS,
  DENTAL_CROWNS_FAQS,
  DENTAL_CROWNS_HEADER,
} from "@/constants/data";
import React from "react";

const Main = () => {
  return (
    <>
      <Banner data={DENTAL_CROWNS_HEADER} />
      <TipsTreatment data={DENTAL_CROWNS_BENEFITS} />
      <FaqsSimple data={DENTAL_CROWNS_FAQS} />
      <SmileTodayThree texture imageSrc="/root-canal-smile.webp" />
    </>
  );
};

export default Main;
