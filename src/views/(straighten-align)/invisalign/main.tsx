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
  INVISALIGN_ADVANCED,
  INVISALIGN_BOOK,
  INVISALIGN_BUSY_LIFE,
  INVISALIGN_FAQS,
  INVISALIGN_GOOD_CANDIDATE,
  INVISALIGN_HEADER,
  INVISALIGN_RESULTS,
  INVISALIGN_RIGHT_FOR_ME,
  INVISALIGN_SMILE_SUCCESS,
  INVISALIGN_TIPS,
  INVISALIGN_TOP_THREE_CARDS,
  INVISALIGN_WHY_CHOOSE,
  INVISALIGN_WITH_DOCTOR,
  INVISALIGN_WORKS,
  TREATMENT_JOURNEY_INVISALIGN,
  WHAT_IS_INVISALIGN,
} from "@/constants/data";
import ImagesSliderMain from "@/components/images-slider-main";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";

const Main = () => {
  return (
    <>
      <Banner data={INVISALIGN_HEADER} />
      <ThreeTopTreatmentCard data={INVISALIGN_TOP_THREE_CARDS} />
      <WhatIsAndKeyBenefits data={WHAT_IS_INVISALIGN} />
      <TreatmentWorks data={INVISALIGN_WORKS} />
      <TipsTreatment data={INVISALIGN_WITH_DOCTOR} />
      <TipsTreatment data={INVISALIGN_TIPS} />
      <LookingAfter data={INVISALIGN_RIGHT_FOR_ME} />
      <GoodCandidate data={INVISALIGN_GOOD_CANDIDATE} />
      <TipsTreatment data={INVISALIGN_WHY_CHOOSE} />
      <TipsTreatment data={INVISALIGN_BUSY_LIFE} />
      <GoodCandidate data={INVISALIGN_RESULTS} />
      <ImagesSliderMain data={INVISALIGN_SMILE_SUCCESS} />
      <TipsTreatment data={INVISALIGN_ADVANCED} />
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_INVISALIGN} />
      <FaqsSimple data={INVISALIGN_FAQS} />
      <TreatmentBookSection data={INVISALIGN_BOOK} />
    </>
  );
};

export default Main;
