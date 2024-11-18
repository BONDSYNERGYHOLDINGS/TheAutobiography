import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Auto_img11 from '../../assets/auto_img11.jpg';
import Auto_img12 from '../../assets/auto_img12.jpg';
import Auto_img13 from '../../assets/auto_img13.jpg';
import Auto_img10 from '../../assets/HomeLand.png';
import './hero.css';

function Hero() {
  const items = [
    {
      img: Auto_img11,
      author: 'LUXURY HOUSE',
      title: 'DESIGN SLIDER HOUSE',
      topic: 'MANSION',
      description: 'A luxury mansion designed with modern architecture and elegant style.'
    },
    {
      img: Auto_img12,
      author: 'MODERN VILLA',
      title: 'SLEEK MODERN VILLA',
      topic: 'VILLA',
      description: 'This villa boasts sleek lines and contemporary design, perfect for minimalists.'
    },
    {
      img: Auto_img13,
      author: 'BEACH HOUSE',
      title: 'OCEAN VIEW HOUSE',
      topic: 'BEACH HOUSE',
      description: 'An incredible house with stunning views of the ocean, perfect for relaxation.'
    },
    {
      img: Auto_img10,
      author: 'COUNTRY COTTAGE',
      title: 'SLEEK',
      title2: 'MODERN',
      topic: 'MANSION',
      description: 'Experience luxury redefined in The Autobiography.'
    }
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
            <div className="title">{items[currentIndex].title2}</div>
            <div className="topic">{items[currentIndex].topic}</div>
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
