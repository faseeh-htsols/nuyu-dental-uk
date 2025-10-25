import Banner from "@/components/Banner";
import { PATIENT_STORIES_HEADER } from "@/constants/data2";
import LaurenSection from "./lauren-section";
import ImagesSliderMain from "@/components/images-slider-main";
import { PATIENT_STORIES_SMILE_SUCCESS } from "@/constants/data";
import PatientTesimonials from "@/components/patient-tesimonials";

const Main = () => {
  return (
    <>
      <Banner data={PATIENT_STORIES_HEADER} />
      <LaurenSection />
      <ImagesSliderMain data={PATIENT_STORIES_SMILE_SUCCESS} />
      <PatientTesimonials />
    </>
  );
};

export default Main;
