import Banner from "@/components/Banner";
import TipsTreatment from "@/components/tips-treatment";
import {
  OUR_PRICING_AS_YOU_PAY,
  OUR_PRICING_DENPLAN_MEMBERSHIP,
  OUR_PRICING_FLEXIBLE_FINANCE,
  OUR_PRICING_HEADER,
} from "@/constants/data2";

const Main = () => {
  return (
    <>
      <Banner data={OUR_PRICING_HEADER} />
      <TipsTreatment data={OUR_PRICING_AS_YOU_PAY} />
      <TipsTreatment data={OUR_PRICING_DENPLAN_MEMBERSHIP} />
      <TipsTreatment data={OUR_PRICING_FLEXIBLE_FINANCE} />
    </>
  );
};

export default Main;
