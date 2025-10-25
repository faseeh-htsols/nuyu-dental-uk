import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";

export const BlackImage = () => {
  return (
    <Container>
      <div className="relative w-full h-[70vh]">
        <Image
          src={"/straighten-align-black.jpg"}
          alt="slide"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-tr-3xl rounded-bl-3xl text-white z-10">
          <div className="flex flex-col p-10">
            <HeadingTwo classes=" ml-auto w-full lg:w-[40%]">
              Why Tewkesbury Patients Choose NUYU Dental & Aesthetics
            </HeadingTwo>
            <p className="ml-auto w-full text-sm lg:w-[40%] py-5">
              <strong>Complete care under one roof</strong> – From check-ups and
              hygiene treatments to cosmetic transformations and restorative
              dentistry, we offer everything without the need for referrals
              elsewhere.
              <br />
              <br />
              <strong>Clear pricing and flexible finance</strong> – We believe
              in transparency. You’ll always receive a clear treatment plan and
              upfront costs, with{" "}
              <Link href={"/our-pricing"} className="font-bold">
                payment options
              </Link>{" "}
              available to make your dental care more manageable.
              <br />
              <br />
              <strong>Gentle care, designed for comfort</strong> – Our
              purpose-built clinic has been created with your comfort in mind.
              We take extra time with nervous patients, explaining every step
              and making your visit stress-free.
              <br />
              <br />
              <strong>Convenient location, easy access </strong>– Located less
              than 20 minutes from{" "}
              <Link
                href={"https://en.wikipedia.org/wiki/Tewkesbury"}
                target="_blank"
                className="font-bold">
                Tewkesbury
              </Link>
              , our Cheltenham clinic offers free parking and extended
              appointment availability to fit around busy schedules.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
