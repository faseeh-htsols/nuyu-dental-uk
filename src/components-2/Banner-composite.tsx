import Container from "@/components/container";
import HeadingOne from "@/components/heading-one";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:py-0 py-10 bg-[#faf6f5]">
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-6 lg:w-[62.6%]">
            <HeadingOne classes="text-center lg:text-left text-primary">
              Seamless, Natural-Looking Smiles with Composite Bonding!
            </HeadingOne>
            <p className="text-black">
              Start Your{" "}
              <span className="text-primary font-semibold">Smile</span>{" "}
              Transformation with a FREE Composite Bonding Consultation!
            </p>
            <ul className="list-disc ps-5 marker:text-primary flex flex-col gap-3">
              <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                <span className="text-primary font-semibold">10% Off</span> Your
                Composite Bonding Treatment
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                <span className="text-primary font-semibold">FREE</span> Smile
                Assessment (worth £75)
              </li>
              <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                <span className="text-primary font-semibold">FREE</span> Digital
                Smile Preview (worth £250)
              </li>
              {/* <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                <span className="text-primary font-semibold">FREE</span>{" "}
                Electric Toothbrush (worth £60)
              </li> */}
              <li className="flex flex-row gap-2 items-center">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4"
                />
                <span className="text-primary font-semibold">FREE</span> Teeth
                Whitening (worth £295)
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start">
              <SimpleButton
                classes="inline-block"
                href={"#contact"}
                variant="primary">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className="w-full lg:w-[34%]">
            <Image
              width={400}
              height={400}
              src={"/composite-banner-landing.png"}
              alt="banner image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
