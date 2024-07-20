'use client'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const placeHolderImages = [
    '/images/img_1.jpg',
    '/images/img_2.jpg',
    '/images/img_3.jpg',
    '/images/img_4.jpg',
    '/images/img_5.jpg',
    '/images/img_6.jpg',
    '/images/img_7.jpg',
]

const content = [
    {
        title: 'Title 1',
        description: [
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
        ],
    },
    {
        title: 'Title 2',
        description: [
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
        ],
    },
    {
        title: 'Title 3',
        description: [
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
            'lorum ipsum dolor sit amet consectetur adipisicing elit. Quos, quas.',
        ],
    },
]

export default function SliderPrototype() {
    const [state, setState] = React.useState(0)
    const [contentCnt, setContentCnt] = React.useState(0)
    React.useEffect(() => {
        state === 7 && setState(0)
    }, [state])

    React.useEffect(() => {
        setInterval(() => {
            setContentCnt((prev) => {
                return prev === 2 ? 0 : prev + 1
            })
        }, 7500)
    }, [])

    return (
        <div className="mt-[5rem] flex flex-col items-center justify-center xl:flex-row xl:justify-evenly">
            <div className="flex h-auto w-[35rem] justify-center">
                <div className="w-[100%] -translate-y-[4rem] xl:w-[70%] xl:translate-x-[4rem]">
                    <Fade contentCnt={contentCnt}>
                        <p className="mb-12 mt-8 font-outfit text-[4rem] font-semibold tracking-wider">
                            {content[contentCnt].title}
                        </p>
                        {content[contentCnt].description.map((p, i) => (
                            <p key={i} className="my-3 text-xl">
                                {p}
                            </p>
                        ))}
                    </Fade>
                </div>
            </div>
            <div className="container relative mx-auto max-w-[60rem] overflow-hidden px-4 py-16 before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-50 before:w-16 before:bg-gradient-to-r before:from-slate-100 before:via-slate-100 before:to-transparent after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-50 after:w-16 after:bg-gradient-to-l after:from-slate-100 after:via-slate-100 after:to-transparent dark:before:from-[#2b2b2b] dark:before:via-[#2b2b2b] dark:after:from-[#2b2b2b] dark:after:via-[#2b2b2b]">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 10,
                        depth: 100,
                        modifier: 4,
                        slideShadows: true,
                    }}
                    onSlideChange={(swiper: any) => {
                        setState(Number(swiper.realIndex) + 1)
                        console.log(swiper)
                    }}
                    // coverflowEffect={{
                    //     rotate: 2,
                    //     stretch: 2,
                    //     depth: 10,
                    //     modifier: 100,
                    //     slideShadows: true,
                    // }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {placeHolderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt="slide_image"
                                className={clsx(
                                    '!h-[28rem] w-full rounded-[2rem] object-cover transition-all',
                                    index === Number(state)
                                        ? 'scale-125 !brightness-100'
                                        : 'scale-90 !brightness-50'
                                )}
                                width={1024}
                                height={1024}
                                priority={true}
                            />
                        </SwiperSlide>
                    ))}

                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <svg className="arrow-back-outline"></svg>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <svg className="arrow-forward-outline"></svg>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}

import { CSSTransition, SwitchTransition } from 'react-transition-group'

const Fade = ({
    children,
    contentCnt,
}: {
    children: React.ReactNode
    contentCnt: number
}) => {
    return (
        <SwitchTransition>
            <CSSTransition key={contentCnt} timeout={500} classNames="fade">
                <div>{children}</div>
            </CSSTransition>
        </SwitchTransition>
    )
}
