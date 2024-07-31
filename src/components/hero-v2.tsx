'use client'
import '@/components/styling.css'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { products } from '@/lib/data'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
    Parallax,
} from 'swiper/modules'

export default function HeroV2() {
    return (
        <section className="hero-slider hero-style !h-[95vh]">
            <Swiper
                loop={true}
                speed={1000}
                parallax={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                watchSlidesProgress={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[
                    Navigation,
                    Pagination,
                    Parallax,
                    Autoplay,
                    EffectFade,
                ]}
                className="swiper-container"
            >
                {products.map((p, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                        <div
                            className="slide-inner slide-bg-image px-6"
                            style={{ backgroundImage: `url(${p.pictures[0]})` }}
                        >
                            <div className="swiper-container-inner">
                                <div
                                    data-swiper-parallax="300"
                                    className="slide-title px-2"
                                >
                                    <h2>{p.title}</h2>
                                </div>
                                <div
                                    data-swiper-parallax="400"
                                    className="slide-text"
                                >
                                    <p className="bg-black/60 text-white px-4 py-3">
                                        {p.description}
                                        <br />
                                        <br />
                                        {p.height} x {p.width} cm
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                                {/* <div
                                    data-swiper-parallax="500"
                                    className="slide-btns"
                                >
                                    <a href="#" className="theme-btn-s2">
                                        Register now
                                    </a>
                                    
                                </div> */}
                                <a href="#" className="theme-btn-s3">
                                    <i className="fas fa-chevron-circle-right"></i>{' '}
                                    Get Info
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

//  var interleaveOffset = 0.5
//  var swiperOptions = {
//      loop: true,
//      speed: 1000,
//      parallax: true,
//      autoplay: {
//          delay: 6500,
//          disableOnInteraction: false,
//      },
//      watchSlidesProgress: true,
//      pagination: {
//          el: '.swiper-pagination',
//          clickable: true,
//      },

//      navigation: {
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev',
//      },

//      on: {
//          progress: function () {
//              var swiper = this
//              for (var i = 0; i < swiper.slides.length; i++) {
//                  var slideProgress = swiper.slides[i].progress
//                  var innerOffset = swiper.width * interleaveOffset
//                  var innerTranslate = slideProgress * innerOffset
//                  swiper.slides[i].querySelector(
//                      '.slide-inner'
//                  ).style.transform =
//                      'translate3d(' + innerTranslate + 'px, 0, 0)'
//              }
//          },

//          touchStart: function () {
//              var swiper = this
//              for (var i = 0; i < swiper.slides.length; i++) {
//                  swiper.slides[i].style.transition = ''
//              }
//          },

//          setTransition: function (speed) {
//              var swiper = this
//              for (var i = 0; i < swiper.slides.length; i++) {
//                  swiper.slides[i].style.transition = speed + 'ms'
//                  swiper.slides[i].querySelector(
//                      '.slide-inner'
//                  ).style.transition = speed + 'ms'
//              }
//          },
//      },
//  }
