export const pricingTiers = [
    {
        name: "Early Bird",
        deadline: "MONTH DAY, 2026",
        perDelegate: "cheap cost د.إ",
        note: "Best value - register early to save",
        highlight: true,
        isExpired: new Date("2026-06-01T00:00:00+04:00").getTime() < Date.now()
    },
    {
        name: "Regular",
        deadline: "MONTH DAY, 2026",
        perDelegate: "cost د.إ",
        note: "Standard rate for everyone",
        highlight: false,
        isExpired: new Date("2026-06-30T23:59:59+04:00").getTime() < Date.now()
    },
]

export const steps = [
    {
        num: "01",
        title: "Review Committee Choices",
        desc: "Browse our Committees page and select your preferred committees and country assignments."
    },
    {
        num: "02",
        title: "Complete Registration Form",
        desc: "Click the registration link below and fill out the delegation registration form."
    },
    {
        num: "03",
        title: "Wait for a confirmation email",
        desc: "After submission wait for upto 48 hours before one of the Finance department members contact you."
    },
    {
        num: "04",
        title: "Submit Payment",
        desc: "Pay registration fees via bank transfer or the secure payment portal linked in the confirmation email."
    },
    {
        num: "05",
        title: "Receive Confirmation",
        desc: "You'll receive a confirmation email with your committee assignment, country allocation, and welcome materials. You may also find materials in this website!"
    },
]
