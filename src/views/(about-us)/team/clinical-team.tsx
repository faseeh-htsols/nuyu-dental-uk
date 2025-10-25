import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { CLINICS_TEAM_DATA } from "@/constants/data";
import React from "react";
import SingleTeam from "./single-team";

const ClinicsTeam = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-3 mb-6" id="team">
          <HeadingTwo classes="text-center">Clinical Team</HeadingTwo>
          <p className="text-center text-secondary">
            Get to know our clinical team who are committed to putting you at
            ease and delivering you the very best dentistry
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-between gap-2 lg:gap-5">
          {CLINICS_TEAM_DATA.map((item) => (
            <SingleTeam data={item} key={item.name} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ClinicsTeam;
