/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'swiperjs.com',
                port: '',
                pathname: '**',
            },
        ],
    },
    env: {
        RECAPTCHA_APP_KEY: '6LfKTxkqAAAAAJK445DH1zok6bccSfSxBl9Lq94X',
        RECAPTCHA_SECRET_KEY: '6LfKTxkqAAAAACTd_lMagmnDmL6r7VQxxGomIj8z',
    },
}

export default nextConfig
