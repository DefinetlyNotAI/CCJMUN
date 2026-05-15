import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import {values} from "@/data/about.ts";


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
                            <p className="text-gray-600 leading-relaxed">
                                Our secretariat, committees, and staff are entirely student-run - a testament to the
                                talent, dedication, and vision of the young people who make CCJMUN what it is.
                            </p>
                        </div>
                        <div className="relative w-full max-w-10xl">
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#2b174f]/10 rounded-lg"/>

                            <img
                                src="/bg.jpeg"
                                alt="CCJMUN Conference"
                                className="relative w-full h-96 md:h-112 lg:h-128 object-cover object-[50%_30%] rounded-lg shadow-xl border border-[#f2b652]/20"
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
                                className="bg-white rounded-lg p-8 shadow-sm border border-gray-100
            transition-all duration-300
            hover:-translate-y-2 hover:scale-[1.02]
            hover:shadow-2xl hover:shadow-black/10
            hover:border-[#f2b652]/40
            group"
                            >
                                <div
                                    className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center mb-5
                group-hover:bg-[#f2b652] transition-colors duration-300"
                                >
                                    <Icon className="size-6 text-white group-hover:text-[#2b174f] transition-colors"/>
                                </div>

                                <h3 className="text-[#2b174f] font-bold text-lg mb-3">
                                    {title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {description}
                                </p>
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
