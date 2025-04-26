import Link from "next/link";
import AccordionExpandDefault from "../modules/Questions/AccordionQuestions";

export default function QuestionsPage() {
    return (
        <section className="2xl:container mx-auto px-4 py-6 lg:p-10">
            <p className="flex items-center gap-3 mb-14">
                <Link href='/'>خانه</Link>
                &gt;
                <span className="text-gray-500">سوالات متداول</span>
            </p>
            <div>
                <h1 className="text-center text-4xl mb-10">سوالات متداول</h1>
                <AccordionExpandDefault />
            </div>
        </section>
    )
}
