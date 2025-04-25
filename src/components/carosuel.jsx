import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../data/content";

const crasdata = Data.assetToken.carouselData;


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CardCarousel = () => {
    const data = Data.carouselData;

  return (
    <>
    <Carousel
  responsive={responsive}
  infinite
  autoPlay={false}
  keyBoardControl
  containerClass="carousel-container"
  itemClass="px-2"
  arrows={false}               // 🔥 Hide arrows
  showDots={true}              // ✅ Show dots
  renderDotsOutside={false}    // Optional: Set to true if you want dots outside
>
  {crasdata.map((item, index) => (
    <div key={index} className="card carosuel-card">
      <div className="card-body text-center p-2">
        <h5 className="card-title mt-5 text-white">{item.cbTitle}</h5>
        <p className="card-text mb-5">Content for {item.cbtext}</p>
      </div>
    </div>
  ))}
</Carousel>


    </>
  );
};

export default CardCarousel;
