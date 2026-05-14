import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Download, ExternalLink, Lock} from "lucide-react"
import {backgroundGuides, onlineResources, studyMaterials} from "@/data/resources.ts";

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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {backgroundGuides.map((guide) => (
                            <Card key={guide.name}
                                  className="border border-gray-100 hover:border-[#f2b652]/60 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-200 ease-out group">
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
                                        variant="outline"
                                        disabled={guide.status === "classified" || !guide.path}
                                        className={
                                            guide.status === "classified" || !guide.path
                                                ? "w-full border-gray-200 text-gray-400 text-xs"
                                                : "w-full border-[#2b174f] text-[#2b174f] bg-transparent text-xs tracking-wider uppercase font-semibold hover:bg-[#2b174f]! hover:text-white! hover:border-[#2b174f]!"
                                        }
                                        asChild={!(guide.status === "classified") && !!guide.path}
                                    >
                                        {!(guide.status === "classified") && !!guide.path ? (
                                            <a href={guide.path} download className="flex items-center justify-center gap-1.5">
                                                <Download className="size-3.5" />
                                                <span>Download</span>
                                            </a>
                                        ) : (
                                            <span className="flex items-center justify-center gap-1.5">
                                                {guide.status === "classified" ? (
                                                    <Lock className="size-3.5" />
                                                ) : (
                                                    <Download className="size-3.5" />
                                                )}
                                                <span>
                                                    {guide.status === "classified"
                                                        ? "Revealed at Conference"
                                                        : "To be released"}
                                                </span>
                                            </span>
                                        )}
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
                        {studyMaterials.map(({ icon: Icon, title, description, type, link }) => (
                            <Card
                                key={title}
                                className="border border-gray-100 bg-white transition-all duration-200 ease-out group hover:-translate-y-1 hover:shadow-xl hover:border-[#f2b652]/60"
                            >
                                <CardContent className="p-6 flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center shrink-0 group-hover:bg-[#f2b652] transition-colors">
                                        <Icon className="size-6 text-white group-hover:text-[#2b174f] transition-colors" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-[#2b174f] font-bold text-base">{title}</h3>
                                            <Badge variant="outline" className="text-xs border-gray-200 text-gray-500">
                                                {type}
                                            </Badge>
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>

                                        {link ? (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="border-[#2b174f] text-[#2b174f] bg-transparent text-xs tracking-wider uppercase font-semibold hover:bg-[#2b174f]! hover:text-white! hover:border-[#2b174f]!"
                                                asChild
                                            >
                                                <a
                                                    href={link}
                                                    download
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center"
                                                >
                                                    <Download className="size-3.5 mr-1.5" />
                                                    Download
                                                </a>
                                            </Button>
                                        ) : (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                disabled={true}
                                                className="w-full border-gray-200 text-gray-400 text-xs"
                                            >
                                                <span className="flex items-center justify-center gap-1.5">
                                                    <Download className="size-3.5" />
                                                    <span>
                                                        "To be released"
                                                    </span>
                                                </span>
                                            </Button>
                                        )}
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
                        {onlineResources.map(({ title, desc, url }) => (
                            <a
                                key={title}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div
                                    className="bg-white/5 border border-white/10 rounded-lg p-5 hover:border-[#f2b652]/40 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                                >
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h3 className="text-white font-semibold text-base group-hover:text-[#f2b652] transition-colors">
                                            {title}
                                        </h3>
                                        <ExternalLink className="size-4 text-[#f2b652] shrink-0 mt-0.5" />
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        {desc.split("\n").map((line, i) => (
                                            <span key={i}>{line}<br /></span>
                                        ))}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
