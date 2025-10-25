import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import GoodCandidate from "@/components/good-candidate";
import LookingAfter from "@/components/looking-after";
import ThreeTopTreatmentCard from "@/components/three-top-treatment-card";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import TreatmentWorks from "@/components/treatment-works";
import WhatIsAndKeyBenefits from "@/components/what-is-and-key-benefits";
import {
  APPOINTMENT_SECTION_KIDS,
  KIDS_BOOK,
  KIDS_FAQS,
  KIDS_FOOD,
  KIDS_GOOD_CANDIDATE,
  KIDS_HEADER,
  KIDS_RIGHT_FOR_ME,
  KIDS_TIPS,
  KIDS_TOP_THREE_CARDS,
  KIDS_WHY_CHOOSE,
  KIDS_WITH_DOCTOR,
  KIDS_WORKS,
  TREATMENT_JOURNEY_KIDS,
  WHAT_IS_KIDS_BRACES,
} from "@/constants/data";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import AppointmentSection from "@/components/book-appointment";

const Main = () => {
  return (
    <>
      <Banner data={KIDS_HEADER} />
      <ThreeTopTreatmentCard data={KIDS_TOP_THREE_CARDS} />
      <WhatIsAndKeyBenefits data={WHAT_IS_KIDS_BRACES} />
      <TreatmentWorks data={KIDS_WORKS} />
      <TipsTreatment data={KIDS_WITH_DOCTOR} />
      <TipsTreatment data={KIDS_TIPS} />
      <TipsTreatment data={KIDS_FOOD} />
      <LookingAfter data={KIDS_RIGHT_FOR_ME} />
      <GoodCandidate data={KIDS_GOOD_CANDIDATE} />
      <TipsTreatment data={KIDS_WHY_CHOOSE} />
      {/* <TipsTreatment data={INVISALIGN_BUSY_LIFE} />
      <GoodCandidate data={INVISALIGN_RESULTS} />
      <ImagesSliderMain data={INVISALIGN_SMILE_SUCCESS} />
      <TipsTreatment data={INVISALIGN_ADVANCED} /> */}
      <TreatmentBookSection data={KIDS_BOOK} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_KIDS} />
      <FaqsSimple data={KIDS_FAQS} />
      <AppointmentSection data={APPOINTMENT_SECTION_KIDS} />
    </>
  );
};

export default Main;
