import Footer from '@/components/footer'
import Header from '@/components/header'
import ThemeSwitch from '@/components/theme-switch'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { ThemeProvider } from '@/context/theme-context'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import './tags/[id]/components/styles.css'

const josefin_sans = Josefin_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Thot Arts',
    description:
        'Elegant, royal, and classy paintings for discerning art collectors.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <meta name="author" content="ChamseDin Azouz" />
            <meta property="og:title" content="Thot Arts" />
            <meta
                property="og:description"
                content="description: 'Elegant, royal, and classy paintings for discerning art collectors.'"
            />
            <meta property="og:url" content="https://www.thotarts.com/" />
            <meta property="og:image" content="" />
            <body
                className={`${josefin_sans.className} scrollbar-container relative flex h-full min-h-screen flex-col bg-slate-100 text-gray-950 dark:bg-[#2b2b2b] dark:text-gray-50 dark:text-opacity-90`}
            >
                <div className="relative overflow-hidden">
                    <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#8e6464] blur-[10rem] dark:bg-[#ffffff00] sm:w-[68.75rem]" />
                    <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#00000053] blur-[10rem] dark:bg-[#2b2b2b] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
                    <div className="absolute left-[-35rem] top-[50%] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#ffe1003f] blur-[10rem] dark:bg-[#ffffff25] sm:w-[68.75rem] md:left-[-33rem] lg:left-0 xl:right-20 2xl:right-20" />
                    <div className="absolute bottom-0 right-[11rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#ffe1003f] blur-[10rem] dark:bg-[#ffffff25] sm:w-[68.75rem]" />
                </div>
                <ThemeProvider>
                    <ActiveSectionContextProvider>
                        <div className="flex flex-1 flex-col">
                            {children}
                            <Footer />
                        </div>
                        <Toaster position="bottom-left" />
                    </ActiveSectionContextProvider>
                    <ThemeSwitch />
                </ThemeProvider>
            </body>
        </html>
    )
}
