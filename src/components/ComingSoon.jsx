import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const ComingSoon = () => {
  return (
    <section className="mt-20  flex items-center justify-center bg_img">
      <div className=" text-white flex flex-col gap-6 py-10 px-8 md:w-5/12 items-center justify-center ">
        <h2 className="font-bold md:text-[50px] text-[25px]">COMING SOON</h2>
        <p className="md:text-[18px] text-[16px] text-center">
          This project is currently under construction. Stay tuned for updates.
        </p>
        <button
          onClick={() => handleBtnClick("/viprop")}
          className="text-black bg-[#DFBF6C] flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 "
        >
          Back to Projects
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

export default ComingSoon