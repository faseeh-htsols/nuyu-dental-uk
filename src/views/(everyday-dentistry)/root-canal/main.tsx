import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  ROOT_CANAL_BENEFITS,
  ROOT_CANAL_FAQS,
  ROOT_CANAL_HEADER,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={ROOT_CANAL_HEADER} />
      <TipsTreatment data={ROOT_CANAL_BENEFITS} />
      <FaqsSimple data={ROOT_CANAL_FAQS} />
      <SmileTodayThree texture imageSrc="/root-canal-smile.webp" />
    </>
  );
};

export default Main;
