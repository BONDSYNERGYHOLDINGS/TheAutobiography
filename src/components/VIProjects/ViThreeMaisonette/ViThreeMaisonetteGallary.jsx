import React, { useState } from "react";
import img1 from "../../../assets/3maisonette1.jpg";
import img2 from "../../../assets/3maisonette2.jpg";
import img3 from "../../../assets/3maisonette3.jpg";
import img4 from "../../../assets/3maisonette4.jpg";
import img5 from "../../../assets/3maisonette5.jpg";


const ViThreeBedMaisonetteGallary = () => {
  const images = [img1, img2, img3, img4, img5]

  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <section>
      <div className=" md:flex md:h-screen gap-3 ">
        {/* Left Side: Scrollable Thumbnail List */}
        <div className="md:w-1/5 md:h-full h-[80px] md:overflow-y-auto md:block flex space-x-1 md:overflow-hidden overflow-x-auto md:space-y-3 md:mt-0 mb-3">
          {images.map((image, index) => (
            <img
              loading="lazy"
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`cursor-pointer inline-block  ${
                currentImage === image ? "border-2 border-[#dfbf6c]" : " "
              }`}
              onClick={() => setCurrentImage(image)}
            />
          ))}
        </div>
        {/* Right Side: Main Display Image */}
        <div className=" flex-1 flex justify-center items-center">
          <img
            loading="lazy"
            src={currentImage}
            alt="Seleted"
            className="w-full max-h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default ViThreeBedMaisonetteGallary;
