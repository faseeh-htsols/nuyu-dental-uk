import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <div className="py-5 lg:py-10">
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between gap-6 items-center `}
        >
          <div className="w-full lg:w-[35%]">
            <Image
              src={"/dental-implants/why-choose.webp"}
              alt={"Why choose Dental Implants"}
              width={600}
              height={600}
              quality={100}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-[calc(50%-12px)] relative">
            <Image
              src={"/logo-primary.webp"}
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-contain opacity-10"
              alt="logo"
            />
            <HeadingTwo classes="mb-7">Why Replace Missing Teeth?</HeadingTwo>
            <p className="text-base text-olive">
              Missing teeth affect more than just appearance &#8208; they impact
              how you bite, chew, and speak every day. Over time, neighbouring
              teeth may shift into the gap, while opposing teeth can move
              downward, creating spaces where food can get trapped. This can
              increase the risk of gum disease, tooth wear, and further
              complications, such as disruption to the bite stability. The
              surrounding teeth take on extra pressure to compensate for the
              lost tooth, which can strain them over time, leading to uneven
              wear and further risks.
              <br />
              <br />
              Beyond function, missing teeth can also affect confidence in
              everyday moments - whether it&apos;s smiling, talking, or enjoying
              a meal.
              <br />
              <br />
              At NUYU, we use the latest imaging and digital technology to
              assess your unique situation and provide precise,
              natural&#8208;looking solutions that restore both function and
              confidence in your smile.
            </p>
            <div className="mt-5 relative">
              <SimpleButton
                variant="primary"
                classes=" relative"
                href="/contact-us"
              >
                Find Out if Implants are right for you
              </SimpleButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhyChoose;
