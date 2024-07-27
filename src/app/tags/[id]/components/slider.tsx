'use client'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PurchaseForm from './purchase-form'

const placeHolderImages = [
    '/images/img_1.jpg',
    '/images/img_2.jpg',
    '/images/img_3.jpg',
    '/images/img_4.jpg',
    '/images/img_5.jpg',
    '/images/img_6.jpg',
    '/images/img_7.jpg',
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
        <div className="relative -mb-[4rem] -mt-[4rem] h-[28rem] w-[35rem] max-w-[60rem] !scale-50 overflow-hidden px-4 xs:!scale-[0.60] sm:!scale-[0.75] lg:mb-0 lg:mt-0 lg:!scale-100 lg:py-4">
            <div className="absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 transform">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    loop={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 2,
                        stretch: 0,
                        depth: 10,
                        modifier: 100,
                        slideShadows: true,
                    }}
                    initialSlide={4}
                    onRealIndexChange={(swiper: any) => {
                        setState(Number(swiper.realIndex) + 1)
                    }}
                    // breakpoints={{
                    //     950: {
                    //         coverflowEffect: {
                    //             rotate: 0,
                    //             stretch: 10,
                    //             depth: 100,
                    //             modifier: 4,
                    //             slideShadows: true,
                    //         },
                    //     },
                    // }}
                    // coverflowEffect={{
                    //     rotate: 2,
                    //     stretch: 2,
                    //     depth: 10,
                    //     modifier: 100,
                    //     slideShadows: true,
                    // }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="z-20 !overflow-visible"
                >
                    {placeHolderImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className={clsx(
                                    'relative h-full w-full !overflow-hidden transition-all',
                                    index === state && '!overflow-visible'
                                )}
                            >
                                <Image
                                    src={image}
                                    alt="slide_image"
                                    className={clsx(
                                        'z-0 !h-[25rem] !w-[20rem] rounded-none object-cover transition-all',
                                        Number(state) === 6
                                            ? (index === 0 && 'block') ||
                                                  (index === 5 && 'block') ||
                                                  (index === Number(state) &&
                                                      'block') ||
                                                  'hidden'
                                            : Number(state) === 0
                                              ? (index === 6 && 'block') ||
                                                (index === 1 && 'block') ||
                                                (index === Number(state) &&
                                                    'block') ||
                                                'hidden]'
                                              : (index === Number(state) - 1 &&
                                                    'block') ||
                                                (index === Number(state) &&
                                                    'block') ||
                                                (index === Number(state) + 1 &&
                                                    'block') ||
                                                'hidden'
                                    )}
                                    width={1024}
                                    height={1024}
                                    priority={true}
                                />
                                <div
                                    className={clsx(
                                        'absolute left-1/2 top-1/2 z-10 m-auto !h-[25rem] !w-[20rem] -translate-x-1/2 -translate-y-1/2 scale-110 transition-all',
                                        Number(state) === 6
                                            ? (index === 0 &&
                                                  'bg-[#2b2b2b]/50') ||
                                                  (index === 5 &&
                                                      'bg-[#2b2b2b]/50') ||
                                                  (index === Number(state) &&
                                                      'bg-slate-100/0 dark:bg-[#2b2b2b]/0') ||
                                                  'bg-slate-100 dark:bg-[#2b2b2b]'
                                            : Number(state) === 0
                                              ? (index === 6 &&
                                                    'bg-[#2b2b2b]/50') ||
                                                (index === 1 &&
                                                    'bg-[#2b2b2b]/50') ||
                                                (index === Number(state) &&
                                                    'bg-slate-100/0 dark:bg-[#2b2b2b]/0') ||
                                                'bg-slate-100 dark:bg-[#2b2b2b]'
                                              : (index === Number(state) - 1 &&
                                                    'bg-[#2b2b2b]/50') ||
                                                (index === Number(state) &&
                                                    'bg-slate-100/0 dark:bg-green-500/0') ||
                                                (index === Number(state) + 1 &&
                                                    'bg-[#2b2b2b]/50') ||
                                                'bg-slate-100 dark:bg-[#2b2b2b]'
                                    )}
                                />
                            </div>
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

// import { CSSTransition, SwitchTransition } from 'react-transition-group'
//
// const Fade = ({
//     children,
//     contentCnt,
// }: {
//     children: React.ReactNode
//     contentCnt: number
// }) => {
//     return (
//         <SwitchTransition>
//             <CSSTransition key={contentCnt} timeout={500} classNames="fade">
//                 <div>{children}</div>
//             </CSSTransition>
//         </SwitchTransition>
//     )
// }

{
    /* <div className="flex h-auto w-[100%] justify-center bg-green-500">
             <div className="w-[100%] -translate-y-[4rem] xl:w-[70%] xl:translate-x-[4rem] text-wrap">
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
         </div> */
}