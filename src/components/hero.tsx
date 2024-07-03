"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "disabled_swiper_button",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[93vh] overflow-hidden relative">
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-[20rem] h-[20rem] object-fill absolute transform top-1/2 -translate-y-1/2 right-[20%] z-10 rounded-md"
            />
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
              className="w-full scale-110 h-full object-cover blur-xl -z-10"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[93vh] overflow-hidden relative">
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-[20rem] h-[20rem] object-fill absolute transform top-1/2 -translate-y-1/2 right-[20%] z-10 rounded-md"
            />
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
              className="w-full scale-110 h-full object-cover blur-xl -z-10"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[93vh] overflow-hidden relative">
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-[20rem] h-[20rem] object-fill absolute transform top-1/2 -translate-y-1/2 right-[20%] z-10 rounded-md"
            />
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
              className="w-full scale-110 h-full object-cover blur-xl -z-10"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[93vh] overflow-hidden relative">
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-[20rem] h-[20rem] object-fill absolute transform top-1/2 -translate-y-1/2 right-[20%] z-10 rounded-md"
            />
            <Image
              width={1920}
              height={1080}
              priority={true}
              alt="model 1"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
              className="w-full scale-110 h-full object-cover blur-xl -z-10"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
