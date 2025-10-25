import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import SmileTodayThree from "@/components/smile-today-3";
import ThreeTopTreatmentCard from "@/components/three-top-treatment-card";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import {
  TREATMENT_JOURNEY_VENEER,
  VANEEER_TIPS,
  VANEERS_DENTAL,
  VENEER_FAQS,
  VENEER_IMAGE_SLIDER,
  VENEERS_HEADER,
  VENEERS_QUALITY_CARE,
  VENEERS_TOP_THREE_CARDS,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={VENEERS_HEADER} />
      <ThreeTopTreatmentCard data={VENEERS_TOP_THREE_CARDS} />
      <TipsTreatment data={VANEERS_DENTAL} />
      <TipsTreatment data={VANEEER_TIPS} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_VENEER} />
      <ImagesSliderMain data={VENEER_IMAGE_SLIDER} />
      <TreatmentBookSection data={VENEERS_QUALITY_CARE} />
      <FaqsSimple data={VENEER_FAQS} />
      <SmileTodayThree imageSrc="/veneer-khali-bg.webp" />
    </>
  );
};

export default Main;
