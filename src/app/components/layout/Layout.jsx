import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className="w-full min-h-screen mt-12 lg:mt-24 bg-[#f7f7f7]">
                {children}
            </main>
            <Footer />
        </>
    )
}