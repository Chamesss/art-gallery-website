import { products } from '@/lib/data'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from '../ui/button'

export default function ProductCard({
    id,
    index,
}: {
    id: string
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })
    const painting = products.find((product) => product.id === id)
    if (!painting) return null
    return (
        <Link href={`/tags/${id}`} className="w-full max-w-[22rem]">
            <motion.div
                ref={ref}
                style={{
                    transform: isInView
                        ? 'none'
                        : index === 2
                          ? 'translateX(200px)'
                          : 'translateX(-200px)',
                    opacity: isInView ? 1 : 0,
                    transition:
                        'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
                className="flex h-auto w-auto flex-col items-center justify-center space-y-4 rounded-lg"
            >
                <div className="w-full overflow-hidden rounded-none border-[0.75rem] border-gray-800 bg-slate-100 p-4 text-black shadow-[0_0px_120px_-15px_rgba(0,0,0,0.3)] dark:shadow-none lg:w-[23rem] lg:dark:shadow-[0_0px_120px_-15px_rgba(255,255,255,0.3)]">
                    <Image
                        src={`/placeholder/ph_${index}.jpg`}
                        width={500}
                        height={500}
                        alt="Landing #1"
                        className="mx-auto h-[25rem] w-auto object-cover"
                        priority={true}
                    />
                    {/* <div className="p-4">
                        <div className="text-center text-lg font-semibold">
                            {painting.title}
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                            <Button className="border border-amber-500 bg-amber-500 text-white hover:bg-amber-600">
                                Visit Page
                            </Button>
                        </div>
                    </div> */}
                </div>
                <div>
                    <p className="font-serif text-xl font-semibold">
                        {painting.title}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}
