import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';


export default function ProductContainer({ title,
  description,
  imageUrl }: ProductOverview) {
  
    const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 w-[50rem] border border-black/5 overflow-hidden rounded-lg sm:pr-2 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-5 sm:group-even:pl-16 sm:pr-5 sm:pt-9 sm:max-w-[55%] sm:group-even:max-w-[60%] flex flex-col h-full sm:ml-[1rem] sm:group-even:ml-[17rem]">
          <div className="flex flex-row justify-between w-full items-center mb-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
        </div>
        <Image
          className="absolute hidden sm:block top-8 -right-0 w-[20rem] rounded-t-lg shadow-2xl transition group-hover:scale-105 group-hover:-translate-x-3 
        group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:-right-[initial] group-even:-left-0 "
          src={imageUrl}
          alt={title}
          width={640}
          height={640}
          quality={95}
        />
      </section>
    </motion.div>
  )
}
