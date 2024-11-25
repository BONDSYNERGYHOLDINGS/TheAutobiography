import React from 'react'
import {  BsHospital } from 'react-icons/bs';
import { FaRegHospital } from 'react-icons/fa';
import { LuSchool } from 'react-icons/lu';
import { RiCommunityLine } from 'react-icons/ri';
import { TbBuildingEstate } from 'react-icons/tb';

const Distance = () => {
  return (
    <section className="bg-[#dfbf6c] h-full w-full ">
      <div className="max-w-7xl mx-auto text-black md:py-14 py-10 md:px-0 px-5">
        <h2 className="md:text-[35px] text-[23px] underline text-black text-center">
          KEY DISTANCE
        </h2>
        {/* DISTANCE CONTENT */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:mt-10 mt-7">
          {/* EMBASSIES*/}
          <div className="flex flex-col gap-2">
            <h3 className="flex gap-3 items-center justify-start  font-bold md:text-[25px]  text-[20px]">
              EMBASSIES <TbBuildingEstate />
            </h3>
            <span className="flex flex-col gap-1">
              <p className="md:text-[18px] text-[16px]">
                Consulate General of France - 0.2km
              </p>
              <p className="md:text-[18px] text-[16px]">
                United State Consulate General - 0.3km
              </p>
              <p className="md:text-[18px] text-[16px]">
                South African Embassy - 0.6km
              </p>
            </span>
          </div>
          {/* HOSPITALITY */}
          <div className="flex flex-col gap-2">
            <h3 className="flex gap-3 items-center justify-start  font-bold md:text-[25px]  text-[20px]">
              HOSPITALITY <BsHospital />
            </h3>
            <span className="flex flex-col gap-1">
              <p className="md:text-[18px] text-[16px]">
                The Wheatbaker Lagos - 2km
              </p>
              <p className="md:text-[18px] text-[16px]">
                Radisson Blu.Ancharges - 3km
              </p>
              <p className="md:text-[18px] text-[16px]">
                International Hotel Lagoos - 4km
              </p>
            </span>
          </div>
          {/* HEALTHCARE*/}
          <div className="flex flex-col gap-2">
            <h3 className="flex gap-3 items-center justify-start   font-bold md:text-[25px]  text-[20px]">
              HEALTHCARE <FaRegHospital />
            </h3>
            <span className="flex flex-col gap-1">
              <p className="md:text-[18px] text-[16px]">
                GOLD CROSS HOSPITAL - 0.6km
              </p>
              <p className="md:text-[18px] text-[16px]">
                ST Nicholas Hospital - 0.6km
              </p>
              <p className="md:text-[18px] text-[16px]">
                Evercare Hospital - 0.1km
              </p>
            </span>
          </div>
          {/* EDUCATION */}
          <div className="flex flex-col gap-2">
            <h3 className=" flex gap-3 items-center justify-start font-bold md:text-[25px]  text-[20px]">
              EDUCATION <LuSchool />
            </h3>
            <span className="flex flex-col gap-1">
              <p className="md:text-[18px] text-[16px]">
                ST Sssiolar School - 1km
              </p>
              <p className="md:text-[18px] text-[16px]">
                British Int’l School - 0.6km
              </p>
              <p className="md:text-[18px] text-[16px]">
                American Int’l School - 0.4km
              </p>
            </span>
          </div>

          {/* RECREATION*/}
          <div className="flex flex-col gap-2">
            <h3 className=" flex gap-3 items-center justify-start font-bold md:text-[25px]  text-[20px]">
              RECREATION <RiCommunityLine />
            </h3>
            <span className="flex flex-col gap-1">
              <p className="md:text-[18px] text-[16px]">
                Ikoyi Club 1938 Golf Course - 0.5km
              </p>
              <p className="md:text-[18px] text-[16px]">
                Lagos Polo Club - 0.2km
              </p>
              <p className="md:text-[18px] text-[16px]">
                Shoprite: The Palms, Shopping Mall - 0.6km
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Distance