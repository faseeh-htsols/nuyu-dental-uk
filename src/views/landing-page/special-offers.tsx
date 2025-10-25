import Container from "@/components-2/container";
import HeadingTwo from "@/components-2/heading-two";
import SimpleButton from "@/components-2/simple-button";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <div className="py-28 bg-[url('/special-offer-invis.webp')] bg-cover text-white">
      <Container>
        <HeadingTwo classes="mb-6 text-white">
          Our Special Offer on <br /> Invisalign®
        </HeadingTwo>
        <div className="mb-6">
          <SimpleButton variant="white" href="#contact">
            Book A Free Consultation
          </SimpleButton>
        </div>
        {/* <p className="mb-6">Save a total of £1,792</p> */}
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
                  <span className="text-primary">GUARANTEED</span>
                </h3>
                <p>the cheapest in Cheltenham</p>
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
                  Save <span className="text-primary">£99</span>
                </h3>
                <p>FREE 3D SCAN</p>
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
                  Save <span className="text-primary">£395</span>
                </h3>
                <p>with Boutique Teeth Whitening</p>
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
                  Save <span className="text-primary">£298</span>
                </h3>
                <p>with Retainers</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
