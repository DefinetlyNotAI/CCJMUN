import {ClipboardList, Coffee, PartyPopper, Presentation, Trophy} from "lucide-react"

interface ScheduleEvent {
    time: string
    title: string
    description: string
    type: "ceremony" | "committee" | "social" | "break" | "registration"
}

export interface ScheduleDay {
    day: string
    date: string
    events: ScheduleEvent[]
}

export const schedule: ScheduleDay[] = [
    {
        day: "Day 1",
        date: "Friday, March 6, 2026",
        events: [
            {
                time: "7:30 AM - 8:45 AM",
                title: "Virtual Check-In & Tech Setup",
                description:
                    "Delegates join the conference platform, test audio and video, and receive committee room links and digital credentials.",
                type: "registration",
            },
            {
                time: "9:00 AM - 10:30 AM",
                title: "Opening Ceremony (Livestream)",
                description:
                    "Conference opening broadcast featuring the Secretary-General’s address, keynote speaker, and introduction of committees and agenda.",
                type: "ceremony",
            },
            {
                time: "10:30 AM - 10:45 AM",
                title: "Break",
                description:
                    "Short break for technical reset and committee room allocation.",
                type: "break",
            },
            {
                time: "10:45 AM - 1:00 PM",
                title: "Committee Session I",
                description:
                    "Roll call, opening speeches, and formal establishment of speakers list. Initial position sharing begins.",
                type: "committee",
            },
            {
                time: "1:00 PM - 1:45 PM",
                title: "Break",
                description:
                    "Lunch break and informal networking via breakout lounges.",
                type: "break",
            },
            {
                time: "1:45 PM - 4:15 PM",
                title: "Committee Session II",
                description:
                    "Moderated caucuses, unmoderated caucuses in breakout rooms, and drafting of working papers.",
                type: "committee",
            },
            {
                time: "5:30 PM - 7:00 PM",
                title: "Virtual Delegate Social",
                description:
                    "Online social session with interactive activities, games, and cross-committee networking rooms.",
                type: "social",
            },
        ],
    },
    {
        day: "Day 2",
        date: "Saturday, March 7, 2026",
        events: [
            {
                time: "8:30 AM - 9:00 AM",
                title: "Morning Check-In",
                description:
                    "Delegates rejoin the platform, review overnight updates, and enter committee rooms.",
                type: "registration",
            },
            {
                time: "9:00 AM - 11:30 AM",
                title: "Committee Session III",
                description:
                    "Continuation of debate, merging blocs, and refinement of working papers into draft resolutions.",
                type: "committee",
            },
            {
                time: "11:30 AM - 12:15 PM",
                title: "Break",
                description:
                    "Short break with optional mentor Q&A sessions.",
                type: "break",
            },
            {
                time: "12:15 PM - 2:45 PM",
                title: "Committee Session IV",
                description:
                    "Finalization of draft resolutions, voting procedure, and formal adoption of resolutions.",
                type: "committee",
            },
            {
                time: "2:45 PM - 3:15 PM",
                title: "Break & Transition",
                description:
                    "Delegates prepare for closing ceremony and move to main broadcast room.",
                type: "break",
            },
            {
                time: "3:15 PM - 4:30 PM",
                title: "Closing Ceremony & Awards",
                description:
                    "Final remarks by the Secretary-General, announcement of awards, and official closure of CCJMUN 2026.",
                type: "ceremony",
            },
        ],
    },
];

export const typeConfig = {
    ceremony: {
        label: "Ceremony",
        bg: "bg-[#f2b652]/20",
        text: "text-[#2b174f]",
        border: "border-[#f2b652]",
        icon: Trophy
    },
    committee: {
        label: "Committee",
        bg: "bg-[#2b174f]/5",
        text: "text-[#2b174f]",
        border: "border-[#2b174f]",
        icon: Presentation
    },
    social: {
        label: "Social",
        bg: "bg-purple-50",
        text: "text-purple-800",
        border: "border-purple-300",
        icon: PartyPopper
    },
    break: {label: "Break", bg: "bg-gray-50", text: "text-gray-600", border: "border-gray-300", icon: Coffee},
    registration: {
        label: "Registration",
        bg: "bg-blue-50",
        text: "text-blue-800",
        border: "border-blue-300",
        icon: ClipboardList
    },
}
