import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import Image from "next/image";
// import MeetTeamCopy from "../(about-us)/team/meet-team-copy";
import { IMPLANTS_MEMBERS } from "@/constants/data";
import SingleTeam from "../(about-us)/team/single-team";
const MeetYour = () => {
  return (
    <div className="py-10">
      <Container>
        {/* <div className="grid lg:grid-cols-2 gap-4 items-center">
          <div className="w-[70%] mx-auto">
            <Image
              src={"/team/natalia.webp"}
              alt="Naiz"
              className="w-full h-auto rounded-bl-2xl rounded-tr-2xl"
              width={800}
              height={800}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[25px] font-season text-primary mb-4">
              Dr Natalia Agalakova
            </h3>
            <p>
              Director & Lead Implant & Cosmetic Dentist |{" "}
              <a
                href="https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=100225"
                target="_blank">
                GDC No 100225
              </a>{" "}
            </p>
            <p>
              Natalia has an expertise in implants and cosmetic dentistry,
              ensuring every treatment is designed with both precision and
              artistry.
            </p>
            <p>
              Dr Natalia Agalakova combines precision with an artistic approach
              to implant and cosmetic dentistry, creating natural, confident
              smiles through advanced techniques. As co-founder and director of
              NUYU Dental & Aesthetics, she has helped shape a practice where
              innovation, patient experience, and world-class dentistry come
              together seamlessly.
            </p>
            <p>
              Recognised for her skills in smile transformations, she has been
              awarded SmileFast Centre of Excellence status and is part of the
              SmileFast Clinical & Lecture Team, sharing her expertise with
              fellow dentists. Her commitment to advancing modern implantology
              has also led her to publish a case report with Straumann, further
              highlighting her dedication to precision-led treatment planning.
            </p>
            <p>
              Dr Natalia’s extensive postgraduate training in aesthetic and
              restorative dentistry, clinical implantology, and facial
              aesthetics ensures that every treatment is grounded in both
              science and artistry.
            </p>
          </div>
        </div> */}
        <div className="flex flex-col lg:flex-row justify-center w-full gap-5">
          <div className="w-full lg:w-1/2">
            <HeadingTwo classes="mb-5 ">
              Meet Your Dental Implant Dentist
            </HeadingTwo>
            <p className="text-[#333] text-xl">
              Implant care is led by Dr Natalia Agalakova (GDC 100225), who
              holds a Master’s degree in Clinical Implantology with distinction.
              Her advanced training and dedication to digital workflows ensure
              treatments are carefully planned and precisely delivered.
              Natalia’s work in digital implantology has also been recognised
              with her case featured in the Straumann professional online
              platform.
            </p>
          </div>
          <div className="w-full lg:w-1/3">
            {IMPLANTS_MEMBERS.map((item) => (
              <SingleTeam data={item} key={item.name} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetYour;
