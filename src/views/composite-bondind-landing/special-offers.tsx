import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <div className="py-28 bg-[url('/special-offer-composite.webp')] bg-cover text-white">
      <Container>
        <HeadingTwo classes="mb-6 text-white">
          Our Special Offer on <br /> Composite Bonding
        </HeadingTwo>
        <div className="mb-6">
          <SimpleButton variant="white" href="#contact">
            Book A Free Consultation
          </SimpleButton>
        </div>
        <p className="mb-6">Over £1000 of Extras included:</p>
        <div className="flex flex-row">
          <div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-row gap-3 bg-black/40 w-full border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  <span className="text-primary">10%</span> OFF
                </h3>
                <p>YOUR COMPOSITE BONDING TREATEMNT</p>
              </div>
            </div>
            <div className="flex flex-row gap-3  bg-black/40 w-full border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  Save <span className="text-primary">£75</span>
                </h3>
                <p>FREE SMILE ASSESSMENT</p>
              </div>
            </div>
            <div className="flex flex-row gap-3  bg-black/40 w-full border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  Save <span className="text-primary">£250</span>
                </h3>
                <p>FREE DIGITAL SMILE PREVIEW</p>
              </div>
            </div>
            {/* <div className="flex flex-row gap-3  bg-white/15 w-full border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  Save <span className="text-primary">£60</span>
                </h3>
                <p>FREE ELECTRIC TOOTHBRUSH</p>
              </div>
            </div> */}
            <div className="flex flex-row gap-3  bg-black/40 w-full border border-white p-4">
              <Image
                className="w-7 h-7 mt-1.5"
                src={"/checked-black.svg"}
                alt="image"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-[30px] font-semibold leading-normal">
                  Save <span className="text-primary">£295</span>
                </h3>
                <p>FREE TEETH WHITENING</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffers;
