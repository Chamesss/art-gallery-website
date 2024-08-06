'use client'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function ParallaxScroll() {
    return (
        <ParallaxProvider>
            <div className="relative flex h-full min-h-screen w-full flex-1 items-center justify-center overflow-hidden lg:min-h-[160vh]">
                <Parallax
                    className="absolute right-[9%] top-1/2 z-[11] w-fit translate-y-1/2 transform"
                    translateY={[-100, 60]}
                >
                    <Image
                        src={`/placeholder/ph_0.jpg`}
                        width={500}
                        height={500}
                        alt="Landing #1"
                        className="h-auto w-[35vw] object-contain sm:w-[22vw]"
                        priority={true}
                    />
                </Parallax>
                <Image
                    src={`/placeholder/ph_1.jpg`}
                    width={500}
                    height={500}
                    alt="Landing #1"
                    className="md:[40rem] absolute left-1/2 top-1/2 z-[0] h-auto w-[80vw] -translate-x-1/2 -translate-y-1/2 transform object-contain sm:h-[30rem] sm:w-auto lg:h-[50rem] lg:w-auto"
                    priority={true}
                />
                <Parallax
                    className="absolute left-[5%] top-[20%] z-[10] w-fit -translate-y-1/2"
                    translateY={[300, 20]}
                >
                    <div className="h-fit w-fit">
                        <Image
                            src={`/placeholder/ph_2.jpg`}
                            width={500}
                            height={500}
                            alt="Landing #1"
                            className="h-auto w-[35vw] object-contain"
                            priority={true}
                        />
                    </div>
                </Parallax>
            </div>
        </ParallaxProvider>
    )
}
