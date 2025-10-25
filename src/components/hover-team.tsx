import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
import Image from "next/image";

interface TeamSectionData {
  heading?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  hoverImage: string;
  defaultImage: string;
}

interface TeamSectionProps {
  data: TeamSectionData;
}

const TeamSection = ({ data }: TeamSectionProps) => {
  const {
    heading,
    // description,
    // buttonText,
    // buttonLink,
    hoverImage,
    defaultImage,
  } = data;

  return (
    <>
      <div className="group flex justify-center items-center relative">
        <Image
          src={hoverImage}
          className="w-full h-full aspect-[3/1] object-cover"
          width={1400}
          height={600}
          quality={100}
          alt="hover-img"
        />
        <Image
          src={defaultImage}
          className="w-full h-full object-cover object-[70%] absolute top-0 transition-opacity duration-500 group-hover:opacity-0"
          width={1400}
          height={600}
          quality={100}
          alt="default-img"
        />
      </div>
      <Container>
        <div className="py-1">
          <div className="flex flex-col gap-5 items-center pb-2 lg:pb-6">
            {heading && (
              <HeadingTwo classes="text-center mt-6">{heading}</HeadingTwo>
            )}
            {/* <p className="text-center text-black text-base pt-2">
              {description}
            </p> */}
            <div>
              {/* <SimpleButton href={buttonLink} variant="primary">
                {buttonText}
              </SimpleButton> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TeamSection;
