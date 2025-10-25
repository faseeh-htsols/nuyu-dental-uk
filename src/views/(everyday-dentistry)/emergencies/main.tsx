import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  DENTAL_EMERGENCIES,
  EMERGENCIES_FAQS,
  EMERGENCIES_HEADER,
  EMERGENCIES_SEEK,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={EMERGENCIES_HEADER} />
      <TipsTreatment data={DENTAL_EMERGENCIES} />
      <TipsTreatment data={EMERGENCIES_SEEK} />
      <FaqsSimple data={EMERGENCIES_FAQS} />
      <SmileTodayThree texture imageSrc="/emergency/emerg-tab.webp" />
    </>
  );
};

export default Main;
