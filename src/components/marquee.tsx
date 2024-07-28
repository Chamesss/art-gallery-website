import MarqueeComponent from 'react-fast-marquee'

export default function Marquee() {
    const marqueeKeywords = [
        'Elegance',
        'Innovation',
        'Quality',
        'Style',
        'Performance',
    ]

    return (
        <div className="flex h-[14rem] w-screen items-center justify-center bg-black dark:border-4 dark:border-white/20">
            <MarqueeComponent
                gradient={true}
                pauseOnHover={true}
                gradientColor="black"
                className="flex items-stretch"
            >
                <div className="flex w-screen justify-around font-outfit opacity-75">
                    {marqueeKeywords.map((keyword, index) => (
                        <span
                            key={index}
                            className="mx-4 w-fit text-4xl text-white"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
            </MarqueeComponent>
        </div>
    )
}
