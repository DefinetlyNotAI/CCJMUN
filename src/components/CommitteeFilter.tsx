import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {ChevronDown, Search, X} from 'lucide-react'
import type {CommitteeFilterProps, DifficultyLevel} from "@/types";

const difficultyLevels: DifficultyLevel[] = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'Expert'
]

export function CommitteeFilter({onFilterChange}: CommitteeFilterProps) {
    const [search, setSearch] = useState('')
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | null>(null)
    const [collapsed, setCollapsed] = useState(false)

    const handleSearchChange = (value: string) => {
        setSearch(value)

        onFilterChange({
            search: value,
            difficulty: selectedDifficulty
        })
    }

    const handleDifficultyChange = (difficulty: DifficultyLevel) => {
        const newDifficulty =
            selectedDifficulty === difficulty ? null : difficulty

        setSelectedDifficulty(newDifficulty)

        onFilterChange({
            search,
            difficulty: newDifficulty
        })
    }

    const handleClear = () => {
        setSearch('')
        setSelectedDifficulty(null)

        onFilterChange({
            search: '',
            difficulty: null
        })
    }

    const isFiltered = search || selectedDifficulty

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
                <p className="text-xs tracking-widest uppercase text-gray-400 font-semibold">
                    Committee Filters
                </p>

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="flex items-center gap-1 text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-[#2b174f] transition-colors"
                >
                    {collapsed ? 'Expand' : 'Collapse'}

                    <ChevronDown
                        className={`size-3.5 transition-transform ${
                            collapsed ? '' : 'rotate-180'
                        }`}
                    />
                </button>
            </div>

            {!collapsed && (
                <>
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400"/>

                        <Input
                            placeholder="Search committees..."
                            value={search}
                            onChange={(e) => handleSearchChange(e.target.value)}
                            className="pl-10 border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {difficultyLevels.map((level) => (
                            <button
                                key={level}
                                onClick={() => handleDifficultyChange(level)}
                                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors border ${
                                    selectedDifficulty === level
                                        ? 'bg-[#2b174f] text-white border-[#2b174f]'
                                        : 'bg-transparent text-gray-500 border-gray-200 hover:border-[#2b174f] hover:text-[#2b174f]'
                                }`}
                            >
                                {level}
                            </button>
                        ))}

                        {isFiltered && (
                            <button
                                onClick={handleClear}
                                className="px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-colors border border-red-100 text-red-500 hover:border-red-300 hover:text-red-600"
                            >
                                <span className="flex items-center gap-1">
                                    <X className="size-3"/>
                                    Clear
                                </span>
                            </button>
                        )}
                    </div>
                </>
            )}
        </div>
    )
}
