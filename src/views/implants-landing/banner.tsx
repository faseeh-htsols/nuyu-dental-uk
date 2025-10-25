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
              Dental Implants in Cheltenham for £2,236
            </HeadingOne>
            <p className="text-black">
              Planned with advanced digital technology at NUYU Dental &
              Aesthetics, giving you back a smile that looks, feels, and
              functions naturally.
              <br />
              <br />
              Exclusive Offer
            </p>
            <ul className="list-none flex flex-col gap-3">
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
                />
                Complete implant + crown package:
                <span className="text-primary font-semibold"> £2,236</span>{" "}
                (normally £2,795)
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">Includes</span>{" "}
                minor bone regeneration and gum graft if needed
              </li>
              {/* <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
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
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE </span>
                Consultation with our Clinical Care Coordinators
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span>{" "}
                Clinical Assessment by a dentist (normally £99)*
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span> 3D CBCT
                Scan (normally £249)*
              </li>
            </ul>
            <p className="text-black">
              *fully redeemable against your treatment if you proceed
            </p>
            <p className="text-black">
              We’re opening up <span className="text-primary">30 implant</span>{" "}
              treatment places at this{" "}
              <span className="text-primary">special rate</span> - available
              until they’re <span className="text-primary">filled</span>.
            </p>
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
              src={"/nat-test.webp"}
              // src={"/nat-test3.png"}
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
