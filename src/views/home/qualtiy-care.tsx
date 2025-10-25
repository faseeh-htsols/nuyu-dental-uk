// import ChevronSvg from "@/components/chevron-svg";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import Link from "next/link";

const QualtiyCare = () => {
  return (
    <div className="py-5 lg:py-12">
      <Container>
        <HeadingTwo classes="text-center ">
          Smarter Payment Choices - Care on Your Terms
        </HeadingTwo>
        <p className="text-base text-[#333] text-center py-6">
          At{" "}
          <Link href="/" className="font-bold">
            NUYU Dental & Aesthetics
          </Link>
          , we believe investing in your smile should be simple and rewarding.
          Our flexible payment options give you the freedom to choose the best
          way to manage your care with confidence. We understand that some
          treatments may represent a significant investment, which is why we
          offer flexible payment options to make achieving your dream smile both
          simple and affordable. Your care is our priority, and we’re here to
          ensure{" "}
          <Link className="font-bold" href="/about-us/patient-journey">
            your journey
          </Link>{" "}
          is as seamless and stress-free as possible.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7">
          <div className="relative flex items-center">
            <Image
              src={"/smarter-payment.webp"}
              alt="quality"
              width={800}
              height={800}
              quality={100}
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
          <div className="flex flex-col justify-center gap-3 lg:gap-4 ">
            {/* <HeadingTwo>Exceptional Care Within Your Reach.</HeadingTwo> */}

            <ul className="text-sm list-disc marker:text-primary ps-3 flex flex-col gap-3 lg:gap-4 text-[#333] [&>li]:marker:text-2xl">
              <li>
                <h3 className="text-xl font-medium text-[#333] ">
                  DenPlan Membership - Ongoing Care, One Simple Payment
                </h3>
                Enjoy regular check-ups, hygiene visits, and maintenance with a
                convenient monthly direct debit, plus savings on routine
                treatments. We&apos;ll help you choose the plan that&apos;s
                right for you.
              </li>
              <li>
                <h3 className="text-xl font-medium text-[#333] ">
                  Flexible Finance – Spread the Cost with Ease
                </h3>
                Choose from interest-free and low-cost finance plans to make
                treatments more accessible – ideal for{" "}
                <Link
                  className="font-bold"
                  href={"/treatments/straighten-align/invisalign"}>
                  Invisalign<sup>®</sup>
                </Link>
                ,
                <Link
                  className="font-bold"
                  href={"/treatments/implant-replace"}>
                  implants
                </Link>{" "}
                and{" "}
                <Link
                  className="font-bold"
                  href="/treatments/whiten-enhance/smile-makeover">
                  cosmetic care.
                </Link>
              </li>
              <li>
                <h3 className="text-xl font-medium text-[#333] ">
                  Pay As You Go - Transparent & Upfront pricing
                </h3>
                Prefer to pay per visit? Our clear, upfront pricing ensures you
                always know what to expect, making your treatment journey smooth
                and straightforward.
              </li>
            </ul>
            <div className="pt-5 flex justify-center lg:block">
              <SimpleButton href="/our-pricing" variant="primary">
                Explore Your Payment Options
              </SimpleButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QualtiyCare;
