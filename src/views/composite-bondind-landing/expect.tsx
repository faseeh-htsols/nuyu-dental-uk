import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const Expect = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <HeadingTwo classes="mb-5 text-center lg:text-left">
              What to expect at your{" "}
              <span className="text-primary">free consultation?</span>
            </HeadingTwo>
            <p className="mb-4">
              At your consultation you will meet our friendly treatment
              co-ordinator and your treating dentist to have your photos and
              scan taken. The team will then show you how your smile can be
              improved and answer any questions you have.
            </p>
            <ul className="flex flex-col gap-1 mb-4">
              <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                A <span className="text-primary font-semibold">smile</span>{" "}
                assessment preview
              </li>
              <li className="flex flex-row gap-2 items-center">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                All your questions{" "}
                <span className="text-primary font-semibold">answered</span>
              </li>
              <li className="flex flex-row gap-2 items-center">
                {" "}
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                An outline of{" "}
                <span className="text-primary font-semibold">all costs</span>{" "}
                and offer details
              </li>
            </ul>
            <div className="my-4 flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="hidden lg:block">
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
