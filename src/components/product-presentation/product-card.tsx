import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { Key, useRef } from 'react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export default function ProductCard({ id }: { id: Number }) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.div
            ref={ref}
            style={{
                transform: isInView
                    ? 'none'
                    : id === 2
                      ? 'translateX(200px)'
                      : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="flex h-auto w-auto items-center justify-center rounded-lg bg-red-300"
        >
            <Card className="w-[350px] overflow-hidden rounded-lg bg-[#1a1a1a] text-white shadow-lg">
                <Image
                    src="/placeholder.svg"
                    width={500}
                    height={500}
                    alt="Landing #1"
                    className="h-[250px] w-full object-cover"
                />
                <CardContent className="p-4">
                    <div className="text-lg font-semibold">Landing #1</div>
                    <div className="text-sm text-gray-400">Robert Williams</div>
                    <div className="text-sm text-gray-400">Owner</div>
                    <div className="mt-4 flex items-center justify-center">
                        <Button className="border border-white bg-transparent text-white">
                            Visit Page
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
