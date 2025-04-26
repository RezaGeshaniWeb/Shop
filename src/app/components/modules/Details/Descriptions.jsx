'use client'

import React, { useState } from 'react';
import useBasket from "@/app/store/Store";
import Link from "next/link";
import CustomizedAccordions from "./AccordionMenu";
import { Snackbar, Button, Slide } from '@mui/material';

export default function Descriptions({ data }) {
    const { title, price, category } = data
    const { addToBasket } = useBasket()
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [message, setMessage] = useState('')

    const handleAddToBasket = () => {
        const added = addToBasket(data)
        if (added) setMessage('کالا به سبد خرید اضافه شد')
        else setMessage('کالا در سبد خرید وجود دارد')
        setSnackbarOpen(true)
    }

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return
        setSnackbarOpen(false)
    }

    const action = (
        <Button color="primary" size="large" onClick={handleCloseSnackbar}>
            بستن
        </Button>
    )

    return (
        <div className="mb-10 w-full lg:w-[40%]">
            <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm flex gap-3 items-center">
                    <span>عینک آفتابی</span>
                    <span>&gt;</span>
                    <span>عینک آفتابی {category === 'man' ? 'مردانه' : 'زنانه'}</span>
                </p>
                <Link href='/shop' className="px-4 py-1 bg-slate-600 text-white rounded-full">بازگشت به فروشگاه</Link>
            </div>
            <h2 className="text-3xl mb-4 text-gray-600">{title}</h2>
            <p className="text-gray-600 mb-4">{price} تومان</p>
            <p className="text-green-500 mb-6">&#10003; موجود در انبار</p>
            <div className="flex items-center gap-8 mb-8">
                <button
                    className="cursor-pointer py-2 px-4 rounded-full bg-gray-900 border border-gray-900 text-white"
                    onClick={handleAddToBasket}
                >
                    افزودن به سبد خرید
                </button>
                <span>|</span>
                <button className="cursor-pointer py-2 px-4 rounded-full bg-white border border-gray-900 text-gray-900"><Link href='/basket'>مشاهده سبد خرید</Link></button>
            </div>
            <CustomizedAccordions />
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={message}
                action={action}
                TransitionComponent={Slide}
                TransitionProps={{ direction: "up" }}
            />
        </div>
    )
}