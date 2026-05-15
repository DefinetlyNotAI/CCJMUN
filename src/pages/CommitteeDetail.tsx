import { useParams, useNavigate, Link } from "react-router-dom"
import { committees, difficultyColors } from "@/data/committees"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, User, UserPlus } from "lucide-react"

export function CommitteeDetail() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const committee = committees.find((c) => c.id === id)

    if (!committee) {
        return (
            <div className="min-h-screen pt-16 bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#2b174f] mb-4">Committee Not Found</h1>
                    <Button
                        onClick={() => navigate("/committees")}
                        variant="outline"
                                            className="text-[#2b174f] border-[#2b174f] hover:bg-[#2b174f]/5 hover:text-[#f2b652]"
                    >
                        <ChevronLeft className="size-4 mr-2" />
                        Back to Committees
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-16 bg-white">
            {/* Navigation */}
            <div className="bg-white border-b border-gray-100 py-4 sticky top-16 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => navigate("/committees")}
                        className="flex items-center gap-2 text-[#2b174f] hover:text-[#f2b652] transition-colors font-semibold uppercase tracking-wider text-sm"
                    >
                        <ChevronLeft className="size-4" />
                        Back to Committees
                    </button>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden bg-[#2b174f]">
                            <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: "url('/bg.jpeg')"}} />
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex items-start justify-between gap-6 mb-8">
                        <div>
                            <span className="bg-[#2b174f] text-[#f2b652] text-xs font-bold px-4 py-2 rounded-sm tracking-widest uppercase inline-block mb-4">
                                {committee.abbreviation}
                            </span>
                            <h1 className="text-5xl font-bold text-white mb-4">{committee.name}</h1>
                            <div className="flex items-center gap-4 flex-wrap">
                                <span
                                    className={`text-sm font-semibold px-3.5 py-1.5 rounded-full border ${difficultyColors[committee.difficulty]}`}
                                >
                                    {committee.difficulty}
                                </span>
                                <span className="text-white/75 text-lg">
                                    {committee.size}
                                </span>
                            </div>
                        </div>
                    </div>

                    <p className="text-white/85 text-lg leading-relaxed max-w-3xl">
                        {committee.description}
                    </p>
                </div>
            </section>

            {/* Topics Section */}
            <section className="py-12 bg-white border-t border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-[#2b174f] mb-8">Discussion Topics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-white border-gray-100 hover:border-[#f2b652]/40 transition-colors">
                            <CardContent className="pt-6">
                                <div className="flex gap-3">
                                    <ChevronRight className="size-5 text-[#f2b652] shrink-0 mt-0.5" />
                                    <div>
                                                                <h3 className="font-semibold text-[#2b174f] mb-2">Topic 1</h3>
                                        <p className="text-gray-600 leading-relaxed">{committee.topic1}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {committee.topic2 && (
                            <Card className="bg-white border-gray-100 hover:border-[#f2b652]/40 transition-colors">
                                <CardContent className="pt-6">
                                    <div className="flex gap-3">
                                        <ChevronRight className="size-5 text-[#f2b652] shrink-0 mt-0.5" />
                                        <div>
                                                                        <h3 className="font-semibold text-[#2b174f] mb-2">Topic 2</h3>
                                            <p className="text-gray-600 leading-relaxed">{committee.topic2}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </section>

            {/* Chairs Section */}
            {committee.chairs && committee.chairs.length > 0 && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#2b174f] mb-12">
                            Meet the {committee.chairs.length === 1 ? "Chair" : "Chairs"}
                        </h2>
                        <div className={`grid grid-cols-1 gap-8 ${committee.chairs.length > 1 ? "md:grid-cols-2" : ""}`}>
                            {committee.chairs.map((chair, index) => (
                                <Card
                                    key={index}
                                    className="overflow-hidden bg-white border-gray-100 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="h-72 bg-gradient-to-br from-[#2b174f] to-[#6d28d9] overflow-hidden">
                                        {chair.imageUrl ? (
                                            <img
                                                src={chair.imageUrl}
                                                alt={chair.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="w-24 h-24 rounded-full border border-white/15 bg-white/10 flex items-center justify-center mx-auto mb-3">
                                                        <User className="size-12 text-white/50" />
                                                    </div>
                                                    <p className="text-white/50 text-sm">Chair Portrait</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <CardHeader className="pb-2 pt-6 px-6 bg-white">
                                                                            <h3 className="text-2xl font-bold text-[#2b174f]">{chair.name}</h3>
                                        <p className="text-[#f2b652] font-semibold tracking-wider text-sm uppercase">
                                            {chair.role}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="px-6 pb-6">
                                        <p className="text-gray-600 leading-relaxed">{chair.intro}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Actions Section */}
            <section className="py-12 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-4 flex-wrap">
                        {committee.backgroundGuideUrl === "CONFIDENTIAL" ? (
                            <Button
                                disabled
                                className="border-gray-400 text-gray-300 tracking-wider text-sm font-semibold uppercase cursor-not-allowed"
                                variant="outline"
                                title="Background guide is classified"
                            >
                                <Download className="size-4 mr-2" />
                                Classified
                            </Button>
                        ) : committee.backgroundGuideUrl ? (
                            <Button
                                                                asChild
                                                                variant="outline"
                                                                className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f] hover:text-white tracking-wider text-sm font-semibold uppercase w-full sm:w-auto"
                                >
                                                                <a href={committee.backgroundGuideUrl} download>
                                                                    <Download className="size-4 mr-2" />
                                                                    Download Background Guide
                                                                </a>
                                                            </Button>
                        ) : (
                            <Button
                                disabled
                                className="border-gray-400 text-gray-300 tracking-wider text-sm font-semibold uppercase"
                                variant="outline"
                            >
                                <Download className="size-4 mr-2" />
                                Coming Soon
                            </Button>
                        )}

                        <Button asChild className="w-full sm:w-auto bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 tracking-wider text-sm font-semibold uppercase">
                                                        <Link to="/registration">
                                                            <UserPlus className="size-4 mr-2" />
                                                            Register for This Committee
                                                        </Link>
                                                    </Button>
                    </div>
                </div>
            </section>

            {/* Related Committees */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-[#2b174f] mb-8">Other Committees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {committees
                            .filter((c) => c.id !== committee.id)
                            .slice(0, 3)
                            .map((c) => (
                                <Link
                                    key={c.id}
                                    to={`/committees/${c.id}`}
                                    className="group"
                                >
                                    <Card className="bg-white border-gray-100 hover:border-[#f2b652]/40 hover:shadow-lg transition-all duration-300 h-full cursor-pointer">
                                        <CardHeader className="pb-3 pt-6 px-6">
                                            <div className="flex items-start justify-between gap-2 mb-2">
                                                <span className="bg-[#2b174f] text-[#f2b652] text-xs font-bold px-2.5 py-1 rounded-sm tracking-widest uppercase">
                                                    {c.abbreviation}
                                                </span>
                                                <span
                                                    className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${difficultyColors[c.difficulty]}`}
                                                >
                                                    {c.difficulty}
                                                </span>
                                            </div>
                                            <h3 className="text-[#2b174f] font-bold text-base leading-snug group-hover:text-[#f2b652] transition-colors">
                                                {c.name}
                                            </h3>
                                        </CardHeader>
                                        <CardContent className="px-6 pb-6">
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                                {c.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/committees">
                            <Button
                                                            className="bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 tracking-wider text-sm font-semibold uppercase"
                            >
                                View All Committees
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
