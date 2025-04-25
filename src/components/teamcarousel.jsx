import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "../data/content";



const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4
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
  const TeamMember = Data.Teammember.TeamDetails;

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
  {TeamMember?.map((Teamdata, index) => (
    <div key={Teamdata.id || index} className="card carosuel-card membercarosuel">
      <div className="card-body">
        <div>
        <img src={Teamdata.teamImg}/>
        <h2 className="card-title mt-5 text-white">{Teamdata.memberName}</h2>
        <h5 className="card-text mb-5">Content for {Teamdata.memberRole}</h5>
        <p>{Teamdata.memberDescription}</p>
      </div>
      </div>
    </div>
  ))}
</Carousel>


    </>
  );
};

export default CardCarousel;
