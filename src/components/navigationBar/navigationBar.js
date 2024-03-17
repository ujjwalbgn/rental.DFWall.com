import { addDays } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoSearchCircle } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function NavigationBar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);

  const [showDateRangePicker, setShowDateRangePicker] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
  });

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

  const handleDateChange = (dates) => {
    setDateRange({ ...dates.range1 });
    console.log(dateRange);
  };

  const handleDatePickerContainer = () => {
    setShowDateRangePicker(!showDateRangePicker);
  };

  const handleSearch = () => {
    setShowDateRangePicker(false);
    console.log("handle search");
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 transition-all bg-white " +
          (scrollActive ? " shadow-md pt-0" : " ")
        }
      >
        {/* Header */}
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
          </div>
          {/* Search Bar */}
          <div className="col-start-1  col-end-12  md:col-start-3 md:col-end-10 flex items-center justify-center">
            <div className="flex items-center rounded-full border p-1 text-xs font-semibold drop-shadow-md cursor-pointer shadow-md shadow-[#d86c9e] px-4">
              <div
                className="group flex flex-col border-r-2 p-2 px-6 hover:bg-red-200 hover:rounded-3xl"
                onClick={handleDatePickerContainer}
              >
                <p className="text-[#969e48] group-hover:scale-110 transition duration-500">
                  Rent from
                </p>
                <p className="text-[#d86c9e]">
                  {dateRange?.startDate.toDateString()}
                </p>
              </div>
              <div
                className="group flex flex-col  p-2 px-6 hover:bg-red-200 hover:rounded-3xl"
                onClick={handleDatePickerContainer}
              >
                <p className="text-[#969e48] group-hover:scale-110 transition duration-500">
                  Rent to
                </p>
                <p className="text-[#d86c9e]">
                  {dateRange?.endDate.toDateString()}
                </p>
              </div>
              <div className="group flex flex-cols p-2 rounded-full hover:bg-red-100 mx-4 transition durantion-1000 ">
                <IoSearchCircle
                  className="text-[40px] hover:scale-125 transition durantion-1000 ease-in-out"
                  style={{ color: "#d86c9e" }}
                  onClick={handleSearch}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Date Range Picker Toggle */}
        {showDateRangePicker && (
          <div className="flex justify-center">
            <DateRangePicker
              ranges={[dateRange]}
              onChange={handleDateChange}
              showDateDisplay={false}
              staticRanges={[]}
              minDate={new Date()}
            />
            <IoIosCloseCircleOutline
              className="text-[18px] cursor-pointer"
              style={{ color: "pink" }}
              onClick={handleDatePickerContainer}
            />
          </div>
        )}
      </header>
    </>
  );
}
