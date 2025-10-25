import ImagesSliderMain from "@/components/images-slider-main";
import FaqsSimple from "@/components/faqs-simple";
// import PatientTesimonials from "@/components/patient-tesimonials";
// import ContactUs from "./contact-us";
import ThreeBoxes from "./three-boxes";
import Expect from "./expect";
import WhyChoose from "./why-choose";
// import SpecialOffers from "./special-offers";
import MeetYour from "./meet-your";
import ContactUsCopy from "./contact-us-copy";
import WhatIsDentalImplants from "./what-is-invisalign";
import Banner from "./banner";
import { ARCH_FAQS, FULL_SMILE } from "@/constants/data";
import Navbar from "./navbar";
import WhatCosts from "./what-cost";
import SmileTodayThree from "@/components/smile-today-3-full";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expect />
      {/* <ContactUs /> */}
      <ContactUsCopy />
      <ThreeBoxes />
      <WhatIsDentalImplants />
      <WhyChoose />
      <SmileTodayThree />
      <ImagesSliderMain data={FULL_SMILE} />
      {/* <PatientTesimonials /> */}
      {/* <SpecialOffers /> */}
      <WhatCosts />
      <MeetYour />
      <FaqsSimple data={ARCH_FAQS} />
    </>
  );
}

export default LandingPage;
