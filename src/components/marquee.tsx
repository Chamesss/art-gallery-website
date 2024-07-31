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
        <div className="flex h-[7rem] w-full lg:h-[14rem]">
            <MarqueeComponent
                gradient={true}
                pauseOnHover={true}
                gradientColor="black"
                className="flex flex-1 !w-full bg-black"
            >
                <div className="flex font-outfit opacity-75 bg-black lg:!w-[100vw] !flex-1 justify-around self-stretch">
                    {marqueeKeywords.map((keyword, index) => (
                        <span
                            key={index}
                            className="mx-4 w-auto text-xl text-white lg:text-4xl"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>
            </MarqueeComponent>
        </div>
    )
}
