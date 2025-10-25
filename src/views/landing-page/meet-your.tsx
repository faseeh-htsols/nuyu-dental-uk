import Container from "@/components-2/container";
// import HeadingTwo from "@/components-2/heading-two";
import { INVIS_MEMBERS } from "@/constants/data";
// import Image from "next/image";
import MeetTeamCopy from "../(about-us)/team/meet-team-copy";
const MeetYour = () => {
  return (
    <div className="py-10">
      <Container>
        {/* <HeadingTwo classes="mb-5 text-center">
          Meet Your Invisalign® Dentist
        </HeadingTwo>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <Image
            src={"/naiz.JPG"}
            alt="Naiz"
            className="w-full h-auto rounded-bl-2xl rounded-tr-2xl"
            width={800}
            height={800}
            quality={100}
          />
          <div className="flex flex-col gap-2">
            <h3 className="text-[25px] font-season text-primary mb-4">
              Dr. Naiz Khan
            </h3>
            <p>
              Cosmetic Dentist |{" "}
              <a
                href="https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=101469"
                target="_blank"
              >
                GDC No 101469
              </a>{" "}
              | BDS Brist,United Kingdom, 2005
            </p>
            <p>
              Dr Naiz Khan qualified from the University of Bristol in 2005 and
              has spent the last 15 years treating thousands of patients in
              Gloucester, Cheltenham, Banbury and Worcester.
            </p>
            <p>
              With a keen interest in orthodontics, Dr Naiz has been providing
              teeth straightening solutions with Invisalign® for nearly a decade
              now to treat a variety of orthodontic concerns including teeth
              that are crooked, crowded or spaced out. Dr Naiz is one of the
              UK’s leading providers of Invisalign® treatment and is part of the
              Apex group — a recognition that places him among the top 1% of
              Invisalign® providers in the country.
            </p>
            <p>
              His aim is to create a long lasting, friendly, and professional
              relationship based on honesty and trust with every patient, so
              that they are at ease when receiving the very best care.
            </p>
            <p>
              Dr Naiz gets his job satisfaction from being able to combine the
              art and science of dentistry to help create smiles, which help
              increase confidence and self-esteem in his patients.
            </p>
            <p>
              Dr Naiz spends his time outside of surgery with his young children
              and supporting other dentists with their clinical skills.
            </p>
          </div>
        </div> */}
        {INVIS_MEMBERS.map((item) => (
          <MeetTeamCopy data={item} key={item.heading} />
        ))}
      </Container>
    </div>
  );
};

export default MeetYour;
