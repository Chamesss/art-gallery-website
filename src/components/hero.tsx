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
            className="flex h-full w-full items-center justify-center"
        >
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                pagination={{
                    clickable: true,
                    enabled: false,
                }}
                className="mySwiper"
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
                    <SwiperSlide key={i}>
                        <div className="relative h-[93vh] w-full overflow-hidden">
                            <div className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 transform">
                                <div className="z-10 flex w-full flex-row items-center justify-center space-x-[8rem]">
                                    <div className="flex h-[22rem] w-[22rem] flex-col items-center justify-evenly">
                                        <p className="text-center text-2xl font-semibold text-white">
                                            {p.title}
                                        </p>
                                        <p className="text-white">
                                            {p.description}
                                        </p>
                                    </div>
                                    <Image
                                        width={1920}
                                        height={1080}
                                        priority={true}
                                        alt={p.title}
                                        src={p.pictures[0]}
                                        className="z-10 h-[23rem] w-[23rem] rounded-md object-fill"
                                    />
                                </div>
                            </div>
                            <Image
                                width={1920}
                                height={1080}
                                priority={true}
                                alt={p.title}
                                src={p.pictures[0]}
                                className="-z-10 h-full w-full scale-110 object-cover blur-xl"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
