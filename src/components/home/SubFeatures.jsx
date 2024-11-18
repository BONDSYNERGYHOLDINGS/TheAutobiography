import React from 'react'
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import ContractLogo from "../../assets/contractLogo.png"


const SubFeatures = () => {
  return (
    <section className="md:mt-28 mt-10">
      <div
        className="max-w-7xl mx-auto  flex items-center flex-col  justify-center
       md:gap-14 gap-10"
      >
        {/* FEATURES AND FACILITIES */}
        <div
          className="flex items-center flex-col  justify-center
       md:gap-14 gap-10"
        >
          <div className="md:text-center text-start flex items-center justify-center gap-3 flex-col md:w-3/5 ">
            <h2 className=" text-[#dfbf6c] md:text-[50px] text-[30px]">
              FEATURES & FACILITIES
            </h2>
            <p className="md:text-[20px] text-[16px] w-full md:px-0 px-3">
              An architectural marvel that redefines modern living. A symphony
              of elegance crafted for the elites, where sophistication meets
              personal expression.
            </p>
          </div>
          {/* LIST OF FEATURES */}
          <div>
            <div className="grid md:grid-cols-6 grid-cols-3 gap-8 p-8">
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center md:text-[15px] text-[10px]">
                  Rooftop
                  <br className="md:block" />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-3 gap-8 p-8">
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
              {/* icon 1 */}
              <div className="flex flex-col gap-3 items-center justify-center border-[#ffffff42] drop-shadow-md border-2 p-5">
                <span className="text-[#dfbf6c] text-[60px]">
                  <LiaSwimmingPoolSolid />
                </span>
                <p className="text-center">
                  Rooftop
                  <br />
                  Swimming pool
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT CONTRACTORS */}
        <div className="flex items-center justify-center md:gap-10 flex-col gap-6">
          <h2 className=" text-[#dfbf6c] md:text-[50px] text-[25px] text-center">
            PROJECT CONTRACTORS
          </h2>
          <div className='md:w-3/5 w-1/2'>
            <img src={ContractLogo} alt="Logos' of Contractors" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubFeatures