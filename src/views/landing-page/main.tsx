import Banner from "@/components-2/Banner";
import ImagesSliderMain from "@/components-2/images-slider-main";
import Container from "@/components-2/container";
import FaqsSimple from "@/components-2/faqs-simple";
import SmileTodayThree from "@/components-2/smile-today-3";
import SmileView from "./smile-view";
import WhatIsInvisalign from "./what-is-invisalign";
// import ContactUs from "./contact-us";
import ThreeBoxes from "./three-boxes";
// import WhatCosts from "./what-costs";
import Expect from "./expect";
import WhyChoose from "./why-choose";
// import SpecialOffers from "./special-offers";
import MeetYour from "./meet-your";
import ContactUsCopy from "./contact-us-copy";
import NavbarLanding from "./navbar-landing";
import { LANDING_INVIS_FAQS, LANDING_SMILE_SUCCESS } from "@/constants/data";
import Image from "next/image";
// import PatientTesimonials from "@/components/patient-tesimonials";

function Main() {
  return (
    <>
      <div>
        <a
          href="https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason"
          target="_blank"
          className="fixed flex top-1/2 right-0 rounded-l-3xl z-[1000]  bg-primary text-white shadow-[0_0_12px_#fff] px-2 py-6">
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(-180deg)",
            }}>
            {" "}
            Book Online
          </span>
        </a>
      </div>
      <NavbarLanding />
      <Banner />
      <Container>
        <div>
          <Image
            src={"/invisalign-banner.png"}
            width={1920}
            height={1080}
            alt="invis-banner"
            className="w-full h-auto hidden lg:block"
          />
          <Image
            src={"/invis-landing-banner-mobile.png"}
            width={1920}
            height={1080}
            alt="invis-banner"
            className="w-full h-auto block lg:hidden"
          />
        </div>
      </Container>
      <Expect />
      <ContactUsCopy />
      <ThreeBoxes />
      {/* <ContactUs /> */}
      <WhatIsInvisalign />
      <SmileView />
      <WhyChoose />
      <SmileTodayThree />
      {/* <PatientTesimonials /> */}
      <ImagesSliderMain data={LANDING_SMILE_SUCCESS} />
      {/* <SpecialOffers /> */}
      {/* <WhatCosts /> */}
      <MeetYour />
      <FaqsSimple data={LANDING_INVIS_FAQS} />
    </>
  );
}

export default Main;
