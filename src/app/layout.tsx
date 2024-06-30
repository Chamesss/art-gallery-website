import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "art-gallery-website",
  description: "art-gallery-website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
        className={`${inter.className} bg-gray-50 text-gray-950 relative dark:bg-[#946263] dark:text-gray-50 dark:text-opacity-90 scrollbar-container`}
      >
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <div className="bg-[#dbd7fb] absolute -z-10 top-[50%] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-0 xl:right-20 2xl:right-20 dark:bg-[#3e3c5ab8]" />
        <div className="bg-[#fbe2e3] absolute -z-10 bottom-0 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#a16b6c33]" />
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
  );
}
