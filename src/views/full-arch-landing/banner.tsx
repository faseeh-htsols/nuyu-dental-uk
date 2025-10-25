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
            <HeadingOne classes="text-primary text-center lg:text-left">
              Full Arch Dental Implants in Cheltenham for only £11,996
            </HeadingOne>
            <p className="text-black">
              <span className="text-primary">Transform</span> your life with a
              complete <span className="text-primary">smile makeover</span> in
              just one day
            </p>
            <ul className="list-none flex flex-col gap-3">
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 mr-2 inline-block"
                />
                <span className="text-primary font-semibold">FREE </span>{" "}
                Consultation with our Clinical Care Coordinators
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 mr-2 inline-block"
                />
                <span className="text-primary font-semibold">FREE</span> Dentist
                Assessment (normally £99)*
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
                Treatment Simulation (worth £300)
              </li> */}
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 mr-2 inline-block"
                />
                <span className="text-primary font-semibold">FREE</span> 3D CBCT
                Scan (normally £249)*
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 mr-2 inline-block"
                />
                <span className="text-primary font-semibold">
                  Full Arch Dental Implant{" "}
                </span>{" "}
                Treatment £11,996 (normally £14,995)
              </li>
              <li className="flex flex-row gap-2 items-center pl-0 lg:pl-5">
                (Cheltenham average £14,995+)
              </li>
            </ul>
            {/* <p className="text-black">*where treatment has been carried out</p> */}
            <div className="flex justify-center lg:block">
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
              src={"/full-arch-banner.png"}
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
