import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import { FIVE_BOXES2 } from "@/constants/data";
import Image from "next/image";
import AdvancedDentistrySvg from "./advanced-dentistry-svg";
import HandShakeSvg from "./hand-shake-svg";
import CalendarSvg from "./calendar-svg";

interface IFiveBoxes {
  heading: string;
}
const FiveBoxesV2 = ({ heading }: IFiveBoxes) => {
  return (
    <div>
      <Container>
        <HeadingTwo classes="mb-5 mt-7 text-center">{heading}</HeadingTwo>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  rounded-3xl transition-all duration-300">
          {FIVE_BOXES2.map((item, index) => (
            <div
              key={index}
              className={`px-4 py-6 group bg-primary m-1 relative ${
                index === 0 ? "rounded-tl-3xl rounded-bl-3xl" : ""
              } ${
                index === FIVE_BOXES2.length - 1
                  ? "rounded-tr-3xl rounded-br-3xl"
                  : ""
              }`}
            >
              <div className="flex group justify-center mb-4 relative">
                {index === 0 ? (
                  <AdvancedDentistrySvg />
                ) : index == 2 ? (
                  <HandShakeSvg />
                ) : index == 3 ? (
                  <CalendarSvg />
                ) : (
                  <Image
                    src={item.imageSrc}
                    alt="image"
                    className={`h-12 w-auto transition-all duration-200 group-hover:drop-shadow-[0_0_13px_rgba(255,255,255,0.99)] ${
                      index === 4 ? "animate-rotateFull" : ""
                    }`}
                    width={50}
                    height={50}
                    quality={99}
                  />
                )}
                {item.steam && (
                  <Image
                    src={"/version-two/steam.svg"}
                    alt="image"
                    className="h-16 w-16 absolute left-1/2 animate-chai -top-1 -translate-x-1/2 transition-opacity duration-300  opacity-100  "
                    width={50}
                    height={50}
                    quality={99}
                  />
                )}
              </div>
              <p className="relative font-quicksand font-medium text-black text-base text-center leading-tight mb-1 transition-all duration-200 group-hover:text-shadow-sm">
                {item.head}
              </p>
              <p
                className="relative font-quicksand font-medium text-white text-sm text-center leading-tight transition-all hidden opacity-0 group-hover:opacity-100 duration-200 group-hover:text-shadow-sm group-hover:animate-opacity-anim group-hover:block"
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FiveBoxesV2;
