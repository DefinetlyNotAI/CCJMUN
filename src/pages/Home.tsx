import {Link} from "react-router-dom"
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {ArrowRight, CalendarDays, ChevronDown, Globe, MapPin, Users} from "lucide-react"
import {CountdownTimer} from "@/components/CountdownTimer"
import {CommitteeCarousel} from "@/components/CommitteeCarousel"
import {TestimonialsSection} from "@/components/TestimonialsSection"

const stats = [
    {icon: Users, value: "350+", label: "Delegates"},
    {icon: Globe, value: "8", label: "Committees"},
    {icon: CalendarDays, value: "2", label: "Days"},
    {icon: MapPin, value: "Cairo", label: "Egypt"},
]

export function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#2b174f]/75"/>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2b174f]/60"/>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <Badge
                        variant="outline"
                        className="border-[#f2b652]/60 text-[#f2b652] bg-[#f2b652]/10 tracking-widest text-xs uppercase mb-8 px-4 py-1.5"
                    >
                        March 6 – 7, 2026 · Cairo, Egypt
                    </Badge>

                    <div className="mb-6">
                        <img
                            src="/cover.jpeg"
                            alt="CCJMUN 2026"
                            className="mx-auto w-full max-w-2xl rounded-lg shadow-2xl shadow-black/50 border border-white/10"
                        />
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 leading-tight">
                        Where Diplomacy <br/>
                        <span className="text-gold-shimmer">Meets Excellence</span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        CCJ Model United Nations 2026 invites young leaders to debate, negotiate, and resolve the
                        world's most pressing challenges in a prestigious two-day conference.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                        <Link to="/registration">
                            <Button
                                size="lg"
                                className="bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 font-semibold tracking-widest uppercase px-10 py-6 text-base shadow-lg shadow-[#f2b652]/20"
                            >
                                Register Now
                                <ArrowRight className="ml-2 size-4"/>
                            </Button>
                        </Link>
                        <Link to="/committees">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/60 text-white bg-white/5 hover:bg-white/15 hover:border-white font-semibold tracking-widest uppercase px-10 py-6 text-base"
                            >
                                Explore Committees
                            </Button>
                        </Link>
                    </div>

                    <div className="max-w-lg mx-auto">
                        <CountdownTimer/>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
                    <ChevronDown className="size-6"/>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-[#2b174f] py-12 border-y border-[#f2b652]/20">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map(({icon: Icon, value, label}) => (
                            <div key={label} className="text-center">
                                <Icon className="size-6 text-[#f2b652] mx-auto mb-2"/>
                                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                                <div className="text-white/50 text-sm tracking-wider uppercase">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                                About the Conference
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#2b174f] leading-tight mb-6">
                                A Premier MUN Experience
                            </h2>
                            <div className="divider-gold mb-6 w-24"/>
                            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                                CCJMUN is one of the region's most distinguished student-run Model United Nations
                                conferences, bringing together the brightest young minds to tackle global issues through
                                diplomacy, debate, and collaborative resolution-writing.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Over two intensive days, delegates engage in authentic UN committee simulations, develop
                                critical thinking skills, and forge lasting connections with peers who share a passion
                                for global affairs.
                            </p>
                            <Link to="/about">
                                <Button
                                    variant="outline"
                                    className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f] hover:text-white tracking-wider uppercase font-semibold"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 size-4"/>
                                </Button>
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-full h-full bg-[#f2b652]/20 rounded-lg"/>
                            <img
                                src="/bg.jpeg"
                                alt="CCJMUN Conference"
                                className="relative rounded-lg shadow-xl w-full object-cover h-80 border border-[#f2b652]/20"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Conference Theme */}
            <section
                className="py-24 relative overflow-hidden"
                style={{background: "linear-gradient(135deg, #2b174f 0%, #1a0e32 100%)"}}
            >
                <div className="absolute inset-0 opacity-10"
                     style={{backgroundImage: "url('/bg.jpeg')", backgroundSize: "cover", backgroundPosition: "center"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        Conference Theme
                    </p>
                    <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                        "Rebuilding the <br/>
                        <span className="text-gold-shimmer">Global Order"</span>
                    </h2>
                    <div className="divider-gold mx-auto w-32 mb-8"/>
                    <p className="text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
                        As the world grapples with shifting power dynamics, technological disruption, and humanitarian
                        crises, CCJMUN 2026 challenges delegates to reimagine the frameworks of international
                        cooperation.
                    </p>
                </div>
            </section>

            {/* Key Dates */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                            Important Dates
                        </p>
                        <h2 className="text-4xl font-bold text-[#2b174f]">Mark Your Calendar</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {date: "Jan 15, 2026", label: "Early Registration Closes", color: "border-[#f2b652]"},
                            {date: "Feb 1, 2026", label: "Background Guides Released", color: "border-[#2b174f]"},
                            {date: "Feb 10, 2026", label: "Final Registration Deadline", color: "border-[#f2b652]"},
                            {date: "Mar 6–7, 2026", label: "Conference Days", color: "border-[#2b174f]"},
                        ].map(({date, label, color}) => (
                            <Card key={date}
                                  className={`border-l-4 ${color} shadow-sm hover:shadow-md transition-shadow`}>
                                <CardContent className="p-5">
                                    <div
                                        className="text-[#f2b652] text-sm font-semibold mb-1 tracking-wider">{date}</div>
                                    <div className="text-[#2b174f] font-semibold text-sm leading-snug">{label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Committees Carousel */}
            <section className="py-16 md:py-20 bg-[#2b174f]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8 md:mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                            Featured Committees
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Explore Your Arena</h2>
                        <div
                            className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f2b652] to-transparent mx-auto"/>
                    </div>
                    <CommitteeCarousel/>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection/>

            {/* CTA */}
            <section className="py-20 bg-[#f2b652]">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2b174f] mb-4">
                        Ready to Make Your Mark?
                    </h2>
                    <p className="text-[#2b174f]/70 text-lg mb-8">
                        Secure your spot at CCJMUN 2026. Limited delegate positions available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/registration">
                            <Button
                                size="lg"
                                className="bg-[#2b174f] text-white hover:bg-[#2b174f]/90 font-semibold tracking-widest uppercase px-10"
                            >
                                Register Now
                                <ArrowRight className="ml-2 size-4"/>
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f]/10 font-semibold tracking-wider uppercase px-10"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
