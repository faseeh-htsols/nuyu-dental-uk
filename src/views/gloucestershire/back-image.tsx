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
            <HeadingTwo classes="ml-auto w-full lg:w-[40%]">
              Straighten & Align – Invisalign® and Braces in Gloucester
            </HeadingTwo>
            <p className="ml-auto w-full text-sm lg:w-[40%] py-5">
              Want straighter teeth? We make it simple and discreet.
              <br />
              <br />
              <strong>Invisalign®:</strong> Clear, removable aligners gently
              move your teeth into place. You can take them out to eat, drink,
              and brush. They’re comfortable, almost invisible, and custom-made
              for you. We’ll guide you at each step with quick check-ins and
              clear advice.
              <br />
              <br />
              <strong>Adult braces:</strong> For more complex cases, fixed
              braces offer precise control. They’re reliable, predictable, and
              designed for steady results. We plan around your routine, so
              treatment fits your life—not the other way around.
              <br />
              <br />
              <strong>Kids’ braces:</strong> Early support helps growing smiles.
              We keep appointments calm and friendly, explain everything in
              simple words, and work at your child’s pace. The goal? A healthy
              bite and a confident smile that lasts.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
