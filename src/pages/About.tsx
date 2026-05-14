import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import {ArrowRight, Award, BookOpen, Gavel, Globe, Target, Users} from "lucide-react"

const values = [
    {
        icon: Globe,
        title: "Global Perspective",
        description: "We cultivate an understanding of diverse viewpoints and international systems that prepares delegates for a connected world.",
    },
    {
        icon: Target,
        title: "Academic Rigor",
        description: "Our committees are grounded in real-world issues with thoroughly researched background guides and expert-quality debate.",
    },
    {
        icon: Users,
        title: "Inclusive Community",
        description: "From first-time delegates to experienced diplomats, CCJMUN creates space for every voice to be heard and respected.",
    },
    {
        icon: Gavel,
        title: "Parliamentary Excellence",
        description: "Strict adherence to Rules of Procedure ensures delegates develop authentic skills in parliamentary diplomacy.",
    },
    {
        icon: BookOpen,
        title: "Lifelong Learning",
        description: "Beyond the conference, we inspire a commitment to research, debate, and understanding global affairs.",
    },
    {
        icon: Award,
        title: "Recognizing Excellence",
        description: "We celebrate outstanding delegates who demonstrate leadership, research, and collaborative diplomacy.",
    },
]

export function About() {
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
                        About CCJMUN
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        More Than a Conference
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed">
                        CCJMUN is a movement - a gathering of young minds united by a belief that diplomacy, dialogue,
                        and determination can change the world.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                                Our Mission
                            </p>
                            <h2 className="text-4xl font-bold text-[#2b174f] mb-6 leading-tight">
                                Empowering the Next Generation of Global Leaders
                            </h2>
                            <div className="divider-gold mb-6 w-24"/>
                            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                                CCJ Model United Nations was founded with a singular mission: to provide students with
                                an immersive, academically rigorous diplomatic experience that develops leadership,
                                critical thinking, and global awareness.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-5">
                                Since our inaugural conference, CCJMUN has grown into one of the most respected
                                student-run MUNs in the region, attracting delegates from schools across Egypt and the
                                Arab world.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our secretariat, committees, and staff are entirely student-run - a testament to the
                                talent, dedication, and vision of the young people who make CCJMUN what it is.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#2b174f]/10 rounded-lg"/>
                            <img
                                src="/cover.jpeg"
                                alt="CCJMUN Conference"
                                className="relative rounded-lg shadow-xl w-full object-cover h-96 border border-[#f2b652]/20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Unique */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                            What Sets Us Apart
                        </p>
                        <h2 className="text-4xl font-bold text-[#2b174f] mb-4">
                            The CCJMUN Difference
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                            We combine academic excellence with an unforgettable delegate experience.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map(({icon: Icon, title, description}) => (
                            <div
                                key={title}
                                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#f2b652]/30 group"
                            >
                                <div
                                    className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center mb-5 group-hover:bg-[#f2b652] transition-colors">
                                    <Icon className="size-6 text-white group-hover:text-[#2b174f] transition-colors"/>
                                </div>
                                <h3 className="text-[#2b174f] font-bold text-lg mb-3">{title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline / History */}
            <section className="py-24 bg-[#2b174f]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                            Our Journey
                        </p>
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Building Excellence Year by Year
                        </h2>
                    </div>
                    <div className="space-y-8 relative">
                        <div className="absolute left-6 top-0 bottom-0 w-px bg-[#f2b652]/30"/>
                        {[
                            {
                                year: "2022",
                                title: "CCJMUN Founded",
                                desc: "The inaugural CCJMUN conference welcomed 120 delegates across 4 committees."
                            },
                            {
                                year: "2023",
                                title: "Rapid Growth",
                                desc: "Year two saw us double in size, introducing two new specialized committees."
                            },
                            {
                                year: "2024",
                                title: "Regional Recognition",
                                desc: "CCJMUN was recognized as one of the top 10 student-run MUNs in North Africa."
                            },
                            {
                                year: "2025",
                                title: "International Delegates",
                                desc: "For the first time, delegations from outside Egypt joined our conference."
                            },
                            {
                                year: "2026",
                                title: "CCJMUN 2026",
                                desc: "Our most ambitious conference yet - 8 committees, 350+ delegates, global impact."
                            },
                        ].map(({year, title, desc}) => (
                            <div key={year} className="flex gap-6 pl-14 relative">
                                <div
                                    className="absolute left-0 top-1 w-12 h-12 rounded-full bg-[#f2b652] flex items-center justify-center shrink-0">
                                    <span
                                        className="text-[#2b174f] text-xs font-bold leading-tight text-center">{year}</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-[#f2b652]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-[#2b174f] mb-4">
                        Become Part of the Story
                    </h2>
                    <p className="text-[#2b174f]/70 text-lg mb-8">
                        Join hundreds of delegates who have shaped their diplomatic futures at CCJMUN.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/registration">
                            <Button
                                className="bg-[#2b174f] text-white hover:bg-[#2b174f]/90 font-semibold tracking-wider uppercase px-8">
                                Register Now <ArrowRight className="ml-2 size-4"/>
                            </Button>
                        </Link>
                        <Link to="/committees">
                            <Button variant="outline"
                                    className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f]/10 font-semibold tracking-wider uppercase px-8">
                                View Committees
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
