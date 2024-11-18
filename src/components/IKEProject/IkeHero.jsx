import React from "react";
import { IoLocation } from "react-icons/io5";
import VIimage from "../../assets/VIhero.png";
import { IoIosArrowForward, IoMdCheckmark } from "react-icons/io";
import PropImage from "../../assets/ViSub.png";
import { CiDumbbell } from "react-icons/ci";
import { MdMovieFilter } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

const IkeHero = () => {
    return (
        <section>
            {/*  HERO SECTION */}
            <div className=" h-full flex items-center justify-center  md:mt-0 mt-20">
                <img className='w-full h-full object-cover' src={VIimage} alt="Autobiography Estate Image" />
                <div className="absolute">
                    <h2 className="md:text-[45px] text-[20px] text-center">
                        IKEJA PROJECT
                    </h2>
                    <p className=" flex items-center justify-center gap-3 md:text-[18px] text-[12px] md:mt-3 mt-2">
                        <span className="text-[#dfbf6c] ">
                            <IoLocation />
                        </span>
                        Dideolu Estate VI Extension. 18 Senrolu St, Lagos
                    </p>
                </div>
            </div>
            {/* PROPERTIES DETAILS */}
            <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between md:mt-20 mt-5">
                {/* LEFT ITEM */}
                <div className="md:w-2/5 w-full md:px-0 px-5 md:mt-0 mt-10">
                    <img src={PropImage} alt="Autobiography Logo Map" />
                </div>
                {/* RIGHT  ITEM */}
                <div className="md:w-1/2 w-full md:px-0 px-5 md:mt-10 mt-10 flex items-start flex-col justify-center md:gap-8 gap-5">
                    <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
                        PROPERTY DETAILS
                    </h2>
                    <p className="md:text-[20px] text-[18px] w-full">
                        An architectural marvel that redefines modern living. A
                        <br className="md:block hidden" /> symphony of elegance crafted for
                        the elites, where
                        <br className="md:block hidden" /> sophistication meets personal
                        expression.
                    </p>
                    <div className="items-center flex justify-center gap-20">
                        {/* features List left */}
                        <div className="flex items-center justify-start gap-4 flex-col">
                            <div className="flex gap-3 items-center justify-center">
                                <span className="text-[#dfbf6c]">
                                    <CiDumbbell />
                                </span>
                                <p> Gym House</p>
                            </div>
                            <div className="flex gap-3 items-center justify-center">
                                <span className="text-[#dfbf6c]">
                                    <MdMovieFilter />
                                </span>
                                <p>Cinema</p>
                            </div>
                        </div>
                        {/* features List right */}
                        <div className="flex items-center justify-start gap-4 flex-col">
                            <div className="flex gap-3 items-center justify-center">
                                <span className="text-[#dfbf6c]">
                                    <FaLaptop />
                                </span>
                                <p>Co-working space</p>
                            </div>
                            <div className="flex gap-3 items-center justify-start">
                                <span className="text-[#dfbf6c]">
                                    <LiaSwimmingPoolSolid />
                                </span>
                                <p>Rooftop Pool</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="flex gap-5 items-end justify-center md:text-[30px] text-[20px]">
                            PRICE{" "}
                            <span className="text-[#dfbf6c] md:text-[20px]">XXXXXX</span>
                        </h2>
                    </div>
                    <button className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
                        <IoIosArrowForward />
                        Make an enquiry
                    </button>
                </div>
            </div>
        </section>
    );
}
export default IkeHero;
