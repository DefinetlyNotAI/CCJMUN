import {BookOpen, FileText, Gavel, Globe} from "lucide-react"

export const backgroundGuides = [
    {name: "UNSC Background Guide", committee: "UNSC", size: "? MB", status: "available", path: undefined},
    {name: "UNHRC Background Guide", committee: "UNHRC", size: "? MB", status: "available", path: undefined},
    {name: "WHO Background Guide", committee: "WHO", size: "? MB", status: "available", path: undefined},
    {name: "ECOSOC Background Guide", committee: "ECOSOC", size: "? MB", status: "available", path: undefined},
    {name: "ICC Background Guide", committee: "ICC", size: "? MB", status: "available", path: undefined},
    {name: "DISEC Background Guide", committee: "DISEC", size: "? MB", status: "available", path: undefined},
    {name: "GA3 Background Guide", committee: "GA3", size: "? MB", status: "available", path: undefined},
    {name: "Ad Hoc Crisis Guide", committee: "AD HOC", size: "n/a", status: "classified", path: undefined},
]

export const studyMaterials = [
    {
        icon: Gavel,
        title: "Rules of Procedure",
        description: "Complete CCJMUN Rules of Procedure - the official parliamentary guide for all committees.",
        type: "PDF",
        link: "/materials/rules-of-procedure.pdf"
    },
    {
        icon: FileText,
        title: "Delegate Handbook",
        description: "Comprehensive handbook covering everything from arriving at conference to writing resolutions.",
        type: "PDF",
        link: "/materials/delegate-handbook.pdf"
    },
    {
        icon: Globe,
        title: "Position Paper Guide",
        description: "Step-by-step guide on researching and writing an outstanding position paper.",
        type: "PDF",
        link: "/materials/position-paper-guide.pdf"
    },
    {
        icon: BookOpen,
        title: "Resolution Writing Guide",
        description: "Learn the structure of operative and preambulatory clauses with worked examples.",
        type: "PDF",
        link: "/materials/resolution-writing-guide.pdf"
    },
]

export const onlineResources = [
    {
        title: "UN Official Website",
        url: "https://un.org",
        desc: "Primary source for UN resolutions, reports, and documentation."
    },
    {
        title: "UN Documentation Centre",
        url: "https://documents.un.org",
        desc: "Search official UN documents and resolutions."
    },
    {
        title: "Open Factbook Org",
        url: "https://openfactbook.org",
        desc: "Country profiles with statistics, government info, and more.\nInspired by the discontinued CIA World Factbook."
    },
    {
        title: "International Crisis Group",
        url: "https://crisisgroup.org",
        desc: "In-depth analysis of global conflicts and crises.\nDaily reports on all worldwide crises."
    },
]
