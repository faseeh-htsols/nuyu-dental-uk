import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import { GUEST_TEAM_DATA } from "@/constants/data";
import React from "react";
import SingleTeam from "./single-team";
import { IFullMembers } from "@/types";

const MeetTeamCopy = ({ data }: { data: IFullMembers }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-3 mb-6" id="team">
          <HeadingTwo classes="text-center">{data.heading}</HeadingTwo>
          <p className="text-center text-secondary">{data.para}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-between gap-2 lg:gap-5 ">
          {data.members.map((item) => (
            <SingleTeam data={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MeetTeamCopy;
