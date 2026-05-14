import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {committees} from '@/data/committees'
import {Card, CardContent, CardHeader} from '@/components/ui/card'
import {Button} from '@/components/ui/button'
import {ChevronLeft, ChevronRight, Users} from 'lucide-react'

export function CommitteeCarousel() {
    const [current, setCurrent] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerView(1)
            else if (window.innerWidth < 1024) setItemsPerView(2)
            else setItemsPerView(3)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalPages = Math.ceil(committees.length / itemsPerView)

    const next = () => setCurrent((prev) => (prev + 1) % totalPages)
    const prev = () => setCurrent((prev) => (prev - 1 + totalPages) % totalPages)

    const visibleCommittees = committees.slice(
        current * itemsPerView,
        current * itemsPerView + itemsPerView
    )

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {visibleCommittees.map((committee) => (
                    <Card
                        key={committee.id}
                        className="overflow-hidden border border-[#f2b652]/20 hover:border-[#f2b652]/60 hover:shadow-lg hover:shadow-[#f2b652]/10 transition-all duration-300 bg-white/5 backdrop-blur-sm group"
                    >
                        <div className="h-1 bg-[#f2b652] group-hover:h-2 transition-all"/>
                        <CardHeader className="pb-3">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                  <span className="bg-[#f2b652] text-[#2b174f] text-xs font-bold px-2 py-0.5 rounded-sm">
                    {committee.abbreviation}
                  </span>
                                    <h3 className="text-white font-bold text-sm md:text-base mt-2 line-clamp-2">
                                        {committee.name}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-1 text-[#f2b652]/60 text-xs shrink-0">
                                    <Users className="size-3.5"/>
                                    <span>{committee.size}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                                {committee.description}
                            </p>
                            <Link to="/registration">
                                <Button
                                    size="sm"
                                    className="w-full bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 text-xs font-semibold uppercase"
                                >
                                    Explore
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prev}
                        className="p-2 rounded-lg bg-white/10 hover:bg-[#f2b652]/20 transition-colors border border-white/10 hover:border-[#f2b652]/30"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="size-4 text-white"/>
                    </button>
                    <div className="flex gap-1">
                        {Array.from({length: totalPages}).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-2 rounded-full transition-all ${
                                    i === current ? 'bg-[#f2b652] w-6' : 'bg-white/20 w-2'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={next}
                        className="p-2 rounded-lg bg-white/10 hover:bg-[#f2b652]/20 transition-colors border border-white/10 hover:border-[#f2b652]/30"
                        aria-label="Next"
                    >
                        <ChevronRight className="size-4 text-white"/>
                    </button>
                </div>
            )}
        </div>
    )
}
