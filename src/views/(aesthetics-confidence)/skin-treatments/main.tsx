import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  SKIN_TREATMENTS_CHEMICAL,
  SKIN_TREATMENTS_DERMAPLANING,
  SKIN_TREATMENTS_FAQS,
  SKIN_TREATMENTS_GRADE,
  SKIN_TREATMENTS_HEADER,
  SKIN_TREATMENTS_MICRONEEDLING,
} from "@/constants/data2";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";

const Main = () => {
  return (
    <>
      <Banner data={SKIN_TREATMENTS_HEADER} />
      <TipsTreatment data={SKIN_TREATMENTS_GRADE} />
      <TipsTreatment data={SKIN_TREATMENTS_MICRONEEDLING} />
      <TipsTreatment data={SKIN_TREATMENTS_CHEMICAL} />
      <TipsTreatment data={SKIN_TREATMENTS_DERMAPLANING} />
      <FaqsSimple data={SKIN_TREATMENTS_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
