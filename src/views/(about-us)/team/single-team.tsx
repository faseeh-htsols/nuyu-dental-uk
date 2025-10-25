"use client";
import SimpleButton from "@/components/simple-button";
import { ITeamMember } from "@/types";
import Image from "next/image";
// import Link from "next/link";
import { useState } from "react";

const SingleTeam = ({ data }: { data: ITeamMember }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shortBio = data.paras[0];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div
        className="bg-white group w-full h-[690px] pb-0 rounded-tr-3xl rounded-bl-3xl overflow-hidden mb-6 cursor-pointer"
        onClick={openModal}>
        <div className="relative group">
          <Image
            src={data.image}
            className="transition-opacity w-full h-[35rem] object-cover object-center duration-500"
            width={500}
            height={500}
            alt={data.name}
            quality={100}
          />
          <div className="absolute bottom-0 rounded-tl-[50px] bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-500 h-[270px]">
            <p
              className="text-center text-base mb-4 px-4"
              dangerouslySetInnerHTML={{ __html: shortBio }}></p>
            <button
              className="text-sm font-medium font-quicksand uppercase rounded-full py-3 px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none bg-white text-primary"
              onClick={(e) => {
                e.stopPropagation();
                openModal();
              }}>
              Read Full Bio
            </button>
          </div>
        </div>
        <div className="bg-white bg-opacity-90 flex flex-col justify-center items-center py-4">
          <h3 className="text-center text-2xl text-olive mb-2">{data.name}</h3>
          <p
            className="text-center text-primary text-base"
            dangerouslySetInnerHTML={{ __html: data.designation }}
          />

          {data.gdc && (
            <p className="text-center pt-2 text-olive text-sm  relative z-10">
              GDC :{" "}
              <a
                href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${data.gdc}`}
                target="_blank">
                {data.gdc}
              </a>
            </p>
          )}
          {/* <Link
            href={`/about-us/team/${data.name
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            Go
          </Link> */}
          {data.nmc && (
            <p className="text-center pt-2 text-olive text-sm  relative z-10">
              NMC :{" "}
              {/* <a
                href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${data.gdc}`}
                target="_blank">
                {data.gdc}
              </a> */}
              {data.nmc}
            </p>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="z-[10001] fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}>
          <div
            className="bg-[url('/modal-back2.png')] bg-cover bg-center p-4 lg:p-8 mt-20 rounded-tr-3xl rounded-bl-3xl w-11/12 md:w-3/4 lg:w-2/3 flex flex-col lg:flex-row relative"
            onClick={(e) => e.stopPropagation()}>
            <div className="lg:w-1/3 w-full mx-auto lg:ms-auto flex justify-center items-center">
              <div>
                <Image
                  src={data.bioImage}
                  className="rounded-lg mx-auto w-[80%] lg:w-full h-full object-cover object-center"
                  width={200}
                  height={200}
                  alt={data.name}
                />
                <div className="mt-5 flex flex-col gap-2 w-full lg:w-fit">
                  {data.buttons?.map((button, index) => (
                    <SimpleButton
                      key={index}
                      variant="primary"
                      href={button.link}>
                      {button.name}
                    </SimpleButton>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 p-4">
              <h2 className="text-2xl text-olive mb-4">{data.name}</h2>
              <p
                className="text-tertiary text-lg mb-2"
                dangerouslySetInnerHTML={{ __html: data.designation }}
              />
              {data.gdc && (
                <p className=" text-olive text-sm mb-2 ">
                  GDC :{" "}
                  <a
                    href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${data.gdc}`}
                    target="_blank">
                    {data.gdc}
                  </a>
                </p>
              )}
              {data.nmc && (
                <p className=" text-olive text-sm mb-2 ">
                  NMC :{" "}
                  {/* <a
                    href={`https://olr.gdc-uk.org/SearchRegister/SearchResult?RegistrationNumber=${data.gdc}`}
                    target="_blank">
                    {data.gdc}
                  </a> */}
                  {data.nmc}
                </p>
              )}
              <div className="overflow-y-auto max-h-48 lg:max-h-60 scrollbar">
                {data.paras.map((item, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item }}
                    className="text-olive mb-4"></p>
                ))}
              </div>

              <button
                className="mt-4 bg-primary text-white py-2 px-4 rounded absolute top-0 right-10"
                onClick={closeModal}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleTeam;
