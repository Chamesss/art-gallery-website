import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function AdditionalInfo() {
    return (
        <div className="mx-auto w-[90%] max-w-2xl px-0 sm:px-6 lg:w-[80%] lg:max-w-full lg:px-8">
            <Card className="rounded-none border-none dark:bg-black">
                <CardHeader>
                    <CardTitle>Additional Info</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="my-4">
                        <p className="lg:text-lg lg:tracking-wide">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Similique rem sed possimus, accusamus id vero
                            quisquam quibusdam atque reprehenderit animi ab
                            aliquam suscipit nulla incidunt? Dolores nihil eos
                            minus repellat.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
