"use client";
import React, { useState } from "react";
import { NAV_ITEMS } from "@/constants/data";
import SimpleButton from "@/components/simple-button";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div>
      <div className="text-center" onClick={toggleDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 cursor-pointer text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-30 "
          onClick={toggleDrawer}
        ></div>
      )}

      <div
        id="drawer-contact"
        className={`fixed top-0 left-0 w-screen z-[10001] h-screen  duration-500  overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } bg-primary `}
        tabIndex={-1}
        aria-labelledby="drawer-contact-label"
      >
        <button
          type="button"
          onClick={toggleDrawer}
          data-drawer-hide="drawer-example"
          aria-controls="drawer-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-8 end-3 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="w-full grid items-center gap-2 ">
          <Link href="/">
            <Image
              width={300}
              height={300}
              src="/logo-mobile.webp"
              className="w-[188px] cursor-pointer mb-6 pl-4 pt-4"
              alt=""
            />
          </Link>
          <ul className={`flex flex-col  relative`}>
            {NAV_ITEMS.map((navItem) => (
              <li
                key={navItem.name}
                className={`${
                  navItem.dropdownType == "simple"
                    ? "relative"
                    : navItem.dropdownType == "mega"
                    ? ""
                    : "py-4"
                }`}
              >
                {navItem.dropdownType === "mega" ? (
                  <div>
                    <div
                      onClick={() => {
                        handleDropdownToggle(navItem.name);
                        if (openDropdown) {
                          setOpenDropdown(null);
                        }
                      }}
                      className="w-full pl-4 py-4 flex justify-between items-center cursor-pointer text-white font-medium"
                    >
                      {navItem.link ? (
                        <Link
                          href={navItem.link}
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                        >
                          {navItem.name}
                        </div>
                      )}
                      <Image
                        src="/down-arrow-3.svg"
                        width={40}
                        height={30}
                        className={` border border-white max-w-[50px] max-h-[20px] mr-5 rounded-2xl transition  duration-75 ${
                          openDropdown === navItem.name ? "rotate-180" : ""
                        }`}
                        alt=""
                      />
                    </div>

                    <Transition
                      show={openDropdown === navItem.name}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <div className="bg-[url(/white-textured.webp)] px-7">
                        {navItem.subItems.map((menu, index) => (
                          <div key={index}>
                            <Link
                              className="block text-black py-3 border-b border-black font-bold"
                              href={menu.link || "#"}
                              onClick={closeAll}
                            >
                              {menu.title}
                            </Link>
                            <ul className="pt-3 px-2">
                              {menu.navLinks.map((innerItem, innerIndex) => (
                                <li
                                  key={innerItem.name}
                                  className={`opacity-0 mb-2 ${
                                    openDropdown ? "animate-opacity-anim" : ""
                                  }`}
                                  style={{
                                    animationDelay: `${innerIndex * 300}ms`,
                                  }}
                                >
                                  <Link
                                    href={innerItem.link}
                                    className="text-black"
                                    dangerouslySetInnerHTML={{
                                      __html: innerItem.name,
                                    }}
                                    onClick={closeAll}
                                  ></Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </Transition>
                  </div>
                ) : navItem.dropdownType === "simple" ? (
                  <div>
                    <div
                      onClick={() => {
                        handleDropdownToggle(navItem.name);
                        if (openDropdown) {
                          setOpenDropdown(null);
                        }
                      }}
                      className={`w-full py-4 rounded-full text-subHeading flex gap-10 items-center justify-between  hover:text-white-white   pl-4 transition-all duration-300 ease-in-out font-medium font-sans cursor-pointer text-white`}
                    >
                      {navItem.link ? (
                        <Link
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                          href={navItem.link}
                        >
                          {navItem.name}
                        </Link>
                      ) : (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            closeAll();
                          }}
                        >
                          {navItem.name}
                        </div>
                      )}
                      <Image
                        src="/down-arrow-3.svg"
                        width={40}
                        height={30}
                        className={` border border-white max-w-[50px] max-h-[20px] mr-5 rounded-2xl transition  duration-75 ${
                          openDropdown === navItem.name ? "rotate-180" : ""
                        } `}
                        alt=""
                      />
                    </div>
                    {/*
          Use the `Transition` + `open` render prop argument to add transitions.
        */}
                    <Transition
                      show={openDropdown === navItem.name}
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      {/*
            Don't forget to add `static` to your `Disclosure.Panel`!
          */}
                      <ul className={"bg-[url(/white-textured.webp)] px-4"}>
                        {navItem.subItems.map((menu, index) => (
                          <React.Fragment key={menu.name}>
                            <Transition
                              show={openDropdown === navItem.name}
                              enter="transition-opacity transition-transform duration-300"
                              enterFrom="opacity-0 -translate-y-2"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition-opacity transition-transform duration-300"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 -translate-y-2"
                            >
                              <li
                                className={`opacity-0 ${
                                  openDropdown ? "animate-opacity-anim" : ""
                                }`}
                                style={{
                                  animationDelay: `${index * 300}ms`,
                                }}
                              >
                                <Link href={menu.link}>
                                  <button
                                    className={`group flex w-full  items-center gap-2 rounded-full py-1.5 px-3 text-black hover:font-medium transition-all duration-200 `}
                                    onClick={closeAll}
                                  >
                                    {menu.name}
                                  </button>
                                </Link>
                              </li>
                            </Transition>
                          </React.Fragment>
                        ))}
                      </ul>
                    </Transition>
                  </div>
                ) : (
                  <Link
                    href={navItem.link}
                    onClick={closeAll}
                    className="text-white pl-4"
                  >
                    {navItem.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="ml-5 py-4" onClick={closeAll}>
              <SimpleButton
                variant="transparent"
                classes="w-fit"
                href="/contact-us"
              >
                Contact Us
              </SimpleButton>
            </li>
          </ul>
        </div>

        {/* <div className="w-full h-65% flex justify-center items-end">
          <div onClick={() => setIsOpen(false)} className="w-full">
            <Button label="Make A Booking" id="#contact" isScroll />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
