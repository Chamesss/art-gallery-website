'use client'

import { useActiveSectionContext } from '@/context/active-section-context'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import type { SectionName } from './types'

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
    const { ref, inView } = useInView({
        threshold,
    })
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName])
    return {
        ref,
    }
}

export const useScrollPosition = () => {
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
        }
        window.addEventListener('scroll', handleScroll)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return isAtTop
}
