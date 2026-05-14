import {useState} from "react"
import {faqs} from "@/data/faqs"
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion"
import {Badge} from "@/components/ui/badge"
import {Input} from "@/components/ui/input"
import {Search} from "lucide-react"
import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import type {Category, FAQ, FAQGroup} from "@/types";

export function FAQs() {
    const [search, setSearch] = useState("")
    const [activeCategory, setActiveCategory] = useState<Category>("All")

    const categories: Category[] = ["All", ...Array.from(new Set(faqs.map((f: FAQ) => f.category)))]

    const filtered = faqs.filter((faq) => {
        const matchesSearch =
            search === "" ||
            faq.question.toLowerCase().includes(search.toLowerCase()) ||
            faq.answer.toLowerCase().includes(search.toLowerCase())
        const matchesCategory = activeCategory === "All" || faq.category === activeCategory
        return matchesSearch && matchesCategory
    })

    const grouped: FAQGroup[] = categories
        .filter((cat) => cat !== "All")
        .map((cat): FAQGroup => ({
            category: cat,
            items: filtered.filter((f) => f.category === cat),
        }))
        .filter((g) => g.items.length > 0)

    return (
        <div className="min-h-screen pt-16">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden bg-[#2b174f]">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        Help Center
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Frequently Asked Questions
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about CCJMUN 2026.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative bg-gray-50">
                {/* Sticky Search & Filter */}
                <div className="bg-white border-b border-gray-100 py-8 sticky top-16 z-30 shadow-sm">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                                <Input
                                    placeholder="Search questions..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="pl-10 border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors border ${
                                            activeCategory === cat
                                                ? "bg-[#2b174f] text-white border-[#2b174f]"
                                                : "bg-transparent text-gray-500 border-gray-200 hover:border-[#2b174f] hover:text-[#2b174f]"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Content */}
                <div className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        {filtered.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-400 text-lg">
                                    No questions match your search.
                                </p>

                                <button
                                    onClick={() => {
                                        setSearch("");
                                        setActiveCategory("All");
                                    }}
                                    className="mt-4 text-[#f2b652] text-sm underline hover:no-underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        ) : (
                            <div className="space-y-12">
                                {(activeCategory === "All"
                                        ? grouped
                                        : grouped.filter(
                                            (g) => g.category === activeCategory
                                        )
                                ).map(({ category, items }) => (
                                    <div key={category}>
                                        <div className="flex items-center gap-3 mb-6">
                                            <Badge
                                                variant="outline"
                                                className="border-[#f2b652] text-[#2b174f] bg-[#f2b652]/10 text-xs tracking-widest uppercase font-semibold px-3 py-1"
                                            >
                                                {category}
                                            </Badge>

                                            <span className="text-gray-300 text-sm">
                                    {items.length} question
                                                {items.length !== 1 ? "s" : ""}
                                </span>
                                        </div>

                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="space-y-2"
                                        >
                                            {items.map((faq, i) => (
                                                <AccordionItem
                                                    key={i}
                                                    value={`${category}-${i}`}
                                                    className="bg-white border border-gray-100 rounded-lg overflow-hidden px-0 data-[state=open]:border-[#f2b652]/40 data-[state=open]:shadow-sm transition-all"
                                                >
                                                    <AccordionTrigger className="px-6 py-4 text-left text-[#2b174f] font-semibold text-sm hover:no-underline hover:text-[#2b174f] leading-snug">
                                                        {faq.question}
                                                    </AccordionTrigger>

                                                    <AccordionContent className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">
                                                        {faq.answer}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Still have questions */}
            <section className="py-16 bg-[#2b174f]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h2>
                    <p className="text-white/60 mb-8">
                        Can't find what you're looking for? Our team is happy to help.
                    </p>
                    <Link to="/contact">
                        <Button
                            className="bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 font-semibold tracking-wider uppercase px-8">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
