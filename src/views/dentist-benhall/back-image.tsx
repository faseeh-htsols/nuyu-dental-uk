import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";

export const BlackImage = () => {
  return (
    <Container>
      <div className="relative w-full h-[100vh] md:h-[80vh] lg:h-[95vh] xl:h-[70vh]">
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
              Why Benhall Patients Choose NUYU Dental & Aesthetics
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5 space-y-2 text-[10px] md:text-sm lg:text-[12px] xl:text-sm">
              <strong>Comprehensive Care, Proven Results</strong>: From teeth straightening to implant surgery, we offer a full spectrum of dental treatments that go beyond just fixing teeth. We’re here to help you feel confident in your smile, whether it’s through <Link
                href="/treatments/prevent-protect/oral-health-assessment"
                className="font-bold underline"
              >cosmetic enhancements</Link> or long-term oral health care. Whatever you need, we pride ourselves on delivering results that speak for themselves.
              <br /><br className="hidden xl:block" />
              <strong>Transparent, Upfront Pricing</strong>: No one likes unexpected bills, and we get that. At NUYU Dental & Aesthetics, we ensure you’re always in the know about your treatment costs. Before any work begins, we’ll explain the costs clearly and offer flexible payment plans to make dental care more accessible.
              <br /><br className="hidden xl:block" />
              <strong>A Welcoming, Comfortable Environment</strong>: From the moment you arrive, you’ll be greeted by a friendly team who truly care about your comfort. Our clinic is designed to make you feel relaxed, with a warm and inviting atmosphere that puts you at ease. We aim to make your visit as smooth and stress-free as possible.
            </p>
          </div>
        </div>
      </div>
    </Container >
  );
};
