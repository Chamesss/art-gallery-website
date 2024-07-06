type Props = {
    children: React.ReactNode
}

export default function SectionHeading({ children }: Props) {
    return (
        <h2 className="mb-8 text-start font-outfit text-4xl capitalize tracking-wider">
            {children}
        </h2>
    )
}
