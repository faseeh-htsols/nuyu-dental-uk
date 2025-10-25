import Banner from "@/components/Banner";
import FaqsSimple from "@/components/faqs-simple";
import ImagesSliderMain from "@/components/images-slider-main";
import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import {
  SMILE_MAKEOVER_ALIGNERS,
  SMILE_MAKEOVER_COMPOSITE,
  SMILE_MAKEOVER_FAQS,
  SMILE_MAKEOVER_HEADER,
  SMILE_MAKEOVER_RIGHT,
  SMILE_MAKEOVER_SLIDER,
  SMILE_MAKEOVER_WHITEN,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={SMILE_MAKEOVER_HEADER} />
      <TipsTreatment data={SMILE_MAKEOVER_RIGHT} />
      <TipsTreatment data={SMILE_MAKEOVER_WHITEN} />
      <TipsTreatment data={SMILE_MAKEOVER_ALIGNERS} />
      <TipsTreatment data={SMILE_MAKEOVER_COMPOSITE} />
      <ImagesSliderMain data={SMILE_MAKEOVER_SLIDER} />
      <FaqsSimple data={SMILE_MAKEOVER_FAQS} />
      <SmileTodayThree texture imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
