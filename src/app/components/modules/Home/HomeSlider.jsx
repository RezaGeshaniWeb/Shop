"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import Link from 'next/link';

export default function HomeSlider({ data }) {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={false}
                // pagination={{
                //     clickable: true,
                // }}
                breakpoints={{
                    1024: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    0: {
                        slidesPerView: 1,
                    }
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper h-[75%] select-none"
            >
                {
                    data && data.slice(0, 10).map(val => {
                        return (
                            <SwiperSlide key={val.id} className='p-5 bg-white text-slate-800'>
                                <Link href={`/product/${val.id}`}>
                                    <img src={val.img1} alt={val.title} className='w-full h-3/4 object-cover' />
                                    <p className='mt-4 mb-5 text-lg'>{val.title}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500">{val.price} تومان</span>
                                        <button className="text-sm py-0.5 px-1 text-gray-800 bg-slate-400 rounded-sm cursor-pointer">مشاهده جزییات</button>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </>
    )
}
