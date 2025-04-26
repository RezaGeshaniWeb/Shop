'use client'

import { useEffect, useState } from "react"
import Product from "./Product"

export default function Products({ filterData, data }) {
    const [filterResult, setFilterResult] = useState(data || [])

    useEffect(() => {
        if (data) {
            const filteredItems = data.filter(item =>
                item.title.toLowerCase().includes(filterData.toLowerCase())
            )
            setFilterResult(filteredItems)
        }
    }, [filterData, data])

    return (
        <div className="flex items-center justify-center xl:justify-around gap-10 flex-wrap pb-24">
            {filterResult.length > 0 ? (
                filterResult.map(val => <Product key={val.id} data={val} />)
            ) : (
                <p className="text-gray-600 text-center text-2xl mt-10 mx-auto">مقداری یافت نشد</p>
            )}
        </div>
    )
}