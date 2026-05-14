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
                time: "8:00 AM - 9:30 AM",
                title: "Delegate Registration & Check-In",
                description: "Collect your delegate badges, welcome packets, and committee materials at the main registration desk.",
                type: "registration",
            },
            {
                time: "9:30 AM - 11:00 AM",
                title: "Opening Ceremony",
                description: "A grand welcome to CCJMUN 2026. Keynote address by the Secretary-General, special guest speaker, and the ceremonial reading of the conference theme.",
                type: "ceremony",
            },
            {
                time: "11:00 AM - 11:15 AM",
                title: "Break",
                description: "Refreshments provided in the main hall foyer.",
                type: "break",
            },
            {
                time: "11:15 AM - 1:30 PM",
                title: "Committee Session I",
                description: "Opening of the speakers list. Delegates deliver opening speeches and begin general debate.",
                type: "committee",
            },
            {
                time: "1:30 PM - 2:30 PM",
                title: "Lunch Break",
                description: "Lunch provided on campus. Networking opportunity for delegates from different schools.",
                type: "break",
            },
            {
                time: "2:30 PM - 5:00 PM",
                title: "Committee Session II",
                description: "Moderated and unmoderated caucuses. Introduction and debate of working papers.",
                type: "committee",
            },
            {
                time: "6:00 PM - 9:00 PM",
                title: "Delegate Social Night",
                description: "An informal evening gathering for delegates to network, socialize, and unwind. Themed activities and entertainment.",
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
                description: "Doors open. Delegates are welcome to arrive and review their notes before sessions begin.",
                type: "registration",
            },
            {
                time: "9:00 AM - 12:00 PM",
                title: "Committee Session III",
                description: "Continuation of working paper debates. Merging and amending draft resolutions.",
                type: "committee",
            },
            {
                time: "12:00 PM - 1:00 PM",
                title: "Lunch Break",
                description: "Lunch served on campus. Committee directors hold informal Q&A sessions.",
                type: "break",
            },
            {
                time: "1:00 PM - 4:00 PM",
                title: "Committee Session IV",
                description: "Final voting procedures. Passage of resolutions and concluding committee statements.",
                type: "committee",
            },
            {
                time: "4:15 PM - 4:45 PM",
                title: "Break & Preparation",
                description: "Delegates prepare for the closing ceremony.",
                type: "break",
            },
            {
                time: "5:00 PM - 7:00 PM",
                title: "Closing Ceremony & Awards",
                description: "Recognition of outstanding delegates, Best Delegate, Outstanding Delegate, and Verbal Commendation awards across all committees. Closing remarks by the Secretary-General.",
                type: "ceremony",
            },
        ],
    },
]
