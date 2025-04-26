import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full h-44 border-t flex justify-center items-center bg-[#fcfcfc]">
            <p className="text-lg lg:text-xl">
                Developed By&nbsp;
                <Link href='https://github.com/RezaGeshaniWeb' className="text-xl lg:text-2xl underline underline-offset-4 hover:text-slate-800">
                    Reza Geshani
                </Link>
            </p>
        </footer>
    )
}