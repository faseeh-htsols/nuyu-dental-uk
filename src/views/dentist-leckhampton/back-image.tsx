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
              Orthodontics: Straighter Smiles for All Ages
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5 space-y-2 text-[10px] md:text-sm lg:text-[12px] xl:text-sm">
              Straight teeth look great and also support long-term oral health. At NUYU, we provide:
              <br /><br />
              <strong>Invisalign® Leckhampton</strong> – Custom-made, clear aligners that are removable, discreet, and easy to wear.
              <br /><br />
              <strong>Braces for children, teens, and adults</strong> – From early orthodontic care for kids to <Link
                href="/treatments/straighten-align/adult-braces"
                className="font-bold underline"
              >modern solutions for adults</Link>, we provide braces that are comfortable and effective.
            </p>
          </div>
        </div>
      </div>
    </Container >
  );
};
