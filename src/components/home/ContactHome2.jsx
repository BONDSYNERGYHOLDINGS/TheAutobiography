import React, { useState } from 'react'
import { IoIosArrowForward, IoMdCall } from 'react-icons/io';
import { IoLocation } from 'react-icons/io5';
import { RiMailOpenFill } from 'react-icons/ri';
import axios from 'axios';

const ContactHome2 = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:500/api/form/send', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('An error occurred while sending your message.');
    }
  };
  return (
    <section>
      <section className="max-w-7xl mx-auto mt-20">
        <div className="md:flex md:px-0 px-5 items-center justify-between">
          {/* contact form */}
          <div className="border border-white p-8 max-w-lg w-full ">
            <form
             onSubmit={handleSubmit}
            >
              <div className="flex items-center justify-center gap-14">
                {/* <!-- First Name Field --> */}
                <div className="relative">
                  <input
                    name="first_name"
                    type="text"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300"
                    placeholder=" "
                  />
                  <label
                    htmlFor="first_name"
                    className="floating-label text-white"
                  >
                    First name
                  </label>
                </div>
                {/* <!-- Last Name Field --> */}
                <div className="relative">
                  <input
                    name="last_name"
                    type="text"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                    className="input-field block w-full border-b border-gray-500 bg-transparent px-2 py-3 text-white placeholder-transparent focus:outline-none focus:border-gray-300 "
                    placeholder=" "
                  />
                  <label
                    htmlFor="last_name"
                    className="floating-label text-white"
                  >
                    Last name
                  </label>
                </div>
              </div>

              {/* <!-- Email Field --> */}
              <div className="relative">
                <input
                  name="email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
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
                className="text-black bg-[#DFBF6C] flex  items-center justify-center gap-3 px-2 py-4 w-[200px] hover:translate-y-1 duration-500 mt-6"
              >
                Send Message
                <IoIosArrowForward />
              </button>
            </form>
            {responseMessage && <p className='md:mt-4 mt-2'>{ responseMessage}</p>}
          </div>

          {/*  CONTACT DETAILS */}
          <div className="flex flex-col gap-4 items-start justify-center md:mt-0 mt-10">
            <h2 className="font-bold md:text-[40px] text-[20px] ">
              GET IN TOUCH
            </h2>
            <p className="md:text-[18px]  text-[15px] ">
              Ready to call this masterpiece home or make it your next
              <br className="md:block hidden" /> investment? Connect with our
              sales team today!
            </p>
            <span>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <IoMdCall />
                </span>
                <a href="tel:08173768505"> 08141657882</a>
              </p>
              <p className=" flex items-center justify-start gap-3 text-[18px] md:mt-3 mt-2">
                <span className="text-[#DFBF6C]">
                  <RiMailOpenFill />
                </span>
                <a href="mailto: info@lcrng.com" target="_blank">
                  {" "}
                  info@lcrng.com
                </a>
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