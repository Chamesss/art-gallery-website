import Footer from '@/components/footer'
import Header from '@/components/header'
import ThemeSwitch from '@/components/theme-switch'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'art-gallery-website',
    description: 'art-gallery-website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <meta name="author" content="ChamseDin Azouz" />
            <meta property="og:title" content="art-gallery-website" />
            <meta property="og:description " content="art-gallery-website" />
            <meta
                property="og:url"
                content="https://art-gallery-website-beta.vercel.app/"
            />
            <meta property="og:image" content="" />
            <body
                className={`${josefin_sans.className} scrollbar-container relative bg-gray-50 text-gray-950 dark:bg-[#2b2b2b] dark:text-gray-50 dark:text-opacity-90`}
            >
                <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] dark:bg-[#ffffff00] sm:w-[68.75rem]" />
                <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#2b2b2b] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
                <div className="absolute left-[-35rem] top-[50%] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] dark:bg-[#ffffff25] sm:w-[68.75rem] md:left-[-33rem] lg:left-0 xl:right-20 2xl:right-20" />
                <div className="absolute bottom-0 right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#e9a642] blur-[10rem] dark:bg-[#ffffff25] sm:w-[68.75rem]" />
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="bottom-left" />
                    </ActiveSectionContextProvider>
                    <ThemeSwitch />
                </ThemeContextProvider>
            </body>
        </html>
    )
}
