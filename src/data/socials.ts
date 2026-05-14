import {type ComponentType} from 'react'
import {InstagramIcon} from "../components/ui/InstagramIcon";

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
        icon: InstagramIcon,
        ariaLabel: 'Follow us on Instagram',
    },
]
