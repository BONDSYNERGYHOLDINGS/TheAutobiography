import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import './Hero.css';

function Hero() {
  const items = [
    {
      author: "A LUXURIOUS ESCAPE ABOVE THE CITY",
      title: "YOUR PRIVATE PARADISE",
      topic: "3-BEDROOM",
      topic2: "MAISONETTE + ROOFTOP POOL & LOUNGE + 2 BQs",
      description:
        "Discover luxury living reimagined in this stunning maisonette. With a private rooftop pool, relaxing lounge, and two BQs, this space offers breathtaking views, exclusivity, and unmatched elegance.",
    },
    {
      author: "PERFECTLY CRAFTED FOR YOU",
      title: "INTIMATE LUXURY",
      topic: "1-BEDROOM",
      topic2: "APARTMENT",
      description:
        "A meticulously designed 1-bedroom apartment that blends modern simplicity with urban sophistication. Ideal for those who seek comfort and elegance in every corner.",
    },
    {
      author: "SPACE REDEFINED",
      title: "ELEVATED FAMILY LIVING",
      topic: "2-BEDROOM",
      topic2: "APARTMENT + BQ",
      description:
        "Enjoy spacious living with this thoughtfully designed 2-bedroom apartment complete with a private BQ. Every detail reflects refined taste, offering the perfect space for small families and professionals.",
    },
    {
      author: "DESIGNED TO IMPRESS",
      title: "MODERN OPULENCE",
      topic: "3-BEDROOM",
      topic2: "APARTMENT + BQ",
      description:
        "Step into luxury with this 3-bedroom apartment, where style meets function. Featuring elegant interiors and a dedicated BQ, it's tailored for upscale living and ultimate comfort.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeAutoNext = 7000;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const autoRun = setTimeout(nextSlide, timeAutoNext);
    return () => clearTimeout(autoRun);
  }, [currentIndex]);

  return (
    <section className="carousel">
      {/* VIDEO BACKGROUND — plays once, loops, muted (required for autoplay) */}
      <video
        className="carousel-video-bg"
        src="https://res.cloudinary.com/dqzsdgugd/video/upload/v1774538740/AUTOBIO_iuxbuj.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay so text stays readable */}
      <div className="carousel-overlay" />

      {/* SLIDE CONTENT */}
      <div className="list">
        <div className="item" key={currentIndex}>
          <div className="content max-w-[80em] mx-auto md:px-0 px-5">
            <div className="author">{items[currentIndex].author}</div>
            <div className="title">{items[currentIndex].title}</div>
            <div className="topic">{items[currentIndex].topic}</div>
            <div className="topic">{items[currentIndex].topic2}</div>
            <div className="des">{items[currentIndex].description}</div>
          </div>
        </div>
      </div>

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