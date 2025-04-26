import Link from "next/link";

export default function BlogPage({ data }) {
    return (
        <section className="2xl:container mx-auto px-4 py-6 lg:p-10">
            <p className="flex items-center gap-3 mb-16">
                <Link href='/'>خانه</Link>
                &gt;
                <span className="text-gray-500">مقالات</span>
            </p>
            <h1 className="text-center text-gray-800 mb-14 text-5xl">Blogs</h1>
            <div className="flex flex-wrap gap-14 justify-around mb-14">
                {
                    data && data.map(val => {
                        return (
                            <div key={val.id} className="w-[350px] border border-gray-300 shadow-2xl p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold text-end mb-10">{val.title.slice(0, 20)}</h3>
                                <p className="text-lg text-end">{val.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
