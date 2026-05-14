export interface SecretariatMember {
    id: string
    name: string
    role: string
    bio: string
    imageUrl?: string
}

export const secretariatMembers: Record<string, SecretariatMember> = {
    "secretary-general": {
        id: "secretary-general",
        name: "Alexandra Nour",
        role: "Secretary-General",
        bio: "Alexandra leads CCJMUN with a vision for diplomatic excellence and youth empowerment. With five years of MUN experience across international conferences, she brings passion and precision to every aspect of the conference.",
        imageUrl: undefined,
    },
    "deputy-secretary-general": {
        id: "deputy-secretary-general",
        name: "Omar Khalil",
        role: "Deputy Secretary-General",
        bio: "Omar oversees committee operations and delegate relations. His background in international relations and conflict resolution shapes the conference's intellectual rigor.",
        imageUrl: undefined,
    },
    "director-general": {
        id: "director-general",
        name: "Lena Farouk",
        role: "Director-General",
        bio: "Lena coordinates all logistical and administrative functions of the conference. Her meticulous approach ensures a seamless experience for all participants.",
        imageUrl: undefined,
    },
    "head-of-research": {
        id: "head-of-research",
        name: "Karim Mansour",
        role: "Head of Research",
        bio: "Karim spearheads the development of background guides and research materials. His commitment to academic depth ensures delegates are well-equipped to engage meaningfully.",
        imageUrl: undefined,
    },
    "head-of-press": {
        id: "head-of-press",
        name: "Yasmine El-Badri",
        role: "Head of Press & Communications",
        bio: "Yasmine manages all media, photography, and communications for the conference. Her creative direction captures the spirit and energy of CCJMUN.",
        imageUrl: undefined,
    },
    "head-of-logistics": {
        id: "head-of-logistics",
        name: "Rami Aziz",
        role: "Head of Logistics",
        bio: "Rami ensures every operational detail is executed flawlessly - from venue management to delegate hospitality. His problem-solving skills keep everything running on schedule.",
        imageUrl: undefined,
    },
    "chief-of-staff": {
        id: "chief-of-staff",
        name: "Sara Haddad",
        role: "Chief of Staff",
        bio: "Sara bridges the secretariat and committee directors, fostering a collaborative environment. Her leadership experience in multiple MUNs makes her an invaluable asset to the team.",
        imageUrl: undefined,
    },
    "head-of-finance": {
        id: "head-of-finance",
        name: "Tarek Ibrahim",
        role: "Head of Finance",
        bio: "Tarek manages the financial architecture of the conference with transparency and accountability. His financial acumen ensures responsible stewardship of conference resources.",
        imageUrl: undefined,
    },
}
