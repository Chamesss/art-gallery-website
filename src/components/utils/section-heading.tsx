type Props = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: Props) {
    return (
        <div className="relative my-10 mb-10">
            <h2 className="absolute left-1/2 top-1/2 -translate-x-[32rem] -translate-y-1/2 transform text-center font-outfit text-4xl uppercase tracking-wider">
                {children}
            </h2>
        </div>
    )
}
