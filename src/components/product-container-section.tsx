'use client'
import { productsOverview } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import ProductContainer from './product-presentation/product-container'
import SectionHeading from './utils/section-heading'

export default function ProductContainerSection() {
    const { ref } = useSectionInView('Concept', 0)
    return (
        <div
            ref={ref}
            id="concept"
            className="flex min-h-[40rem] w-full flex-col items-center gap-10 overflow-hidden"
        >
            {productsOverview.map((product, i) => (
                <React.Fragment key={i}>
                    <ProductContainer {...product} />
                </React.Fragment>
            ))}
        </div>
    )
}
