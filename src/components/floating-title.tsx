'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import React, { useEffect, useState } from 'react'

export default function FloatingTitle() {
    const { activeSection } = useActiveSectionContext()
    const [displayedSection, setDisplayedSection] = useState(activeSection)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        if (activeSection !== displayedSection) {
            setIsAnimating(true)
            const timer = setTimeout(() => {
                setDisplayedSection(activeSection)
                setIsAnimating(false)
            }, 500) // Half of the transition duration
            return () => clearTimeout(timer)
        }
    }, [activeSection, displayedSection])

    return (
        <div className="fixed bottom-[10%] left-[5%] z-[9999]">
            <p
                className={`text-nowrap text-center text-2xl font-bold capitalize text-amber-500 transition-opacity duration-300 lg:text-5xl ${
                    isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
            >
                {displayedSection}
            </p>
        </div>
    )
}
