import {useEffect, useState} from 'react'
import {Card, CardContent} from '@/components/ui/card'
import {ChevronLeft, ChevronRight, Star} from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Sarah Chen',
        school: 'International Academy Cairo',
        role: 'Delegate - UNSC',
        quote:
            'CCJMUN transformed my perspective on diplomacy. The debates were intense, the organization flawless, and the experience unforgettable.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Ahmed Hassan',
        school: 'Cairo American College',
        role: 'Delegate - UNHRC',
        quote:
            'The best MUN conference I have attended. The background guides were comprehensive, and the chairs were incredibly professional.',
        rating: 5,
    },
    {
        id: 3,
        name: 'Layla Mansour',
        school: 'Gezira Preparatory School',
        role: 'Delegate - WHO',
        quote:
            'Every aspect was perfectly executed -- from registration to the closing ceremony. I made lifelong friends and learned invaluable skills.',
        rating: 5,
    },
    {
        id: 4,
        name: 'Marcus Thompson',
        school: 'British International School',
        role: 'Delegate - ECOSOC',
        quote:
            'CCJMUN set the gold standard for MUN conferences in the region. I cannot wait to return for 2026.',
        rating: 5,
    },
]

export function TestimonialsSection() {
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    useEffect(() => {
        if (!autoplay) return
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length)
        }, 6000)
        return () => clearInterval(timer)
    }, [autoplay])

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
        setAutoplay(false)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setAutoplay(false)
    }

    return (
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#2b174f] to-[#1a0e32]">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        Delegate Voices
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What Delegates Are Saying
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#f2b652] to-transparent mx-auto"/>
                </div>

                <div className="relative">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`transition-all duration-500 ${
                                index === current ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0'
                            }`}
                        >
                            <Card className="border border-[#f2b652]/20 bg-white/5 backdrop-blur-sm">
                                <CardContent className="p-6 md:p-12">
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({length: testimonial.rating}).map((_, i) => (
                                            <Star key={i} className="size-4 md:size-5 fill-[#f2b652] text-[#f2b652]"/>
                                        ))}
                                    </div>
                                    <p className="text-white text-base md:text-xl leading-relaxed mb-6 italic">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                    <div className="border-t border-white/10 pt-4">
                                        <p className="text-white font-semibold">{testimonial.name}</p>
                                        <p className="text-[#f2b652] text-sm">{testimonial.role}</p>
                                        <p className="text-white/50 text-xs">{testimonial.school}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}

                    <div className="flex items-center justify-between mt-6 md:mt-8">
                        <button
                            onClick={prev}
                            className="p-2 rounded-lg bg-white/10 hover:bg-[#f2b652]/20 transition-colors border border-white/10 hover:border-[#f2b652]/30"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="size-4 md:size-5 text-white"/>
                        </button>

                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrent(i)
                                        setAutoplay(false)
                                    }}
                                    className={`h-2 rounded-full transition-all ${
                                        i === current ? 'bg-[#f2b652] w-6' : 'bg-white/20 w-2'
                                    }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="p-2 rounded-lg bg-white/10 hover:bg-[#f2b652]/20 transition-colors border border-white/10 hover:border-[#f2b652]/30"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="size-4 md:size-5 text-white"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
