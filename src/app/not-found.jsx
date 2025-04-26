import Link from "next/link";

export default function notFound() {
    return (
        <section className="flex flex-col justify-center items-center gap-10 w-full h-[80vh]">
            <h2 className="text-gray-300 text-9xl italic">404</h2>
            <h3 className="text-gray-500 text-6xl">Page Not Found</h3>
            <p className="text-gray-400 text-lg">It looks like nothing was found at this location. Try another link or click the button below</p>
            <Link className="text-lg underline underline-offset-4" href='/'>HOME</Link>
        </section>
    )
}
