'use client'
import { models } from '@/lib/token'
import { firstModel } from '@/lib/token/first-model'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function ValidateToken() {
    const searchParams = useSearchParams()
    const [token, setToken] = useState(() => searchParams.get('token') || '0')
    const [modelId, setModelId] = useState(() => searchParams.get('t') || '0')

    let exists: boolean = false
    const model = models.find((m) => m.id === modelId)
    if (model) {
        exists = model.table.includes(token)
    }

    if (!exists) {
        return (
            <div className="flex w-full justify-center">
                <div className="max-w-[80rem] space-y-8 p-4 text-center">
                    <p>Doesn&apos;t exists.. :(</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex w-full justify-center">
            <div className="max-w-[80rem] space-y-8 p-4 text-center">
                <p>Exists !!</p>
                <p>
                    Token === {token} modelId === {modelId}
                </p>
            </div>
        </div>
    )
}
