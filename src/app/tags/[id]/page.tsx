import { Separator } from '@/components/ui/separator'
import { products } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import Slider from './components/slider'

export default function Product({ params }: { params: { id: string } }) {
    const model = products.find((model) => model.id === params.id)
    if (!model)
        return (
            <div className="flex flex-1 flex-col items-center justify-center">
                <h1>Product Not Found</h1>
                <p>The product you are looking for does not exist.</p>
                <Link href="/tags">Back to products list</Link>
            </div>
        )
    return (
        <main className="flex flex-1 flex-col items-center justify-end overflow-hidden">
            {/* <Slider model={model} /> */}
            <Slider />
            <Separator className="my-10" />
        </main>
    )
}
