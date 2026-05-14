import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Search, X} from 'lucide-react'
import type {CommitteeFilterProps, DifficultyLevel} from "@/types";

const difficultyLevels: DifficultyLevel[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert']

export function CommitteeFilter({onFilterChange}: CommitteeFilterProps) {
    const [search, setSearch] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | null>(null)

    const handleSearchChange = (value: string) => {
        setSearch(value)
        onFilterChange({search: value, difficulty: selectedDifficulty})
    }

    const handleDifficultyChange = (difficulty: DifficultyLevel) => {
        const newDifficulty = selectedDifficulty === difficulty ? null : difficulty
        setSelectedDifficulty(newDifficulty)
        onFilterChange({search, difficulty: newDifficulty})
    }

    const handleClear = () => {
        setSearch('')
        setSelectedDifficulty(null)
        onFilterChange({search: '', difficulty: null})
    }

    const isFiltered = search || selectedDifficulty

    return (
        <div className="space-y-5">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400"/>
                <Input
                    placeholder="Search committees by name..."
                    value={search}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="h-12 rounded-xl border-gray-200 bg-white pl-10 shadow-sm focus-visible:ring-[#2b174f]/20"
                />
            </div>

            <div className="space-y-3">
                <p className="text-sm font-medium text-gray-600">Filter by difficulty:</p>
                <div className="flex flex-wrap gap-2">
                    {difficultyLevels.map((level) => (
                        <button
                            key={level}
                            onClick={() => handleDifficultyChange(level)}
                            className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                                selectedDifficulty === level
                                    ? 'bg-[#2b174f] text-white border border-[#2b174f]'
                                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-[#2b174f] hover:bg-gray-50'
                            }`}
                        >
                            {level}
                        </button>
                    ))}
                </div>
            </div>

            {isFiltered && (
                <button
                    onClick={handleClear}
                    className="flex items-center gap-1 text-xs text-[#2b174f] hover:text-[#f2b652] transition-colors"
                >
                    <X className="size-3"/>
                    Clear filters
                </button>
            )}
        </div>
    )
}
