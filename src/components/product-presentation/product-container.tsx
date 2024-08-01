import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

export default function ProductContainer({
    title,
    description,
    imageUrl,
}: ProductOverview) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group mb-3 shadow-[0_5px_80px_-15px_rgba(0,0,0,0.3)] last:mb-0 sm:mb-8 relative"
        >
            <section className="bg-gray-100 py-2 max-w-[50rem] border border-black/5 overflow-hidden rounded-lg sm:pr-2 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20">
                <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:ml-[1rem] sm:max-w-[55%] sm:pl-5 sm:pr-5 sm:pt-9 sm:group-even:ml-[17rem] sm:group-even:max-w-[60%] sm:group-even:pl-16">
                    <div className="mb-2 flex w-full flex-row items-center justify-between">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                    </div>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
                        {description}
                    </p>
                </div>
                {/* to remove hidden ? */}
                <Image
                    className="lg:absolute block top-8 -right-40 lg:w-[28.25rem] w-[18rem] mx-auto lg:mx-0 rounded-lg shadow-2xl transition group-hover:scale-105 lg:group-hover:-translate-x-3 
        lg:group-hover:translate-y-3 lg:group-hover:-rotate-2 lg:group-even:group-hover:translate-x-3 
        lg:group-even:group-hover:translate-y-3 lg:group-even:group-hover:rotate-2 group-even:-right-[initial] group-even:-left-40 "
                    src={imageUrl}
                    alt={title}
                    width={640}
                    height={640}
                    quality={100}
                    priority={true}
                />
            </section>
        </motion.div>
    )
}
