import Banner from "./Banner";
import { PATIENT_GALLERY_HEADER } from "@/constants/data2";
import FirstGallery from "./first-gallery";
import SecondGallery from "./second-gallery";
import ParallaxGallery from "./parralex-image";
// import PracticeGalleryImageStack from "@/components/practice-gallery-image-stack";
// import { PATIENT_GALLERY_IMAGES } from "@/constants/data";
import ParallaxGalleryTwo from "./parralex-image-two";
import LastGallery from "./last-gallery";

const Main = () => {
  return (
    <>
      <Banner data={PATIENT_GALLERY_HEADER} />
      <FirstGallery />
      <ParallaxGalleryTwo />
      <SecondGallery />
      <ParallaxGallery />
      <LastGallery />
      {/* <PracticeGalleryImageStack data={PATIENT_GALLERY_IMAGES} /> */}
    </>
  );
};

export default Main;
