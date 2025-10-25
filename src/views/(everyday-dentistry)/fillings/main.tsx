import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  FILLINGS_BENEFITS,
  FILLINGS_FAQS,
  FILLINGS_HEADER,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={FILLINGS_HEADER} />
      <TipsTreatment data={FILLINGS_BENEFITS} />
      <FaqsSimple data={FILLINGS_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
