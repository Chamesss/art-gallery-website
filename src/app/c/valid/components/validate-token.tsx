'use client'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function ValidateToken() {
    const searchParams = useSearchParams()
    const [token, setToken] = useState(() => searchParams.get('token') || '0')
    const [modelId, setModelId] = useState(() => searchParams.get('t') || '0')
    return (
        <div>
            Token === {token} modelId === {modelId}
        </div>
    )
}
