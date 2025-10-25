// import LogosCar from "@/components/logos-car";
import ContactComponent from "./contact-component";
import {
  APPOINTMENT_SECTION_JOURNEY,
  COSMETIC_BEFORE_AND_AFTERS_NEW,
  FAQS_HOME,
} from "@/constants/data";
import FaqsTabs from "@/components/faqs-tabs";
// import CoreServices from "../version-2/core-services";
import AppointmentSection from "@/components/book-appointment";
import ImagesSliderMain from "@/components/images-slider-main";
import CoreServicesNewOne from "../home/core-services-new-one";
import QualtiyCare from "../home/qualtiy-care";
import CoreServicesNew from "../home/core-services-new";
import SliderImagesOverlaying from "../home/slider-images-overlaying";

const Main = () => {
  return (
    <>
      <ContactComponent />
      {/* <FiveBoxes heading="Your Smile Starts Here - Why NUYU" /> */}
      <SliderImagesOverlaying heading="Your Smile Starts Here - Why NUYU?" />
      {/* <LogosCar /> */}
      <ImagesSliderMain data={COSMETIC_BEFORE_AND_AFTERS_NEW} />
      <FaqsTabs data={FAQS_HOME} />
      {/* <CoreServices /> */}
      <CoreServicesNewOne />
      <CoreServicesNew />
      <AppointmentSection data={APPOINTMENT_SECTION_JOURNEY} />
      <QualtiyCare />
    </>
  );
};

export default Main;
