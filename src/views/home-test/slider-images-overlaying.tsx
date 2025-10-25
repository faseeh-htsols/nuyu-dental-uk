"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import Container from "@/components/container";
import React from "react";
import HeadingTwo from "@/components/heading-two";
import { HOME_CAROUSEL } from "@/constants/data";
import Image from "next/image";

const SliderImagesOverlaying = ({ heading }: { heading: string }) => {
  return (
    <div>
      <Container>
        <div>
          <HeadingTwo classes="mb-5 mt-7 text-center">{heading}</HeadingTwo>
        </div>
      </Container>
      <Swiper
        // slidesPerView={1}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // 1 slide on small screens
          640: { slidesPerView: 2 }, // 2 slides on tablets
          720: { slidesPerView: 3 }, // 2 slides on tablets
          1024: { slidesPerView: 4 }, // 3 slides on desktops
        }}
        spaceBetween={30}
        speed={20000}
        autoplay={{
          delay: 0,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {HOME_CAROUSEL.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              width={800}
              height={800}
              quality={100}
              className="w-full h-auto rounded-2xl"
              alt={`image ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImagesOverlaying;
