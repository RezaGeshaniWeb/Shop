'use client'

import useBasket from "@/app/store/Store"

export default function BasketProducts() {
    const { data, del, plus, minus } = useBasket()

    return (
        <div className="w-full lg:w-[60%] mb-10">
            <h1 className="text-4xl mb-7 text-gray-800">سبد خرید</h1>
            <ul className="w-full border border-gray-300 rounded-lg">
                <li className="w-full flex items-center p-4 border-b border-b-gray-300">
                    <span className="flex w-[45%]">محصول</span>
                    <span className="flex w-[20%] justify-center">قیمت</span>
                    <span className="flex w-[20%] justify-center">تعداد</span>
                    <span className="flex w-[15%] justify-center">قیمت کل</span>
                </li>
                {
                    data && data.map(val => (
                        <li key={val.id} className="w-full flex items-center p-2 lg:p-4 border-b border-b-gray-300">
                            <div className="w-[45%] flex items-center gap-3">
                                <img src={val.img1} alt={val.title} className="w-[90px] h-[100px] object-cover" />
                                <div>
                                    <p className="text-gray-600 mb-4">{val.title}</p>
                                    <button className="bg-gray-600 text-white px-1 text-sm cursor-pointer hover:bg-red-500" onClick={() => del(val.id)}>پاک کردن</button>
                                </div>
                            </div>

                            <p className="flex w-[20%] justify-center text-gray-600 text-sm lg:text-base">{val.price} تومان</p>

                            <div className="flex w-[20%] justify-center items-center *:cursor-pointer *:flex *:w-8 *:h-8 *:justify-center *:items-center *:border *:border-gray-200 *:text-gray-500">
                                <button onClick={() => minus(val.id)}>-</button>
                                <span className="pt-1">{val.quantity}</span>
                                <button onClick={() => plus(val.id)}>+</button>
                            </div>

                            <p className="flex w-[15%] justify-center text-gray-600 text-sm lg:text-base">{(val.price.replaceAll('.', '') * val.quantity).toLocaleString()} تومان</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}