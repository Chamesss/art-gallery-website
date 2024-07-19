'use client'
import { ThemeProvider as CustomThemeProvider } from 'next-themes'
import * as React from 'react'

type Props = {
    children?: React.ReactNode
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <CustomThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            {children}
        </CustomThemeProvider>
    )
}
