"use client";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useScrollPosition } from "@/lib/hooks";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const isAtTop = useScrollPosition();

  return (
    <header className="z-[999] relative">
      <nav
        className={`flex fixed w-full items-center justify-around top-[0.15rem] left-1/2 h-12 -translate-x-1/2 sm:top-[0rem] sm:h-[initial] sm:py-8 transition-all duration-300 py-2 ${
          isAtTop === false && "bg-black/35 sm:!py-4"
        }`}
      >
        <div>Logo</div>
        <ul className="flex relative w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  `flex w-full items-center justify-center p-3 hover:text-gray-950 font-medium transition-all text-zinc-800 dark:text-white dark:hover:text-gray-300`,
                  {
                    "!font-bold": activeSection === link.name,
                    "!text-white": isAtTop === false,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className={`bg-gray-50 rounded-xl h-[0.125rem] absolute inset-y-9 inset-x-0 !right-0 -z-10 dark:bg-gray-50 ${
                      isAtTop && "bg-zinc-600"
                    }`}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
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
  );
}
