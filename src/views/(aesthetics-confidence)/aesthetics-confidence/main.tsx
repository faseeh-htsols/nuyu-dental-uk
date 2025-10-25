import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  AESTHETICS_BODY_HEADER,
  AESTHETICS_FACIAL_REJUVENATION,
  AESTHETICS_NUYU_GYM,
  AESTHETICS_SKIN_TREATMENTS,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={AESTHETICS_BODY_HEADER} />
      <TipsTreatment data={AESTHETICS_FACIAL_REJUVENATION} />
      <TipsTreatment data={AESTHETICS_SKIN_TREATMENTS} />
      <TipsTreatment data={AESTHETICS_NUYU_GYM} />
    </>
  );
};

export default Main;
