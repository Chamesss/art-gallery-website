import { products } from '@/lib/data'
import React from 'react'
import Slider from './components/slider'

export default function Product({ params }: { params: { id: string } }) {
    const item = products.find((item) => item.id === parseInt(params.id))
    if (!item) return <div>Product not found</div>
    return (
        <main>
            <div className="flex overflow-hidden">
                <Slider item={item} />
            </div>
        </main>
    )
}
