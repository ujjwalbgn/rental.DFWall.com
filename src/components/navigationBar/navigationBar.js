import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../themeSwitch";
import { useRouter } from "next/router";

export default function NavigationBar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);

  // Setting Hompage as the default current tab on load
  useEffect(() => {
    let localStorageCurrentTab = JSON.parse(localStorage.getItem("currentTab"));

    if (localStorageCurrentTab != null) {
      let currentPath = router.pathname;
      if (currentPath.includes(localStorageCurrentTab)) {
        setActiveLink(localStorageCurrentTab);
      } else {
        setActiveLink("home");
      }
    } else {
      setActiveLink("home");
    }

    addEventListener("changeTab", (event) => {
      setActiveLink(event.detail.tabName);
      setCurrentTabOnLocalStorage(event.detail.tabName);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const setCurrentTabOnLocalStorage = (tabName) => {
    localStorage.setItem("currentTab", JSON.stringify(tabName));
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 transition-all bg-white dark:bg-[#141414]" +
          (scrollActive ? " shadow-md pt-0" : " ")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 ">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link
              href={"/homepage"}
              onClick={() => {
                setActiveLink("homepage");
                setCurrentTabOnLocalStorage("homepage");
              }}
            >
              <Image
                src={"/DFW_ALL_NBG.png"}
                width={100}
                height={100}
                priority
                alt="logo"
              />
            </Link>
          </div>
          {/* This will dissapear in mobile view */}
          <ul className="hidden lg:flex col-start-6 col-end-8 items-center"></ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link
              href="/contactUs"
              onClick={() => {
                setActiveLink("contactUs");
                setCurrentTabOnLocalStorage("contactUs");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative " +
                (activeLink === "contactUs"
                  ? "headerLinkActive"
                  : "headerLinkText")
              }
            >
              Contact Us
            </Link>
            <ThemeSwitch />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Hidden For now*/}
      {/* <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 ">
        <div className="bg-white dark:bg-[#141414] ">
          <ul className="flex w-full justify-between px-4 items-center text-[#3a6066] dark:text-[#007960]">
            <Link
              href="/gallery"
              onClick={() => {
                setActiveLink("about");
                setCurrentTabOnLocalStorage("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-indigo-500 text-[#3a6066] dark:text-[#007960]"
                  : " border-transparent")
              }
            >
              <Image
                src={"/gallery.svg"}
                height={30}
                width={30}
                alt="Gallery"
                className="hover:grayscale-0 duration-500 ease-in-out"
              />
              Our Services
            </Link>
          </ul>
        </div>
      </nav> */}
    </>
  );
}
