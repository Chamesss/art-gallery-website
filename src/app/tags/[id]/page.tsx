import { Separator } from '@/components/ui/separator'
import { products } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import AdditionalInfo from './components/additional-info'
import PurchaseForm from './components/purchase-form'
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
            <div className="mb-10 flex w-full max-w-7xl flex-col">
                <Slider />
                <Separator className="my-10" />
                <AdditionalInfo />
                <Separator className="my-10" />
                <PurchaseForm />
            </div>
        </main>
    )
}
