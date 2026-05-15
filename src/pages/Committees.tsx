import {useState} from "react"
import {Link} from "react-router-dom"
import {committees, difficultyColors} from "@/data/committees"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {ChevronRight, Download, UserPlus, Users} from "lucide-react"
import {CommitteeFilter} from "@/components/CommitteeFilter"
import type {TCommitteeFilter} from "@/types";


export function Committees() {
    const [filters, setFilters] = useState<TCommitteeFilter>({
        search: '',
        difficulty: null,
    })

    const filteredCommittees = committees.filter((committee) => {
        const matchesSearch =
            committee.name.toLowerCase().includes(filters.search.toLowerCase()) ||
            committee.abbreviation.toLowerCase().includes(filters.search.toLowerCase())
        const matchesDifficulty = !filters.difficulty || committee.difficulty === filters.difficulty
        return matchesSearch && matchesDifficulty
    })

    return (
        <div className="min-h-screen pt-16 bg-white">
            {/* Hero */}
            <section className="relative py-28 md:py-32 overflow-hidden bg-[#2b174f]">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        CCJMUN 2026
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Committees
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Eight meticulously crafted committees addressing the world's most pressing challenges. Find your
                        arena, represent your nation, change the world.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="pt-16 pb-0 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-8">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                            Committee Directory
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#2b174f] mb-4">
                            Explore the conference lineup
                        </h2>

                        <p className="text-gray-600 leading-relaxed text-lg">
                            Use filters to find the committee that matches your experience level and interests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sticky Filter */}
            <section className="relative bg-gray-50">
                <div className="bg-white border-b border-gray-100 py-8 sticky top-16 z-30 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <CommitteeFilter onFilterChange={setFilters}/>
                    </div>
                </div>

                {/* Committees Grid */}
                <div className="py-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {filteredCommittees.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
                            {filteredCommittees.map((committee) => (
                                <Card
                                    key={committee.id}
                                    className="overflow-hidden border border-gray-100 bg-white group flex h-full min-h-132 flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#f2b652]/40"
                                >
                                    <div className="h-2 bg-[#2b174f] transition-colors group-hover:bg-[#f2b652]"/>

                                    <CardHeader className="pb-4 pt-6 px-6 shrink-0">
                                        <div className="flex items-start justify-between gap-4 flex-wrap">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-3 flex-wrap">
                                                    <span className="bg-[#2b174f] text-[#f2b652] text-xs font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
                                                        {committee.abbreviation}
                                                    </span>
                                                    <span
                                                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColors[committee.difficulty]}`}
                                                    >
                                                        {committee.difficulty}
                                                    </span>
                                                </div>
                                                <h3 className="text-[#2b174f] font-bold text-xl leading-snug">
                                                    {committee.name}
                                                </h3>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs shrink-0">
                                                <Users className="size-3.5"/>
                                                <span>{committee.size}</span>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="px-6 pb-6 flex flex-col grow">
                                        <p className="text-gray-600 text-sm leading-relaxed mb-5 grow line-clamp-4">
                                            {committee.description}
                                        </p>

                                        {/* Topics */}
                                        <div className="space-y-3 mb-6">
                                            <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold">Topics</p>
                                            <div className="flex items-start gap-2">
                                                <ChevronRight className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                                <p className="text-[#2b174f] text-sm font-medium leading-snug">
                                                    {committee.topic1}
                                                </p>
                                            </div>
                                            {committee.topic2 && (
                                                <div className="flex items-start gap-2">
                                                    <ChevronRight className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                                    <p className="text-[#2b174f] text-sm font-medium leading-snug">
                                                        {committee.topic2}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                            {committee.backgroundGuideUrl === "CONFIDENTIAL" ? (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                    className="w-full sm:w-auto border-gray-200 text-gray-400 tracking-wider text-xs font-semibold uppercase cursor-not-allowed"
                                                    title="Background guide is classified"
                                                >
                                                    <Download className="size-3.5 mr-1.5"/>
                                                    Classified
                                                </Button>
                                            ) : committee.backgroundGuideUrl ? (
                                                <Button
                                                    asChild
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full sm:w-auto border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f]! hover:text-white! transition-colors duration-200 tracking-wider text-xs font-semibold uppercase"                                                >
                                                    <a href={committee.backgroundGuideUrl} download>
                                                        <Download className="size-3.5 mr-1.5"/>
                                                        Background Guide
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                    className="w-full sm:w-auto border-gray-200 text-gray-400 tracking-wider text-xs font-semibold uppercase"
                                                >
                                                    <Download className="size-3.5 mr-1.5"/>
                                                    Coming Soon
                                                </Button>
                                            )}

                                            <Button
                                                asChild
                                                size="sm"
                                                variant="outline"
                                                className="w-full sm:w-auto border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f]! hover:text-white! transition-colors duration-200 tracking-wider text-xs font-semibold uppercase"                                            >
                                                <Link to={`/committees/${committee.id}`}>
                                                    <ChevronRight className="size-3.5 mr-1.5"/>
                                                    View Details
                                                </Link>
                                            </Button>

                                            <Button
                                                asChild
                                                size="sm"
                                                className="w-full sm:w-auto bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 tracking-wider text-xs font-semibold uppercase"
                                            >
                                                <Link to="/registration">
                                                    <UserPlus className="size-3.5 mr-1.5"/>
                                                    Register
                                                </Link>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg">No committees match your search criteria.</p>
                        </div>
                    )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#2b174f]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Found Your Committee?</h2>
                    <p className="text-white/65 mb-8 text-lg">
                        Register now to secure your position and begin your preparation journey.
                    </p>
                    <Button
                        asChild
                        className="bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 font-semibold tracking-wider uppercase px-10 py-5 text-base"
                    >
                        <Link to="/registration">
                            Register for CCJMUN 2026
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
