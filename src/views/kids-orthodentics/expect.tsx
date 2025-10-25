import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const Expect = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <div className=" w-full lg:w-[60%]">
            <HeadingTwo classes="mb-5 text-center lg:text-left">
              Why Choose a NUYU Implant?
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
                  Natural Look & Feel:
                </span>{" "}
                mimics the look and function of natural teeth
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
                  Secure and reliable:{" "}
                </span>
                eat and smile freely
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
                <span className="text-primary font-semibold">Supports:</span>{" "}
                your oral health and jawbone
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
                <span className="text-primary font-semibold">Designed:</span> to
                last for years
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
                  Planned in 3D:
                </span>{" "}
                for precision and comfort
              </li>
            </ul>
            <div className="my-7 flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="hidden lg:block w-full lg:w-[40%]">
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
