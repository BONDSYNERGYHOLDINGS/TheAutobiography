import React from 'react'
import ContactHome2 from '../home/ContactHome2';
import VIimage from "../../assets/VIhero.png";
import { IoLocation } from 'react-icons/io5';

const ContactHero = () => {
    return (
      <section>
        <div>
          {/* CONTACT HERO */}
          <div className=" h-full flex items-center justify-center  md:mt-0 mt-20">
            <img
              className="w-full h-full object-cover"
              src={VIimage}
              alt="Autobiography Estate Image"
            />
            <div className="absolute">
              <h2 className="md:text-[45px] text-[20px] text-center">
                CONTACT US
              </h2>
              <p className=" flex items-center justify-center gap-3 md:text-[18px] text-[12px] md:mt-3 mt-2">
                <span className="text-[#dfbf6c] ">
                  <IoLocation />
                </span>
                Dideolu Estate VI Extension. 18 Senrolu St, Lagos
              </p>
            </div>
          </div>
          {/* CAONTACT FORM*/}
          <ContactHome2 />

          {/* OFFICE ADDRESS */}
          <div className="md:mt-20 mt-10 md:px-0 px-5">
            <h2 className=" text-[#dfbf6c] md:text-[50px] text-[30px] max-w-7xl mx-auto">
              OUR HEAD OFFICE
            </h2>
            <div className="md:mt-10 mt-5 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.881649289007!2d3.4013447557558285!3d6.428055038022584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1731949317171!5m2!1sen!2sng"
                className="w-full md:h-[600px] h-[300px]"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ContactHero