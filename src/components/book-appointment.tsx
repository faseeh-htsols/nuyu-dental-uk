import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
// import SimpleButton from "@/components/simple-button";
import { IAppointmentSectionData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface AppointmentSectionProps {
  data: IAppointmentSectionData;
}

const AppointmentSection: React.FC<AppointmentSectionProps> = ({ data }) => {
  const {
    title,
    description,
    para,
    lists,
    buttonText,
    buttonLink,
    imageSrc,
    paddingBottom,
  } = data;

  return (
    <div className={`${paddingBottom ? "lg:pb-10 pb-5" : ""}`}>
      <Container>
        <div className="bg-primary rounded-tr-[50px] rounded-bl-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-content-between bg-[url('/patient-journey2.webp')] lg:bg-[url('/patient-journey.webp')] bg-no-repeat p-10 bg-opacity-10 lg:bg-opacity-25 bg-contain bg-center lg:bg-[position:87%]  lg:bg-[size:490px]">
            <div className="flex flex-col gap-10">
              <HeadingTwo classes="text-white">{title}</HeadingTwo>
              {para && <p className="text-white text-base">{para}</p>}
              {lists && lists.length > 0 && (
                <ul className="text-white list-disc pl-5 space-y-1">
                  {lists.map((item, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{ __html: item }}
                      className="text-base"
                    />
                  ))}
                </ul>
              )}
              <p
                className="text-white text-base"
                dangerouslySetInnerHTML={{ __html: description }}></p>
              <div className="w-full md:w-auto">
                <Link
                  href={buttonLink}
                  className="w-full bg-white lg:bg-transparent text-primary lg:text-white border-white lg:border-2 flex gap-3 items-center lg:w-[75%] justify-center text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none">
                  {buttonText}
                </Link>
              </div>
            </div>
            <Image
              src={imageSrc}
              width={400}
              height={400}
              alt="book-appointment"
              className="w-[34%] hidden lg:block visible lg:invisible h-auto place-self-end"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AppointmentSection;
