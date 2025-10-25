import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import AppointmentSection from "@/components/book-appointment";
import ImagesSliderMain from "@/components/images-slider-main";
// import { IMPLANT_REPLACE_FAQS } from "@/constants/data";
import {
  // IMPLANT_REPLACE_BONDED,
  IMPLANT_REPLACE_HEADER,
  IMPLANT_REPLACE_NATURAL,
  IMPLANTS_REPLACE_LONG,
  IMPLANTS_REPLACE_RESTORATION,
  APPOINTMENT_SECTION_WHITEN_ENHANCE,
  WHITEN_ENHANCE_IMAGE_SLIDER,
  WHITEN_ENHANCE_RESULT,
} from "@/constants/data2";
import TreatmentBookSection from "@/components/treatment-book-section";

const Main = () => {
  return (
    <>
      {/* <Banner data={IMPLANT_REPLACE_HEADER} />
      <TipsTreatment data={IMPLANT_REPLACE_BONDED} />
      <FaqsSimple data={IMPLANT_REPLACE_FAQS} /> */}
      <Banner data={IMPLANT_REPLACE_HEADER} />
      <TipsTreatment data={IMPLANT_REPLACE_NATURAL} />
      <TipsTreatment data={IMPLANTS_REPLACE_LONG} />
      <TipsTreatment data={IMPLANTS_REPLACE_RESTORATION} />

      <ImagesSliderMain data={WHITEN_ENHANCE_IMAGE_SLIDER} />
      <TreatmentBookSection data={WHITEN_ENHANCE_RESULT} />
      <AppointmentSection data={APPOINTMENT_SECTION_WHITEN_ENHANCE} />
    </>
  );
};

export default Main;
