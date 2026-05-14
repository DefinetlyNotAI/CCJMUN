import {useState} from "react"
import {Link} from "react-router-dom"
import {committees, difficultyColors} from "@/data/committees"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {ChevronRight, Download, UserPlus, Users} from "lucide-react"
import {CommitteeFilter} from "@/components/CommitteeFilter"
import type {DifficultyLevel, TCommitteeFilter} from "@/types";


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
        <div className="min-h-screen pt-16">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden bg-[#7c3aed]">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        CCJMUN 2026
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Committees
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        Eight meticulously crafted committees addressing the world's most pressing challenges. Find your
                        arena, represent your nation, change the world.
                    </p>
                </div>
            </section>

            {/* Legend */}
            <section className="bg-[#6d28d9] border-b border-purple-800 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-3">
                        <span
                            className="text-purple-100 text-sm tracking-wider uppercase font-medium mr-2">Difficulty:</span>
                        {(["Beginner", "Intermediate", "Advanced", "Expert"] as DifficultyLevel[]).map((level) => (
                            <span
                                key={level}
                                className={`text-xs font-semibold px-3 py-1 rounded-full border ${difficultyColors[level]}`}
                            >
                {level}
              </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Committees Grid */}
            <section className="py-16 bg-[#7c3aed]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <CommitteeFilter onFilterChange={setFilters}/>
                    {filteredCommittees.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {filteredCommittees.map((committee) => (
                                <Link to={`/committees/${committee.id}`} key={committee.id}>
                                    <Card
                                        className="overflow-hidden border border-purple-200 hover:border-[#f2b652]/40 hover:shadow-xl transition-all duration-300 bg-white group flex flex-col cursor-pointer"
                                    >
                                    {/* Card Header Band */}
                                    <div className="h-2 bg-[#6d28d9] group-hover:bg-[#f2b652] transition-colors"/>

                                    <CardHeader className="pb-3 pt-6 px-6 flex-shrink-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                            className="bg-[#6d28d9] text-[#f2b652] text-xs font-bold px-3 py-1 rounded-sm tracking-widest uppercase">
                          {committee.abbreviation}
                        </span>
                                                    <span
                                                        className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyColors[committee.difficulty]}`}
                                                    >
                          {committee.difficulty}
                        </span>
                                                </div>
                                                <h3 className="text-[#6d28d9] font-bold text-lg leading-snug">{committee.name}</h3>
                                            </div>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs shrink-0">
                                                <Users className="size-3.5"/>
                                                <span>{committee.size}</span>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="px-6 pb-6 flex flex-col flex-grow">
                                        <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow">{committee.description}</p>

                                        {/* Topics */}
                                        <div className="space-y-3 mb-6">
                                            <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold">Topics</p>
                                            <div className="flex items-start gap-2">
                                                <ChevronRight className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                                <p className="text-[#6d28d9] text-sm font-medium leading-snug">{committee.topic1}</p>
                                            </div>
                                            {committee.topic2 && (
                                                <div className="flex items-start gap-2">
                                                    <ChevronRight className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                                    <p className="text-[#6d28d9] text-sm font-medium leading-snug">{committee.topic2}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3 flex-wrap mt-auto">
                                            {committee.backgroundGuideUrl === "CONFIDENTIAL" ? (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                    className="border-gray-200 text-gray-400 tracking-wider text-xs font-semibold uppercase cursor-not-allowed"
                                                    title="Background guide is classified"
                                                >
                                                    <Download className="size-3.5 mr-1.5"/>
                                                    Classified
                                                </Button>
                                            ) : committee.backgroundGuideUrl ? (
                                                <a href={committee.backgroundGuideUrl} download>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-[#6d28d9] text-[#6d28d9] hover:bg-[#6d28d9] hover:text-white tracking-wider text-xs font-semibold uppercase"
                                                    >
                                                        <Download className="size-3.5 mr-1.5"/>
                                                        Background Guide
                                                    </Button>
                                                </a>
                                            ) : (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    disabled
                                                    className="border-gray-200 text-gray-400 tracking-wider text-xs font-semibold uppercase"
                                                >
                                                    <Download className="size-3.5 mr-1.5"/>
                                                    Coming Soon
                                                </Button>
                                            )}
                                            <Link to="/registration">
                                                <Button
                                                    size="sm"
                                                    className="bg-[#f2b652] text-[#6d28d9] hover:bg-[#f2b652]/90 tracking-wider text-xs font-semibold uppercase"
                                                >
                                                    <UserPlus className="size-3.5 mr-1.5"/>
                                                    Register
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-white/70 text-lg">No committees match your search criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-[#6d28d9]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Found Your Committee?</h2>
                    <p className="text-white/60 mb-8 text-lg">
                        Register now to secure your position and begin your preparation journey.
                    </p>
                    <Link to="/registration">
                        <Button
                            className="bg-[#f2b652] text-[#6d28d9] hover:bg-[#f2b652]/90 font-semibold tracking-wider uppercase px-10 py-5 text-base">
                            Register for CCJMUN 2026
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
