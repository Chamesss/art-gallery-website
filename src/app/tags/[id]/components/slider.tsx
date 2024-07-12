'use client'
import React, { useState } from 'react'

export default function Slider({ item }: { item: Product }) {
    const [activeIndex, setActiveIndex] = useState(2) // Active slide index
    const slides = [
        'Performance Simplified',
        'Accessibility Simplified',
        'Cloud Simplified',
        'Data Simplified',
        'Environment Simplified',
    ]

    // Function to slide to the index
    const slideTo = (index: number) => {
        setActiveIndex(index)
    }

    const TILE_SIZE = 150

    /* the closer we to the center, the more far we move the tile */
    function calcTranslateZ(index: number, activeIndex: number) {
        if (index === activeIndex) return -TILE_SIZE * 2.5
        return -(
            (TILE_SIZE * 10) /
            (Math.abs(index - activeIndex) * slides.length)
        )
    }

    /* the more you far from center, the smaller the gap */
    function calcTranslateX(index: number, activeIndex: number) {
        if (index === activeIndex) return 0
        return Math.pow(activeIndex - index, 3) * 10
    }

    /* the closer to the center, the more "exposed the tile" */
    function calcRotateY(index: number, activeIndex: number) {
        return (activeIndex - index) * 30
    }

    /* we shif the container  with the tiles, so the active tile is centralized */
    function calcShift(activeIndex: number) {
        return ((slides.length - 1) / 2 - activeIndex) * TILE_SIZE
    }

    /* if a tile far from center, it looks ugly */
    function shouldHideTile(index: number, activeIndex: number) {
        return Math.abs(activeIndex - index) > 2
    }

    return (
        <>
            <div
                className="coverflow-container"
                style={{
                    transform: `translateX(${calcShift(activeIndex)}px)`,
                }}
            >
                {slides.map((slide, index) => {
                    return (
                        <div
                            key={slide}
                            className={`coverflow-item ${
                                index === activeIndex ? 'active' : ''
                            } ${shouldHideTile(index, activeIndex) ? 'hidden' : ''} `}
                            style={{
                                transform: `
                  translateZ(${calcTranslateZ(index, activeIndex)}px)
                  translateX(${calcTranslateX(index, activeIndex)}px)
                  rotateY(${calcRotateY(index, activeIndex)}deg) `,
                            }}
                            onClick={() => slideTo(index)}
                        >
                            {slide}
                        </div>
                    )
                })}
            </div>
            <div className="coverflow-controls">
                <button
                    onClick={() => slideTo(activeIndex - 1)}
                    disabled={activeIndex === 0}
                >
                    &lt;
                </button>
                <button
                    onClick={() => slideTo(activeIndex + 1)}
                    disabled={activeIndex === slides.length - 1}
                >
                    &gt;
                </button>
            </div>
        </>
    )
}
