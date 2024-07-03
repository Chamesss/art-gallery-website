"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { products } from "@/lib/data";

export default function Hero() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        pagination={{
          clickable: true,
          enabled: false,
        }}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "disabled_swiper_button",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[93vh] overflow-hidden relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
                <div className="flex flex-row space-x-[8rem] items-center justify-center z-10 w-full">
                  <div className="w-[22rem] h-[22rem] flex flex-col justify-evenly items-center">
                    <p className="text-white text-center font-semibold text-2xl">
                      {p.title}
                    </p>
                    <p className="text-white">{p.description}</p>
                  </div>
                  <Image
                    width={1920}
                    height={1080}
                    priority={true}
                    alt={p.title}
                    src={p.pictures[0]}
                    className="w-[23rem] h-[23rem] object-fill z-10 rounded-md"
                  />
                </div>
              </div>
              <Image
                width={1920}
                height={1080}
                priority={true}
                alt={p.title}
                src={p.pictures[0]}
                className="w-full scale-110 h-full object-cover blur-xl -z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
