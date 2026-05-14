export type DifficultyLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert"

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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: "#",
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
        backgroundGuideUrl: undefined,
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
        backgroundGuideUrl: "#",
    },
]
