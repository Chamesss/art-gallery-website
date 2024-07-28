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
        <div className="flex h-[7rem] w-screen items-center justify-center bg-black lg:h-[14rem]">
            <MarqueeComponent
                gradient={true}
                pauseOnHover={true}
                gradientColor="black"
                className="flex items-center lg:items-stretch"
            >
                <div className="flex justify-around font-outfit opacity-75 lg:w-screen">
                    {marqueeKeywords.map((keyword, index) => (
                        <span
                            key={index}
                            className="mx-4 w-fit text-xl text-white lg:text-4xl"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
            </MarqueeComponent>
        </div>
    )
}
