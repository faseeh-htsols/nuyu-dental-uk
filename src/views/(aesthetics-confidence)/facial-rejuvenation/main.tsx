import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  FACIAL_ANTI_WRINKLE,
  FACIAL_DERMAL_FILLERS,
  FACIAL_FAQS,
  FACIAL_HEADER,
  FACIAL_SKIN_BOOSTERS,
} from "@/constants/data2";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";

const Main = () => {
  return (
    <>
      <Banner data={FACIAL_HEADER} />
      <TipsTreatment data={FACIAL_ANTI_WRINKLE} />
      <TipsTreatment data={FACIAL_DERMAL_FILLERS} />
      <TipsTreatment data={FACIAL_SKIN_BOOSTERS} />
      <FaqsSimple data={FACIAL_FAQS} />
      <SmileTodayThree texture imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
