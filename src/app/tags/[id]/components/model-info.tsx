'use client'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function ModelInfo() {
    const scrollIntoView = () => {
        const element = document.getElementById('purchase')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="max-w-xl space-y-6 px-6 py-4">
            <div className="hidden lg:block">
                <h1 className="text-3xl font-bold md:text-4xl">Starry Night</h1>
                <p className="text-lg text-muted-foreground">
                    by Vincent van Gogh
                </p>
            </div>
            <div className="prose max-w-none">
                <p>
                    Starry Night is one of the most iconic paintings in the
                    world, created by the Dutch Post-Impressionist painter
                    Vincent van Gogh in 1889. The painting depicts a swirling
                    night sky over a small village, with a prominent church
                    steeple in the foreground.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-lg font-medium">Medium</h3>
                    <p>Oil on canvas</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Size</h3>
                    <p>29 x 36 inches</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Year</h3>
                    <p>1889</p>
                </div>
                <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p>Museum of Modern Art, New York</p>
                </div>
            </div>
            <div className="flex gap-4">
                <Button onClick={scrollIntoView}>Purchase</Button>
            </div>
        </div>
    )
}
