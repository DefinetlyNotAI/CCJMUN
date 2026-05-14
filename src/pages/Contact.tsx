import * as React from "react"
import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {CircleCheck as CheckCircle, Mail, MapPin, Send} from "lucide-react"
import {socialLinks} from "../data/socials"

export function Contact() {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        inquiryType: "",
        school: "",
        subject: "",
        message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
    }

    const handleInquiryChange = (value: string) => {
        setFormData({
            ...formData,
            inquiryType: value,
        })
    }

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()

        const body = `${formData.message}

By ${formData.firstName} ${formData.lastName},
Representation: ${formData.school || "Self-Represented"}`

        window.location.href = `mailto:PLACEHOLDER@EMAIL.com?subject=${encodeURIComponent(
            `${formData.inquiryType} | ${formData.subject}`
        )}&body=${encodeURIComponent(body)}`

        setSubmitted(true)
    }

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
                        Get in Touch
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Contact Us
                    </h1>
                    <div className="divider-gold mx-auto w-32 mb-6"/>
                    <p className="text-white/75 text-xl leading-relaxed max-w-2xl mx-auto">
                        Have questions? We'd love to hear from you. Our team responds within 48 hours.
                    </p>
                </div>
            </section>

            {/* Email submission section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <p className="text-[#f2b652] text-sm tracking-widest uppercase font-semibold mb-3">
                                Reach Out
                            </p>
                            <h2 className="text-3xl font-bold text-[#2b174f] mb-6">We're Here to Help</h2>
                            <div className="divider-gold mb-8 w-24"/>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center shrink-0">
                                        <Mail className="size-5 text-[#f2b652]"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Email</p>
                                        <a href="mailto:EMAIL@PLACEHOLDER.com"
                                           className="text-[#2b174f] font-semibold hover:text-[#f2b652] transition-colors">
                                            EMAIL@PLACEHOLDER.com
                                        </a>
                                        <p className="text-gray-400 text-sm mt-0.5">General inquiries & registration
                                            help</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center shrink-0">
                                        <Mail className="size-5 text-[#f2b652]"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Secretariat</p>
                                        <a href="mailto:SG_EMAIL@PLACEHOLDER.com"
                                           className="text-[#2b174f] font-semibold hover:text-[#f2b652] transition-colors">
                                            SG_EMAIL@PLACEHOLDER.com
                                        </a>
                                        <p className="text-gray-400 text-sm mt-0.5">Secretary General's Email</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-lg bg-[#2b174f] flex items-center justify-center shrink-0">
                                        <MapPin className="size-5 text-[#f2b652]"/>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-[#2b174f] font-semibold">Digital Conference</p>
                                        <p className="text-gray-400 text-sm mt-0.5">UAE</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Follow Us</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon
                                        return (
                                            <a
                                                key={social.id}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 rounded-lg bg-[#2b174f] flex items-center justify-center hover:bg-[#f2b652] transition-colors group border border-white/10"
                                                aria-label={social.ariaLabel}
                                            >
                                                <Icon
                                                    className="w-6 h-6 text-[#f2b652]"/>
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            {submitted ? (
                                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                                    <CheckCircle className="size-16 text-green-500 mb-4"/>
                                    <h3 className="text-[#2b174f] font-bold text-xl mb-2">Message Sent!</h3>
                                    <p className="text-gray-500 text-sm">Thank you for reaching out.
                                        Click send in your mail client and We'll get back to you within 48 hours.
                                    </p>
                                    <Button
                                        className="mt-6 bg-[#2b174f] text-white hover:bg-[#2b174f]/90"
                                        onClick={() => setSubmitted(false)}
                                    >
                                        Send Another
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <h3 className="text-[#2b174f] font-bold text-xl mb-6">Send a Message</h3>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="firstName" className="text-[#2b174f] text-sm font-medium">First
                                                Name</Label>
                                            <Input
                                                id="firstName"
                                                required
                                                placeholder="Muhammad"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="lastName" className="text-[#2b174f] text-sm font-medium">Last
                                                Name</Label>
                                            <Input
                                                id="lastName"
                                                required
                                                placeholder="Ahmed"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="email" className="text-[#2b174f] text-sm font-medium">Email
                                            Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label className="text-[#2b174f] text-sm font-medium">Inquiry Type</Label>
                                        <Select onValueChange={handleInquiryChange}>
                                            <SelectTrigger className="border-gray-200 focus:ring-[#2b174f]/30">
                                                <SelectValue placeholder="Select inquiry type" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                <SelectItem value="Registration">Registration</SelectItem>
                                                <SelectItem value="Committees">Committees</SelectItem>
                                                <SelectItem value="Resources">Resources</SelectItem>
                                                <SelectItem value="Logistics">Logistics</SelectItem>
                                                <SelectItem value="Media & Press">Media & Press</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="school" className="text-[#2b174f] text-sm font-medium">School /
                                            Organization</Label>
                                        <Input
                                            id="school"
                                            placeholder="Your School Name | If by yourself type: 'Self-Represented'"
                                            value={formData.school}
                                            onChange={handleChange}
                                            className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="subject" className="text-[#2b174f] text-sm font-medium">Email Subject</Label>
                                        <Input
                                            id="subject"
                                            placeholder="What is the email for?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f]"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="message"
                                               className="text-[#2b174f] text-sm font-medium">Message</Label>
                                        <Textarea
                                            id="message"
                                            required
                                            placeholder="Tell us how we can help..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="border-gray-200 focus-visible:ring-[#2b174f]/30 focus-visible:border-[#2b174f] min-h-28"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-[#2b174f] text-white hover:bg-[#2b174f]/90 font-semibold tracking-wider uppercase py-5"
                                    >
                                        <Send className="size-4 mr-2"/>
                                        Send Message
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
