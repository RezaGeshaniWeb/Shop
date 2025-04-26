'use client'

import { SearchOutlined } from "@mui/icons-material";
import Link from "next/link";
import Products from "../modules/Shop/Products";
import { useState } from "react";

export default function ShopPage({ data }) {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="2xl:container mx-auto px-4 py-6 lg:p-10">
            <p className="flex items-center gap-3 mb-8">
                <Link href='/'>خانه</Link>
                &gt;
                <span className="text-gray-500">فروشگاه</span>
            </p>
            <div className="flex items-center justify-between mb-16">
                <h1 className="text-5xl text-[#484f56]">فروشگاه</h1>
                <div className="flex items-center bg-[#f4f4f4] h-12 pr-2 lg:pl-5">
                    <SearchOutlined />
                    <input spellCheck='false' value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder="جستجو" className="h-full block p-2 outline-none" />
                </div>
            </div>
            <Products filterData={searchValue} data={data} />
        </div>
    )
}