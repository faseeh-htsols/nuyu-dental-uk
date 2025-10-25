"use client";
import React, { useEffect, useRef, useState } from "react";
import { IFooterHero } from "@/types";

const FooterHero = ({ data }: IFooterHero) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex justify-center items-center min-h-[70vh] bg-cover bg-center "
      style={{ backgroundImage: `url(${data.bgImg})` }}
      ref={sectionRef}
    >
      <div className="text-white text-center mt-5 text-3xl md:text-5xl tracking-wider !leading-[4rem]">
        <h2 className={`text-7xl ${isVisible ? "zoom-in" : "zoom-out"}`}>
          {data.title}
        </h2>
        <p
          className={`w-3/4 mx-auto leading-tight text-2xl mt-2 ${
            isVisible ? "zoom-in" : "zoom-out"
          }`}
        >
          {data.tagline} <br />
          <span className="text-lg">{data.des}</span>
        </p>
      </div>
    </div>
  );
};

export default FooterHero;
