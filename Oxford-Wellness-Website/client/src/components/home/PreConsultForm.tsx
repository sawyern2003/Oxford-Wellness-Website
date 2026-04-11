import * as React from "react"

type Props = {
    apiBaseUrl?: string
    buttonText?: string
    minutesLimitText?: string
    primaryColor?: string
    borderColor?: string
    radius?: number
    bookingUrl?: string
}

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export default function PreConsultForm(props: Props) {
    const {
        apiBaseUrl = "https://theoxfordwellnessdoctor-preconsult.vercel.app",
        buttonText = "Start pre-consultation",
        minutesLimitText = "You’ll get up to 5 minutes. Please have your questions ready.",
        primaryColor = "#83a5cb",
        borderColor = "#DDDDDD",
        radius = 10,
        bookingUrl = "https://www.glowday.com/clinic/the-oxford-wellness-doctor/inga-taganova",
    } = props

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [otherLocation, setOtherLocation] = React.useState("")
    const [status, setStatus] = React.useState<string>("")
    const [loading, setLoading] = React.useState(false)

    const [website, setWebsite] = React.useState("")

    const [submitted, setSubmitted] = React.useState(false)
    const [conversationUrl, setConversationUrl] = React.useState<string>("")

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus("")

        if (website.trim().length > 0) {
            setStatus("Error: Submission blocked.")
            return
        }

        const cleanEmail = email.trim().toLowerCase()
        if (!cleanEmail) return setStatus("Please enter your email.")
        if (!isValidEmail(cleanEmail))
            return setStatus("Please enter a valid email address.")

        if (!location) return setStatus("Please select your location.")
        if (location === "Other" && !otherLocation.trim())
            return setStatus("Please specify your location.")

        const finalLocation =
            location === "Other" ? otherLocation.trim() : location.trim()

        setLoading(true)
        setStatus("Preparing your pre-consultation…")

        try {
            const resp = await fetch(`${apiBaseUrl.replace(/\/$/, "")}/start`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: cleanEmail,
                    name: name.trim(),
                    location: finalLocation,
                }),
            })

            const data = await resp.json().catch(() => ({}))

            if (!resp.ok)
                throw new Error(
                    data?.details || data?.error || "Request failed"
                )

            if (!data?.conversation_url)
                throw new Error("No conversation_url returned.")

            setConversationUrl(data.conversation_url)
            setSubmitted(true)

            window.open(data.conversation_url, "_blank", "noopener,noreferrer")

            setName("")
            setEmail("")
            setLocation("")
            setOtherLocation("")

            setLoading(false)
            setStatus("")
        } catch (err: any) {
            setStatus(`Error: ${err?.message || String(err)}`)
            setLoading(false)
        }
    }

    if (submitted) {
        return (
            <div
                style={{
                    width: "100%",
                    maxWidth: 520,
                    fontFamily:
                        "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                    display: "grid",
                    gap: 12,
                    margin: "0 auto",
                    padding: "20px",
                }}
            >
                <div style={{ fontSize: 16, fontWeight: 800 }}>
                    Thanks - you’re in ✅
                </div>
                <div style={{ fontSize: 13, opacity: 0.88, lineHeight: 1.5 }}>
                    Your free pre-consultation is ready.
                    <div style={{ fontSize: 12, opacity: 0.7, marginTop: 6 }}>
                        If it didn’t open automatically, use the button below (some browsers block new tabs).
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() =>
                        conversationUrl &&
                        window.open(
                            conversationUrl,
                            "_blank",
                            "noopener,noreferrer"
                        )
                    }
                    disabled={!conversationUrl}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: radius,
                        border: "none",
                        cursor: conversationUrl ? "pointer" : "not-allowed",
                        background: primaryColor,
                        color: "white",
                        fontWeight: 800,
                        fontSize: 14,
                        opacity: conversationUrl ? 1 : 0.7,
                    }}
                >
                    Open pre-consultation
                </button>
                <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textAlign: "center",
                        fontSize: 14,
                        fontWeight: 800,
                        color: primaryColor,
                        textDecoration: "none",
                        marginTop: 2,
                    }}
                >
                    Book a consultation or treatment now →
                </a>
                {status ? (
                    <div
                        style={{
                            fontSize: 12,
                            color: status.startsWith("Error")
                                ? "#b00020"
                                : "#333",
                        }}
                    >
                        {status}
                    </div>
                ) : null}
            </div>
        )
    }

    return (
        <form
            onSubmit={onSubmit}
            style={{
                width: "100%",
                maxWidth: 520,
                fontFamily:
                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                margin: "0 auto",
                padding: "20px",
            }}
        >
            <div style={{ display: "grid", gap: 12 }}>
                <div style={{ position: "absolute", left: -9999, top: -9999 }}>
                    <label>Website</label>
                    <input
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                </div>
                <div>
                    <label style={{ fontSize: 12, opacity: 0.8, display: "block" }}>Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Smith"
                        style={inputStyle(borderColor, radius)}
                        disabled={loading}
                    />
                </div>
                <div>
                    <label style={{ fontSize: 12, opacity: 0.8, display: "block" }}>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@example.com"
                        type="email"
                        style={inputStyle(borderColor, radius)}
                        disabled={loading}
                        required
                    />
                </div>
                <div>
                    <label style={{ fontSize: 12, opacity: 0.8, display: "block" }}>
                        Location
                    </label>
                    <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        style={inputStyle(borderColor, radius)}
                        disabled={loading}
                        required
                    >
                        <option value="">Select…</option>
                        <option value="Oxford">Oxford</option>
                        <option value="London">London</option>
                        <option value="Other">Other</option>
                    </select>
                    {location === "Other" && (
                        <div style={{ marginTop: 10 }}>
                            <label style={{ fontSize: 12, opacity: 0.8, display: "block" }}>
                                Please specify
                            </label>
                            <input
                                value={otherLocation}
                                onChange={(e) =>
                                    setOtherLocation(e.target.value)
                                }
                                placeholder="e.g. Cambridge"
                                style={inputStyle(borderColor, radius)}
                                disabled={loading}
                                required
                            />
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: radius,
                        border: "none",
                        cursor: loading ? "not-allowed" : "pointer",
                        background: primaryColor,
                        color: "white",
                        fontWeight: 800,
                        fontSize: 14,
                        opacity: loading ? 0.8 : 1,
                    }}
                >
                    {loading ? "Starting…" : buttonText}
                </button>
                <div style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>
                    {minutesLimitText}
                </div>
                {status ? (
                    <div
                        style={{
                            fontSize: 12,
                            color: status.startsWith("Error")
                                ? "#b00020"
                                : "#333",
                        }}
                    >
                        {status}
                    </div>
                ) : null}
            </div>
        </form>
    )
}

function inputStyle(borderColor: string, radius: number): React.CSSProperties {
    return {
        width: "100%",
        padding: "12px 12px",
        marginTop: 6,
        border: `1px solid ${borderColor}`,
        borderRadius: radius,
        outline: "none",
        fontSize: 14,
        background: "white",
        boxSizing: "border-box",
    }
}
