import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  HYGIENE_FAQS,
  HYGIENE_GUM,
  HYGIENE_HEADER,
  HYGIENE_ROUTINE,
} from "@/constants/data";
import React from "react";

const Main = () => {
  return (
    <>
      <Banner data={HYGIENE_HEADER} />
      <TipsTreatment data={HYGIENE_ROUTINE} />
      <TipsTreatment data={HYGIENE_GUM} />
      <FaqsSimple data={HYGIENE_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
