import * as React from "react"
import { useLocation } from "wouter"

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
    const [phone, setPhone] = React.useState("")
    const [location, setLocation] = React.useState("")
    const [otherLocation, setOtherLocation] = React.useState("")
    const [status, setStatus] = React.useState<string>("")
    const [loading, setLoading] = React.useState(false)

    const [website, setWebsite] = React.useState("")

    const [consentToPreconsult, setConsentToPreconsult] = React.useState(false)
    const [, setLocationHref] = useLocation()

    const [marketingConsent, setMarketingConsent] = React.useState(false)
    const [consentError, setConsentError] = React.useState("")
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = React.useState(false)

    const cleanEmail = email.trim().toLowerCase()
    const cleanPhone = phone.trim()
    const locationIsValid =
        !!location && (location !== "Other" || !!otherLocation.trim())
    const isFormReady =
        !!cleanEmail &&
        !!cleanPhone &&
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
        if (!cleanPhone) return setStatus("Please enter your phone number.")

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
                    phone: cleanPhone,
                    location: finalLocation,
                    consent_to_preconsult: !!consentToPreconsult,
                    consent_to_marketing: !!marketingConsent,
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

            const callPageUrl = `/call?url=${encodeURIComponent(
                data.conversation_url
            )}`

            setName("")
            setEmail("")
            setPhone("")
            setLocation("")
            setOtherLocation("")
            setConsentToPreconsult(false)
            setMarketingConsent(false)
            setConsentError("")

            setLoading(false)
            setStatus("")
            setLocationHref(callPageUrl)
        } catch (err: any) {
            setStatus(`Error: ${err?.message || String(err)}`)
            setLoading(false)
        }
    }

    React.useEffect(() => {
        if (!isPrivacyModalOpen) return

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setIsPrivacyModalOpen(false)
        }

        window.addEventListener("keydown", onKeyDown)
        document.body.style.overflow = "hidden"

        return () => {
            window.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = ""
        }
    }, [isPrivacyModalOpen])

    return (
        <>
        <form
            onSubmit={onSubmit}
            style={{
                width: "100%",
                maxWidth: 620,
                fontFamily:
                    "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial",
                margin: "0 auto",
                padding: "14px 16px",
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
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone number"
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
                            I agree to my information being used to run this pre-consultation and shared with the clinic so they can respond to my enquiry.
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
                            checked={marketingConsent}
                            onChange={(e) => setMarketingConsent(e.target.checked)}
                            disabled={loading}
                            style={{ marginTop: 2 }}
                        />
                        <span>
                            I’d like to receive occasional clinic updates, offers, and treatment information.
                        </span>
                    </label>
                    <div style={{ fontSize: 11.5, color: "#5a6772", lineHeight: 1.4 }}>
                        By continuing, you confirm that you have read the{" "}
                        <button
                            type="button"
                            onClick={() => setIsPrivacyModalOpen(true)}
                            style={{
                                color: primaryColor,
                                fontWeight: 600,
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                textDecoration: "underline",
                                padding: 0,
                                fontSize: "inherit",
                                lineHeight: "inherit",
                                fontFamily: "inherit",
                            }}
                        >
                            Privacy Policy
                        </button>.
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
                {minutesLimitText ? (
                    <div style={{ fontSize: 12, opacity: 0.75, lineHeight: 1.4 }}>
                        {minutesLimitText}
                    </div>
                ) : null}
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
        {isPrivacyModalOpen ? (
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Privacy Policy"
                onClick={() => setIsPrivacyModalOpen(false)}
                style={{
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0, 0, 0, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 18,
                    zIndex: 9999,
                }}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        width: "100%",
                        maxWidth: 640,
                        maxHeight: "85vh",
                        overflowY: "auto",
                        borderRadius: radius,
                        background: "#ffffff",
                        border: `1px solid ${borderColor}`,
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.18)",
                        padding: "18px 18px 16px",
                        color: "#273848",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 12,
                            marginBottom: 8,
                        }}
                    >
                        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 800 }}>
                            Privacy Policy
                        </h3>
                        <button
                            type="button"
                            onClick={() => setIsPrivacyModalOpen(false)}
                            style={{
                                border: "none",
                                background: "transparent",
                                cursor: "pointer",
                                fontSize: 20,
                                lineHeight: 1,
                                color: "#5a6772",
                                padding: "0 2px",
                            }}
                            aria-label="Close privacy policy"
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ display: "grid", gap: 10, fontSize: 13, lineHeight: 1.6 }}>
                        <p style={{ margin: 0 }}>
                            We collect details you submit in this form, including
                            your contact information and enquiry content.
                        </p>
                        <p style={{ margin: 0 }}>
                            This information is used to run the AI pre-consultation,
                            create a summary, and help the clinic respond to your
                            enquiry.
                        </p>
                        <p style={{ margin: 0 }}>
                            Your data may be processed using secure third-party
                            providers that support consultation, storage, and
                            communication workflows.
                        </p>
                        <p style={{ margin: 0 }}>
                            Information from this pre-consultation may be shared with
                            the relevant clinic so they can contact you about next
                            steps.
                        </p>
                        <p style={{ margin: 0 }}>
                            For privacy questions, contact{" "}
                            <a
                                href="mailto:info@theoxfordwellnessdoctor.com"
                                style={{
                                    color: primaryColor,
                                    fontWeight: 600,
                                    textDecoration: "none",
                                }}
                            >
                                info@theoxfordwellnessdoctor.com
                            </a>.
                        </p>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: primaryColor,
                                fontSize: 12.5,
                                fontWeight: 600,
                                textDecoration: "none",
                            }}
                        >
                            Open full Privacy Policy in new tab
                        </a>
                    </div>
                </div>
            </div>
        ) : null}
        </>
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
