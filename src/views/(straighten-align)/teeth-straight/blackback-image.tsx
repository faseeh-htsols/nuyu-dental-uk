import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";

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
              Orthodontic Care for Every Generation
            </HeadingTwo>
            <p className="ml-auto w-full lg:w-[40%] py-5">
              Age is no barrier to achieving a beautifully aligned smile. Our
              orthodontic treatments cater to patients of all ages, whether
              you&apos;re exploring braces or aligners for the first time, or
              revisiting treatment to correct teeth that have shifted after not
              wearing a retainer.
              <br />
              <br />
              Our expert team is here to craft a personalised solution that
              suits your unique needs and goals, ensuring comfort and confidence
              every step of the way. Let us help you rediscover the joy of a
              straighter, healthier smile following your orthodontic
              consultation at our practice.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
