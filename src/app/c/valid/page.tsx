'use client'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'

export default function ValidateTokenPage() {
    return (
        <Suspense fallback={'Loading...'}>
            <ValidateToken />
        </Suspense>
    )
}

export function ValidateToken() {
    const searchParams = useSearchParams()
    const [token, setToken] = useState(() => searchParams.get('token') || '0')
    const [modelId, setModelId] = useState(() => searchParams.get('t') || '0')
    return (
        <div>
            Token === {token} modelId === {modelId}
        </div>
    )
}
