import ShopPage from "../components/templates/ShopPage";

async function getData() {
    const res = await fetch('https://680a04fa1f1a52874cdece8c.mockapi.io/products')
    const data = await res.json()
    return data
}

export default async function Shop() {
    const data = await getData()

    return <ShopPage data={data} />
}