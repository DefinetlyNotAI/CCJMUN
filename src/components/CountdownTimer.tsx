import {useEffect, useState} from 'react'
import {CalendarDays} from 'lucide-react'
import type {TimeUnit} from "@/types";

export function CountdownTimer() {
    const [timeUnits, setTimeUnits] = useState<TimeUnit[]>([
        { label: 'Days', value: 0 },
        { label: 'Hours', value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
    ])

    useEffect(() => {
        const calculateCountdown = () => {
            const conferenceStart = new Date('2026-07-17T08:00:00').getTime()
            const now = new Date().getTime()
            const difference = conferenceStart - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / 1000 / 60) % 60)
                const seconds = Math.floor((difference / 1000) % 60)

                setTimeUnits([
                    { label: 'Days', value: days },
                    { label: 'Hours', value: hours },
                    { label: 'Minutes', value: minutes },
                    { label: 'Seconds', value: seconds },
                ])
            }
        }

        calculateCountdown()
        const interval = setInterval(calculateCountdown, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
                <CalendarDays className="size-4 md:size-5 text-[#f2b652]" />
                <p className="text-white/60 text-xs md:text-sm tracking-widest uppercase font-semibold">
                    Time Until Conference
                </p>
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-3">
                {timeUnits.map((unit) => (
                    <div key={unit.label} className="text-center">
                        <div className="text-xl md:text-3xl font-bold text-[#f2b652] mb-1">
                            {String(unit.value).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs text-white/50 tracking-wider uppercase">
                            {unit.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
