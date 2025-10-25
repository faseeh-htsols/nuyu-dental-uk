"use client";
import Container from "@/components/container";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = window.scrollY <= 40 ? -180 : -80; // larger offset when near top
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isSticky
          ? "fixed transition-all w-full z-50 top-0 shadow-md bg-white animate-navbarDown"
          : "transition-all "
      } `}>
      <div className="bg-primary text-white py-2">
        <Container>
          <p className="text-center font-season text-2xl">
            FREE consultations and over 10% off
          </p>
        </Container>
      </div>
      <div className="flex justify-center relative px-5 py-2`">
        <Link href={"/"}>
          <Image
            src={"/logo-main.webp"}
            width={400}
            height={400}
            quality={100}
            className="w-[300px] h-auto"
            alt="logo"
          />
        </Link>
        <div className="absolute right-3 top-1/2 hidden md:block -translate-y-1/2">
          <button
            className="h-fit text-sm font-medium font-quicksand uppercase rounded-full py-3 text-white bg-primary px-5 transition-all duration-300 hover:rounded-tl-none hover:rounded-br-none"
            onClick={handleScrollToContact}>
            Book a Consultation
          </button>
        </div>
      </div>
    </header>
  );
}
