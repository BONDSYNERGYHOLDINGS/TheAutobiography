import React from 'react'
import LoaderImage from '../../assets/loader.svg'
import "./Loader.css"

const Loader = () => {
  return (
    <section className="h-[100vh]">
      <div className=" flex items-center justify-center h-full flex-col gap-3">
        <img src={LoaderImage} alt="Autobiography Logo" className="w-[90px] loader" />
        <h2 className="text-[#DFD4B7]">THE AUTOBIOGRAPHY</h2>
      </div>
    </section>
  );
}

export default Loader