"use client";
import Container from "@/components/container";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import { useState } from "react";
import HeadingTwo from "@/components/heading-two";
import PopupVideo from "@/components/popup-video";

const Video = () => {
  const [popUp, setPopUp] = useState(false);

  const onClose = () => {
    setPopUp(false);
  };

  return (
    <>
      <div className=" py-10 bg-[#faf6f5]">
        <Container>
          <div className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row-reverse justify-between items-center">
            <div className="flex flex-col gap-6 lg:w-[35%]">
              <HeadingTwo classes="text-primary text-center lg:text-left">
                See what our patients have to say
              </HeadingTwo>
              <p className="text-black">
                Hear from one of our delighted patients about their journey.
                We’d love you to join them.
              </p>
              <div className="flex justify-center lg:block">
                <SimpleButton
                  classes="inline-block"
                  href={"#contact"}
                  variant="primary">
                  Book A Free Consultation
                </SimpleButton>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <div className="p-5 border-black border-2 rounded-2xl">
                <div className={`relative`}>
                  <Image
                    src={"/thumbnail.webp"}
                    width={1000}
                    height={1000}
                    alt="thumbnail"
                    className="w-full h-auto"
                  />
                  <button
                    onClick={() => setPopUp(true)}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[12]">
                    <Image
                      src={"/play-circle-filled-white.png"}
                      width={60}
                      height={60}
                      alt="play button"
                      className="relative cursor-pointer z-[100]"
                    />
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]">
                      <div className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "></div>
                      <div
                        className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                        style={{ animationDelay: "2s" }}></div>
                      <div
                        className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                        style={{ animationDelay: "2s" }}></div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {popUp && (
        <PopupVideo
          src="https://www.youtube.com/embed/VIDEO_ID" // Replace with actual video link
          title="Smile Makeover Video"
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Video;
