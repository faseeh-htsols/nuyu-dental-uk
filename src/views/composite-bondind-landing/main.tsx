import ImagesSliderMain from "@/components/images-slider-main";
import FaqsSimple from "@/components/faqs-simple";
// import PatientTesimonials from "@/components/patient-tesimonials";
// import SmileView from "./smile-view";
import WhatIsInvisalign from "./what-is-invisalign";
// import ContactUs from "./contact-us";
import ThreeBoxes from "./three-boxes";
import WhatCosts from "./what-costs";
import Expect from "./expect";
import WhyChoose from "./why-choose";
// import SpecialOffers from "./special-offers";
import MeetYour from "./meet-your";
import ContactUsCopy from "./contact-us-copy";
import Banner from "@/components-2/Banner-composite";
import { COMPOSITE_FAQS, INVISALIGN_SMILE_SUCCESS } from "@/constants/data";
import SmileTodayThree from "@/components/smile-today-3-composite";
import Navbar from "./navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expect />
      <ContactUsCopy />
      <ThreeBoxes />
      <WhatIsInvisalign />
      <WhyChoose />
      <SmileTodayThree />
      <ImagesSliderMain data={INVISALIGN_SMILE_SUCCESS} />
      {/* <SpecialOffers /> */}
      <WhatCosts />
      <MeetYour />
      <FaqsSimple data={COMPOSITE_FAQS} />
    </>
  );
}

export default LandingPage;
