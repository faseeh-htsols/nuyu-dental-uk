import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  GYM_FAQS,
  GYM_HEADER,
  GYM_HEALTHY,
  GYM_TONED,
  GYM_WEIGHT_LOSS,
} from "@/constants/data2";
import FaqsSimple from "@/components/faqs-simple";
import SmileTodayThree from "@/components/smile-today-3";

const Main = () => {
  return (
    <>
      <Banner data={GYM_HEADER} />
      <TipsTreatment data={GYM_HEALTHY} />
      <TipsTreatment data={GYM_TONED} />
      <TipsTreatment data={GYM_WEIGHT_LOSS} />
      <FaqsSimple data={GYM_FAQS} />
      <SmileTodayThree
        heading="Ready to Begin? Let’s build a routine that fits your lifestyle."
        imageSrc="/background-image2-gym.webp"
        texture
      />
    </>
  );
};

export default Main;
