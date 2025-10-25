import Container from "@/components/container";
// import HeadingTwo from "@/components/heading-two";
import { COMPOSITE_MEMBERS } from "@/constants/data";
// import Image from "next/image";
import MeetTeamCopy from "../(about-us)/team/meet-team-copy";
const MeetYour = () => {
  return (
    <div className="py-10">
      <Container>
        {COMPOSITE_MEMBERS.map((item) => (
          <MeetTeamCopy data={item} key={item.heading} />
        ))}
      </Container>
    </div>
  );
};

export default MeetYour;
