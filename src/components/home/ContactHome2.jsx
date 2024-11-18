import React from 'react'
import { IoIosArrowForward, IoMdCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import { RiMailOpenFill } from 'react-icons/ri';

const ContactHome2 = () => {
  return (
    <section>
      <section className="max-w-7xl mx-auto mt-20">
        <div className="md:flex md:px-0 px-5 items-center justify-between">
          {/* contact form */}
          <div className="border border-white p-8 max-w-lg w-full ">
            <form
              method="post"
              action="https://script.google.com/macros/s/AKfycbwGOxjQtGRSQVGb1twL-Tza2Wo_LfjRdLCROa69v7aLKabsSX3grz8wGy_Yj7TuxPjJOg/exec"
              
            >
              <div className="flex items-center justify-center gap-14">
                {/* <!-- First Name Field --> */}
                <div className="relative">
                  <input
                    name="First-Name"
                    type="text"
                    id="first_name"
                    className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300"
                    placeholder=" "
                  />
                  <label htmlFor="first_name" className="floating-label text-white">
                    First name
                  </label>
                </div>
                {/* <!-- Last Name Field --> */}
                <div className="relative">
                  <input
                    name="Last-Name"
                    type="text"
                    id="last_name"
                    className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300 "
                    placeholder=" "
                  />
                  <label htmlFor="last_name" className="floating-label text-white">
                    Last name
                  </label>
                </div>
              </div>

              {/* <!-- Email Field --> */}
              <div className="relative">
                <input
                  name="Email"
                  type="email"
                  id="email"
                  className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300 mt-6"
                  placeholder=" "
                />
                <label htmlFor="email" className="floating-label text-white">
                  Email
                </label>
              </div>

              {/* <!-- Message Field --> */}
              <div className="relative">
                <textarea
                  name="Message"
                  id="message"
                  rows="6"
                  className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300 mt-6"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="floating-label text-white">
                  Message
                </label>
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                className="text-white bg-[#DFBF6C] flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 mt-6"
              >
                Send Message
                <IoIosArrowForward />
              </button>
            </form>
          </div>

          {/*  CONTACT DETAILS */}
          <div className="flex flex-col gap-4 items-start justify-center md:mt-0 mt-10">
            <h2 className="font-bold md:text-[40px] text-[20px] ">
              GET IN TOUCH
            </h2>
            <p className="text-[18px]  ">
              An architectural marvel that redefines modern living.{" "}
              <br className="md:block hidden" />A symphony of elegance crafted
              for the elites
            </p>
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
      </section>
    </section>
  );
}

export default ContactHome2;