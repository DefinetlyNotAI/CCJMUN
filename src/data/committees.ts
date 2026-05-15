import type {Committee, DifficultyLevel} from "@/types";

export const committees: Committee[] = [
    {
        id: "unsc",
        name: "United Nations Security Council",
        abbreviation: "UNSC",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "The UNSC holds primary responsibility for international peace and security. Delegates will grapple with real-time geopolitical crises and the structural tensions within the Council itself.",
        difficulty: "Expert",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            },
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Vice Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "unhrc",
        name: "United Nations Human Rights Council",
        abbreviation: "UNHRC",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "The UNHRC addresses the most pressing human rights violations globally. Delegates will draft resolutions that balance state sovereignty with universal human dignity.",
        difficulty: "Intermediate",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "who",
        name: "World Health Organization",
        abbreviation: "WHO",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "The WHO committee tackles global health challenges requiring coordinated international responses. Delegates will develop comprehensive public health frameworks.",
        difficulty: "Intermediate",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ecosoc",
        name: "Economic and Social Council",
        abbreviation: "ECOSOC",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "ECOSOC serves as the principal body for coordination on economic, social, and environmental issues. Delegates will craft policies bridging development gaps globally.",
        difficulty: "Intermediate",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "icc",
        name: "International Criminal Court",
        abbreviation: "ICC",
        topic1: "TOPIC 1 PLACEHOLDER",
        description:
            "A specialized committee simulating proceedings of the ICC. Delegates take on roles of prosecution, defense, and judges in a high-stakes international legal drama.",
        difficulty: "Advanced",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "disec",
        name: "Disarmament and International Security Committee",
        abbreviation: "DISEC",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "DISEC addresses disarmament challenges in a rapidly evolving technological landscape. Delegates will navigate the complex interplay of national security and global stability.",
        difficulty: "Advanced",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ad-hoc",
        name: "Ad Hoc Crisis Committee",
        abbreviation: "AD HOC",
        topic1: "TOPIC 1 PLACEHOLDER",
        description:
            "The Ad Hoc Crisis Committee responds to rapidly evolving global emergencies in real time. Delegates must think on their feet, adapt policy, and exercise decisive leadership under pressure.",
        difficulty: "Expert",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: "CONFIDENTIAL",
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
                imageUrl: undefined
            }
        ]
    },
    {
        id: "ga3",
        name: "General Assembly Third Committee",
        abbreviation: "GA3",
        topic1: "TOPIC 1 PLACEHOLDER",
        topic2: "TOPIC 2 PLACEHOLDER",
        description:
            "GA3 focuses on social, humanitarian, and cultural issues. An ideal committee for delegates developing their resolution-drafting and multilateral negotiation skills.",
        difficulty: "Beginner",
        size: "~MAX NUMBER delegates",
        backgroundGuideUrl: undefined,
        chairs: [
            {
                name: "CHAIR NAME PLACEHOLDER",
                role: "Chair",
                intro: "CHAIR BIO PLACEHOLDER",
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