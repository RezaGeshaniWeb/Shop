'use client'

import { Close } from "@mui/icons-material";
import Link from "next/link";

export default function Offcanvas({ isOpen, handleOffCanvas }) {
    return (
        <ul className={`w-[280px] h-full fixed top-0 right-0 z-50 bg-[#f7f7f7] ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
            <div className="flex items-center justify-between p-5 border-b border-gray-200">
                <img src="/images/LOGO.svg" alt="" className="w-28" />
                <button onClick={handleOffCanvas} className="border border-gray-200 p-1 rounded-lg cursor-pointer">
                    <Close fontSize="medium" />
                </button>
            </div>
            <ul className="flex flex-col gap-8 *:text-slate-900 *:text-lg *:hover:text-slate-500 *:transition-all *:duration-200 p-5">
                <li><Link href='/'>صفحه نخست</Link></li>
                <li><Link href='/shop'>فروشگاه</Link></li>
                <li><Link href='/questions'>سوالات متداول</Link></li>
                <li><Link href='/blogs'>مقالات</Link></li>
            </ul>
        </ul>
    )
}
