import Banner from "@/components/Banner";
import {
  LAUNCH_HEADER,
  LAUNCH_OFFERS,
  LAUNCH_SMILE_SUCCESS,
} from "@/constants/data";
import FormSection from "./form-section";
import ImagesSliderMain from "@/components/images-slider-main";
import PatientTesimonials from "@/components/patient-tesimonials";
import OfferSection from "./offer-section";

const Main = () => {
  return (
    <>
      <Banner data={LAUNCH_HEADER} />
      <FormSection />
      {LAUNCH_OFFERS.map((item) => (
        <OfferSection data={item} key={item.heading} />
      ))}
      <ImagesSliderMain data={LAUNCH_SMILE_SUCCESS} />
      <PatientTesimonials />
    </>
  );
};

export default Main;
