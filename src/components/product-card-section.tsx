'use client'
import { useSectionInView } from '@/lib/hooks'
import { models } from '@/lib/token'
import React from 'react'
import ProductCard from './product-presentation/product-card'
import SectionHeading from './utils/section-heading'

export default function ProductCardSection() {
    const { ref } = useSectionInView('Products')
    return (
        <section className="mt-20 flex flex-col items-center justify-center">
            <SectionHeading>Products</SectionHeading>
            <div
                id="products"
                ref={ref}
                className="flex scroll-mt-28 flex-row items-center justify-around gap-10 px-4 py-16"
            >
                {models.map((model, i) => (
                    <ProductCard key={model.id} id={model.id} index={i} />
                ))}
            </div>
        </section>
    )
}
