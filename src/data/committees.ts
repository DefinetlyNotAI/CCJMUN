import type {Committee, DifficultyLevel} from "@/types";

export const committees: Committee[] = [
    {
        id: "unsc",
        name: "United Nations Security Council",
        abbreviation: "UNSC",
        topic1: "Addressing the Escalation of Conflicts in the Horn of Africa",
        topic2: "Reforming the Veto Power Mechanism in an Era of Multipolar Tensions",
        description:
            "The UNSC holds primary responsibility for international peace and security. Delegates will grapple with real-time geopolitical crises and the structural tensions within the Council itself.",
        difficulty: "Expert",
        size: "15 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Alexandra Chen",
                role: "Chair",
                intro: "Alexandra brings 8 years of experience in diplomatic negotiations and international security policy. She has led multiple UNSC simulations and is passionate about fostering rigorous debate.",
                imageUrl: undefined
            },
            {
                name: "Dr. James Okonkwo",
                role: "Vice Chair",
                intro: "An expert in conflict resolution, Dr. Okonkwo specializes in African geopolitics and has published extensively on multilateral peacekeeping mechanisms.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        abbreviation: "UNHRC",
        topic1: "Digital Surveillance and the Right to Privacy in Authoritarian States",
        topic2: "Protecting Stateless Populations: Pathways to Legal Recognition",
        description:
            "The UNHRC addresses the most pressing human rights violations globally. Delegates will draft resolutions that balance state sovereignty with universal human dignity.",
        difficulty: "Intermediate",
        size: "47 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Maria Santos",
                role: "Chair",
                intro: "Maria is a human rights advocate with a background in international law. She has served on several UN committees and excels at facilitating consensus-building.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "who",
        name: "World Health Organization",
        abbreviation: "WHO",
        topic1: "Pandemic Preparedness: Strengthening Global Health Architecture Post-COVID-19",
        topic2: "Addressing Mental Health Crises in Conflict Zones",
        description:
            "The WHO committee tackles global health challenges requiring coordinated international responses. Delegates will develop comprehensive public health frameworks.",
        difficulty: "Intermediate",
        size: "35 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Dr. Priya Kapoor",
                role: "Chair",
                intro: "A public health expert with 12 years of field experience, Dr. Kapoor focuses on global health equity and sustainable development.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ecosoc",
        name: "Economic and Social Council",
        abbreviation: "ECOSOC",
        topic1: "Debt Relief Mechanisms for Developing Nations in the Post-Pandemic Economy",
        topic2: "Sustainable Urbanization and Inclusive Infrastructure Development",
        description:
            "ECOSOC serves as the principal body for coordination on economic, social, and environmental issues. Delegates will craft policies bridging development gaps globally.",
        difficulty: "Intermediate",
        size: "54 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Ahmed Hassan",
                role: "Chair",
                intro: "Ahmed specializes in development economics and sustainable development goals. He brings practical experience from NGO work in emerging markets.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "icc",
        name: "International Criminal Court",
        abbreviation: "ICC",
        topic1: "The Trial of Former State Leaders for Crimes Against Humanity",
        description:
            "A specialized committee simulating proceedings of the ICC. Delegates take on roles of prosecution, defense, and judges in a high-stakes international legal drama.",
        difficulty: "Advanced",
        size: "20 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Justice Rebecca Moore",
                role: "Chief Judge",
                intro: "Justice Moore is a seasoned international law expert with experience in prosecutorial and judicial roles. She ensures procedural excellence and fair representation.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "disec",
        name: "Disarmament and International Security Committee",
        abbreviation: "DISEC",
        topic1: "Regulation of Autonomous Weapons Systems and Lethal AI in Warfare",
        topic2: "Nuclear Non-Proliferation in the Context of Emerging Geopolitical Alliances",
        description:
            "DISEC addresses disarmament challenges in a rapidly evolving technological landscape. Delegates will navigate the complex interplay of national security and global stability.",
        difficulty: "Advanced",
        size: "60 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Dr. Mikhail Petrov",
                role: "Chair",
                intro: "Dr. Petrov specializes in strategic weapons policy and technological governance. His research informs international disarmament frameworks.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ad-hoc",
        name: "Ad Hoc Crisis Committee",
        abbreviation: "AD HOC",
        topic1: "Classified - Crisis revealed at conference",
        description:
            "The Ad Hoc Crisis Committee responds to rapidly evolving global emergencies in real time. Delegates must think on their feet, adapt policy, and exercise decisive leadership under pressure.",
        difficulty: "Expert",
        size: "25 delegates",
        backgroundGuideUrl: "CONFIDENTIAL",
        chairs: [
            {
                name: "Dr. Sophia Zhang",
                role: "Crisis Director",
                intro: "Dr. Zhang designs and moderates dynamic crisis scenarios. Her unpredictable briefings keep delegates sharp and engaged throughout the simulation.",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ga3",
        name: "General Assembly Third Committee",
        abbreviation: "GA3",
        topic1: "Combating Modern Slavery and Human Trafficking Along Migration Routes",
        topic2: "Indigenous Rights and Land Sovereignty in the Context of Climate Change",
        description:
            "GA3 focuses on social, humanitarian, and cultural issues. An ideal committee for delegates developing their resolution-drafting and multilateral negotiation skills.",
        difficulty: "Beginner",
        size: "100 delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "Patricia Nakamura",
                role: "Chair",
                intro: "Patricia brings warmth and expertise to complex social issues. Her mentorship style makes GA3 an excellent entry point for new delegates.",
                imageUrl: undefined
            }
        ]
    },
]

export const difficultyColors: Record<DifficultyLevel, string> = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-blue-100 text-blue-800 border-blue-200",
    Advanced: "bg-orange-100 text-orange-800 border-orange-200",
    Expert: "bg-red-100 text-red-800 border-red-200",
}