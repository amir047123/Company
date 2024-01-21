import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./HomeReview.css";
import FormatQuoteRoundedIcon from "@mui/icons-material/FormatQuoteRounded";

const HomeReviewSlider = () => {
  const [data,setData]=useState([])
  useEffect(() => { 
      fetch(`http://localhost:5000/api/v1/review/getReview`)
        .then((res) => res.json())
        .then((data) => {
          if (data?.data.length) {
            setData(data?.data);
          }
        });
    }, []);
  return (
    <div className="w-10/12 mx-auto justify-center flex">
      <Swiper
        modules={[Pagination]}
        className="mySwiper w-full"
        breakpoints={{
          // when window width is >= 320px
          320: {
            width: 320,
            slidesPerView: 1,
          },

          // when window width is >= 640px
          640: {
            width: 620,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1,
          },
          // when window width is >= 820px
          769: {
            width: 769,
            slidesPerView: 1,
          },
          // when window width is >= 1024px
          1024: {
            width: 1024,
            slidesPerView: 2,
          },
          // when window width is >= 1280px
          1280: {
            width: 1280,
            slidesPerView: 2,
          },
          // when window width is >= 1366px
          1366: {
            width: 1366,
            slidesPerView: 2,
            spaceBetween: -150,
          },
          // when window width is >= 1440px
          1440: {
            width: 1440,
            slidesPerView: 2,
          },
        }}
      >
        {data.map((d) => {
          return (
            <SwiperSlide>
              <div className="flex justify-center flex-col items-center md:w-2/3 w-11/12">
                <div className="slide bg-gradient-to-r from-primary/5 to-secondary/5 hover:bg-gradient-to-r hover:from-primary hover:to-secondary flex items-center gap-3 rounded-xl px-5 pb-10 group ">
                  <div className="md:block hidden">
                    <FormatQuoteRoundedIcon sx={{ fontSize: 48 }} />
                  </div>

                  <p className="text-white group-hover:text-dark text-xs lg:text-sm text-justify px-2 py-5">
                    {d.review.slice(0, 250)} .....
                  </p>
                </div>
                <img
                  className="w-20 h-20 rounded-full border border-primary p-1"
                  src={d.img}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeReviewSlider;
