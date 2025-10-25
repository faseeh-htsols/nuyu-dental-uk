import Banner from "@/components/Banner";

import {
  IMAGES_MAINTAIN,
  MAINTAIN_CONSULTATION,
  MAINTAIN_HEADER,
  MAINTAIN_PAIN,
  MAINTAIN_TIPS,
} from "@/constants/data2";

import SmileTodayThree from "@/components/smile-today-3";
import TipsTreatment from "@/components/tips-treatment";
import ImagesSliderMain from "@/components/images-slider-main";
import QualtiyCare from "./qualtiy-care";

const Main = () => {
  return (
    <>
      <Banner data={MAINTAIN_HEADER} />
      <TipsTreatment data={MAINTAIN_TIPS} />
      <TipsTreatment data={MAINTAIN_CONSULTATION} />
      <TipsTreatment data={MAINTAIN_PAIN} />
      <ImagesSliderMain data={IMAGES_MAINTAIN} />
      <QualtiyCare />
      <SmileTodayThree imageSrc="/home-khali-nat.webp" />
    </>
  );
};

export default Main;
