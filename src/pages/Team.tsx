import {teamMembers} from "../data/team"
import {User} from "lucide-react"
import {Card, CardContent} from "@/components/ui/card"

export function Team() {
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
                        CCJMUN
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        The dedicated student leaders behind CCJMUN 2026. Each member of our secretariat brings
                        expertise, passion, and an unwavering commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Secretariat Leadership */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Leading the Conference
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">
                            Secretariat Leadership
                        </h2>
                    </div>

                    {[
                        teamMembers.SG["secretary-general"],
                        teamMembers.DSG["deputy-secretary-general"]
                    ].map((member, index) => (
                        <div
                            key={member.id}
                            className={`flex flex-col md:flex-row gap-10 items-center bg-[#2b174f] rounded-xl p-10 shadow-xl ${
                                index === 0 ? "" : "mt-8"
                            }`}
                        >
                            <div
                                className="w-36 h-36 rounded-full bg-[#f2b652]/20 border-4 border-[#f2b652] flex items-center justify-center shrink-0">
                                <User className="size-16 text-[#f2b652]"/>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white mb-1">
                                    {member.name}
                                </h3>

                                <p className="text-[#f2b652] tracking-widest text-sm uppercase font-semibold mb-4">
                                    {member.role}
                                </p>

                                <p className="text-white/70 leading-relaxed text-base">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Teams Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2b174f]">
                            CCJMUN Directors & Team
                        </h2>
                    </div>

                    {Object.entries(teamMembers)
                        .filter(([dept]) => dept !== "SG" && dept !== "DSG")
                        .map(([team, membersObj]) => {
                            const teamList = Object.values(membersObj)

                            return (
                                <div key={team} className="mb-12">
                                    <h3 className="text-xl font-semibold text-[#2b174f] mb-6 border-b pb-2 text-center">
                                        {team}
                                    </h3>

                                    <div className="flex flex-wrap justify-center gap-6">
                                        {teamList.map(member => (
                                            <Card
                                                key={member.id}
                                                className="w-full sm:w-[320px] overflow-hidden border border-gray-100 hover:border-[#f2b652]/40 hover:shadow-lg transition-all duration-300"
                                            >
                                                <div
                                                    className="h-40 bg-[#2b174f] flex items-center justify-center relative overflow-hidden">
                                                    <div
                                                        className="absolute inset-0 opacity-10 bg-cover bg-center"
                                                        style={{backgroundImage: "url('/bg.jpeg')"}}
                                                    />
                                                    <div
                                                        className="relative w-20 h-20 rounded-full bg-[#f2b652]/20 border-3 border-[#f2b652] flex items-center justify-center">
                                                        <User className="size-10 text-[#f2b652]"/>
                                                    </div>
                                                </div>

                                                <CardContent className="p-5 text-center">
                                                    <h3 className="text-[#2b174f] font-bold text-base mb-2 wrap-break-word">
                                                        {member.name}
                                                    </h3>

                                                    <p className="text-[#f2b652] text-xs uppercase tracking-widest font-semibold mb-3 wrap-break-word">
                                                        {member.role}
                                                    </p>

                                                    <p className="text-gray-600 text-sm leading-relaxed wrap-break-word whitespace-normal">
                                                        {member.bio}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </section>
        </div>
    )
}
