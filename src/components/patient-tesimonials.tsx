"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { PATIENT_TESTIMONIALS } from "@/constants/data";
import HeadingTwo from "./heading-two";

const PatientTesimonials = () => {
  // Split the testimonials into two halves
  const midIndex = Math.ceil(PATIENT_TESTIMONIALS.length / 2);
  const firstHalf = PATIENT_TESTIMONIALS.slice(0, midIndex);
  const secondHalf = PATIENT_TESTIMONIALS.slice(midIndex);

  return (
    <div className="py-5 lg:py-10 bg-[url(/test-back-2.webp)] bg-center swiper-grid">
      <HeadingTwo classes="mb-4 text-white text-center">
        Testimonials
      </HeadingTwo>
      <div className="hidden lg:block">
        {/* First Swiper */}
        <Swiper
          // slidesPerView={1}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on small screens
            640: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on desktops
          }}
          spaceBetween={30}
          speed={20000}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {firstHalf.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-primary text-white py-4 px-6 self-end rounded-3xl"
            >
              <p
                className="text-center text-white"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Swiper */}
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on small screens
            640: { slidesPerView: 2 }, // 2 slides on tablets
            1024: { slidesPerView: 3 }, // 3 slides on desktops
          }}
          loop={true}
          spaceBetween={30}
          speed={20000}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="mySwiper mt-10"
        >
          {secondHalf.map((item, index) => (
            <SwiperSlide
              key={index + midIndex}
              className="bg-primary text-white py-4 px-6 rounded-3xl"
            >
              <p
                className="text-center text-white"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          speed={20000}
          autoplay={{
            delay: 0,
            pauseOnMouseEnter: true,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {PATIENT_TESTIMONIALS.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-primary text-white py-4 px-6 self-end rounded-3xl"
            >
              <p
                className="text-center text-white"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PatientTesimonials;
