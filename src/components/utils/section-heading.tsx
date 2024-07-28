type Props = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: Props) {
    return (
        <div className="relative my-10 mb-10">
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-nowrap text-center font-outfit text-2xl font-semibold uppercase tracking-wider text-amber-500 underline underline-offset-8 lg:-translate-x-[32rem] lg:text-4xl">
                {children}
            </h2>
        </div>
    )
}
