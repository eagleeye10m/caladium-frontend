"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Cards from "./Cards";

function Discover(props) {
  return (
    <main className="bg-blue-50">
      <div className="container_self mx-auto">
        <span className="text-2xl font-extrabold text-black">
          محله ها را کشف کنید
        </span>
        <Swiper
          modules={[Pagination]}
          slidesPerView={6}
          spaceBetween={20}
          pagination={{ clickable: true }}
          slidesPerGroup={6}
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
      </div>
    </main>
  );
}

export default Discover;
