import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  DENTURES_BENEFIT,
  DENTURES_FAQS,
  DENTURES_HEADER,
  DENTURES_WHAT,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={DENTURES_HEADER} />
      <TipsTreatment data={DENTURES_BENEFIT} />
      <TipsTreatment data={DENTURES_WHAT} />
      <FaqsSimple data={DENTURES_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
