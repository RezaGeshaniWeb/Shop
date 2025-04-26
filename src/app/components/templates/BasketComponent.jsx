'use client'

import useBasket from '@/app/store/Store';
import { useEffect, useState } from 'react'
import BasketProducts from '../modules/Basket/BasketProducts';
import BasketForm from '../modules/Basket/BasketForm';

export default function BasketComponent() { 
    const { data } = useBasket()
    const [totalPrice, setTotalPrice] = useState(0)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        const calculatedTotalPrice = data.reduce((acc, val) => {
            const price = parseFloat(val.price.replaceAll('.', '')) || 0
            const quantity = parseInt(val.quantity) || 0
            return acc + (price * quantity)
        }, 0)
        setTotalPrice(calculatedTotalPrice)
    }, [data])

    const formattedTotalPrice = totalPrice.toLocaleString()

    return (
        <section className='2xl:container mx-auto p-4 lg:p-10 w-full flex flex-col justify-center items-center lg:flex-row lg:items-start'>
            <BasketProducts />
            <BasketForm data={formattedTotalPrice} />
        </section>
    )
}