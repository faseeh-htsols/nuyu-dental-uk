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
              Why Choose NUYU Dental & Aesthetics
            </HeadingTwo>
            <p className="ml-auto w-full text-sm lg:w-[40%] py-5">
              <strong>Personalised Treatment Plans</strong> – Every smile is
              unique. We take time to understand your goals and create tailored
              plans — whether you need routine care, subtle enhancements, or
              life-changing results.
              <br />
              <br />
              <strong>Experienced, Approachable Team</strong> – Our friendly
              clinicians and support staff prioritise your comfort, explaining
              everything clearly so you always feel informed and confident.
              <br />
              <br />
              <strong>Advanced Technology & Techniques</strong> – From digital
              Invisalign® scanning to precise dental implant placement, we use
              the{" "}
              <Link href={"/about-us/why-choose-us"} className="font-bold">
                latest innovations
              </Link>{" "}
              for safer, faster, and more effective treatments.
              <br />
              <br />
              <strong>Easy Access from Cirencester </strong>– Located just a
              short drive away, we make it simple for{" "}
              <Link
                href={"https://en.wikipedia.org/wiki/Cirencester"}
                target="_blank">
                Cirencester
              </Link>{" "}
              patients to receive outstanding dental care close to home.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
