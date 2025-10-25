import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const TeamSectionTwo = () => {
  return (
    <>
      <div className="group flex justify-center items-center relative">
        <Image
          src={"/on_hover.webp"}
          className="w-full h-full aspect-[3/1] object-cover"
          width={1400}
          height={600}
          quality={100}
          alt="img"
        />
        <Image
          src={"/normal.webp"}
          className="w-full h-full object-cover object-[70%] absolute top-0 transition-opacity duration-500 group-hover:opacity-0"
          width={1400}
          height={600}
          quality={100}
          alt="img"
        />
      </div>
      <Container>
        <div className="py-1">
          <div className="flex flex-col gap-5 items-center pb-6">
            <HeadingTwo classes="text-center mt-6">
              The Team Behind the NUYU Experience
            </HeadingTwo>
            <p className="text-center text-black text-base">
              From your first visit to your final smile reveal, our dedicated
              team ensures every step feels effortless. With experienced
              dentists, knowledgeable treatment coordinators, skilled dental
              assistants, and a concierge-led experience, we’ve reimagined
              modern dentistry to be as smooth and supportive as possible.
            </p>
            {/* <h3 className="text-black text-lg">Ready to meet the team?</h3> */}
            <h3 className="text-primary text-base">Ready to meet the team?</h3>
            <div>
              <SimpleButton href="/about-us/team" variant="primary">
                Get to Know Us
              </SimpleButton>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default TeamSectionTwo;
