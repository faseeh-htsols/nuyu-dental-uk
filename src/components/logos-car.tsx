"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { LOGOS_CAROUSEL } from "@/constants/data";
import Image from "next/image";
const LogosCar = () => {
  return (
    <div className="swiper-marquee py-5 lg:py-10">
      <Swiper
        freeMode={true}
        spaceBetween={40}
        slidesPerView={7}
        allowTouchMove={false}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {LOGOS_CAROUSEL.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="px-8">
              <Image
                src={item}
                width={100}
                className="w-full h-auto"
                height={100}
                alt="logo"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogosCar;
