import Link from "next/link"

export default function Product({ data }) {
    const { id, img1, img2, title, price } = data

    return (
        <Link href={`/product/${id}`} className="w-[310px] h-[480px] cursor-pointer border border-slate-200 p-3">
            <figure className="w-full h-[360px] *:w-full *:h-full *:object-cover relative">
                <img src={img2} alt={title} />
                <img src={img1} alt={title} className="absolute top-0 left-0 hover:opacity-0 transition-all duration-500" />
            </figure>
            <p className="mt-6 mb-4">{title}</p>
            <div className="flex items-center justify-between">
                <span className="text-gray-500">{price} تومان</span>
                <button className="text-sm py-0.5 px-1 text-gray-800 bg-slate-400 rounded-sm cursor-pointer">مشاهده جزییات</button>
            </div>
        </Link>
    )
}