'use client'
import { useActiveSectionContext } from '@/context/active-section-context'
import { links } from '@/lib/data'
import { useScrollPosition } from '@/lib/hooks'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext()
    const isAtTop = useScrollPosition()

    return (
        <header className="relative z-[999]">
            <nav
                className={`fixed left-1/2 top-0 flex h-14 w-full -translate-x-1/2 items-center justify-around py-2 transition-all duration-300 sm:top-[0rem] sm:h-[initial] sm:py-8 lg:top-[0.15rem] lg:h-12 ${
                    isAtTop === false && 'bg-black/35 sm:!py-4'
                }`}
            >
                <div>Logo</div>
                <ul className="relative flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {links.map((link) => (
                        <motion.li
                            className="relative flex h-3/4 items-center justify-center"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    `hidden w-full items-center justify-center p-3 font-medium text-zinc-800 transition-all hover:text-gray-950 dark:text-white dark:hover:text-gray-300 lg:flex`,
                                    {
                                        '!font-bold':
                                            activeSection === link.name,
                                        '!text-white': isAtTop === false,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name)
                                    setTimeOfLastClick(Date.now())
                                }}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className={`absolute inset-x-0 inset-y-9 !right-0 -z-10 h-[0.125rem] rounded-xl bg-gray-50 dark:bg-gray-50 ${
                                            isAtTop && 'bg-zinc-600'
                                        }`}
                                        layoutId="activeSection"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
