'use client'

import Images from "../modules/Details/Images"
import Descriptions from "../modules/Details/Descriptions"

export default function DetailsProducts({ data }) {
    return (
        <section className="2xl:container mx-auto flex flex-col lg:flex-row p-8">
            <Images data={data} />
            <Descriptions data={data} />
        </section>
    )
}