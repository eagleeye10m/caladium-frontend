"use client";
import React from "react";
import Cards from "./Cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function CardsSlider(props) {
  return (
    <Swiper
      modules={[Pagination]}
      slidesPerView={3}
      spaceBetween={20}
      pagination={{ clickable: true }}
      //pagination={{type:'fraction'}}
      slidesPerGroup={3}
      grabCursor={true}
      className="!pb-10"
    >
      <SwiperSlide>
        <Cards />
      </SwiperSlide>

      <SwiperSlide>
        <Cards />
      </SwiperSlide>

      <SwiperSlide>
        <Cards />
      </SwiperSlide>

      <SwiperSlide>
        <Cards />
      </SwiperSlide>
    </Swiper>
  );
}

export default CardsSlider;
