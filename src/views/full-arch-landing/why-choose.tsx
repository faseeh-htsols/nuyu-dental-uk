import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="bg-[url('/why-choose-composite.webp')] bg-center bg-cover h-[90vh]">
      <div className="max-w-[80rem] mx-auto px-5 h-full">
        <div className="flex flex-row justify-end h-full items-center">
          <div className="md:w-[50%] lg:w-[40%] bg-white rounded-bl-2xl rounded-tr-2xl p-8 flex flex-col gap-4 justify-center ">
            <h2 className="text-2xl text-center lg:text-left">
              Why Choose Us?
            </h2>
            <p className="text-center lg:text-left">
              At NUYU Cheltenham, our experienced and caring team is here to
              place you at the heart of everything we do – with your comfort,
              confidence and individual needs always our priority.
            </p>
            <div className="grid gap-4 mb-4">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/4.svg"}
                  width={100}
                  height={100}
                  quality={100}
                  alt="image"
                  className="h-14 w-auto"
                />
                <p>Warm and Friendly Environment</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/5.svg"}
                  width={100}
                  height={100}
                  quality={100}
                  alt="image"
                  className="h-14 w-auto"
                />
                <p>State of the Art Technology</p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/6.svg"}
                  width={100}
                  height={100}
                  quality={100}
                  className="h-14 w-auto"
                  alt="image"
                />
                <p>Flexible Finance Options</p>
              </div>
            </div>
            <div className="flex justify-center lg:block">
              <SimpleButton variant="primary" href="#contact">
                Book A Free Consultation
              </SimpleButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
