// --- /views/(about-us)/single-member/main.tsx ---
import React from "react";
import HoverTeam from "@/components/hover-team";
import { SINGLE_TEAM_HOVER_IMAGE } from "@/constants/data";
import BannerTwo from "./banner-two";
import CreatingSmiles from "./creating-smiles";
import CreatingSmilesTwo from "./creating-smiles-two";
import CreatingSmilesThree from "./creating-smiles-three";
import FiveBoxesV4 from "@/views/home/five-boxes-v4";
import { DoctorPageData } from "@/constants/all-member-data";
import CreatingSmilesFour from "./creatingsmilefour";
import CreatingSmileFive from "./creatingsmile-five";
import CreatingSmilesSix from "./creating-smiles-six";

type MainProps = {
  data: DoctorPageData;
};

const Main = ({ data }: MainProps) => {
  return (
    <>
      <BannerTwo {...data.bannerTwo} />
      <CreatingSmiles {...data.creatingSmiles} />
      <CreatingSmilesTwo {...data.creatingSmilesTwo} />
      <FiveBoxesV4 heading={`Your Smile Starts Here - Why NUYU?`} />
      <CreatingSmilesThree {...data.creatingSmilesThree} />
      <HoverTeam data={SINGLE_TEAM_HOVER_IMAGE} />
      {data.craeatingSmilesFour && (
        <CreatingSmilesFour {...data.craeatingSmilesFour} />
      )}
      {data.CreatingSmilesFive && (
        <CreatingSmileFive {...data.CreatingSmilesFive} />
      )}
      {data.CreatingSmilesSix && (
        <CreatingSmilesSix {...data.CreatingSmilesSix} />
      )}
    </>
  );
};

export default Main;
