type Props = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: Props) {
    return (
        <div className="relative my-10 mb-10">
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-nowrap text-center text-2xl font-bold capitalize text-amber-500 lg:-translate-x-[32rem] lg:text-5xl">
                {children}
            </h2>
        </div>
    )
}
