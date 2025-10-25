import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { GUEST_TEAM_DATA } from "@/constants/data";
import React from "react";
import SingleTeam from "./single-team";

const MeetTeam = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-3 mb-6" id="team">
          <HeadingTwo classes="text-center">
            Guest Experience & Clinical Care Support Team
          </HeadingTwo>
          <p className="text-center text-secondary">
            Get to know our one-of-a-kind team that will guide and support you
            on your smile journey
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-between gap-2 lg:gap-5 ">
          {GUEST_TEAM_DATA.map((item) => (
            <SingleTeam data={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MeetTeam;
