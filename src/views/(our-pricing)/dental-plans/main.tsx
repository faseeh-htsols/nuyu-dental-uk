import Banner from "@/components/Banner";
import { DENTAL_PLANS_HEADER } from "@/constants/data";
import DentalPlans from "./dental-plans";
import DenPlansInclude from "./den-plans-include";
import SmileTodayThree from "@/components/smile-today-3";
import TeethWhite from "./teeth-white";

const Main = () => {
  return (
    <>
      <Banner data={DENTAL_PLANS_HEADER} />
      <DenPlansInclude />
      <DentalPlans />
      <TeethWhite />
      <SmileTodayThree texture imageSrc="/dental-plans-without-bg.webp" />
    </>
  );
};

export default Main;
