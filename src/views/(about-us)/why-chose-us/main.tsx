import TipsTreatment from "@/components/tips-treatment";
import Banner from "./banner";
import {
  WHY_CHOSE_US_DENTISTRY,
  WHY_CHOSE_US_SERENE,
  WHY_CHOSE_US_TRUST,
} from "@/constants/data";

const Main = () => {
  return (
    <>
      <Banner />
      <TipsTreatment data={WHY_CHOSE_US_SERENE} />
      <TipsTreatment data={WHY_CHOSE_US_TRUST} />
      <TipsTreatment data={WHY_CHOSE_US_DENTISTRY} />
    </>
  );
};

export default Main;
