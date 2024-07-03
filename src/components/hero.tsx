"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";

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
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="w-full h-[93vh] overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex flex-row gap-16 items-center justify-center z-10">
                <p className="w-[20rem] h-[20rem] text-wrap text-white text-center flex items-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Image
                  width={1920}
                  height={1080}
                  priority={true}
                  alt="model 1"
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  className="w-[20rem] h-[20rem] object-fill z-10 rounded-md"
                />
              </div>
            </div>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex flex-row gap-16 items-center justify-center z-10">
                <p className="w-[20rem] h-[20rem] text-wrap text-white text-center flex items-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Image
                  width={1920}
                  height={1080}
                  priority={true}
                  alt="model 1"
                  src="https://swiperjs.com/demos/images/nature-2.jpg"
                  className="w-[20rem] h-[20rem] object-fill z-10 rounded-md"
                />
              </div>
            </div>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex flex-row gap-16 items-center justify-center z-10">
                <p className="w-[20rem] h-[20rem] text-wrap text-white text-center flex items-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Image
                  width={1920}
                  height={1080}
                  priority={true}
                  alt="model 1"
                  src="https://swiperjs.com/demos/images/nature-3.jpg"
                  className="w-[20rem] h-[20rem] object-fill z-10 rounded-md"
                />
              </div>
            </div>
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex flex-row gap-16 items-center justify-center z-10">
                <p className="w-[20rem] h-[20rem] text-wrap text-white text-center flex items-center ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Image
                  width={1920}
                  height={1080}
                  priority={true}
                  alt="model 1"
                  src="https://swiperjs.com/demos/images/nature-4.jpg"
                  className="w-[20rem] h-[20rem] object-fill z-10 rounded-md"
                />
              </div>
            </div>
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
