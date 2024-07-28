'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { products } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'

export default function Hero() {
    const { ref } = useSectionInView('Home', 0.5)
    return (
        <section
            id="home"
            ref={ref}
            className="flex h-full w-screen items-center justify-center overflow-hidden"
        >
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                slidesPerView={1}
                effect={'fade'}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    enabled: false,
                }}
                className="w-full"
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    disabledClass: 'disabled_swiper_button',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {products.map((p, i) => (
                    <SwiperSlide
                        key={i}
                        className="bg-transparent! relative !h-[93vh] w-auto lg:!w-screen"
                    >
                        <div className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 transform lg:w-fit">
                            <p className="block text-center text-2xl font-semibold text-white lg:hidden">
                                {p.title}
                            </p>
                            <div className="flex w-full flex-col-reverse items-center justify-center space-x-0 space-y-[2rem] lg:flex-row lg:!space-x-[8rem] lg:space-y-0">
                                <div className="my-4 flex w-full max-w-[15rem] flex-col items-center justify-evenly lg:my-0 lg:h-[22rem] lg:!w-[22rem] lg:max-w-full">
                                    <p className="hidden text-center text-2xl font-semibold text-white lg:block">
                                        {p.title}
                                    </p>
                                    <p className="text-center text-sm text-white lg:text-start">
                                        {p.description}
                                    </p>
                                </div>
                                <Image
                                    width={1920}
                                    height={1080}
                                    priority={true}
                                    alt={p.title}
                                    src={p.pictures[0]}
                                    className="z-10 h-[15rem] w-[15rem] !rounded-sm object-fill lg:!h-[22rem] lg:!w-[22rem]"
                                />
                            </div>
                        </div>
                        <Image
                            width={1920}
                            height={1080}
                            priority={true}
                            alt={p.title}
                            src={p.pictures[0]}
                            className="-z-10 !h-full !w-full scale-110 !object-cover blur-xl"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
