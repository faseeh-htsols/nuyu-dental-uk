import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import TipsTreatment from "@/components/tips-treatment";
import {
  ALL_ON_4_FAQS,
  ALL_ON_4_HEADER,
  ALL_ON_4_REPLACE,
  ALL_ON_4_SMILE_SUCCESS,
  ALL_ON_4_WORK,
  TREATMENT_JOURNEY_ALL_ON_4,
} from "@/constants/data";
import WhyChoose from "./why-choose";
import SmileTodayThird from "@/components/smile-today-3";

const Main = () => {
  return (
    <>
      <Banner data={ALL_ON_4_HEADER} />
      <TipsTreatment data={ALL_ON_4_REPLACE} />
      <WhyChoose />
      <TipsTreatment data={ALL_ON_4_WORK} />
      <ImagesSliderMain data={ALL_ON_4_SMILE_SUCCESS} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_ALL_ON_4} />
      <FaqsSimple data={ALL_ON_4_FAQS} />
      <SmileTodayThird
        heading="Ready to take the first step?"
        texture
        para="Book your consultation today and discover how full arch implants can give you a smile that feels truly yours."
        imageSrc="/home-khali-nat.webp"
      />
    </>
  );
};

export default Main;
