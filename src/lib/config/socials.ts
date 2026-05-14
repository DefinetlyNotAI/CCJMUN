import {type ComponentType} from 'react'
import {Camera, Globe, MessageCircle} from 'lucide-react'

export interface SocialLink {
    id: string
    name: string
    url: string
    icon: ComponentType<{ className?: string }>
    ariaLabel: string
}

export const socialLinks: SocialLink[] = [
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://instagram.com/ccjmun',
        icon: Camera,
        ariaLabel: 'Follow us on Instagram',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/ccjmun',
        icon: MessageCircle,
        ariaLabel: 'Follow us on Twitter',
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://linkedin.com/company/ccjmun',
        icon: Globe,
        ariaLabel: 'Connect with us on LinkedIn',
    },
]
