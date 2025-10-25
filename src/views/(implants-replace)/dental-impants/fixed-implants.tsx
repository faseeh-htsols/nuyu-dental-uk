import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";

const FixedImplants = () => {
  return (
    <div className="py-12 bg-[url(/white-textured.webp)]">
      <Container>
        <HeadingTwo classes="text-center ">
          Fixed Implant Solutions for Every Smile
        </HeadingTwo>
        <p className="text-base text-[#333] text-center py-3">
          At NUYU, we create implant solutions designed around you - whether
          you&apos;re replacing a single tooth or transforming your entire
          smile.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 ">
          <div className="flex flex-col justify-center gap-4  ">
            {/* <HeadingTwo>Exceptional Care Within Your Reach.</HeadingTwo> */}

            <ul className="text-base list-disc marker:text-primary ps-3 flex flex-col gap-2 text-[#333] [&>li]:marker:text-2xl">
              <li>
                <h3 className="text-xl font-medium text-[#333] mb-1">
                  Single Tooth Implants
                </h3>
                For a missing tooth, an implant provides a strong, stable
                replacement without affecting neighbouring teeth.
              </li>
              <li>
                <h3 className="text-xl font-medium text-[#333] mb-1">
                  Multiple Teeth Replacement & Implant-supported Bridges
                </h3>
                Implants can support multiple missing teeth, offering a secure,
                long-term alternative to traditional bridges.
              </li>
              <li>
                <h3 className="text-xl font-medium text-[#333] mb-1">
                  Full Arch Implants
                </h3>
                For those missing most or all teeth,{" "}
                <Link
                  className="font-bold"
                  href={"/treatments/implant-replace/full-arch-implants"}>
                  full arch implants
                </Link>{" "}
                provide a fixed, natural-feeling alternative to dentures.
              </li>
              <li>
                <h3 className="text-xl font-medium text-[#333] mb-1">
                  Same-Day Implants & Immediate Teeth
                </h3>
                In some cases, a temporary tooth can be placed on the same day
                as the implant – so you never have to go without a smile.
              </li>
            </ul>
            {/* <div className="pt-5 flex flex-wrap gap-3">
              <SimpleButton href="/our-pricing/fees" variant="secondary">
                Explore Fees
              </SimpleButton>
              <SimpleButton href="/our-pricing/dental-plans" variant="outline">
                Our Dental Plans
              </SimpleButton>
              <SimpleButton
                href="https://app.practihealth.co.uk/finance-promo?id=f154c83a-faf9-4161-b33a-759e7be0d10b"
                variant="primary"
              >
                Our Payment Options
              </SimpleButton>
            </div> */}
          </div>
          <div className="relative flex items-center">
            <Image
              src={"/fixed-implant.webp"}
              alt="quality"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-tr-[80px] rounded-bl-[80px]"
            />
            {/* <div className="absolute top-1/2 left-0 -translate-y-1/2">
          <div className="relative bg-primary rounded-2xl text-white px-7 pt-12 pb-9">
            <div className="absolute top-2 flex justify-center items-center right-2 w-9 h-9 border border-secondary rounded-full ">
              <ChevronSvg fill="#fff" classes="w-4 h-4 -rotate-90" />
            </div>
            <div className="price-card-title">
              Payment plans starting from just
            </div>
            <div className="price-card-price w-embed">£17.75 P/Month</div>
          </div>
        </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FixedImplants;
