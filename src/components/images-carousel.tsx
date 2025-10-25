"use client";
import React from "react";
import Container from "./container";
import HeadingTwo from "./heading-two";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { IImagesCarousel } from "@/types";
import ArrowSvg from "./arrow-svg";
const ImagesCarousel = ({ data }: { data: IImagesCarousel }) => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="py-12">
      <Container>
        <div className="mb-7">
          <HeadingTwo classes="text-center">{data.heading}</HeadingTwo>
          {data.para && (
            <p className="mt-5 text-center text-black">{data.para}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="bg-purple-600 text-white rounded hover:bg-purple-700 transition"
          >
            <ArrowSvg
              fill="#242022"
              classes="w-9 h-9 flex justify-center items-center border border-[#242022] rounded-full rotate-180"
              svgClass="w-5 h-5"
            />
          </button>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              // Responsive breakpoints
              320: {
                slidesPerView: 1, // 1 slide for mobile devices
                spaceBetween: 10, // Adjust spacing
              },
              640: {
                slidesPerView: 2, // 2 slides for tablets
                spaceBetween: 20, // Adjust spacing
              },
              1024: {
                slidesPerView: 3, // 3 slides for desktops
                spaceBetween: 30, // Adjust spacing
              },
            }}
          >
            {data.images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl overflow-hidden flex flex-col gap-1">
                  <div className="relative">
                    <Image
                      src={item.before}
                      width={200}
                      height={200}
                      className="w-full h-auto"
                      alt="images"
                    />
                    <div className="absolute bottom-1 left-2 text-white font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={item.after}
                      width={200}
                      height={200}
                      className="w-full h-auto"
                      alt="images"
                    />
                    <div className="absolute top-1 left-2 text-white font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="bg-orange-600 swiper-arrow button-next text-white rounded hover:bg-orange-700 transition"
          >
            <ArrowSvg
              fill="#242022"
              classes="w-9 h-9 flex justify-center items-center border border-[#242022] rounded-full"
              svgClass="w-5 h-5"
            />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ImagesCarousel;
