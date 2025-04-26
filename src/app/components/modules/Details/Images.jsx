'use client'

import { useState } from "react"

export default function Images({ data }) {
    const { title, img1, img2, img3, img4 } = data

    const [mainImg, setMainImg] = useState(img1)

    return (
        <div className="mb-10 w-full lg:w-[60%] lg:flex lg:gap-5">
            <figure className="lg:w-[80%]">
                <img src={mainImg} alt={title} className="w-full h-[550px] object-cover rounded-lg" />
            </figure>
            <div className="flex gap-4 justify-between my-4 lg:my-0 lg:flex-col lg:justify-start lg:w-[20%] *:cursor-pointer *:object-cover *:w-[100px] *:h-[100px] *:rounded-lg">
                <img src={img1} alt={title} onClick={() => setMainImg(img1)} />
                <img src={img2} alt={title} onClick={() => setMainImg(img2)} />
                <img src={img3} alt={title} onClick={() => setMainImg(img3)} />
                <img src={img4} alt={title} onClick={() => setMainImg(img4)} />
            </div>
        </div>
    )
}
