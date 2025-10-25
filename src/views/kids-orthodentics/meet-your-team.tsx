import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
const MeetYour = () => {
  return (
    <div className="py-10">
      <Container>
        <HeadingTwo classes="mb-5 text-center">
          Meet your Invisalign® dentists
        </HeadingTwo>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Image
              src={"/nadeem.png"}
              alt="Naiz"
              className="w-full h-auto rounded-bl-2xl rounded-tr-2xl"
              width={800}
              height={800}
              quality={100}
            />
            <h3 className="text-2xl font-season text-primary">Dr. Naiz</h3>
            <p>
              Cosmetic Dentist | GDC No 101469 | BDS Brist,United Kingdom, 2005
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
              UK’s leading providers of Invisalign® treatments and is part of
              the Apex group of providers which recognises him as one of the top
              1% of Invisalign® providers in the country.
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
          <div className="flex flex-col gap-4">
            <Image
              src={"/naeem.png"}
              alt="Naiz"
              className="w-full h-auto rounded-bl-2xl rounded-tr-2xl"
              width={800}
              height={800}
              quality={100}
            />
            <h3 className="text-2xl font-season text-primary">Dr. Naeem</h3>
            <p>Cosmetic Dentist | GDC No 283591 | BDS (2019)</p>
            <p>
              Dr. Naeem is a compassionate and skilled general dentist dedicated
              to delivering exceptional patient care. A graduate of the
              University of Manchester in 2019, Dr Naeem brings extensive
              experience in oral surgery, having worked in a hospital setting
              where they handled complex soft and hard tissue cases.
            </p>
            <p>
              With a passion for enhancing smiles, Dr. Naeem is also a highly
              trained cosmetic dentist, offering treatments such as composite
              bonding, porcelain veneers, teeth whitening, and Invisalign®.
              Beyond aesthetics, Dr. Naeem is experienced in rehabilitating
              patients’ mouths, providing solutions for tooth wear and restoring
              broken-down teeth to their optimal health and function.
            </p>
            <p>
              Dr. Naeem is committed to creating a comfortable, relaxing
              environment for patients and is especially skilled in treating
              those who may feel nervous or anxious about dental visits.
              Understanding each patient’s unique needs, Dr. Naeem ensures that
              every treatment is as stress-free and enjoyable as possible.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetYour;
