import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
// import about css
import "./about.css";
import aboutData from "../../../Data/AboutData";
// import About Data

const HomeAboutCarousel = () => {
  return (
    <div className="about_left_background carousel_gap">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        effect={"fade"}
      >
        <div>
          {aboutData.map(({ img }) => {
            return (
              <SwiperSlide key={img}>
                <div className="flex justify-end items-center p-14">
                  <img
                    className="md:h-96 h-72"
                    src={img}
                    alt="water bottle img"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default HomeAboutCarousel;
