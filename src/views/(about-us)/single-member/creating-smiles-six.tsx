import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import Image from "next/image";
import Link from "next/link";

type CreatingSmilesSixProps = {
  heading: string;
  description?: string;
  list?: string[];
  botPara?: string;
  cta?: {
    label: string;
    href: string;
  };
  imageSrc: string;
};
const CreatingSmilesSix = ({
  heading,
  description,
  list,
  cta,
  imageSrc,
  botPara,
}: CreatingSmilesSixProps) => {
  return (
    <div className={`lg:pb-10 pb-5`}>
      <Container>
        <div className="bg-primary rounded-tr-[50px] rounded-bl-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center place-content-between bg-[url('/patient-journey2.webp')] lg:bg-[url('/patient-journey.webp')] bg-no-repeat p-10 bg-opacity-10 lg:bg-opacity-25 bg-contain bg-center lg:bg-[position:87%]  lg:bg-[size:490px]">
            <div className="flex flex-col gap-4">
              <HeadingTwo classes="text-white">{heading}</HeadingTwo>
              {description && (
                <p
                  className="text-white text-base"
                  dangerouslySetInnerHTML={{ __html: description }}></p>
              )}
              {list && list.length > 0 && (
                <ul className="list-disc list-inside marker:text-white">
                  {list.map((item, index) => (
                    <li
                      className="text-white text-base"
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              )}
              {botPara && (
                <p
                  className="text-white text-base"
                  dangerouslySetInnerHTML={{ __html: botPara }}></p>
              )}
              {cta && cta.href && cta.label && (
                <div className="w-full md:w-auto">
                  <Link
                    href={cta.href}
                    className="w-full bg-white lg:bg-transparent text-primary lg:text-white border-white lg:border-2 flex gap-3 items-center lg:w-[75%] justify-center text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none">
                    {cta.label}
                  </Link>
                </div>
              )}
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

export default CreatingSmilesSix;
