import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export default function ProductCard({
    id,
    index,
}: {
    id: string
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })
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
                className="flex h-auto w-auto items-center justify-center rounded-lg"
            >
                <Card className="w-full overflow-hidden rounded-lg bg-[#1a1a1a] text-white shadow-xl lg:w-[350px]">
                    <Image
                        src="/placeholder.svg"
                        width={500}
                        height={500}
                        alt="Landing #1"
                        className="h-[250px] w-full object-cover"
                    />
                    <CardContent className="p-4">
                        <div className="text-lg font-semibold">Landing #1</div>
                        <div className="text-sm text-gray-400">
                            Robert Williams
                        </div>
                        <div className="text-sm text-gray-400">Owner</div>
                        <div className="mt-4 flex items-center justify-center">
                            <Button className="border border-white bg-transparent text-white">
                                Visit Page
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </Link>
    )
}
