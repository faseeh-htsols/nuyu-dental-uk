import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  IMPLANT_BONDING_FAQS,
  IMPLANTS_BONDONG_HEADER,
} from "@/constants/data";
import {
  IMPLANT_BONDING_BEAUTIFUL,
  IMPLANT_BONDING_BONDED,
} from "@/constants/data2";
import React from "react";

const Main = () => {
  return (
    <>
      <Banner data={IMPLANTS_BONDONG_HEADER} />
      <TipsTreatment data={IMPLANT_BONDING_BONDED} />
      <TipsTreatment data={IMPLANT_BONDING_BEAUTIFUL} />
      <FaqsSimple data={IMPLANT_BONDING_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
