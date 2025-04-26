import Link from "next/link";

export default function HomeBanner() {
    return (
        <section className="w-full h-screen flex justify-center items-center mb-10">
            <div className="w-[95%] h-full bg-[url('/images/ceecee.webp')] bg-cover bg-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-30"></div>
                <div className="w-full h-full flex flex-col items-center justify-center text-center relative z-40">
                    <h4 className="font-bold text-white text-lg mb-7">CEECEE</h4>
                    <h1 className="text-5xl lg:text-7xl leading-16 lg:leading-24 text-white font-medium mb-10">وقتی نگاه،<br /> امضای توست</h1>
                    <p className="text-lg text-white mb-10">جدیدترین عینک‌های آفتابی؛ آینده را امروز ببین</p>
                    <Link href='/shop' className="text-lg text-white underline underline-offset-4 hover:no-underline transition-all duration-200">فروشگاه</Link>
                </div>
            </div>
        </section>
    )
}