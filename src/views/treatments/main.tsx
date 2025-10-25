import Banner from "@/components/Banner";
import ImagesSliderMain from "@/components/images-slider-main";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import TreatmentBookSection from "@/components/treatment-book-section";
import {
  TREATMENT_CAROUSEL,
  TREATMENT_COSMETIC,
  TREATMENT_EVERYDAY,
  TREATMENT_HEADER,
  TREATMENT_IMPLANTS,
  TREATMENT_QUALITY_CARE,
  TREATMENT_STRAIGHT,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={TREATMENT_HEADER} />
      <TipsTreatment data={TREATMENT_EVERYDAY} />
      <TipsTreatment data={TREATMENT_IMPLANTS} />
      <TipsTreatment data={TREATMENT_STRAIGHT} />
      <TipsTreatment data={TREATMENT_COSMETIC} />
      <ImagesSliderMain data={TREATMENT_CAROUSEL} />
      <TreatmentBookSection data={TREATMENT_QUALITY_CARE} />
      <SmileTodayThree texture imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
