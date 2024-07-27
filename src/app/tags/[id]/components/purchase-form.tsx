'use client'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { FormEvent, useState } from 'react'
import Recaptcha from './recaptcha'

export default function PurchaseForm() {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        city: '',
        zip: '',
        deliveryOption: 'home-delivery',
    })
    const [captchaValue, setCaptchaValue] = useState(null)
    const handleCaptchaVerify = (value: any) => {
        setCaptchaValue(value)
    }

    const handleInputChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <div
            id="purchase"
            className="mx-auto w-[90%] max-w-2xl px-0 sm:px-6 lg:w-[80%] lg:max-w-full lg:px-8"
        >
            <Card>
                <CardHeader>
                    <CardTitle>Purchase Form</CardTitle>
                    <CardDescription>
                        Fill out the form to complete your order.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                className="w-auto min-w-11"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                placeholder="Enter your address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    placeholder="Enter your city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="zip">Zip Code</Label>
                                <Input
                                    id="zip"
                                    type="number"
                                    placeholder="Enter your zip code"
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label>Delivery Option</Label>
                            <RadioGroup
                                defaultValue="home-delivery"
                                className="flex items-center gap-4"
                            >
                                <Label
                                    htmlFor="home-delivery"
                                    className="flex cursor-pointer items-center gap-2"
                                >
                                    <RadioGroupItem
                                        id="home-delivery"
                                        value="home-delivery"
                                        checked={
                                            formData.deliveryOption ===
                                            'home-delivery'
                                        }
                                        onChange={(
                                            e: FormEvent<HTMLButtonElement>
                                        ) =>
                                            setFormData({
                                                ...formData,
                                                deliveryOption:
                                                    e.currentTarget.value,
                                            })
                                        }
                                    />
                                    Home Delivery
                                </Label>
                            </RadioGroup>
                        </div>
                        <Recaptcha onVerify={handleCaptchaVerify} />
                    </form>
                </CardContent>
                <CardFooter>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button type="submit">Place Order</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>
                                    Confirm Order
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                    Please review the following information and
                                    confirm your order:
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>Name:</span>
                                    <span>{formData.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Address:</span>
                                    <span>{formData.address}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Email:</span>
                                    <span>{formData.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>City:</span>
                                    <span>{formData.city}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Zip Code:</span>
                                    <span>{formData.zip}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Delivery Option:</span>
                                    <span>{formData.deliveryOption}</span>
                                </div>
                            </div>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                    onClick={() => {
                                        console.log(
                                            'Order confirmed:',
                                            formData
                                        )
                                    }}
                                >
                                    Confirm
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </CardFooter>
            </Card>
        </div>
    )
}
