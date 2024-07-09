'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useSectionInView } from '@/lib/hooks'

export default function From() {
    const { ref } = useSectionInView('Contact Us', 0.5)
    return (
        <section
            ref={ref}
            id="contact"
            className="w-full py-12 md:py-24 lg:py-10"
        >
            <div className="container max-w-4xl px-4 md:px-6">
                <div className="space-y-6 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Get in Touch
                        </h2>
                        <p className="text-muted-foreground md:text-xl">
                            Have a question or want to work together? Fill out
                            the form below and we&apos;ll get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <form className="grid gap-4 rounded-xl bg-[url('/subtle-pattern.svg')] bg-[length:100px_100px] bg-repeat p-6 sm:p-8 md:p-10">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message"
                                className="min-h-[120px]"
                            />
                        </div>
                        <Button type="submit" className="justify-center">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
