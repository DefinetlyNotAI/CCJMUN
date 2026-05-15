type SanitizeUrlOptions = {
    allowRelative?: boolean
    allowedProtocols?: readonly string[]
}

const DEFAULT_ALLOWED_PROTOCOLS = ["http:", "https:"] as const
const ABSOLUTE_URL_SCHEME = /^[a-zA-Z][a-zA-Z\d+.-]*:/

export function sanitizeUrl(
    url: string,
    {
        allowRelative = false,
        allowedProtocols = DEFAULT_ALLOWED_PROTOCOLS,
    }: SanitizeUrlOptions = {}
): string | null {
    const trimmedUrl = url.trim()
    if (!trimmedUrl || trimmedUrl.startsWith("//")) {
        return null
    }

    const hasExplicitScheme = ABSOLUTE_URL_SCHEME.test(trimmedUrl)
    if (!hasExplicitScheme) {
        return allowRelative ? trimmedUrl : null
    }

    try {
        const parsedUrl = new URL(trimmedUrl)
        return allowedProtocols.includes(parsedUrl.protocol) ? trimmedUrl : null
    } catch {
        return null
    }
}
