import React from 'react'

const ViMap = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between md:mt-20 mt-10 ">
        {/* THE VI PROJECT MAP */}
        <div className="md:w-2/5 w-full md:mt-0 mt-8 px-5">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d253731.94126265607!2d3.3590857275200743!3d6.450287438628273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.4691034!2d3.5914037999999997!4m5!1s0x103bf54f9e299e7d%3A0xa40a94ecf62fdcef!2sdideolu%20estate%20map!3m2!1d6.4311276!2d3.4422355!5e0!3m2!1sen!2sng!4v1731934576772!5m2!1sen!2sng"
              className='md:w-[600px] w-full md:h-[400px] h-full'
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-3 ">
          <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
           DIDEOLU ESTATE
          </h2>
          <p className="md:text-[20px] text-[18px] w-full">
            An architectural marvel that redefines modern living. A symphony of
            elegance crafted for the elites, where sophistication meets personal
            expression.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ViMap;