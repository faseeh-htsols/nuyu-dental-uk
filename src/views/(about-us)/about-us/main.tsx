import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  AbOUT_US_HEADER,
  ABOUT_US_JOURNEY,
  ABOUT_US_PERFECT,
  ABOUT_US_TRUSTED,
} from "@/constants/data";
const Main = () => {
  return (
    <>
      <Banner data={AbOUT_US_HEADER} />
      <TipsTreatment data={ABOUT_US_TRUSTED} />
      <TipsTreatment data={ABOUT_US_PERFECT} />
      <TipsTreatment data={ABOUT_US_JOURNEY} />
    </>
  );
};

export default Main;
