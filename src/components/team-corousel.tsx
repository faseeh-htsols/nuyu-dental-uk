"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import HeadingTwo from "./heading-two";
import { useRef, useState } from "react";
import ArrowSvg from "./arrow-svg";
import { SLIDES_TEAM } from "@/constants/data";
import Container from "./container";
interface SlideProps {
  imageSrc?: string;
  videoSrc?: string;
  text: string;
  poster?: string;
  onVideoClick?: () => void;
}

const ImageOverlaySlide: React.FC<SlideProps> = ({
  imageSrc,
  videoSrc,
  poster,
  // text,
  onVideoClick,
}) => {
  return (
    <>
      <div className="relative w-full  p-3">
        {videoSrc ? (
          <>
            <div className="relative w-full h-full">
              {poster && (
                <>
                  <Image
                    src={poster}
                    alt="slide"
                    width={4000}
                    height={1000}
                    quality={100}
                    className="w-full h-auto rounded-2xl "
                  />

                  <button
                    onClick={onVideoClick}
                    className="absolute inset-0 flex items-center justify-center z-20  rounded-2xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white "
                      fill="currentColor "
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px]">
                    <div className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "></div>
                    <div
                      className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                      className="absolute w-[150px] h-[150px] bg-[rgba(0,0,0,0.1)] opacity-0 rounded-full left-0 top-0 z-[1] animate-waves "
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </>
              )}
            </div>
          </>
        ) : imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt="slide"
              width={2000}
              height={1000}
              quality={100}
              className="w-full h-auto  rounded-2xl"
            />
            {/* <div className="absolute inset-0 bg-transparent bg-opacity-50 flex flex-col items-center justify-center rounded-3xl text-white z-10">
              <h3 className="text-center absolute bottom-6 text-white font-quicksand text-3xl">
                {text}
              </h3>
            </div> */}
          </>
        ) : null}
      </div>
    </>
  );
};

const TeamCorousel: React.FC = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [showModal, setShowModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <>
      {showModal && activeVideo && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur z-[10000]"
            onClick={() => {
              setShowModal(false);
              setActiveVideo(null);
            }} // Close when clicking the backdrop
          >
            <button
              className="absolute flex cursor-pointer justify-center items-center border-4 h-12 w-12 rounded-full top-3 left-3 text-white z-[10000] text-4xl focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <Image
                src={"/close-check.png"}
                width={40}
                height={40}
                alt="close button"
              />
            </button>
            <div
              className="relative w-11/12 max-w-4xl aspect-video bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside this div
            >
              <iframe
                src={activeVideo}
                title={"Video"}
                className="w-full h-full border-none"
                allowFullScreen
              />
            </div>
          </div>
        </>
        // <div
        //   className="fixed inset-0 z-[10000] bg-black bg-opacity-80 "
        //   onClick={() => {
        //     setShowModal(false);
        //     setActiveVideo(null);
        //   }}
        // >
        //   <div className="absolute w-full h-full flex items-center justify-center">
        //     <iframe
        //       src={activeVideo}
        //       className="w-full h-full border-none"
        //       allowFullScreen
        //     />
        //     <button
        //       onClick={() => setShowModal(false)}
        //       className="absolute top-10 right-10 text-white"
        //     >
        //       X
        //     </button>
        //   </div>
        // </div>
      )}
      <Container>
        <HeadingTwo classes="text-center py-2 lg:py-5">Team moments</HeadingTwo>
        <div className="relative  flex items-center">
          <button
            className=" bg-transparent p-2 rounded-full shadow-lg transform  rotate-180"
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <ArrowSvg
              fill="#9e7f61"
              classes="w-9 h-9 flex justify-center items-center border border-primary rounded-full"
              svgClass="w-5 h-5"
            />
          </button>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={3}
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {SLIDES_TEAM.map((slide, index) => (
              <SwiperSlide key={index}>
                <ImageOverlaySlide
                  {...slide}
                  onVideoClick={() => {
                    setShowModal(true);
                    setActiveVideo(slide.videoSrc || "");
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            // className="absolute top-1/2 right-11 z-50 bg-transparent p-2 rounded-full shadow-lg transform -translate-y-1/2"
            className="bg-transparent p-2 rounded-full shadow-lg "
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <ArrowSvg
              fill="#9e7f61"
              classes="w-9 h-9 flex justify-center items-center border border-primary rounded-full"
              svgClass="w-5 h-5"
            />
          </button>
        </div>
      </Container>
    </>
  );
};

export default TeamCorousel;
