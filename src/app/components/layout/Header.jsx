'use client'

import Image from "next/image";
import Link from "next/link";
import { ShoppingBagOutlined } from "@mui/icons-material";
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import useBasket from "@/app/store/Store";
import { useState } from "react";
import Offcanvas from "./Offcanvas";

export default function Header() {
    const { data } = useBasket()
    const [isOpen, setIsOpen] = useState(false)

    const handleOffCanvas = () => setIsOpen(prev => !prev)

    return (
        <>
            <header className="w-full h-12 lg:h-24 bg-[#fcfcfc] fixed top-0 z-50 select-none">
                <div className="2xl:container mx-auto w-full h-full flex items-center justify-between px-6 lg:px-10">
                    <nav className="w-1/3">
                        <button onClick={handleOffCanvas} className="cursor-pointer lg:hidden"><SortOutlinedIcon /></button>

                        <ul className="hidden lg:flex lg:gap-8 *:hover:text-slate-700 *:transition-all *:duration-200">
                            <li><Link href='/'>صفحه نخست</Link></li>
                            <li><Link href='/shop'>فروشگاه</Link></li>
                            <li><Link href='/blogs'>مقالات</Link></li>
                            <li><Link href='/questions'>سوالات متداول</Link></li>
                        </ul>
                    </nav>
                    <div className="w-1/3 flex items-center justify-center">
                        <Link href='/'>
                            <Image src='/images/LOGO.svg' width={90} height={100} alt="logo" className="lg:w-[120px] lg:h-[110px]" />
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-8 w-1/3">
                        <Link href='/basket' className="flex items-center">
                            <ShoppingBagOutlined sx={{ fontSize: 27, color: '#22262e' }} />
                            <span className="w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-[12px]">{data.length}</span>
                        </Link>
                    </div>
                </div>
            </header>
            <Offcanvas isOpen={isOpen} handleOffCanvas={handleOffCanvas} />
        </>
    )
}