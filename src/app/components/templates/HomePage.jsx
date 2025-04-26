import HomeBanner from "../modules/Home/HomeBanner";
import HomeFigures from "../modules/Home/HomeFigures";
import HomeProducts from "../modules/Home/HomeProducts";

import { images } from "@/app/constant/images";

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <HomeFigures img1={images[0]} title1='عینک آفتابی زنانه' img2={images[1]} title2='عینک آفتابی مردانه' />
            <HomeProducts />
            <HomeFigures img1={images[2]} title1='فریم طبی زنانه' img2={images[3]} title2='فریم طبی مردانه' />
        </>
    )
}