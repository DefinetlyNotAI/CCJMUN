import {secretariatMembers} from "@/data/secretariat"
import {User} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

export function Secretariat() {
    const members = Object.values(secretariatMembers)

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
                        Meet the Team
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        The Secretariat
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        The dedicated student leaders behind CCJMUN 2026. Each member of our secretariat brings
                        expertise, passion, and an unwavering commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Secretary-General Spotlight */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Leading the Conference
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">Secretary-General</h2>
                    </div>
                    {members.filter(m => m.id === "secretary-general").map((member) => (
                        <div key={member.id}
                             className="flex flex-col md:flex-row gap-10 items-center bg-[#2b174f] rounded-xl p-10 shadow-xl">
                            <div
                                className="w-36 h-36 rounded-full bg-[#f2b652]/20 border-4 border-[#f2b652] flex items-center justify-center shrink-0">
                                <User className="size-16 text-[#f2b652]"/>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-[#f2b652] tracking-widest text-sm uppercase font-semibold mb-4">{member.role}</p>
                                <p className="text-white/70 leading-relaxed text-base">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Full Secretariat Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Our Leadership Team
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">Meet Everyone</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {members.filter(m => m.id !== "secretary-general").map((member) => (
                            <Card
                                key={member.id}
                                className="overflow-hidden border border-gray-100 hover:border-[#f2b652]/40 hover:shadow-lg transition-all duration-300 group"
                            >
                                {/* Card top */}
                                <div
                                    className="h-40 bg-[#2b174f] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-10 bg-cover bg-center"
                                         style={{backgroundImage: "url('/bg.jpeg')"}}/>
                                    <div
                                        className="relative w-20 h-20 rounded-full bg-[#f2b652]/20 border-3 border-[#f2b652] flex items-center justify-center group-hover:scale-105 transition-transform">
                                        <User className="size-10 text-[#f2b652]"/>
                                    </div>
                                </div>

                                <CardContent className="p-5">
                                    <h3 className="text-[#2b174f] font-bold text-base mb-1 leading-snug">{member.name}</h3>
                                    <p className="text-[#f2b652] text-xs tracking-widest uppercase font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us Banner */}
            <section className="py-16 bg-[#2b174f] border-t border-[#f2b652]/20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">Interested in Joining the Team?</h2>
                    <p className="text-white/60 mb-6">
                        Applications for the CCJMUN 2027 secretariat will open after the conference. Follow us on social
                        media to stay updated.
                    </p>
                    <a href="#"
                       className="inline-block bg-[#f2b652] text-[#2b174f] px-8 py-3 rounded-sm font-semibold tracking-wider uppercase text-sm hover:bg-[#f2b652]/90 transition-colors">
                        Follow on Social
                    </a>
                </div>
            </section>
        </div>
    )
}
