import Link from "next/link";

export default function BlogPage({ data }) {
    return (
        <section className="2xl:container mx-auto px-4 py-6 lg:p-10">
            <p className="flex items-center gap-3 mb-12">
                <Link href='/'>خانه</Link>
                &gt;
                <span className="text-gray-500">مقالات</span>
            </p>
            <h1 className="text-center text-gray-800 mb-14 text-5xl">مقالات</h1>
            <div className="flex flex-wrap gap-14 justify-around mb-14">
                {
                    data && data.map(val => {
                        return (
                            <div key={val.id} className="w-[350px] border border-gray-300 shadow-2xl p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-8">{val.title}</h3>
                                <div className="flex items-center justify-between mb-8 text-gray-500">
                                    <span>نویسنده : {val.author}</span>
                                    <span>{val.date}</span>
                                </div>
                                <p className="text-gray-500">{val.desc}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
