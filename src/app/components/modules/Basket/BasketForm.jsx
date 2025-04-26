import { ShoppingBagOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function BasketForm({ data }) {
    return (
        <>
            {
                data == 0
                    ?
                    <div className="w-full flex flex-col gap-7 justify-center items-center mt-5">
                        <ShoppingBagOutlined sx={{ fontSize: 55, color: 'gray' }} />
                        <h2 className="text-3xl text-gray-600">سبد خرید شما در حال حاضر خالی است.</h2>
                        <Link className="text-white bg-gray-800 hover:bg-black cursor-pointer p-3" href='/shop'>بازگشت به فروشگاه</Link>
                    </div>
                    :
                    <div className="w-full lg:w-[40%] lg:mt-8 lg:py-8 lg:px-9">
                        <h3 className="text-gray-600 mb-8 font-semibold">مجموع کل سبد خرید</h3>
                        <div className="flex items-center justify-between text-gray-600 border-b border-b-gray-200 pb-6 mb-10">
                            <span className="text-sm">قیمت کل</span>
                            <b>{data} تومان</b>
                        </div>
                        <p className="text-gray-400 text-end text-sm border-b border-b-gray-200 pb-6 mb-10">هزینه حمل در صفحه پرداخت قابل مشاهده میباشد</p>
                        <div className="flex items-center justify-between text-gray-600 mb-10">
                            <span className="text-sm">مجموع</span>
                            <b>{(Number(data.replaceAll(',', '')) + 50000).toLocaleString()} تومان</b>
                        </div>
                        <div className="w-full flex mb-6">
                            <input type="text" placeholder="کد تخفیف :" className="w-[80%] border border-gray-300 p-2 outline-none text-gray-500" />
                            <button className="w-[20%] bg-gray-300 flex p-2 justify-center items-center text-gray-700 cursor-pointer text-sm">اعمال کردن</button>
                        </div>
                        <button className="flex w-full justify-center items-center text-white bg-gray-800 hover:bg-black cursor-pointer p-4 text-sm">اقدام به پرداخت</button>
                    </div>
            }
        </>
    )
}