import Container from "@/components-2/container";
import HeadingOne from "@/components-2/heading-one";
import SimpleButton from "@/components-2/simple-button";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="lg:py-0 py-10 bg-[#faf6f5]">
      <Container>
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-6 lg:w-[62.6%]">
            <HeadingOne classes="text-primary text-center lg:text-left">
              Blue Diamond Apex Invisalign® Teeth Straightening in Cheltenham,
              Gloucester, Cotswold
            </HeadingOne>
            <p className="text-black">
              Book a <span className="text-primary font-semibold">FREE</span>{" "}
              Consultation with your leading Blue Diamond Apex Invisalign®
              Practice
            </p>
            <ul className="list-none  marker:text-primary flex flex-col gap-3">
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">£600</span> off
                Invisalign® package
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  priority
                  quality={100}
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span> consult
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
                  priority
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span> scan,
                X-rays & simulation (worth £99)
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span>{" "}
                whitening (£395)
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="w-4 h-4 inline-block mr-2"
                />
                <span className="text-primary font-semibold">FREE</span>{" "}
                retainers (£298)
              </li>
              <li className="">
                <Image
                  src={"/sticky-logo.webp"}
                  alt="image"
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="w-4 h-4 inline-block mr-2"
                />
                Hygiene appointment (£119)
              </li>
              <li className="font-semibold text-primary">
                Total Invisalign® Savings £1,511
              </li>
            </ul>
            <div className="flex justify-center lg:block">
              <SimpleButton
                classes="inline-block"
                href={
                  "https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason"
                }
                variant="primary">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
          <div className=" lg:w-[34%]">
            <Image
              width={400}
              height={400}
              src={"/invis-landing-banner.png"}
              alt="banner image"
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
