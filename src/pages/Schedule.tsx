import {schedule, typeConfig} from "@/data/schedule"
import {cn} from "@/lib/utils"
import {Calendar, Clock} from "lucide-react"

export function Schedule() {
    return (
        <div className="min-h-screen pt-16 bg-white">
            {/* Hero */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-[#2b174f]">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        Conference Program
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Schedule
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Two days of diplomatic excellence. Every moment crafted for maximum impact, learning, and
                        collaboration.
                    </p>
                </div>
            </section>

            {/* Quick Overview */}
            <section className="bg-white border-b border-gray-100 py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 sm:gap-5 justify-start sm:justify-center">
                        {Object.entries(typeConfig).map(([key, {label, bg, text, border, icon: Icon}]) => (
                            <div key={key}
                                 className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${bg} ${text} ${border}`}>
                                <Icon className="size-3.5"/>
                                <span className="text-xs font-semibold tracking-wider uppercase">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Schedule Days */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {schedule.map((day) => (
                            <div key={day.day}>
                                {/* Day Header */}
                                <div className="flex items-start sm:items-center gap-4 mb-8">
                                    <div
                                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2b174f] flex items-center justify-center shrink-0">
                                        <Calendar className="size-7 text-[#f2b652]"/>
                                    </div>
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold text-[#2b174f]">{day.day}</h2>
                                        <p className="text-gray-500 text-sm">{day.date}</p>
                                    </div>
                                </div>

                                {/* Events */}
                                <div className="relative md:ml-8">
                                    <div
                                        className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#f2b652]/30"/>
                                    <div className="space-y-4 md:pl-8">
                                        {day.events.map((event, i) => {
                                            const config = typeConfig[event.type]
                                            const Icon = config.icon
                                            return (
                                                <div
                                                    key={i}
                                                    className={cn(
                                                        "relative bg-white rounded-lg border-l-4 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all",
                                                        config.border
                                                    )}
                                                >
                                                    <div
                                                        className="hidden md:block absolute -left-[2.125rem] top-5 w-4 h-4 rounded-full bg-[#f2b652] border-2 border-white"/>
                                                    <div
                                                        className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 sm:gap-6 items-start">
                                                        <div className="flex justify-start">
                                                            <div
                                                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border}`}
                                                            >
                                                                <Icon className="size-3"/>
                                                                {config.label}
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                                                                <Clock className="size-3.5 text-gray-400 shrink-0"/>
                                                                <span
                                                                    className="text-gray-400 text-xs font-mono">{event.time}</span>
                                                            </div>
                                                            <h3 className="text-[#2b174f] font-bold text-base mb-1 leading-snug break-words">
                                                                {event.title}
                                                            </h3>
                                                            <p className="text-gray-500 text-sm leading-relaxed">{event.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Note */}
            <section className="py-12 bg-[#2b174f]">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <p className="text-white/60 text-sm leading-relaxed max-w-2xl mx-auto">
                        Schedule is subject to minor changes. Final confirmed schedule will be distributed to all
                        registered delegates before the conference via email.
                    </p>
                </div>
            </section>
        </div>
    )
}
