import AboutUs from '@/components/about-us'
import From from '@/components/form'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Marquee from '@/components/marquee'
import ProductCardSection from '@/components/product-card-section'
import ProductContainerSection from '@/components/product-container-section'
import SectionDivider from '@/components/utils/section-divider'

export default function Home() {
    return (
        <main className="flex flex-col items-center overflow-hidden">
            <Header />
            <Hero />
            <Marquee />
            <ProductCardSection />
            <SectionDivider />
            <ProductContainerSection />
            <AboutUs />
            <SectionDivider />
            <From />
        </main>
    )
}
