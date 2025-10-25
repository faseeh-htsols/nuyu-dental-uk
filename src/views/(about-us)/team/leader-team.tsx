import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { LEADER_TEAM_DATA } from "@/constants/data";
import React from "react";
import SingleTeam from "./single-team";

const LeaderShipTeam = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-3 mb-6" id="team">
          <HeadingTwo classes="text-center">Leadership Team</HeadingTwo>
          <p className="text-center text-secondary">
            Get to know the team leading NUYU&apos;s vision to ensure you have
            both the very best care and the very best experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-between gap-2 lg:gap-5">
          {LEADER_TEAM_DATA.map((item) => (
            <SingleTeam data={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default LeaderShipTeam;
