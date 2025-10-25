import TipsTreatment from "@/components/tips-treatment";

import Banner from "@/components/Banner";
import {
  ALIGN_STRAIGHT_FAQS,
  INVISALIGN_TEETH_STRAIGHT,
  TEETH_STRAIGHT_HEADER,
  TEETH_STRAIGHT_QUALITY_CARE,
} from "@/constants/data";

import {
  SPECAIL_TEETH,
  FIXED_BRACES_TEETH,
  INVISALIGN_TEETH,
} from "@/constants/data";
import { BlackImage } from "./blackback-image";
import ImagesSliderMain from "../../../components/images-slider-main";
import TreatmentBookSection from "@/components/treatment-book-section";
import SmileTodayThree from "@/components/smile-today-3";
import FaqsSimple from "@/components/faqs-simple";

const Main = () => {
  return (
    <>
      <Banner data={TEETH_STRAIGHT_HEADER} />
      <TipsTreatment data={FIXED_BRACES_TEETH} />
      <TipsTreatment data={INVISALIGN_TEETH} />
      <TipsTreatment data={SPECAIL_TEETH} />
      <BlackImage />
      <ImagesSliderMain data={INVISALIGN_TEETH_STRAIGHT} />
      <TreatmentBookSection data={TEETH_STRAIGHT_QUALITY_CARE} />
      <FaqsSimple data={ALIGN_STRAIGHT_FAQS} />
      <SmileTodayThree texture imageSrc="/straight-align-khali.webp" />
    </>
  );
};

export default Main;
