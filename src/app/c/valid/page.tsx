import { Suspense } from 'react'
import ValidateToken from './components/validate-token'

export default function ValidateTokenPage() {
    return (
        <Suspense fallback={'Loading...'}>
            <ValidateToken />
        </Suspense>
    )
}
