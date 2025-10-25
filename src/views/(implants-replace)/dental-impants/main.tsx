import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  DENTAL_IMPLANTS_HEADER,
  DENTAL_IMPLANTS_REPLACE,
  DENTAL_IMPLANTS_SMILE_SUCCESS,
  // DENTAL_IMPLANTS_SOLUTION,
  DENTAL_IMPLANTS_WORKS,
  IMPLANTS_FAQS,
  TREATMENT_JOURNEY_IMPLANTS,
} from "@/constants/data";
import WhyChoose from "./why-choose";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import SmileTodayThree from "@/components/smile-today-3";
import FaqsSimple from "@/components/faqs-simple";
import QualtiyCare from "./qualtiy-care";
import FixedImplants from "./fixed-implants";

const Main = () => {
  return (
    <>
      <Banner data={DENTAL_IMPLANTS_HEADER} />
      <TipsTreatment data={DENTAL_IMPLANTS_REPLACE} />
      <WhyChoose />
      <TipsTreatment data={DENTAL_IMPLANTS_WORKS} />
      <ImagesSliderMain data={DENTAL_IMPLANTS_SMILE_SUCCESS} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_IMPLANTS} />
      {/* <TipsTreatment data={DENTAL_IMPLANTS_SOLUTION} /> */}
      <FixedImplants />
      <QualtiyCare />
      <FaqsSimple data={IMPLANTS_FAQS} />
      <SmileTodayThree texture imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
