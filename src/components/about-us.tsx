'use client'
import { useSectionInView } from '@/lib/hooks'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import SectionHeading from './utils/section-heading'

export default function AboutUs() {
    const { ref } = useSectionInView('About Us')

    const Ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(Ref, { once: true })

    return (
        <motion.section
            ref={ref}
            className="mb-16 mt-[8rem] w-[65rem] scroll-mt-28 text-center leading-8 sm:mb-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Us</SectionHeading>
            <div
                ref={Ref}
                className="flex flex-row items-center justify-between gap-10"
            >
                <motion.div
                    style={{
                        transform: isInView ? 'none' : 'translateX(-200px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                >
                    <p className="max-w-[28rem] text-wrap text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime eaque officiis ad, perspiciatis cum, voluptas
                        obcaecati assumenda natus, soluta provident ullam porro?
                        Voluptates esse assumenda sit doloremque ratione ut
                        beatae!
                    </p>
                </motion.div>
                <motion.div
                    style={{
                        transform: isInView ? 'none' : 'translateX(200px)',
                        opacity: isInView ? 1 : 0,
                        transition:
                            'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                    }}
                    className="!h-[30rem] !w-[30rem]"
                >
                    <Image
                        src={'/placeholder.svg'}
                        width={1024}
                        height={1024}
                        alt="about-us"
                        className="!h-[30rem] !w-[30rem] rounded-md"
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}
