import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <div className="py-28 bg-[url('/special-offer-composite.webp')] bg-cover text-white">
      <Container>
        <HeadingTwo classes="mb-6 text-white">
          Our Special Offer on <br /> Dental Implants
        </HeadingTwo>
        <div className="mb-6">
          <SimpleButton variant="white" href="#contact">
            Book A Free Consultation
          </SimpleButton>
        </div>

        <div className="flex flex-row">
          <div className="lg:w-[60%] flex flex-row gap-5  flex-wrap">
            <div className="flex flex-row gap-3 bg-black/40 w-full md:w-[calc(50%-10px)] border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  <span className="text-primary">20%</span> OFF
                </h3>
                <p className="uppercase">on your treatments</p>
              </div>
            </div>
            <div className="flex flex-row gap-3  bg-black/40 w-full md:w-[calc(50%-10px)] border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  <span className="text-primary">FREE</span>
                </h3>
                <p className="uppercase">TCO Consultation</p>
              </div>
            </div>
            <div className="flex flex-row gap-3  bg-black/40 w-full md:w-[calc(50%-10px)] border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  <span className="text-primary">FREE</span>
                </h3>
                <p className="uppercase">Examination (worth £99)*</p>
              </div>
            </div>
            <div className="flex flex-row gap-3  bg-black/40 w-full md:w-[calc(50%-10px)] border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  <span className="text-primary">FREE</span>
                </h3>
                <p className="uppercase">CBCT Scan (worth £249)*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
