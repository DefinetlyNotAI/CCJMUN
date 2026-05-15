import {CalendarDays, Globe, MapPin, Users} from "lucide-react"
import type {CalendarDate, StatItem} from "@/types";

export const CalendarDates: CalendarDate[] = [
    {date: "MONTH DAY, 2026", label: "Early Registration Closes", color: "border-[#f2b652]"},
    {date: "MONTH DAY, 2026", label: "Final Registration Deadline", color: "border-[#f2b652]"},
    {date: "July 17 - 18, 2026", label: "Conference Days", color: "border-[#2b174f]"},
];

export const stats: StatItem[] = [
    {icon: Users, value: "100+", label: "Delegates"},
    {icon: Globe, value: "8+", label: "Committees"},
    {icon: CalendarDays, value: "2", label: "Days"},
    {icon: MapPin, value: "Online", label: "UAE"},
];