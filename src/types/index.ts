import type {LucideIcon} from "lucide-react"
import type {ComponentType, ReactNode} from "react"

interface ClassNameProps {
    className?: string
}

interface LucideIconProps {
    icon: LucideIcon
}

export interface NavLink {
    label: string
    href: string
}

export interface SocialLink {
    id: string
    name: string
    url: string
    icon: ComponentType<ClassNameProps>
    ariaLabel: string
}

export interface TimeUnit {
    label: string
    value: number
}

export interface StatItem extends LucideIconProps {
    value: string
    label: string
}

export interface ValueItem extends LucideIconProps {
    title: string
    description: string
}

export interface CalendarDate {
    date: string
    label: string
    color: string
}

export type EventType =
    | "ceremony"
    | "committee"
    | "social"
    | "break"
    | "registration"

export interface ScheduleEvent {
    time: string
    title: string
    description: string
    type: EventType
}

export interface ScheduleDay {
    day: string
    date: string
    events: ScheduleEvent[]
}

export interface TypeConfigItem {
    label: string
    bg: string
    text: string
    border: string
    icon: LucideIcon
}

export interface PricingTier {
    name: string
    deadline: string
    perDelegate: string
    note: string
    highlight: boolean
    isExpired: boolean
}

export interface StepItem {
    num: string
    title: string
    desc: string
}

export interface StudyMaterial extends LucideIconProps {
    title: string
    description: string
    type: string
    link?: string
}

export interface OnlineResource {
    title: string
    url: string
    desc: string
}

type BGGuideStatus = "available" | "classified"

export interface BackgroundGuide {
    name: string
    committee: string
    size: string
    status: BGGuideStatus
    path?: string
}

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

type ChairRole = "Chair" | "Vice Chair"

interface Chairs {
    name: string
    role: ChairRole
    intro: string
    imageUrl?: string
}

export interface Committee {
    id: string
    name: string
    abbreviation: string
    topic1: string
    topic2?: string
    description: string
    difficulty: DifficultyLevel
    size: string
    backgroundGuideUrl?: string
    chairs?: Chairs[]
}

export interface TCommitteeFilter {
    search: string
    difficulty: DifficultyLevel | null
}

export interface CommitteeFilterProps {
    onFilterChange: (filters: TCommitteeFilter) => void
}

/* =========================
   FAQ
========================= */

export interface FAQ {
    question: string
    answer: string
    category: string
}

export type FAQCategory = FAQ["category"]
export type Category = "All" | FAQCategory

export interface FAQGroup {
    category: Category
    items: FAQ[]
}

export type InquiryType =
    | "Registration"
    | "Committees"
    | "Resources"
    | "Logistics"
    | "Media & Press"
    | "Other"

export interface ContactFormData {
    firstName: string
    lastName: string
    email: string
    inquiryType: InquiryType
    school: string
    subject: string
    message: string
}

export type Role =
    | "Secretary General"
    | "Deputy Secretary General"
    | "Head"
    | "Lead"
    | "Member"

export type Department =
    | "SG"
    | "DSG"
    | "Chief of Staff"
    | "IT"
    | "Delegate Affairs"
    | "Crisis"
    | "Public Relations"
    | "Academics"

export interface TeamMember {
    id: string
    name: string
    role: Role
    bio: string
    imageUrl?: string
}

export type DepartmentMembers = Record<Department, Record<string, TeamMember>>

export type Theme = "dark" | "light" | "system"
export type ResolvedTheme = "dark" | "light"

export interface ThemeProviderProps {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
    disableTransitionOnChange?: boolean
}

export interface ThemeProviderState {
    theme: Theme
    setTheme: (theme: Theme) => void
}