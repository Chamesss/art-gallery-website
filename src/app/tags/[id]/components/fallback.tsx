'use client'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Fallback() {
    const router = useRouter()

    return (
        <div onClick={() => router.back()}>
            <ChevronLeft className="w-10 h-10" />
        </div>
    )
}
