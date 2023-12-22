import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// Import Swiper styles
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper";
import ServicesData from "../../../Data/ServicesData";
import "./Services.css";

const HomeServiceCarousel = () => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      freeMode={true}
      modules={[Pagination]}
      className="mySwiper"
      breakpoints={{
        // when window width is >= 320px
        320: {
          width: 320,
          spaceBetween: 10,          
          slidesPerView: 1,
        },
        // when window width is >= 640px
        640: {
          width: 620,
          spaceBetween: -10,          
          slidesPerView: 2,
        },
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2,
        },
        // when window width is >= 820px
        769: {
          width: 769,
          spaceBetween: -140,          
          slidesPerView: 2,
        },
        // when window width is >= 1024px
        1024: {
          width: 1024,
          spaceBetween: -400,          
          slidesPerView: 2,
        },
        // when window width is >= 1280px
        1280: {
          width: 1280,
          spaceBetween: -340,          
          slidesPerView: 3,
        },
        // when window width is >= 1366px
        1366: {
          width: 1366,
          spaceBetween: -400,          
          slidesPerView: 3,
        },
        // when window width is >= 1440px
        1440: {
          width: 1440,
          spaceBetween: -100,          
          slidesPerView: 4,
        },
      }}
    >
      {ServicesData.map((d, index) => {
        const { img, name, skillIcon } = d;
        return (
          <SwiperSlide key={index} className="p-11">
            <div className="card_border_gradient border-[2px] border-primary/5 rounded-[1rem] card">
              <div className="bg-primary/5 p-10 rounded-2xl">
                <img src={img} alt="slider img import" />
                <div className="flex items-center gap-5 m-1 pt-5">
                  <img
                    className="w-10 h-[2px]0"
                    src={skillIcon}
                    alt="slider img"
                  />
                  <h1 className="font-normal">{name}</h1>
                </div>
              </div>

              <div className="card-body">
                {d?.technology?.map((t) => {
                  const {
                    html,
                    css,
                    java,
                    tailwind,
                    react,
                    next,
                    type,
                    node,
                    php,
                    laravel,
                    express,
                    mongo,
                    sql,
                    firebase,
                    py,
                    fl,
                    js,
                    sf,
                    rn,
                    kt,
                    lc,
                    python,
                    ja,
                    javaS,
                    c,
                    cp,
                    bl,
                    s,
                    ph,
                    ai,
                    ad,
                    ca,
                    sk,
                    af,
                    gp,
                    sm,
                    pm,
                    se,
                    em,
                    re,
                    tr,
                    fc,
                  } = t;
                  return (
                    <div key={t.id} className="text-center flex justify-center">
                      <ul>
                        <div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {html || node || py || python || ph || sm}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {css || php || fl || ja || ai || pm}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {tailwind || express || js || javaS || ad || se}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {java || laravel || sf || c || ca || em}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {react || mongo || rn || cp || sk || re}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {next || sql || kt || bl || af || tr}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                        <div>
                          <div className="flex items-center gap-5 m-1">
                            <p className="text-white font-thin capitalize py-1">
                              {type || firebase || lc || s || gp || fc}
                            </p>
                          </div>
                          <p className="w-[220px] m-1 h-[1px] bg-primary"></p>
                        </div>
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeServiceCarousel;
