import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import { IOfferSction } from "@/types";
import Image from "next/image";

const OfferSection = ({ data }: { data: IOfferSction }) => {
  return (
    <div className="py-5 bg-[#faf6f5]">
      <Container>
        <div
          className={`bg-[#F8F9FA] shadow-[0_2px_11px_1px_#0000001c] p-10 justify-between flex lg:gap-0 gap-7 lg:flex-row flex-col rounded-2xl ${
            data.reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-center gap-3 lg:w-[40%]">
            {/* <p className="inline-block bg-primary rounded-tr-lg rounded-bl-lg px-4 py-1 text-white w-fit">
              {data.offer}
            </p> */}
            <HeadingTwo>{data.heading}</HeadingTwo>
            <p dangerouslySetInnerHTML={{ __html: data.para }} />
            <div className="mt-3">
              <SimpleButton
                classes="inline-block"
                variant={"primary"}
                href={data.href}
              >
                {data.btn}
              </SimpleButton>
            </div>
          </div>
          <div className="lg:w-[40%]">
            <Image
              src={data.image}
              width={600}
              height={600}
              quality={95}
              alt={data.heading}
              className="w-full h-auto rounded-tr-3xl rounded-bl-3xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OfferSection;
