import TeamCorousel from "@/components/team-corousel";
import Banner from "./banner";
// import ClinicalTeam from "./clinical-team";
// import LeadershipTeam from "./leader-team";
// import MeetTeam from "./meet-team";
import HoverTeam from "@/components/hover-team";
import { TEAM_HOVER_IMAGE, TOTAL_MEMBERS } from "@/constants/data";
import CoreServicesNewOne from "@/views/home/core-services-new-one";
import CoreServicesNew from "@/views/home/core-services-new";
import MeetTeamCopy from "./meet-team-copy";

const Main = () => {
  return (
    <>
      <Banner />
      <div className="flex flex-col gap-9">
        {TOTAL_MEMBERS.map((item) => (
          <MeetTeamCopy data={item} key={item.heading} />
        ))}
      </div>
      {/* <MeetTeam />
      <ClinicalTeam />
      <LeadershipTeam /> */}
      <TeamCorousel />
      <CoreServicesNewOne />
      <CoreServicesNew />
      <HoverTeam data={TEAM_HOVER_IMAGE} />
    </>
  );
};

export default Main;
