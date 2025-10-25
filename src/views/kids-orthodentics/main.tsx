import ImagesSliderMain from "@/components/images-slider-main";
import FaqsSimple from "@/components/faqs-simple";
// import ContactUs from "./contact-us";
import ThreeBoxes from "./three-boxes";
import Expect from "./expect";
import WhyChoose from "./why-choose";
// import SpecialOffers from "./special-offers";
import MeetYour from "./meet-your";
import ContactUsCopy from "./contact-us-copy";
import WhatIsDentalImplants from "./what-is-invisalign";
import Banner from "./banner";
import {
  IMPLANTS_FAQS,
  IMPLANTS_SMILE,
  IMPLANTS_LANDING_JOURNEY,
  // IMPLANTS_LANDING_NEW,
  ORTHO_KIDS_PATIENTS,
} from "@/constants/data";
import Navbar from "./navbar";
// import Video from "./video";
import WhatCosts from "./what-costs";
import SmileTodayThree from "@/components/smile-today-3-implants";
import TreatmentJourneyV5 from "@/components/patient-journey-v5";
import TipsTreatment from "@/components/tips-treatment";
import PatientTesimonials from "@/components/patient-tesimonials";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expect />
      <ContactUsCopy />
      <ThreeBoxes />
      {/* <ContactUs /> */}
      <WhatIsDentalImplants />
      <MeetYour />
      <WhyChoose />
      <TreatmentJourneyV5 data={IMPLANTS_LANDING_JOURNEY} />
      <ImagesSliderMain data={IMPLANTS_SMILE} />
      <TipsTreatment data={ORTHO_KIDS_PATIENTS} />
      <WhatCosts />
      <PatientTesimonials />
      {/* <TipsTreatment data={IMPLANTS_LANDING_NEW} /> */}
      <FaqsSimple data={IMPLANTS_FAQS} />
      <SmileTodayThree />
      {/* <Video /> */}
      {/* <SpecialOffers /> */}
    </>
  );
}

export default LandingPage;
