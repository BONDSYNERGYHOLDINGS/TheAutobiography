import React from 'react'
import ContactImage from "../../assets/ContactImage.png"
import { IoIosArrowForward } from "react-icons/io";


const ContactHome = () => {
  return (
    <section className="md:mt-28 mt-10">
      <div className="max-w-7xl mx-auto md:relative">
        <div className="flex items-center justify-center flex-col">
          <img src={ContactImage} alt="Image of Autobiography Property" />
        </div>
        <div className=" bg-[#DFD4B7] text-black flex flex-col gap-6 py-10 px-8 md:w-5/12 md:absolute bottom-0">
          <h2 className="font-bold md:text-[20px] text-[18px] ">CONTACT US</h2>
          <p className="text-[16px] ">
            An architectural marvel that redefines modern living. A symphony of
            elegance crafted for the elites
          </p>
          <button className="text-white bg-black flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
            <IoIosArrowForward />
            Contact us
          </button>
        </div>
      </div>
      {/* PARALLEX IMAGE */}
      <section className="mt-20 h-[500px] flex items-center justify-center  parallex">
        <div className=" bg-black text-white flex flex-col gap-6 py-10 px-8 md:w-5/12 items-center justify-center ">
          <h2 className="font-bold md:text-[20px] text-[18px]">CONTACT US</h2>
          <p className="text-[16px] text-center">
            An architectural marvel that redefines modern living. A symphony of
            elegance crafted for the elites
          </p>
          <button className="text-black bg-[#DFBF6C] flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 ">
            <IoIosArrowForward />
            Contact us
          </button>
        </div>
      </section>
    </section>
  );
}

export default ContactHome