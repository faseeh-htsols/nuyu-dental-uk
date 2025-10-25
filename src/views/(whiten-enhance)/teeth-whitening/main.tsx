import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import {
  TEETH_WHITEN_ENLIGHT,
  TEETH_WHITEN_FAQS,
  TEETH_WHITEN_HEADER,
  TEETH_WHITEN_IMAGE_SLIDER,
  TEETH_WHITEN_QUALITY_CARE,
  TREATMENT_JOURNEY_TEETH_WHITEN,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={TEETH_WHITEN_HEADER} />
      <TipsTreatment data={TEETH_WHITEN_ENLIGHT} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_TEETH_WHITEN} />
      <ImagesSliderMain data={TEETH_WHITEN_IMAGE_SLIDER} />
      <TreatmentBookSection data={TEETH_WHITEN_QUALITY_CARE} />
      <FaqsSimple data={TEETH_WHITEN_FAQS} />
      <SmileTodayThree imageSrc="/whiten-khali.webp" />
    </>
  );
};

export default Main;
