"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
interface ISmileTodayThree {
  variant?: boolean;
  title: string;
  para: string;
  imageSrc?: string;
  texture?: boolean;
}

const SmileTodayThird = ({
  variant,
  title,
  para,
  imageSrc,
  texture,
}: ISmileTodayThree) => {
  const btnRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const whatsappNumber = "01242 339233";
  const prefilledMessage = "Hi NUYU Dental& aesthetics! I’m interested in ….";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  useGSAP(
    () => {
      gsap.from(btnsRef.current, {
        yPercent: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          start: "top 80%",
          end: "bottom 60%",
          trigger: btnRef.current,
          // markers: true,
          toggleActions: "play none none none",
          onEnter: function () {
            console.log("refreshed");
            ScrollTrigger.refresh();
          },
        },
      });
      setTimeout(() => {
        ScrollTrigger.refresh();
        // console.log("ScrollTrigger refreshed set  timeout");
      }, 50);
    },
    { scope: btnRef }
  );
  return (
    <>
      <div
        className={`py-5 lg:py-10 btns-animate-container ${
          texture ? "bg-[url(/white-textured.webp)]" : ""
        }`}
        ref={btnRef}>
        <Container>
          <div className="flex flex-col lg:flex-row gap-7  justify-center bg-[url(/bg-try.png)] rounded-tr-[50px] rounded-bl-[50px]">
            <div className="w-full lg:w-[60%]">
              <div className=" p-10">
                <HeadingTwo classes="text-white">{title}</HeadingTwo>
                <div className="flex gap-5 items-center justify-between">
                  <p className="text-sm text-white py-5 w-[80%]">{para}</p>
                </div>
                <div
                  className=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-4 btn-ref place-content-center"
                  ref={btnsRef}>
                  <div className="items">
                    <SimpleButton href={whatsappLink} variant="transparent">
                      <Image
                        src={"/whatsapp.svg"}
                        width={30}
                        height={30}
                        alt="whatsapp"
                        className="w-6 h-auto"
                      />
                      WhatsApp
                    </SimpleButton>
                  </div>
                  <div className="items">
                    <SimpleButton href="tel:01242 339233" variant="transparent">
                      <Image
                        src={"/call-logo-white.svg"}
                        alt="call"
                        width={30}
                        height={30}
                        className="w-6 h-auto"
                      />
                      <span className="block lg:hidden">Call Us</span>
                      <span className="hidden lg:block">01242 339233</span>
                    </SimpleButton>
                  </div>
                  <div className="items">
                    <SimpleButton
                      href="https://maps.app.goo.gl/KeHtTm5SQnPUYSAG8"
                      variant="transparent">
                      <Image
                        src={"/google-pin-black.svg"}
                        alt="icon"
                        width={25}
                        height={20}
                        className="w-6 h-auto"
                      />
                      Schedule a visit
                    </SimpleButton>
                  </div>
                  <div className="items">
                    <SimpleButton href={"#contact"} variant="transparent">
                      <Image
                        src={"/form.svg"}
                        width={25}
                        height={25}
                        alt="form"
                        className="w-6 h-auto"
                      />
                      Tell Us More
                    </SimpleButton>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={
                variant
                  ? "/background-image-larki.webp"
                  : imageSrc
                  ? imageSrc
                  : "/background-image2.webp"
              }
              alt={variant ? "Girl" : "today background"}
              width={1000}
              height={1000}
              quality={100}
              className="w-full lg:w-[30%] h-auto object-cover flex justify-self-end mr-10 "
            />
          </div>
        </Container>
      </div>
    </>
  );
};
export default SmileTodayThird;
