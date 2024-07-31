'use client'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Fallback() {
    return (
        <Link href={'/'}>
            <ChevronLeft className="w-10 h-10" />
        </Link>
    )
}
