import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Apart1 from "../../assets/apart1.png";
import Apart2 from "../../assets/apart2.png";
import Apart3 from "../../assets/apart3.png";
import Apart4 from "../../assets/apart4.png";
import { IoLocation } from "react-icons/io5";
import { CiDumbbell } from "react-icons/ci";
import { GiTheater } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";

const IkeProp = () => {
  return (
    <section className="md:mt-28 mt-10">
      <div
        className="max-w-7xl mx-auto  flex items-start flex-col  justify-center
       md:gap-14 gap-10"
      >
        {/* HEADING */}
        <div className="md:text-center text-start flex items-center justify-center gap-3  flex-col md:w-3/5 w-full ">
          <h2 className="text-start text-[#dfbf6c] md:text-[50px] text-[30px]">
            PROPERTY SERIES
          </h2>
        </div>
        {/* Properties List 1 */}
        <div className="md:flex md:flex-row flex flex-col items-center justify-between gap-10 ">
          {/*  1 BEDROOM APARTMENT */}
          <div className="bg-[#DFD4B7] md:w-2/3 w-full text-black md:mt-0 mt-0 ">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={Apart1}
                alt="Autobiography Building"
                className="duration-1000 hover:scale-100 scale-150 translate-all "
              />
            </div>
            <div className="flex flex-col gap-6 py-10 px-8">
              {/* ============================= */}
              <div className="md:flex md:flex-row flex flex-col items-start md:items-center justify-between gap-6 ">
                <div>
                  <h2 className="font-bold md:text-[20px] text-[18px] ">
                    1 BEDROOM APARTMENT
                  </h2>
                  <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                    <IoLocation />
                    Victoria Island, Lagos.
                  </p>
                </div>
                <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
                  <IoIosArrowForward />
                  See more
                </button>
              </div>
              {/* ===HOUSE Accessory */}
              <div className="md:flex md:flex-row flex flex-col flex-wrap md:items-center justify-start md:gap-5 gap-2">
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023786023]">
                    <CiDumbbell />
                  </span>
                  Gym house
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <GiTheater />
                  </span>
                  Cinema
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <FaLaptop />
                  </span>
                  Co-working space
                </p>
              </div>
            </div>
          </div>
          {/*  2 BEDROOM APARTMENT */}
          <div className="bg-[#DFD4B7] md:w-2/3  w-full text-black md:mt-0 mt-10 ">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={Apart2}
                alt="Autobiography Building"
                className="duration-1000 hover:scale-100 scale-150 translate-all "
              />
            </div>
            <div className="flex flex-col gap-6 py-10 px-8">
              {/* ============================= */}
              <div className="md:flex md:flex-row flex flex-col items-start md:items-center justify-between gap-6 ">
                <div>
                  <h2 className="font-bold md:text-[20px] text-[18px] ">
                    2 BEDROOM APARTMENT
                  </h2>
                  <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                    <IoLocation />
                    Victoria Island, Lagos.
                  </p>
                </div>
                <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
                  <IoIosArrowForward />
                  See more
                </button>
              </div>
              {/* ===HOUSE Accessory */}
              <div className="md:flex md:flex-row flex flex-col flex-wrap md:items-center justify-start md:gap-5 gap-2">
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023786023]">
                    <CiDumbbell />
                  </span>
                  Gym house
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <GiTheater />
                  </span>
                  Cinema
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <FaLaptop />
                  </span>
                  Co-working space
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Properties List 2*/}
        <div className="md:flex md:flex-row flex flex-col items-center justify-between gap-10 ">
          {/* 3 BEDROOM APARTMENT*/}
          <div className="bg-[#DFD4B7] md:w-2/3 w-full text-black md:mt-0 mt-10 ">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={Apart3}
                alt="Autobiography Building"
                className="duration-1000 hover:scale-100 scale-150 translate-all "
              />
            </div>
            <div className="flex flex-col gap-6 py-10 px-8">
              {/* ============================= */}
              <div className="md:flex md:flex-row flex flex-col items-start md:items-center justify-between gap-6 ">
                <div>
                  <h2 className="font-bold md:text-[20px] text-[18px] ">
                    3 BEDROOM APARTMENT
                  </h2>
                  <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                    <IoLocation />
                    Victoria Island, Lagos.
                  </p>
                </div>
                <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
                  <IoIosArrowForward />
                  See more
                </button>
              </div>
              {/* ===HOUSE Accessory */}
              <div className="md:flex md:flex-row flex flex-col flex-wrap md:items-center justify-start md:gap-5 gap-2">
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023786023]">
                    <CiDumbbell />
                  </span>
                  Gym house
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <GiTheater />
                  </span>
                  Cinema
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <FaLaptop />
                  </span>
                  Co-working space
                </p>
              </div>
            </div>
          </div>
          {/*   3 BEDROOM MAISONETTE */}
          <div className="bg-[#DFD4B7] md:w-2/3  w-full text-black md:mt-0 mt-10 ">
            <div className="overflow-hidden">
              <img
                loading="lazy"
                src={Apart4}
                alt="Autobiography Building"
                className="duration-1000 hover:scale-100 scale-150 translate-all "
              />
            </div>
            <div className="flex flex-col gap-6 py-10 px-8">
              {/* ============================= */}
              <div className="md:flex md:flex-row flex flex-col items-start md:items-center justify-between gap-6 ">
                <div>
                  <h2 className="font-bold md:text-[20px] text-[18px] ">
                    3 BEDROOM MAISONETTE
                  </h2>
                  <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                    <IoLocation />
                    Victoria Island, Lagos.
                  </p>
                </div>
                <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
                  <IoIosArrowForward />
                  See more
                </button>
              </div>
              {/* ===HOUSE Accessory */}
              <div className="md:flex md:flex-row flex flex-col flex-wrap md:items-center justify-start md:gap-5 gap-2">
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023786023]">
                    <CiDumbbell />
                  </span>
                  Gym house
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <GiTheater />
                  </span>
                  Cinema
                </p>
                <p className=" flex items-center justify-start gap-3 text-[15px] md:mt-3 mt-2">
                  <span className="text-[#786023]">
                    <FaLaptop />
                  </span>
                  Co-working space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IkeProp;
