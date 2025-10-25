import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";

export const BlackImage = () => {
  return (
    <Container>
      <div className="relative w-full h-[100vh] md:h-[70vh]">
        <Image
          src={"/straighten-align-black.jpg"}
          alt="slide"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl text-white z-10">
          <div className="flex flex-col p-10">
            <HeadingTwo classes=" ml-auto w-full lg:w-[40%] text-[14px] lg:text-[1.4rem] xl:text-[1.875rem]">
              Why Stroud Patients Choose NUYU Dental & Aesthetics
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5 space-y-2 text-[10px] md:text-sm lg:text-[12px] xl:text-sm">
              <strong>Tailored treatments for every smile:</strong> No two smiles are the same.That’s why we take time to understand your needs and design personalised treatment plans — whether it’s routine hygiene, <Link
                href="/treatments/aesthetics-body-confidence"
                className="font-bold underline"
              >cosmetic enhancements</Link>, or full restorative solutions.
              <br /><br className='block lg:hidden xl:block' />
              <strong>Friendly, expert team:</strong> From your first visit, you’ll notice our warm, welcoming approach. Our <Link
                href="/about-us/team"
                className="font-bold underline"
              >highly trained clinicians</Link> and support team take time to listen, explain everything clearly, and ensure you feel relaxed throughout your treatment.
              <br /><br className="block lg:hidden xl:block" />
              <strong>Modern techniques and technology:</strong> Our clinic is <Link
                href="/about-us/why-choose-us"
                className="font-bold underline"
              >equipped with the latest tools</Link> to make treatments faster, more comfortable, and more effective — from precision dental implants to digital scanning for Invisalign®.
            </p>
          </div>
        </div>
      </div>
    </Container >
  );
};
