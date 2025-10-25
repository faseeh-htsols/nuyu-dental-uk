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
              Straighten & Align
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5 space-y-2 text-[10px] md:text-sm lg:text-[12px] xl:text-sm">
              Crooked or crowded teeth can affect both appearance and oral health. At NUYU Dental, we offer a full range of orthodontic options:
              <br /><br />
              <strong>Invisalign® Charlton Kings</strong> – Nearly invisible aligners that are custom-made to fit your teeth and can be removed for eating and brushing. A discreet choice for adults and teens.
              <br /><br />
              <strong>Kids and Adult Braces Charlton Kings</strong> – Whether your child needs early orthodontic care, your teenager requires alignment, or you’re an adult who missed out on braces when younger, we can help. Our comfortable, <Link
                href="/treatments/straighten-align"
                className="font-bold underline"
              >modern braces</Link> are tailored to every stage of life, giving you long-lasting results and the confidence of a straighter smile.
            </p>
          </div>
        </div>
      </div>
    </Container >
  );
};
