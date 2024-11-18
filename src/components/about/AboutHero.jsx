import React from 'react'
import AboutImage from "../../assets/aboutHero.png";
import { IoIosArrowForward } from 'react-icons/io';
import LogoMapAbout from "../../assets/logoAboutImage.png"
import WhyUs from "../../assets/whyUs.png"
import FutureBuilding from "../../assets/futureBuilding.png"

const AboutHero = () => {
  return (
    <section>
      {/* ABOUT HERO SECTION */}
      <div className="md:mt-0 mt-20">
        <img
          loading="lazy"
          src={AboutImage}
          alt="Image of Autobiography property"
        />
      </div>
      {/* About SubHero Page */}
      <section className="md:mt-28 mt-10">
        <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col items-center justify-between ">
          <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-5 ">
            <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
              ABOUT THE <br className="md:block hidden" /> AUTOBIOGRAPHY
            </h2>
            <p className="md:text-[20px] text-[18px] w-full">
              An architectural marvel that redefines modern living. A symphony
              of elegance crafted for the elites, where sophistication meets
              personal expression.
            </p>
            <button className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
              <IoIosArrowForward />
              Get Started
            </button>
          </div>

          {/* THE IMAGE FILE */}
          <div className="md:w-2/5 w-4/5 md:mt-0 mt-14">
            <img
              loading="lazy"
              src={LogoMapAbout}
              alt="Autobiography Logo Map"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="md:mt-28 mt-10">
        <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between">
          {/* LEFT SIDE ITEM */}
          <div className=" md:w-2/5 w-4/5  md:mt-0 mt-14">
            <img loading="lazy" src={WhyUs} alt="Autobiography Building" />
          </div>
          {/* RIGHT SIDE ITEM */}
          <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-5">
            <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
              WHY CHOOSE US?
            </h2>
            <p className="md:text-[20px] text-[18px] w-full">
              An architectural marvel that redefines modern living. A symphony
              of elegance crafted for the elites, where sophistication meets
              personal expression.
            </p>
            <button className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
              <IoIosArrowForward />
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/*WE BUILD SECTION */}
      <section className="md:mt-28 mt-10">
        <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col items-center justify-between ">
          <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-5 ">
            <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
              WE ARE BUILDING
              <br className="md:block hidden" /> THE FUTURE
            </h2>
            <p className="md:text-[20px] text-[18px] w-full">
              An architectural marvel that redefines modern living. A symphony
              of elegance crafted for the elites, where sophistication meets
              personal expression.
            </p>
            <button className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
              <IoIosArrowForward />
              DISCOVER MORE
            </button>
          </div>

          {/* THE IMAGE FILE */}
          <div className="md:w-2/5 w-4/5 md:mt-0 mt-14">
            <img
              loading="lazy"
              src={FutureBuilding}
              alt="Autobiography Logo Map"
            />
          </div>
        </div>
      </section>

      {/* PARALLEX IMAGE */}
      <section className="mt-20 h-[500px] flex items-center justify-center  parallexAbout">
        <div className=" bg-black text-white flex flex-col gap-6 py-10 px-8 md:w-5/12 items-center justify-center ">
          <h2 className="font-bold md:text-[20px] text-[18px]">LUXURY AWAITS YOU</h2>
          <p className="text-[16px] text-center">
            An architectural marvel that redefines modern living. A symphony of
            elegance crafted for the elites
          </p>
          <button className="text-black bg-[#DFBF6C] flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
            <IoIosArrowForward />
            Secure a property
          </button>
        </div>
      </section>
    </section>
  );
}

export default AboutHero;