import Banner from "@/components/Banner";
import AppointmentSection from "@/components/book-appointment";
import FaqsSimple from "@/components/faqs-simple";
import LookingAfter from "@/components/looking-after";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import ThreeTopTreatmentCard from "@/components/three-top-treatment-card";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import TreatmentWorks from "@/components/treatment-works";
import WhatIsAndKeyBenefits from "@/components/what-is-and-key-benefits";
import {
  ADULT_BRACES_FAQS,
  ADULT_BRACES_RIGHT_FOR_ME,
  ADULT_CANDIDATE,
  ADULT_FIXED_BRACES,
  ADULT_HEADER,
  ADULT_RESULT,
  ADULT_TIPS,
  ADULT_TOP_THREE_CARDS,
  ADULT_WHY_CHOOSE,
  ADULT_WITH_DOCTOR,
  ADULT_WORKS,
  APPOINTMENT_SECTION_ADULT_BRACES,
  TREATMENT_JOURNEY_ADULT_BRACES,
  WHAT_IS_ADULT_BRACES,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={ADULT_HEADER} />
      <ThreeTopTreatmentCard data={ADULT_TOP_THREE_CARDS} />
      <WhatIsAndKeyBenefits data={WHAT_IS_ADULT_BRACES} />
      <TreatmentWorks data={ADULT_WORKS} />
      <TipsTreatment data={ADULT_WITH_DOCTOR} />
      <TipsTreatment data={ADULT_TIPS} />
      <TipsTreatment data={ADULT_FIXED_BRACES} />
      <LookingAfter data={ADULT_BRACES_RIGHT_FOR_ME} />
      <TreatmentWorks data={ADULT_CANDIDATE} />
      <TipsTreatment data={ADULT_WHY_CHOOSE} />
      <TreatmentBookSection data={ADULT_RESULT} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_ADULT_BRACES} />
      <FaqsSimple data={ADULT_BRACES_FAQS} />
      <AppointmentSection data={APPOINTMENT_SECTION_ADULT_BRACES} />
    </>
  );
};

export default Main;
