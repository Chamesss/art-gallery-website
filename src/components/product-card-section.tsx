'use client'
import { useSectionInView } from '@/lib/hooks'
import { models } from '@/lib/token'
import React from 'react'
import ProductCard from './product-presentation/product-card'
import SectionHeading from './utils/section-heading'

export default function ProductCardSection() {
    const { ref } = useSectionInView('Products', 0)
    return (
        <section className="!mx-auto mt-20 flex w-full max-w-[65rem] flex-col items-center justify-center overflow-hidden lg:overflow-visible">
            <div
                id="products"
                ref={ref}
                className="!mx-auto flex w-full scroll-mt-28 flex-col items-center justify-center gap-10 py-16 lg:flex-row lg:px-4"
            >
                {models.map((model, i) => (
                    <ProductCard key={model.id} id={model.id} index={i} />
                ))}
            </div>
        </section>
    )
}
