import {Link} from "react-router-dom"
import {Mail, MapPin} from "lucide-react"
import {Separator} from "@/components/ui/separator"
import {socialLinks} from "@/lib/config/socials"
import {links} from "@/data/footer.ts";

export function Footer() {
    return (
        <footer className="bg-[#2b174f] text-white">
            <div className="divider-gold"/>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-10 h-10 rounded-full border-2 border-[#f2b652] flex items-center justify-center">
                                <span className="text-[#f2b652] text-xs font-bold">CCJ</span>
                            </div>
                            <span className="text-white font-bold text-xl tracking-widest uppercase">
                CCJMUN <span className="text-[#f2b652]">2026</span>
              </span>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed max-w-sm mt-3">
                            CCJ Model United Nations - Where young diplomats shape the future. Join us for an
                            unforgettable conference experience on July 17-18, 2026.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.id}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-[#f2b652] hover:border-[#f2b652]/50 transition-colors"
                                        aria-label={social.ariaLabel}
                                    >
                                        <Icon className="size-4"/>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#f2b652] font-semibold text-sm tracking-widest uppercase mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        to={link.href}
                                        className="text-white/60 hover:text-[#f2b652] text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[#f2b652] font-semibold text-sm tracking-widest uppercase mb-4">
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                <a
                                    href="mailto:EMAIL@PLACEHOLDER.com"
                                    className="text-white/60 hover:text-[#f2b652] text-sm transition-colors"
                                >
                                    EMAIL PLACEHOLDER
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="size-4 text-[#f2b652] mt-0.5 shrink-0"/>
                                <span className="text-white/60 text-sm">
                  Online, United Arab Emirates
                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Link
                                to="/registration"
                                className="inline-block bg-[#f2b652] text-[#2b174f] px-5 py-2 rounded-sm text-sm font-semibold tracking-wider uppercase hover:bg-[#f2b652]/90 transition-colors"
                            >
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/10 my-10"/>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <p>© 2026 CCJMUN. All rights reserved.</p>
                    <p>Crafted with passion by Shahm Najeeb</p>
                </div>
            </div>
        </footer>
    )
}
