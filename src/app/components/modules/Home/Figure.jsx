import Link from "next/link";

export default function Figure({ img, title }) {
    return (
        <figure className="group">
            <img src={img} alt="sunglasses" className="w-full h-full object-cover group-hover:scale-[.97] brightness-[85%] group-hover:brightness-75 transition-all duration-300" />
            <h3 className="absolute bottom-16 right-14 text-white text-3xl font-semibold group-hover:bottom-28 transition-all duration-200">{title}</h3>
            <Link href='/shop' className="absolute bottom-12 right-14 text-white opacity-0 group-hover:bottom-16 group-hover:opacity-100 transition-all duration-200 underline underline-offset-4">محصولات</Link>
        </figure>
    )
}