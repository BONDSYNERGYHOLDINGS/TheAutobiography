import React from 'react'
import LOGO from "../../assets/logoa.png"
import { IoMdCall } from 'react-icons/io';
import { RiMailOpenFill } from 'react-icons/ri';
import { IoLocation } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className=" mt-20 border-t-2 border-white">
      <footer className="max-w-7xl mx-auto py-20 md:px-0 px-5">
        {/* Logo description */}
        <div className="md:flex items-start justify-center gap-5 ">
          {/* 1st */}
          <div className="md:w-2/5 flex flex-col gap-3 items-start justify-center">
            <span>
              <img src={LOGO} alt="Autobiography Logo" />
            </span>
            <p className="text-[18px]  ">
              An architectural marvel that redefines modern living. A symphony
              of elegance crafted for the elites
            </p>
          </div>
          {/* 2nd */}
          <div className=" md:w-1/4 flex flex-col gap-4 items-start justify-center md:mt-0 mt-10">
            <h2 className="font-bold md:text-[20px] text-[17px] ">
              GET IN TOUCH
            </h2>

            <span>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <IoMdCall />
                </span>
                08141657882
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <RiMailOpenFill />
                </span>
                info@lcrng.com
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <IoLocation />
                </span>
                Landmark HQ
              </p>
            </span>
          </div>
          {/* 3rd */}
          <div className="md:w-1/4  flex flex-col gap-4 items-start justify-center md:mt-0 mt-10">
            <h2 className="font-bold md:text-[20px] text-[17px] ">
              QUICKLINKS
            </h2>

            <span>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <Link to="/">Home</Link>
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <Link to="/about">About</Link>
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <Link to="/">FAQ'S</Link>
              </p>
            </span>
          </div>
          {/* 4th */}
          <div className=" md:w-1/4 flex flex-col gap-4 items-start justify-center md:mt-0 mt-10">
            <h2 className="font-bold md:text-[20px] text-[17px] ">LOCATION</h2>

            <span>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <IoMdCall />
                </span>
                08141657882
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <RiMailOpenFill />
                </span>
                info@lcrng.com
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <IoLocation />
                </span>
                Landmark HQ
              </p>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer