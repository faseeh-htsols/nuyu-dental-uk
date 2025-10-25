import Banner from "@/components/Banner";
import AppointmentSection from "@/components/book-appointment";
import ImagesSliderMain from "@/components/images-slider-main";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import {
  APPOINTMENT_SECTION_WHITEN_ENHANCE,
  WHITEN_ENHANCE_COMPOSITE,
  WHITEN_ENHANCE_HEADER,
  WHITEN_ENHANCE_IMAGE_SLIDER,
  WHITEN_ENHANCE_MAKEOVER,
  WHITEN_ENHANCE_RESULT,
  WHITEN_ENHANCE_TIPS,
  WHITEN_ENHANCE_VENEERS,
  WHITEN_ENHANCE_WHITE,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={WHITEN_ENHANCE_HEADER} />
      <TipsTreatment data={WHITEN_ENHANCE_TIPS} />
      <TipsTreatment data={WHITEN_ENHANCE_WHITE} />
      <TipsTreatment data={WHITEN_ENHANCE_VENEERS} />
      <TipsTreatment data={WHITEN_ENHANCE_COMPOSITE} />
      <TipsTreatment data={WHITEN_ENHANCE_MAKEOVER} />
      <ImagesSliderMain data={WHITEN_ENHANCE_IMAGE_SLIDER} />
      <TreatmentBookSection data={WHITEN_ENHANCE_RESULT} />
      <AppointmentSection data={APPOINTMENT_SECTION_WHITEN_ENHANCE} />
    </>
  );
};

export default Main;
