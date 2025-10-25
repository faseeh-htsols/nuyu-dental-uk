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
              Invisalign® & Braces – Subtle or Straightforward
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5 space-y-2 text-[10px] md:text-sm lg:text-[12px] xl:text-sm">
              For Prestbury patients considering teeth straightening, <Link
                href="/treatments/straighten-align/invisalign"
                className="font-bold underline"
              >Invisalign®</Link> has become a clear favourite. Comfortable, removable aligners fit neatly into daily life and work just as well for adults as they do for teenagers. We’ll even show you a digital preview of your smile before you begin.
              <br /><br />
              For children and younger patients, we also offer private braces in a supportive setting. Parents often tell us they value our calm approach and expertise in children’s dentistry.
            </p>
          </div>
        </div>
      </div>
    </Container >
  );
};
