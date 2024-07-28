import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function Footer() {
    return (
        <footer className="bg-zinc-800 py-12 text-muted-foreground">
            <div className="container grid max-w-[80rem] grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col items-start gap-4">
                    <Link
                        href="#"
                        className="flex items-center gap-2"
                        prefetch={false}
                    >
                        <span className="font-bold">Thot Arts.</span>
                    </Link>
                    <p className="text-sm">
                        Beautifully designed components that you can copy and
                        paste into your apps.
                    </p>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-sm font-semibold">Quick Links</h4>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        About
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Features
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Contact
                    </Link>
                </div>
                <div className="grid gap-2">
                    <h4 className="text-sm font-semibold">Resources</h4>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Blog
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Documentation
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Help Center
                    </Link>
                    <Link
                        href="#"
                        className="text-sm hover:underline"
                        prefetch={false}
                    >
                        Community
                    </Link>
                </div>
                <div className="grid gap-4">
                    <h4 className="text-sm font-semibold">Newsletter</h4>
                    <p className="text-sm">
                        Sign up to get notified when we launch.
                    </p>
                    <form className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 border-white/50 dark:bg-zinc-950"
                        />
                        <Button
                            className="bg-amber-500 text-white hover:bg-amber-600"
                            type="submit"
                        >
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
            <div className="mt-12 border-t pt-6 text-xs">
                <div className="container flex max-w-5xl items-center justify-between">
                    <p>&copy; 2024 Thot Arts. All rights reserved.</p>
                    <nav className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            Privacy
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            Terms
                        </Link>
                        <Link
                            href="#"
                            className="hover:underline"
                            prefetch={false}
                        >
                            Cookies
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
