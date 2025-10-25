// import ChevronSvg from "@/components/chevron-svg";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const QualtiyCare = () => {
  return (
    <div className="py-12 bg-[url(/white-textured.webp)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <div className="relative flex items-center">
            <Image
              src={"/quality-care.webp"}
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
          <div className="flex flex-col gap-4 ">
            <HeadingTwo>Flexible Payment Options</HeadingTwo>
            <p className="text-base text-[#333] py-2">
              If you’re concerned about dental implants near you cost,
            </p>
            <p className="text-base text-[#333]">
              We believe high-quality dental care should be accessible. Our team
              will guide you through flexible payment options, so you can spread
              the cost in a way that works for you.
            </p>
            <ul className="text-base list-disc marker:text-primary ps-3 flex flex-col gap-4 text-[#333] [&>li]:marker:text-2xl">
              <li>Interest-free finance available</li>
              <li>Custom payment plans to suit your budget</li>
            </ul>
            <div className="pt-5 flex flex-col items-center w-full lg:flex-row lg:w-fit gap-1">
              <SimpleButton href="/our-pricing" variant="primary">
                CHECK OUT THE PAYMENT OPTIONS
              </SimpleButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QualtiyCare;
