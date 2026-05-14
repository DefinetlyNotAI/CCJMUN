import type { LucideIcon } from "lucide-react";
import  {type ComponentType} from "react";
import * as React from "react";

export interface StatItem {
    icon: LucideIcon;
    value: string;
    label: string;
}
export interface CalendarDate {
    date: string;
    label: string;
    color: string;
}
export interface PricingTier {
    name: string;
    deadline: string;
    perDelegate: string;
    note: string;
    highlight: boolean;
    isExpired: boolean;
}

export interface StepItem {
    num: string;
    title: string;
    desc: string;
}

export interface BackgroundGuide {
    name: string;
    committee: string;
    size: string;
    status: "available" | "classified";
    path?: string;
}
export interface StudyMaterial {
    icon: LucideIcon;
    title: string;
    description: string;
    type: string;
    link?: string;
}
export interface OnlineResource {
    title: string;
    url: string;
    desc: string;
}

export type EventTypes = "ceremony" | "committee" | "social" | "break" | "registration"
interface ScheduleEvent {
    time: string
    title: string
    description: string
    type: EventTypes
}
export interface TypeConfigItem {
    label: string;
    bg: string;
    text: string;
    border: string;
    icon: LucideIcon;
}
export interface ScheduleDay {
    day: string
    date: string
    events: ScheduleEvent[]
}

export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"
export interface SearchFilters {
    search: string;
    difficulty: DifficultyLevel | null;
}
export type InquiryType =
    | "Registration"
    | "Committees"
    | "Resources"
    | "Logistics"
    | "Media & Press"
    | "Other";
export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    inquiryType: InquiryType;
    school: string;
    subject: string;
    message: string;
}
export type Category = "All" | FAQ["category"];

export interface FAQGroup {
    category: Category;
    items: FAQ[];
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
}
export interface FAQ {
    question: string
    answer: string
    category: string
}

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    id: string
    name: string
    url: string
    icon: ComponentType<{ className?: string }>
    ariaLabel: string
}

interface TeamMember {
    id: string
    name: string
    role: Role
    bio: string
    imageUrl?: string
}

type Role =
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

export type DepartmentMembers = Record<string, TeamMember>

export interface ValueItem {
    icon: LucideIcon;
    title: string;
    description: string;
}
export interface CommitteeFilterProps {
    onFilterChange: (filters: { search: string; difficulty: DifficultyLevel | null }) => void
}

export interface TimeUnit {
    label: string
    value: number
}
export interface NavLink {
    label: string;
    href: string;
}

export type Theme = "dark" | "light" | "system"
export type ResolvedTheme = "dark" | "light"

export interface ThemeProviderProps {
    children: React.ReactNode
    defaultTheme?: Theme
    storageKey?: string
    disableTransitionOnChange?: boolean
}

export interface ThemeProviderState {
    theme: Theme
    setTheme: (theme: Theme) => void
}
