import { Separator } from '@/components/ui/separator'
import { products } from '@/lib/data'
import Link from 'next/link'
import React from 'react'
import AdditionalInfo from './components/additional-info'
import ModelInfo from './components/model-info'
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
            <div className="-mt-[2.5rem] mb-10 flex w-full max-w-7xl flex-col px-2 lg:mt-[5rem]">
                <div className="mx-auto mt-[5rem] w-full max-w-xl px-6 text-start lg:hidden">
                    <h1 className="text-3xl font-bold md:text-4xl">
                        Starry Night
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        by Vincent van Gogh
                    </p>
                </div>
                <div className="my-4 flex w-full flex-col items-center lg:my-10 lg:flex-row lg:justify-between">
                    <Slider />
                    <ModelInfo />
                </div>
                <AdditionalInfo />
                <Separator className="my-10" />
                <PurchaseForm />
            </div>
        </main>
    )
}
