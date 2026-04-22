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
    const [consentToPreconsult, setConsentToPreconsult] = React.useState(false)
    const [consentToMarketing, setConsentToMarketing] = React.useState(false)
    const [consentError, setConsentError] = React.useState("")

    const cleanEmail = email.trim().toLowerCase()
    const locationIsValid =
        !!location && (location !== "Other" || !!otherLocation.trim())
    const isFormReady =
        !!cleanEmail &&
        isValidEmail(cleanEmail) &&
        locationIsValid &&
        consentToPreconsult

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        setStatus("")
        setConsentError("")

        if (website.trim().length > 0) {
            setStatus("Error: Submission blocked.")
            return
        }

        if (!cleanEmail) return setStatus("Please enter your email.")
        if (!isValidEmail(cleanEmail))
            return setStatus("Please enter a valid email address.")

        if (!location) return setStatus("Please select your location.")
        if (location === "Other" && !otherLocation.trim())
            return setStatus("Please specify your location.")
        if (!consentToPreconsult) {
            setConsentError(
                "Please provide consent before starting the pre-consultation."
            )
            return
        }

        const finalLocation =
            location === "Other" ? otherLocation.trim() : location.trim()
        const privacyAcceptedAt = new Date().toISOString()

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
                    consent_to_preconsult: consentToPreconsult,
                    consent_to_marketing: consentToMarketing,
                    privacy_policy_accepted_at: privacyAcceptedAt,
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
            setConsentToPreconsult(false)
            setConsentToMarketing(false)
            setConsentError("")

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
                <div
                    style={{
                        border: `1px solid ${borderColor}`,
                        borderRadius: radius,
                        background: "rgba(131, 165, 203, 0.08)",
                        padding: "14px 14px 12px",
                        display: "grid",
                        gap: 8,
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            color: "#24435f",
                            fontSize: 12,
                            letterSpacing: "0.06em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                        }}
                    >
                        <span aria-hidden="true">🔒</span>
                        <span>Before you begin</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#485a6c" }}>
                        This pre-consultation is designed to help you explore treatment options and share your enquiry with the clinic before booking.
                    </p>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#485a6c" }}>
                        Your information, including details about your concerns and treatment interests, may be processed using AI tools and securely shared with the clinic for the purpose of handling your enquiry.
                    </p>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.65, color: "#485a6c" }}>
                        This service does not provide medical advice or diagnosis and does not replace consultation with a qualified clinician.
                    </p>
                </div>
                <div
                    style={{
                        border: `1px solid ${borderColor}`,
                        borderRadius: radius,
                        background: "#fafbfd",
                        padding: "12px 14px",
                        display: "grid",
                        gap: 10,
                    }}
                >
                    <label
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            color: "#273848",
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={consentToPreconsult}
                            onChange={(e) => {
                                setConsentToPreconsult(e.target.checked)
                                if (e.target.checked) setConsentError("")
                            }}
                            disabled={loading}
                            style={{ marginTop: 2 }}
                            required
                        />
                        <span>
                            I consent to my personal information and enquiry details being processed for the purpose of this pre-consultation and shared with the clinic so they can respond to my enquiry.
                        </span>
                    </label>
                    <label
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 10,
                            fontSize: 12.5,
                            lineHeight: 1.5,
                            color: "#3f4c57",
                            cursor: loading ? "not-allowed" : "pointer",
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={consentToMarketing}
                            onChange={(e) => setConsentToMarketing(e.target.checked)}
                            disabled={loading}
                            style={{ marginTop: 2 }}
                        />
                        <span>
                            I would like to receive updates and follow-up information from the clinic.
                        </span>
                    </label>
                    <div style={{ fontSize: 11.5, color: "#5a6772", lineHeight: 1.4 }}>
                        By continuing, you confirm that you have read the{" "}
                        <a
                            href="/privacy-policy"
                            style={{ color: primaryColor, fontWeight: 600, textDecoration: "none" }}
                        >
                            Privacy Policy
                        </a>.
                    </div>
                    {consentError ? (
                        <div style={{ fontSize: 12, color: "#b00020" }}>
                            {consentError}
                        </div>
                    ) : null}
                </div>
                <button
                    type="submit"
                    disabled={loading || !isFormReady}
                    style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: radius,
                        border: "none",
                        cursor: loading || !isFormReady ? "not-allowed" : "pointer",
                        background: primaryColor,
                        color: "white",
                        fontWeight: 800,
                        fontSize: 14,
                        opacity: loading || !isFormReady ? 0.72 : 1,
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
