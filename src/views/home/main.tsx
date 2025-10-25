// import Banner from "@/components/Banner";
import {
  HOMEPAGE_FAQS,
  // MainVersion3,
  MainVersion3Video,
  TREATMENT_JOURNEY_HOME,
} from "@/constants/data";
import React from "react";
// import CoreServicesNew from "./core-services-new";
import ImagesSliderMain from "../../components/images-slider-main";
import { COSMETIC_BEFORE_AND_AFTERS_NEW } from "@/constants/data";
// import TreatmentJourneyV4 from "./patient-journey-v4";
import QualityTreatments from "./quality-treatments";
import SmileTodayThree from "../../components/smile-today-3";
import PatientTesimonials from "@/components/patient-tesimonials";
import TeamSectionTwo from "./Team-section2";
import QualtiyCare from "./qualtiy-care";
import TreatmentJourneyV5 from "../../components/patient-journey-v5";
import CoreServicesNewOne from "./core-services-new-one";
import FaqsSimple from "@/components/faqs-simple";
import CoreServicesNew from "./core-services-new";
// import FiveBoxesV4 from "./five-boxes-v4";
import BannerVideo from "@/components/banner-video";
import BannerVideoHome from "./banner-video-home";
import SliderImagesOverlaying from "./slider-images-overlaying";
function Main() {
  return (
    <>
      <BannerVideoHome />
      <BannerVideo data={MainVersion3Video} />
      {/* <Banner data={MainVersion3} /> */}
      {/* <FiveBoxesV4 heading="Your Smile Starts Here - Why NUYU?" /> */}
      <SliderImagesOverlaying heading="Your Smile Starts Here - Why NUYU?" />
      {/* <CoreServices /> */}
      {/* <CoreServicesNew /> */}
      <CoreServicesNewOne />
      <CoreServicesNew />
      <PatientTesimonials />
      <ImagesSliderMain data={COSMETIC_BEFORE_AND_AFTERS_NEW} />
      {/* <SmileTodayThree imageSrc="/background-image-larki.webp" /> */}
      <TeamSectionTwo />
      {/* <TreatmentJourneyV4 data={TREATMENT_JOURNEY_HOME} /> */}
      <TreatmentJourneyV5 data={TREATMENT_JOURNEY_HOME} />
      <QualityTreatments />
      <QualtiyCare />
      <FaqsSimple data={HOMEPAGE_FAQS} />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
}

export default Main;
