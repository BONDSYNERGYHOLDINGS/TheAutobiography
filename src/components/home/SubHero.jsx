import React from 'react'
import SubImage from "../../assets/subImage.png"
import { IoIosArrowForward } from "react-icons/io";

const SubHero = () => {
  return (
    <section className="md:mt-28 mt-10">
      <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between">
        {/* LEFT SIDE ITEM */}
        <div className="bg-[#DFD4B7] md:w-1/2 w-full text-black md:mt-0 mt-10 ">
          <img src={SubImage} alt="Autobiography Building" />
          <div className="flex flex-col gap-6 py-10 px-8">
            <h2 className="font-bold md:text-[20px] text-[18px] ">
              THE AUTOBIOGRAPHY APARTMENTS
            </h2>
            <p className="text-[16px] ">
              Experience luxury redefined in 'The Autobiography'.
            </p>
            <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
              <IoIosArrowForward />
              View projects
            </button>
          </div>
        </div>
        {/* RIGHT SIDE ITEM */}
        <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-5">
          <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
            A STORY OF <br className="md:block hidden" /> TIMELESS LUXURY
          </h2>
          <p className="md:text-[20px] text-[18px] w-full">
            An architectural marvel that redefines modern living. A symphony of
            elegance crafted for the elites, where sophistication meets personal
            expression.
          </p>
          <button className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
            <IoIosArrowForward />
            View projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default SubHero