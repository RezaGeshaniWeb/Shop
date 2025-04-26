import Pro from "../../components/templates/DetailsProducts"

export async function generateStaticParams() {
    const res = await fetch(`https://680a04fa1f1a52874cdece8c.mockapi.io/products`)
    const data = await res.json()
    const params = data.map(val => ({ productId: String(val.id) }))
    return params
}

async function getData(id) {
    const res = await fetch(`https://680a04fa1f1a52874cdece8c.mockapi.io/products/${id}`)
    const data = await res.json()
    return data
}

export default async function ProductDetail({ params }) {
    const id = await params.productId
    const data = await getData(id)

    return <Pro data={data} />
}