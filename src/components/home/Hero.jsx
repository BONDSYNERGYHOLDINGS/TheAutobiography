import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Auto_img11 from '../../assets/auto_img11.jpg';
import Auto_img12 from '../../assets/auto_img12.jpg';
import Auto_img13 from '../../assets/auto_img13.jpg';
import Auto_img10 from '../../assets/HomeLand.png';
import './Hero.css';

function Hero() {
  const items = [
    {
      img: Auto_img11,
      author: "A LUXURIOUS ESCAPE ABOVE THE CITY",
      title: "YOUR PRIVATE PARADISE",
      topic: "3-BEDROOM ",
      topic2: "MAISONETTE + ROOFTOP POOL & LOUNGE + 2 BQs",
      description:
        "Discover luxury living reimagined in this stunning maisonette. With a private rooftop pool, relaxing lounge, and two BQs, this space offers breathtaking views, exclusivity, and unmatched elegance.",
    },
    {
      img: Auto_img12,
      author: "PERFECTLY CRAFTED FOR YOU",
      title: "INTIMATE LUXURY",
      topic: "1-BEDROOM",
      topic2: "APARTMENT",
      description:
        "A meticulously designed 1-bedroom apartment that blends modern simplicity with urban sophistication. Ideal for those who seek comfort and elegance in every corner.",
    },
    {
      img: Auto_img13,
      author: "SPACE REDEFINED",
      title: "ELEVATED FAMILY LIVING",
      topic: "2-BEDROOM ",
      topic2: "APARTMENT + BQ",
      description:
        "Enjoy spacious living with this thoughtfully designed 2-bedroom apartment complete with a private BQ. Every detail reflects refined taste, offering the perfect space for small families and professionals.",
    },
    {
      img: Auto_img10,
      author: "DESIGNED TO IMPRESS",
      title: "MODERN OPULENCE",
      topic: "3-BEDROOM ",
      topic2: " APARTMENT + BQ",
      description:
        "Step into luxury with this 3-bedroom apartment, where style meets function. Featuring elegant interiors and a dedicated BQ, it’s tailored for upscale living and ultimate comfort.",
    },
  ];

  const thumbnails = [Auto_img11, Auto_img12, Auto_img13, Auto_img10];
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide
  const timeAutoNext = 7000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length); // Go to next slide
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length); // Go to previous slide
  };

  // Automatically go to the next slide after the set interval
  useEffect(() => {
    const autoRun = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoRun);
  }, [currentIndex]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index); // Show the slide corresponding to the clicked thumbnail
  };

  return (
    <section className="carousel">
      {/* LIST ITEM */}
      <div className="list">
        {/* Show the current slide */}
        <div className="item" key={currentIndex}>
          <img
            src={items[currentIndex].img}
            alt={`Slide ${currentIndex + 1}`}
            loading="lazy"
          />
          <div className="content max-w-[80em] mx-auto md:px-0  px-5">
            <div className="author">{items[currentIndex].author}</div>
            <div className="title">{items[currentIndex].title}</div>
            <div className="topic">{items[currentIndex].topic}</div>
            <div className="topic">{items[currentIndex].topic2}</div>
            <div className="des">{items[currentIndex].description}</div>
          </div>
        </div>
      </div>

      {/* Thumbnail */}
      {/* <div className="thumbnail md:block hidden text-[#ffffff] drop-shadow-md">
        {thumbnails.map((thumb, index) => (
          <div
            className="item"
            key={index}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={thumb} alt={`Thumbnail ${index + 1}`} /> */}
            {/* <div className="content shadow-md">
              <div className="title ">House Slider</div>
              <div className="des">Description</div>
            </div> */}
          {/* </div>
        ))}
      </div> */}

      {/* ARROW NAVIGATION */}
      <div className="arrow">
        <button onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
}

export default Hero;
