import AboutUs from '@/components/about-us'
import Hero from '@/components/hero'
import Intro from '@/components/intro'
import ProductCardSection from '@/components/product-card-section'
import ProductContainerSection from '@/components/product-container-section'
import SectionDivider from '@/components/utils/section-divider'

export default function Home() {
    return (
        <main className="flex flex-col items-center overflow-hidden">
            <Hero />
            <Intro />
            <ProductCardSection />
            <SectionDivider />
            <ProductContainerSection />
            <AboutUs />
        </main>
    )
}
