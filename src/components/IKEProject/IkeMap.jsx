import React from 'react'

const IkeMap = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto md:flex md:flex-row flex flex-col-reverse items-center justify-between md:mt-20 mt-10 ">
        {/* THE VI PROJECT MAP */}
        <div className="md:w-2/5 w-full md:mt-0 mt-8 px-5">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253691.89234597184!2d3.0681405092906555!3d6.529790670000139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1731939505674!5m2!1sen!2sng"
              className="md:w-[600px] w-full md:h-[400px] h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="md:w-2/5 md:px-0 px-5 flex items-start flex-col justify-center gap-3 ">
          <h2 className="text-[#dfbf6c] md:text-[50px] text-[30px]">
           IKEJA, LAGOS
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

export default IkeMap;
