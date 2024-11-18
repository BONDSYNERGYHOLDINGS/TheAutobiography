import React from 'react'
import ContactHome2 from '../home/ContactHome2';
import VIimage from "../../assets/VIhero.png";
import { IoLocation } from 'react-icons/io5';

const ContactHero = () => {
    return (
        <section>
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
            <div>
                <h2>OUR HEAD OFFICE</h2>
            </div>
      </section>
    );
}

export default ContactHero