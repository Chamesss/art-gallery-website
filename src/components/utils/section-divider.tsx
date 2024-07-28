'use client'
import { motion } from 'framer-motion'

export default function SectionDivider() {
    return (
        <div className="flex w-full justify-center">
            <motion.div
                className="z-20 my-14 block h-16 w-1 rounded-full bg-gray-900 bg-opacity-20 dark:bg-gray-200 dark:bg-opacity-50"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.125 }}
            />
        </div>
    )
}
