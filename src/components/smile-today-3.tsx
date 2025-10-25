"use client";
import Container from "@/components/container";
import HeadingTwo from "@/components/heading-two";
import SimpleButton from "@/components/simple-button";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
interface ISmileTodayThree {
  variant?: boolean;
  imageSrc: string;
  texture?: boolean;
  heading?: string;
  para?: string;
}

const SmileTodayThree = ({
  variant,
  imageSrc,
  texture,
  heading,
  para,
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
          start: "top 90%",
          end: "bottom 60%",
          trigger: btnRef.current,
          // markers: true,
          toggleActions: "play none none none",
          onEnter: function () {
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
          <div className="flex flex-col lg:flex-row lg:gap-7 overflow-hidden justify-center bg-[url(/bg-try.png)] rounded-tr-[50px] rounded-bl-[50px]">
            <div className="w-full lg:w-[60%]">
              <div className="px-5 lg:px-10 py-10">
                <HeadingTwo classes="text-white lg:text-left">
                  {heading
                    ? heading
                    : variant
                    ? "How can we make you smile today"
                    : "Are you ready to start your smile journey?"}
                </HeadingTwo>
                <div className="flex gap-5 items-center justify-between">
                  <p
                    className="text-sm text-white py-5 w-full lg:w-[80%]"
                    dangerouslySetInnerHTML={{
                      __html: para
                        ? para
                        : "Whether you&apos;re just exploring your options or ready to begin treatment, we&apos;re here to help. Chat with our friendly team for personalised advice, book a consultation, or simply get in touch – whichever works best for you.",
                    }}>
                    {/* {para
                      ? para
                      : "Whether you&apos;re just exploring your options or ready to begin treatment, we&apos;re here to help. Chat with our friendly team for personalised advice, book a consultation, or simply get in touch – whichever works best for you."} */}
                  </p>
                </div>
                <Fade direction="up" triggerOnce={true}>
                  <div
                    className=" grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-10 pt-4 lg:pb-4 btn-ref place-content-center lg:w-[80%]"
                    // ref={btnsRef}
                  >
                    <div className="items">
                      <SimpleButton
                        href={whatsappLink}
                        classes="w-full lg:w-auto"
                        variant="transparent">
                        <Image
                          src={"/whatsapp.svg"}
                          width={30}
                          height={30}
                          alt="whatsapp"
                          className="w-6 h-auto hidden lg:block"
                        />
                        WhatsApp
                      </SimpleButton>
                    </div>
                    <div className="items">
                      <SimpleButton
                        href="tel:01242 339233"
                        variant="transparent"
                        classes="w-full lg:w-auto">
                        <Image
                          src={"/call-logo-white.svg"}
                          alt="call"
                          width={30}
                          height={30}
                          className="w-6 h-auto hidden lg:block"
                        />
                        <span className="block lg:hidden">Call Us</span>
                        <span className="hidden lg:block">01242 339233</span>
                      </SimpleButton>
                    </div>
                    <div className="items">
                      <SimpleButton
                        classes="w-full lg:w-auto"
                        href="https://onlineappointment.carestack.uk/?dn=nuyu&ln=1#/select-reason"
                        variant="transparent">
                        <Image
                          src={"/google-pin-black.svg"}
                          alt="icon"
                          width={25}
                          height={20}
                          className="w-6 h-auto hidden lg:block"
                        />
                        Schedule a visit
                      </SimpleButton>
                    </div>
                    <div className="items">
                      <SimpleButton
                        href={"/contact-us"}
                        classes="w-full lg:w-auto"
                        variant="transparent">
                        <Image
                          src={"/form.svg"}
                          width={25}
                          height={25}
                          alt="form"
                          className="w-6 h-auto hidden lg:block"
                        />
                        GET IN TOUCH
                      </SimpleButton>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
            <Image
              src={imageSrc}
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
export default SmileTodayThree;
