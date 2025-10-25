import Banner from "@/components/Banner";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import ThreeTopTreatmentCard from "@/components/three-top-treatment-card";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import {
  APPOINTMENT_SECTION_COMPOSITE,
  COMPOSITE_BOOK,
  COMPOSITE_FAQS,
  COMPOSITE_SMILE_IMPROVEMENT,
  COMPOSITE_SMILE_SUCCESS,
  COMPOSITE_TOP_THREE_CARDS,
  COMPOSITE_WHAT_IS,
  CompositeBonding,
  TREATMENT_JOURNEY_COMPOSITE,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={CompositeBonding} />
      <ThreeTopTreatmentCard data={COMPOSITE_TOP_THREE_CARDS} />
      <TipsTreatment data={COMPOSITE_WHAT_IS} />
      <TipsTreatment data={COMPOSITE_SMILE_IMPROVEMENT} />
      <ImagesSliderMain data={COMPOSITE_SMILE_SUCCESS} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_COMPOSITE} />
      <TreatmentBookSection data={COMPOSITE_BOOK} />
      <FaqsSimple data={COMPOSITE_FAQS} />
      <AppointmentSection data={APPOINTMENT_SECTION_COMPOSITE} />
    </>
  );
};

export default Main;
