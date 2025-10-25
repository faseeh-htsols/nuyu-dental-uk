"use client";

import Container from "@/components/container";
import SimpleButton from "@/components/simple-button";
import { NAV_ITEMS } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
// , useEffect
import Sidebar from "./sidebar";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
  const [megaMenu, setmegaMenu] = useState(false);
  const [megaMenu2, setmegaMenu2] = useState(false);
  const [dropDown, setDropDown] = useState<boolean | number>(false);
  const navbarRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false); // eslint-disable-line
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.scrollY > 30);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement, // Watches the entire page
        start: "top -280px", // Triggers animation when scrolled past 300px
        end: "+1000000000000",
        toggleActions: "play reverse play reverse", // Ensures smooth transition
        onEnter: () => {
          setIsSticky(true);
          setmegaMenu(false);
          setDropDown(false);
        },
        onLeaveBack: () => setIsSticky(false),
        // markers: true, // Debugging (remove in production)
      },
    });

    // Navbar Animation
    tl.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    }).from(".logo-sec", {
      y: -50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    // .addLabel("navItemsStart"); // Add label for chaining animations

    // Animate each ".nav-items" sequentially
    // gsap.utils
    //   .toArray<HTMLLIElement>(".nav-items-sec")
    //   .forEach((item, index) => {
    //     tl.from(
    //       item,
    //       {
    //         yPercent: 20,
    //         opacity: 0,
    //         duration: 0.4,
    //         ease: "power2.out",
    //       },
    //       `navItemsStart+=${index * 0.2}` // Stagger animation for each item
    //     );
    //   });
  }, []);

  return (
    <header className="py-7" ref={mainRef}>
      {/* <Container>
        <div className="mb-7"></div>
      </Container> */}
      <nav
        className={`transiton-all 
        navbar  
        
        `}
      >
        <Container>
          <div
            className={`flex justify-between items-center lg:items-stretch relative z-20`}
          >
            <div className={``}>
              <Link href={"/"}>
                <Image
                  src={"/logo-main.webp"}
                  className={`w-[250px] h-auto logo`}
                  // ${isSticky ? "hidden" : "block"}
                  alt="logo"
                  width={300}
                  height={300}
                  priority
                />
              </Link>
              {/* <Image
                src={"/sticky-logo.webp"}
                className={`w-[50px] h-auto ${isSticky ? "block" : "hidden"}`}
                // ${isSticky ? "block" : "hidden"}
                alt="logo"
                width={300}
                height={300}
              /> */}
            </div>
            <ul className={`hidden lg:flex flex-row gap-6`}>
              {NAV_ITEMS.map((navItem, upperIndex) => (
                <li
                  key={navItem.name}
                  className={`nav-items ${
                    navItem.dropdownType == "simple"
                      ? "relative"
                      : navItem.dropdownType !== "mega"
                      ? "flex items-center"
                      : ""
                  } `}
                >
                  {navItem.dropdownType === "mega" ? (
                    <div
                      onMouseOver={() => setmegaMenu(true)}
                      onMouseLeave={() => setmegaMenu(false)}
                      className="hover:cursor-pointer flex items-center h-full"
                    >
                      {navItem.link ? (
                        <Link
                          className="text-primary"
                          href={navItem.link}
                          onClick={() => setmegaMenu(false)}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <p className="text-primary">{navItem.name}</p>
                      )}
                      <div
                        className={`top-[68px] z-[1001] absolute left-0 w-full bg-primary rounded-2xl shadow-secondary shadow-2xl p-4 transition-all preserve-3d duration-500 ${
                          megaMenu ? "block animate-dropdown" : "hidden"
                        }`}
                        // ${
                        //   isSticky ? "top-[47px]" : "top-[51px]"
                        // }
                      >
                        <div className="grid grid-cols-5 gap-3">
                          {navItem.subItems.map((item) => (
                            <div key={item.title}>
                              {item.link ? (
                                <Link
                                  href={item.link}
                                  onClick={() => setmegaMenu(false)}
                                >
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: item.title,
                                    }}
                                    className="uppercase mb-4 text-white"
                                  ></p>
                                </Link>
                              ) : (
                                <p className="uppercase mb-4 text-white">
                                  {item.title}
                                </p>
                              )}
                              <div className="bg-white w-full h-[1px] mb-4"></div>
                              <ul className="flex flex-col gap-2">
                                {item.navLinks.map((innerItem) => (
                                  <li key={innerItem.name}>
                                    <Link
                                      href={innerItem.link}
                                      onClick={() => setmegaMenu(false)}
                                      target={
                                        innerItem.link.startsWith("https")
                                          ? "_blank"
                                          : undefined
                                      }
                                      dangerouslySetInnerHTML={{
                                        __html: innerItem.name,
                                      }}
                                      className="text-white text-sm transition-all duration-200 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full"
                                    ></Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : navItem.dropdownType === "simple" ? (
                    <div
                      className="hover:cursor-pointer flex items-center h-full"
                      onMouseOver={() => setDropDown(upperIndex)}
                      onMouseLeave={() => setDropDown(false)}
                    >
                      {navItem.link ? (
                        <Link
                          className="text-primary"
                          href={navItem.link}
                          onClick={() => setDropDown(false)}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <p className="text-primary">{navItem.name}</p>
                      )}
                      <div
                        className={`top-[58px] absolute  left-0 w-[200px] bg-primary rounded-2xl shadow-secondary p-4 ${
                          dropDown === upperIndex
                            ? "block animate-dropdown"
                            : "hidden"
                        }`}
                        // ${
                        //   isSticky ? "top-[47px]" : "top-[51px]"
                        // }
                      >
                        <ul className="flex flex-col gap-3">
                          {navItem.subItems.map((item) => (
                            <li key={item.name} className="text-white text-sm">
                              <Link
                                href={item.link}
                                onClick={() => setDropDown(false)}
                                target={
                                  item.link.startsWith("https")
                                    ? "_blank"
                                    : undefined
                                }
                                className="transition-all duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link href={navItem.link} className="text-primary">
                      {navItem.name}
                    </Link>
                  )}
                </li>
              ))}
              <li className="flex items-center">
                <SimpleButton variant="primary" href="/contact-us">
                  Contact Us
                </SimpleButton>
              </li>
            </ul>
            <div className="lg:hidden block">
              <Sidebar />
            </div>
          </div>
        </Container>
      </nav>
      <nav
        className={`transiton-all 
        navbar  navbar-anim ${
          isSticky
            ? "fixed top-0 left-0 w-full z-[1000] bg-white shadow-2xl p-4"
            : "hidden"
        }
        `}
        ref={navbarRef}
      >
        <Container>
          <div
            className={`flex justify-between items-center lg:items-stretch relative`}
          >
            <div className={``}>
              <Link href={"/"}>
                <Image
                  src={"/logo-main.webp"}
                  className={`w-[250px] h-auto logo-sec`}
                  // ${isSticky ? "hidden" : "block"}
                  alt="logo"
                  width={300}
                  height={300}
                />
              </Link>
              {/* <Image
                src={"/sticky-logo.webp"}
                className={`w-[50px] h-auto ${isSticky ? "block" : "hidden"}`}
                // ${isSticky ? "block" : "hidden"}
                alt="logo"
                width={300}
                height={300}
              /> */}
            </div>
            <ul className={`hidden lg:flex flex-row gap-6`}>
              {NAV_ITEMS.map((navItem, upperIndex) => (
                <li
                  key={`${navItem.name}${upperIndex}`}
                  className={`nav-items-sec ${
                    navItem.dropdownType == "simple"
                      ? "relative"
                      : navItem.dropdownType !== "mega"
                      ? "flex items-center"
                      : "position-unset"
                  } `}
                >
                  {navItem.dropdownType === "mega" ? (
                    <div
                      onMouseOver={() => setmegaMenu2(true)}
                      onMouseLeave={() => setmegaMenu2(false)}
                      className="hover:cursor-pointer flex items-center h-full"
                    >
                      {navItem.link ? (
                        <Link
                          className="text-primary"
                          href={navItem.link}
                          onClick={() => setmegaMenu2(false)}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <p className="text-primary">{navItem.name}</p>
                      )}
                      <div
                        className={`top-[71px] z-[1001] absolute left-0 w-full bg-primary rounded-2xl shadow-secondary shadow-2xl p-4 transition-all preserve-3d duration-500 ${
                          megaMenu2 ? "block animate-dropdown" : "hidden"
                        }`}
                        // ${
                        //   isSticky ? "top-[47px]" : "top-[51px]"
                        // }
                      >
                        <div className="grid grid-cols-5  gap-3">
                          {navItem.subItems.map((item) => (
                            <div key={`${item.title}-1`}>
                              {item.link ? (
                                <Link
                                  href={item.link}
                                  onClick={() => setmegaMenu2(false)}
                                >
                                  <p className="uppercase mb-4 text-white">
                                    {item.title}
                                  </p>
                                </Link>
                              ) : (
                                <p className="uppercase mb-4 text-white">
                                  {item.title}
                                </p>
                              )}
                              <div className="bg-white w-full h-[1px] mb-4"></div>
                              <ul className="flex flex-col gap-2">
                                {item.navLinks.map((innerItem) => (
                                  <li key={innerItem.name}>
                                    <Link
                                      href={innerItem.link}
                                      onClick={() => setmegaMenu2(false)}
                                      dangerouslySetInnerHTML={{
                                        __html: innerItem.name,
                                      }}
                                      className="text-white text-sm transition-all duration-200 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full"
                                      // dangerouslySetInnerHTML={{
                                      //   __html: innerItem.name,
                                      // }}
                                    ></Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : navItem.dropdownType === "simple" ? (
                    <div
                      className="hover:cursor-pointer flex items-center h-full"
                      onMouseOver={() => setDropDown(upperIndex)}
                      onMouseLeave={() => setDropDown(false)}
                    >
                      {navItem.link ? (
                        <Link
                          className="text-primary"
                          href={navItem.link}
                          onClick={() => setDropDown(false)}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <p className="text-primary">{navItem.name}</p>
                      )}
                      <div
                        className={`top-[58px] absolute  left-0 w-[200px] bg-primary rounded-2xl shadow-secondary p-4 ${
                          dropDown === upperIndex
                            ? "block animate-dropdown"
                            : "hidden"
                        }`}
                        // ${
                        //   isSticky ? "top-[47px]" : "top-[51px]"
                        // }
                      >
                        <ul className="flex flex-col gap-3">
                          {navItem.subItems.map((item) => (
                            <li key={`${item.name}-1`} className="text-white">
                              <Link
                                href={item.link}
                                onClick={() => setDropDown(false)}
                                target={
                                  item.link.startsWith("https")
                                    ? "_blank"
                                    : undefined
                                }
                                dangerouslySetInnerHTML={{
                                  __html: item.name,
                                }}
                                className="transition-all text-sm duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:transition-all before:duration-300 before:h-[1px] before:w-0 before:bg-white hover:before:w-full"
                              ></Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      dangerouslySetInnerHTML={{ __html: navItem.name }}
                      href={navItem.link}
                      className="text-primary"
                    ></Link>
                  )}
                </li>
              ))}
              <li className="flex items-center">
                <SimpleButton variant="primary" href="/contact-us">
                  Contact Us
                </SimpleButton>
              </li>
            </ul>
            <div className="lg:hidden flex items-center">
              <Sidebar />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;
