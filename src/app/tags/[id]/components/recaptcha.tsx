import React, { RefObject, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Recaptcha({
    onVerify,
}: {
    onVerify: (value: any) => void
}) {
    const recaptchaRef = useRef() as RefObject<ReCAPTCHA>
    const appKey = process.env.RECAPTCHA_APP_KEY
    const handleChange = (value: any) => {
        onVerify(value)
    }

    if (!appKey) {
        return <p>Recaptcha app key is missing</p>
    }

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={appKey}
            onChange={handleChange}
        />
    )
}
