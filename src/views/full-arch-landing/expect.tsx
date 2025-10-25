import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const Expect = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <div className="w-full lg:w-[60%]">
            <HeadingTwo classes="mb-5 text-center md:text-left">
              Why Choose Full Arch Dental Implants?
            </HeadingTwo>
            <ul className="flex flex-col gap-3 mb-4  md:text-left">
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="inline-block mr-2 w-4 h-4"
                />
                <span className="text-primary font-semibold">
                  Fixed Solution:
                </span>{" "}
                No need for adhesives or nightly removal
              </li>
              <li className="">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="inline-block mr-2 w-4 h-4"
                />
                <span className="text-primary font-semibold">
                  Low Maintenance:{" "}
                </span>
                Simple care routine just like natural teeth
              </li>
              <li className="">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="inline-block mr-2 w-4 h-4"
                />
                <span className="text-primary font-semibold">
                  Natural Look & Feel:
                </span>{" "}
                Mimics the look and function of natural teeth
              </li>
              <li className="">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="inline-block mr-2 w-4 h-4"
                />
                <span className="text-primary font-semibold">
                  Improved Oral Health:
                </span>{" "}
                Helps prevent bone loss and supports jaw structure
              </li>
              <li className="">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="inline-block mr-2 w-4 h-4"
                />
                <span className="text-primary font-semibold">
                  Eat and Speak with Confidence:
                </span>{" "}
                Enjoy your favourite foods without worry
              </li>
            </ul>
            <div className="flex justify-center lg:block my-8">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="hidden lg:block lg:w-[40%]">
            <Image
              src={"/expect.png"}
              alt="image"
              width={1000}
              height={1000}
              quality={100}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expect;
