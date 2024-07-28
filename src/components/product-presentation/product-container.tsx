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
            className="group mb-3 shadow-[0_5px_80px_-15px_rgba(0,0,0,0.3)] last:mb-0 sm:mb-8"
        >
            <section className="relative w-full overflow-hidden rounded-none border border-black/5 bg-gray-50 transition hover:bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 sm:h-[20rem] sm:pr-2 sm:group-even:pl-8 lg:w-[50rem]">
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
                    className="group-even:-right-[initial] mx-auto w-[15rem] rounded-none pb-4 shadow-2xl transition group-even:-left-0 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block lg:absolute lg:-right-0 lg:top-8 lg:w-[20rem] lg:pb-0"
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
