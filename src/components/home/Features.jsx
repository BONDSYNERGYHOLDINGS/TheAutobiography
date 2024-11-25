import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import LogoMap from "../../assets/logomap.png"
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/viprop");
    window.scrollTo({top:0, behavior: "smooth"})
  }
  return (
    <section className="md:mt-28 mt-10 ">
      <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between">
        {/* LEFT ITEM */}
        <div className="md:w-1/2 md:px-0 px-5 md:mt-10 mt-10 flex items-start flex-col justify-center gap-8">
          <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
            CRAFTED FOR THE ELITES
          </h2>
          <p className="md:text-[20px] text-[18px] w-full">
            The Autobiography is a lifestyle destination that offers a wide{" "}
            <br className="md:block hidden" />
            range of facilities to enhance the experience of the residents.
          </p>
          <div className="items-center flex justify-center gap-20">
            {/* features List left */}
            <div className="flex items-start justify-center gap-4 flex-col">
              <div className="flex gap-3 items-center justify-start">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>Rooftop Pool</p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>Co-Working Space</p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>Fully-Fitted Kitchen</p>
              </div>
            </div>
            {/* features List right */}
            <div className="flex items-start justify-center gap-4 flex-col">
              <div className="flex gap-3 items-center justify-center">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>Interactive Lounge</p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>High Speed Elevator</p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <span className="text-[#dfbf6c]">
                  <IoMdCheckmark />
                </span>
                <p>24/7 Concierge service</p>
              </div>
            </div>
          </div>
          <button onClick={handleBtnClick} className="text-black bg-[#dfbf6c]  flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 hover:bg-[#f0d185] ">
            <IoIosArrowForward />
          Discover more
          </button>
        </div>
        {/* RIGHT ITEM */}
        <div className="md:w-2/5 w-4/5">
          <img src={LogoMap} alt="Autobiography Logo Map" />
        </div>
      </div>
    </section>
  );
}

export default Features