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
        <div className="flex scale-[0.75] items-center justify-center xs:scale-100">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={appKey}
                onChange={handleChange}
            />
        </div>
    )
}
