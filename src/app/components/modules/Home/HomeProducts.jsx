import HomeSlider from "./HomeSlider";

async function getData() {
    const res = await fetch('https://680a04fa1f1a52874cdece8c.mockapi.io/products')
    const data = await res.json()
    return data
}

export default async function HomeProducts() {
    const productsData = await getData()
    
    return (
        <section className="w-full h-screen p-10 bg-[#222222]">
            <h2 className="text-center text-3xl text-white underline underline-offset-[15px] mt-4 mb-16">پرفروش ترین</h2>
            <HomeSlider data={productsData} />
        </section>
    )
}