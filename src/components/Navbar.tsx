import {useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {Menu, X} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Sheet, SheetClose, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import {cn} from "@/lib/utils"

const navLinks = [
    {label: "Home", href: "/"},
    {label: "About", href: "/about"},
    {label: "Secretariat", href: "/secretariat"},
    {label: "Committees", href: "/committees"},
    {label: "Resources", href: "/resources"},
    {label: "Schedule", href: "/schedule"},
    {label: "FAQs", href: "/faqs"},
    {label: "Contact", href: "/contact"},
]

export function Navbar() {
    const location = useLocation()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isActive = (href: string) =>
        href === "/" ? location.pathname === "/" : location.pathname.startsWith(href)

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-[#2b174f]/95 backdrop-blur-md shadow-lg shadow-black/20"
                    : "bg-[#2b174f]"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <div
                            className="w-8 h-8 rounded-full border-2 border-[#f2b652] flex items-center justify-center">
                            <span className="text-[#f2b652] text-xs font-bold leading-none">CCJ</span>
                        </div>
                        <span
                            className="text-white font-bold text-lg tracking-widest uppercase group-hover:text-[#f2b652] transition-colors">
              CCJMUN
              <span className="text-[#f2b652]"> 2026</span>
            </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "px-3 py-2 text-sm tracking-wider uppercase transition-all duration-200 rounded-sm",
                                    isActive(link.href)
                                        ? "text-[#f2b652] font-semibold"
                                        : "text-white/80 hover:text-[#f2b652] hover:bg-white/5"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/registration" className="ml-3">
                            <Button
                                size="sm"
                                className="bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 font-semibold tracking-wider uppercase text-xs px-5"
                            >
                                Register
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                                    <Menu className="size-5"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-[#2b174f] border-l border-white/10 p-0"
                                          showCloseButton={false}>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <span className="text-white font-bold text-lg tracking-widest">
                      CCJMUN <span className="text-[#f2b652]">2026</span>
                    </span>
                                        <SheetClose asChild>
                                            <Button variant="ghost" size="icon"
                                                    className="text-white hover:bg-white/10">
                                                <X className="size-5"/>
                                            </Button>
                                        </SheetClose>
                                    </div>
                                    <div className="flex flex-col py-4 px-4 gap-1 flex-1">
                                        {navLinks.map((link) => (
                                            <SheetClose asChild key={link.href}>
                                                <Link
                                                    to={link.href}
                                                    className={cn(
                                                        "px-4 py-3 text-sm tracking-wider uppercase rounded-md transition-colors",
                                                        isActive(link.href)
                                                            ? "text-[#f2b652] bg-white/10 font-semibold"
                                                            : "text-white/80 hover:text-[#f2b652] hover:bg-white/5"
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        ))}
                                    </div>
                                    <div className="p-6 border-t border-white/10">
                                        <SheetClose asChild>
                                            <Link to="/registration" className="block">
                                                <Button
                                                    className="w-full bg-[#f2b652] text-[#2b174f] hover:bg-[#f2b652]/90 font-semibold tracking-wider uppercase">
                                                    Register Now
                                                </Button>
                                            </Link>
                                        </SheetClose>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}
