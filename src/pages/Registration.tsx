import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {
    CalendarDays,
    CircleAlert as AlertCircle,
    CircleCheck as CheckCircle,
    DollarSign,
    ExternalLink,
    Users
} from "lucide-react"

const pricingTiers = [
    {
        name: "Early Bird",
        deadline: "January 15, 2026",
        perDelegate: "$35",
        delegation: "$280",
        note: "Best value — register early to save",
        highlight: true,
    },
    {
        name: "Regular",
        deadline: "February 10, 2026",
        perDelegate: "$45",
        delegation: "$350",
        note: "Standard rate for all schools",
        highlight: false,
    },
]

const steps = [
    {
        num: "01",
        title: "Review Committee Choices",
        desc: "Browse our Committees page and select your preferred committees and country assignments."
    },
    {
        num: "02",
        title: "Confirm with Faculty Advisor",
        desc: "School delegations must register through their faculty advisor. Coordinate country preferences and fee payments."
    },
    {
        num: "03",
        title: "Complete Registration Form",
        desc: "Click the registration link below and fill out the delegation or individual registration form."
    },
    {
        num: "04",
        title: "Submit Payment",
        desc: "Pay registration fees via bank transfer or the secure payment portal linked in the confirmation email."
    },
    {
        num: "05",
        title: "Receive Confirmation",
        desc: "You'll receive a confirmation email with your committee assignment, country allocation, and welcome materials."
    },
]

const keyDetails = [
    {icon: CalendarDays, label: "Early Registration Closes", value: "January 15, 2026"},
    {icon: CalendarDays, label: "Regular Registration Closes", value: "February 10, 2026"},
    {icon: CalendarDays, label: "Conference Dates", value: "March 6–7, 2026"},
    {icon: Users, label: "Max Delegation Size", value: "12 delegates per school"},
    {icon: DollarSign, label: "Individual Registration", value: "Available for unaffiliated delegates"},
]

export function Registration() {
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
                        Join the Conference
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Registration
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        Secure your position at CCJMUN 2026. Register early for the best committee selections and
                        special rates.
                    </p>
                </div>
            </section>

            {/* Register Button Prominent */}
            <section className="bg-[#f2b652] py-10 border-b border-[#f2b652]/20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-[#2b174f] mb-2">Ready to Register?</h2>
                    <p className="text-[#2b174f]/70 mb-6">Click below to access the official registration form.</p>
                    <Button
                        size="lg"
                        className="bg-[#2b174f] text-white hover:bg-[#2b174f]/90 font-semibold tracking-widest uppercase px-12 py-6 text-base shadow-lg"
                    >
                        <ExternalLink className="size-5 mr-2"/>
                        Open Registration Form
                    </Button>
                    <p className="text-[#2b174f]/50 text-sm mt-3">Opens in a new tab</p>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Fees
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">Registration Pricing</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {pricingTiers.map((tier) => (
                            <Card
                                key={tier.name}
                                className={`border-2 overflow-hidden ${tier.highlight ? "border-[#f2b652] shadow-lg shadow-[#f2b652]/10" : "border-gray-200"}`}
                            >
                                {tier.highlight && (
                                    <div
                                        className="bg-[#f2b652] text-[#2b174f] text-xs font-bold tracking-widest uppercase text-center py-2">
                                        Best Value
                                    </div>
                                )}
                                <CardContent className={`p-7 ${tier.highlight ? "" : "mt-0"}`}>
                                    <h3 className="text-[#2b174f] font-bold text-xl mb-1">{tier.name}</h3>
                                    <p className="text-gray-400 text-sm mb-5">Deadline: {tier.deadline}</p>
                                    <div className="space-y-3 mb-5">
                                        <div
                                            className="flex justify-between items-center py-2 border-b border-gray-100">
                                            <span className="text-gray-500 text-sm">Per Delegate</span>
                                            <span className="text-[#2b174f] font-bold text-lg">{tier.perDelegate}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-gray-500 text-sm">Per Delegation (8+)</span>
                                            <span className="text-[#2b174f] font-bold text-lg">{tier.delegation}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-xs italic">{tier.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Register Steps */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Process
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">How to Register</h2>
                    </div>
                    <div className="space-y-6">
                        {steps.map(({num, title, desc}) => (
                            <div key={num} className="flex gap-6 items-start group">
                                <div
                                    className="w-14 h-14 rounded-full bg-[#2b174f] flex items-center justify-center shrink-0 group-hover:bg-[#f2b652] transition-colors">
                                    <span
                                        className="text-white group-hover:text-[#2b174f] font-bold text-lg transition-colors">{num}</span>
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-[#2b174f] font-bold text-lg mb-1">{title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Details */}
            <section className="py-20 bg-[#2b174f]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            At a Glance
                        </p>
                        <h2 className="text-3xl font-bold text-white">Key Details</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {keyDetails.map(({icon: Icon, label, value}) => (
                            <div key={label}
                                 className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#f2b652]/30 hover:bg-white/10 transition-all">
                                <Icon className="size-6 text-[#f2b652] mb-3"/>
                                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">{label}</p>
                                <p className="text-white font-semibold text-sm">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        <div className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <CheckCircle className="size-5 text-green-600 shrink-0 mt-0.5"/>
                            <p className="text-green-800 text-sm">Country assignments are allocated on a first-come,
                                first-served basis. Early registration guarantees better choices.</p>
                        </div>
                        <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                            <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5"/>
                            <p className="text-amber-800 text-sm">Registration fees are non-refundable after February 1,
                                2026. Please confirm participation before payment.</p>
                        </div>
                        <div className="flex gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <CheckCircle className="size-5 text-blue-600 shrink-0 mt-0.5"/>
                            <p className="text-blue-800 text-sm">Individual delegates not affiliated with a school may
                                register directly. Contact us for details.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
