import Banner from "@/components/Banner";
import { FEES_HEADER, FEES_MAIN } from "@/constants/data";
import FeesMain from "./fees-main";

const Main = () => {
  return (
    <>
      <Banner data={FEES_HEADER} />
      <FeesMain data={FEES_MAIN} />
    </>
  );
};

export default Main;
