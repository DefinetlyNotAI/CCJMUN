import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {BookOpen, Download, ExternalLink, FileText, Gavel, Globe} from "lucide-react"

const backgroundGuides = [
    {name: "UNSC Background Guide", committee: "UNSC", size: "2.4 MB", status: "available"},
    {name: "UNHRC Background Guide", committee: "UNHRC", size: "1.8 MB", status: "available"},
    {name: "WHO Background Guide", committee: "WHO", size: "2.1 MB", status: "available"},
    {name: "ECOSOC Background Guide", committee: "ECOSOC", size: "1.9 MB", status: "available"},
    {name: "ICC Background Guide", committee: "ICC", size: "2.6 MB", status: "available"},
    {name: "DISEC Background Guide", committee: "DISEC", size: "2.2 MB", status: "available"},
    {name: "GA3 Background Guide", committee: "GA3", size: "1.5 MB", status: "available"},
    {name: "Ad Hoc Crisis Guide", committee: "AD HOC", size: "-", status: "classified"},
]

const studyMaterials = [
    {
        icon: Gavel,
        title: "Rules of Procedure",
        description: "Complete CCJMUN Rules of Procedure - the official parliamentary guide for all committees.",
        type: "PDF",
    },
    {
        icon: FileText,
        title: "Delegate Handbook",
        description: "Comprehensive handbook covering everything from arriving at conference to writing resolutions.",
        type: "PDF",
    },
    {
        icon: Globe,
        title: "Position Paper Guide",
        description: "Step-by-step guide on researching and writing an outstanding position paper.",
        type: "PDF",
    },
    {
        icon: BookOpen,
        title: "Resolution Writing Guide",
        description: "Learn the structure of operative and preambulatory clauses with worked examples.",
        type: "PDF",
    },
]

const onlineResources = [
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
        title: "CIA World Factbook",
        url: "https://cia.gov/the-world-factbook",
        desc: "Country profiles with statistics, government info, and more."
    },
    {
        title: "International Crisis Group",
        url: "https://crisisgroup.org",
        desc: "In-depth analysis of global conflicts and crises."
    },
]

export function Resources() {
    return (
        <div className="min-h-screen pt-16">
            {/* Hero */}
            <section className="relative py-32 overflow-hidden bg-[#2b174f]">
                <div
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{backgroundImage: "url('/bg.jpeg')"}}
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                        Delegate Resources
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Prepare to Excel
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        All the materials you need to walk into committee fully prepared and confident.
                    </p>
                </div>
            </section>

            {/* Background Guides */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Committee Materials
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">Background Guides</h2>
                        <p className="text-gray-500 mt-2 text-base">Released 6 weeks before the conference. Check back
                            regularly for updates.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {backgroundGuides.map((guide) => (
                            <Card key={guide.name}
                                  className="border border-gray-100 hover:border-[#f2b652]/40 hover:shadow-md transition-all group">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-3">
                    <span
                        className="bg-[#2b174f] text-[#f2b652] text-xs font-bold px-2 py-0.5 rounded-sm tracking-widest uppercase">
                      {guide.committee}
                    </span>
                                        {guide.status === "classified" ? (
                                            <Badge variant="outline"
                                                   className="text-xs border-red-200 text-red-600">Classified</Badge>
                                        ) : (
                                            <span className="text-gray-400 text-xs">{guide.size}</span>
                                        )}
                                    </div>
                                    <h3 className="text-[#2b174f] font-semibold text-sm mb-4 leading-snug">{guide.name}</h3>
                                    <Button
                                        size="sm"
                                        variant={guide.status === "classified" ? "outline" : "default"}
                                        disabled={guide.status === "classified"}
                                        className={
                                            guide.status === "classified"
                                                ? "w-full border-gray-200 text-gray-400 text-xs"
                                                : "w-full bg-[#2b174f] hover:bg-[#2b174f]/90 text-white text-xs tracking-wider uppercase"
                                        }
                                    >
                                        <Download className="size-3.5 mr-1.5"/>
                                        {guide.status === "classified" ? "Revealed at Conference" : "Download"}
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Study Materials */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            Study Materials
                        </p>
                        <h2 className="text-3xl font-bold text-[#2b174f]">Guides & Handbooks</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {studyMaterials.map(({icon: Icon, title, description, type}) => (
                            <Card key={title}
                                  className="border border-gray-100 hover:border-[#f2b652]/40 hover:shadow-md transition-all group bg-white">
                                <CardContent className="p-6 flex gap-5 items-start">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center shrink-0 group-hover:bg-[#f2b652] transition-colors">
                                        <Icon
                                            className="size-6 text-white group-hover:text-[#2b174f] transition-colors"/>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-[#2b174f] font-bold text-base">{title}</h3>
                                            <Badge variant="outline"
                                                   className="text-xs border-gray-200 text-gray-500">{type}</Badge>
                                        </div>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f] hover:text-white text-xs tracking-wider uppercase font-semibold"
                                        >
                                            <Download className="size-3.5 mr-1.5"/>
                                            Download
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Online Resources */}
            <section className="py-20 bg-[#2b174f]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-10">
                        <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-2">
                            External Resources
                        </p>
                        <h2 className="text-3xl font-bold text-white">Research Starting Points</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {onlineResources.map(({title, desc}) => (
                            <div key={title}
                                 className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#f2b652]/40 hover:bg-white/10 transition-all group">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-white font-semibold text-base">{title}</h3>
                                    <ExternalLink className="size-4 text-[#f2b652] shrink-0 mt-0.5"/>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Resources */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#2b174f] flex items-center justify-center mx-auto mb-6">
                        <Globe className="size-8 text-[#f2b652]"/>
                    </div>
                    <h2 className="text-3xl font-bold text-[#2b174f] mb-4">Video Tutorials</h2>
                    <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
                        Our video series covers Rules of Procedure, speech delivery, working paper writing, and more.
                        Coming soon on our YouTube channel.
                    </p>
                    <Button
                        variant="outline"
                        className="border-[#2b174f] text-[#2b174f] hover:bg-[#2b174f] hover:text-white font-semibold tracking-wider uppercase"
                    >
                        <ExternalLink className="size-4 mr-2"/>
                        Subscribe on YouTube
                    </Button>
                </div>
            </section>
        </div>
    )
}
