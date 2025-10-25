import React from "react";
import Container from "@/components/container";
import Image from "next/image";
import HeadingTwo from "@/components/heading-two";
import Link from "next/link";

type CreatingSmilesThreeProps = {
  heading: string;
  copy?: string;
  list?: string[];
  cta?: { label: string; href: string };
  rightImage?: string;
  backgroundImage?: string;
};

const CreatingSmilesThree = ({
  heading,
  copy,
  cta,
  list,
  rightImage,
  backgroundImage,
}: CreatingSmilesThreeProps) => {
  return (
    <div className={`py-5 lg:py-10 `}>
      <Container>
        <div
          className={`flex flex-col lg:flex-row justify-between bg-cover p-9 py-14 rounded-tr-3xl rounded-bl-3xl`}
          style={{
            backgroundImage: `linear-gradient(#87766370, #87766370), url(${
              backgroundImage ?? ""
            })`,
          }}>
          <div className="w-full lg:w-[50%]">
            <HeadingTwo classes="text-white mb-4">{heading}</HeadingTwo>
            {copy && (
              <p
                className="text-base text-white "
                dangerouslySetInnerHTML={{ __html: copy }}></p>
            )}
            {list && (
              <ul className="list-disc text-sm list-inside marker:text-white text-white my-4">
                {list.map((item: string, index: number) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            )}
            {cta && (
              <div className="w-full md:w-auto mt-10">
                <Link
                  href={cta.href}
                  className="w-full bg-white lg:bg-transparent text-primary lg:text-white border-white lg:border-2 flex gap-3 items-center lg:w-[75%] justify-center text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none">
                  {cta.label}
                </Link>
              </div>
            )}
          </div>
          <div className="w-full lg:w-[40%]">
            {rightImage && (
              <Image
                src={rightImage}
                alt="image"
                width={500}
                height={500}
                className="w-full h-96 object-contain"
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreatingSmilesThree;
