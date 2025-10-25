import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { DR_NAIZ, FIVE_BOXES } from "@/constants/data";
import Image from "next/image";
import HandShakeSvg from "./hand-shake-svg";
import CalendarSvg from "./calendar-svg";
import ExperienceSVG from "./expertise-advance-svg";

interface IFiveBoxes {
  heading: string;
}
const FiveBoxes = ({ heading }: IFiveBoxes) => {
  return (
    <div className="mb-10">
      <Container>
        <HeadingTwo classes="mb-5 mt-7 text-center">{heading}</HeadingTwo>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-primary rounded-3xl transition-all duration-300">
          {DR_NAIZ.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-6 group relative  ${
                FIVE_BOXES.length === index
                  ? ""
                  : "lg:before:block before:hidden before:content-[''] before:absolute before:right-0 before:top-1/2 before:h-[70%] before:w-[1px] before:-translate-y-1/2 before:bg-white"
              }`}
            >
              <div className="flex group justify-center mb-4 relative">
                {index === 0 ? (
                  <ExperienceSVG />
                ) : index == 2 ? (
                  <HandShakeSvg />
                ) : index == 3 ? (
                  <CalendarSvg />
                ) : (
                  <Image
                    src={item.imageSrc}
                    alt="image"
                    className={`h-12 w-auto transition-all duration-200 group-hover:drop-shadow-[0_0_13px_rgba(255,255,255,0.99)] ${
                      index === 4 ? "" : ""
                    }`}
                    width={50}
                    height={50}
                    quality={99}
                  />
                )}
              </div>
              <p className="relative font-quicksand font-medium text-black text-base text-center leading-tight mb-1 transition-all duration-200 group-hover:text-shadow-sm">
                {item.head}
              </p>
              <p className="relative font-quicksand font-medium text-white text-sm text-center leading-tight transition-all hidden opacity-0 group-hover:opacity-100 duration-200 group-hover:text-shadow-sm group-hover:animate-opacity-anim group-hover:block">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FiveBoxes;
