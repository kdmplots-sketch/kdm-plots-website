import React from "react";
import { T, useVP } from "@/lib/theme";

const WHATSAPP_NUMBER = "918220563394";

function formatDateLong(iso: string) {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}

function formatTime12h(t: string) {
  if (!t) return "";
  const [hStr, mStr] = t.split(":");
  const h = parseInt(hStr, 10);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${mStr} ${period}`;
}

function Field({
  label, children,
}: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
      <span style={{
        fontFamily: T.sans, fontWeight: 700, fontSize: "10.5px",
        letterSpacing: "0.12em", textTransform: "uppercase", color: T.gray,
      }}>
        {label}
      </span>
      {children}
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  fontFamily: T.sans, fontSize: "14.5px", fontWeight: 500, color: T.navy,
  padding: "13px 16px",
  borderRadius: T.radiusSm,
  border: "1.5px solid rgba(16,42,66,0.14)",
  background: "#FFFFFF",
  outline: "none",
  transition: `border-color 0.3s ${T.easeSnap}`,
};

export function BookVisitModal({ isOpen, onClose, projectName = null }: { isOpen: boolean; onClose: () => void; projectName?: string | null }) {
  const { isMobile } = useVP();
  const [name, setName] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const todayIso = React.useMemo(() => new Date().toISOString().slice(0, 10), []);

  // Reset form each time the modal is opened fresh
  React.useEffect(() => {
    if (isOpen) {
      setName(""); setMobile(""); setDate(""); setTime(""); setErrors({});
    }
  }, [isOpen]);

  // Lock body scroll while open + close on Escape
  React.useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  function validate() {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Please enter your name";
    const digits = mobile.replace(/\D/g, "");
    if (digits.length < 10) next.mobile = "Enter a valid 10-digit mobile number";
    if (!date) next.date = "Pick a preferred date";
    if (!time) next.time = "Pick a preferred time";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const message =
      `Hi KDM Plots, I'd like to schedule a site visit.\n\n` +
      (projectName ? `Project of Interest: ${projectName}\n` : "") +
      `Name: ${name.trim()}\n` +
      `Mobile: ${mobile.trim()}\n` +
      `Preferred Date: ${formatDateLong(date)}\n` +
      `Preferred Time: ${formatTime12h(time)}\n\n` +
      `Please confirm my appointment.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    onClose();
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a site visit"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 60,
        display: "flex", alignItems: isMobile ? "flex-end" : "center", justifyContent: "center",
        background: "rgba(7,19,31,0.60)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        padding: isMobile ? "0" : "20px",
        animation: `kdmFadeUp 0.28s ${T.easeSmooth}`,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: isMobile ? "100%" : "460px",
          maxHeight: isMobile ? "92vh" : "90vh",
          overflowY: "auto",
          background: T.ivory,
          borderRadius: isMobile ? "20px 20px 0 0" : "18px",
          boxShadow: "0 30px 80px rgba(7,19,31,0.35)",
          padding: isMobile ? "28px 22px 24px" : "36px 36px 32px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "6px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{ width: "22px", height: "1.5px", background: T.gold, borderRadius: T.radiusFull }} />
              <span style={{ fontFamily: T.sans, fontWeight: 700, fontSize: "10px", letterSpacing: "0.26em", textTransform: "uppercase", color: T.gold }}>
                Schedule Appointment
              </span>
            </div>
            <h3 style={{ margin: 0, fontFamily: T.serif, fontWeight: 700, fontSize: "26px", color: T.navy, letterSpacing: "-0.01em" }}>
              Book a Site Visit
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0, width: "34px", height: "34px", borderRadius: "50%",
              border: "none", background: "rgba(16,42,66,0.06)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.navy} strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <p style={{ margin: "0 0 18px", fontFamily: T.sans, fontSize: "13.5px", lineHeight: 1.6, color: T.gray }}>
          Share your preferred date and time — we'll confirm your appointment over WhatsApp.
        </p>

        {projectName && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            marginBottom: "22px", padding: "8px 14px",
            background: T.goldFaint, border: `1px solid rgba(193,153,46,0.30)`,
            borderRadius: T.radiusFull,
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            <span style={{ fontFamily: T.sans, fontWeight: 600, fontSize: "12px", color: T.navy }}>{projectName}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Field label="Your Name">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Arjun Kumar"
              style={{ ...inputStyle, borderColor: errors.name ? "#C0453A" : inputStyle.border as any }}
            />
            {errors.name && <span style={errTextStyle}>{errors.name}</span>}
          </Field>

          <Field label="Mobile Number">
            <input
              type="tel"
              inputMode="numeric"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="e.g. 98765 43210"
              style={inputStyle}
            />
            {errors.mobile && <span style={errTextStyle}>{errors.mobile}</span>}
          </Field>

          <div style={{ display: "flex", gap: "14px", flexDirection: isMobile ? "column" : "row" }}>
            <div style={{ flex: 1 }}>
              <Field label="Preferred Date">
                <input
                  type="date"
                  min={todayIso}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={inputStyle}
                />
                {errors.date && <span style={errTextStyle}>{errors.date}</span>}
              </Field>
            </div>
            <div style={{ flex: 1 }}>
              <Field label="Preferred Time">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={inputStyle}
                />
                {errors.time && <span style={errTextStyle}>{errors.time}</span>}
              </Field>
            </div>
          </div>

          <button
            type="submit"
            style={{
              marginTop: "8px",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
              padding: "15px 20px",
              background: T.gold, color: T.white, border: "none", borderRadius: T.radiusSm,
              fontFamily: T.sans, fontWeight: 700, fontSize: "12.5px",
              letterSpacing: "0.10em", textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 8px 26px rgba(193,153,46,0.38)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF"><path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.58 5.9L0 24l6.44-1.7a11.8 11.8 0 005.6 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.41zM12.05 21.3h-.01a9.8 9.8 0 01-5-1.37l-.36-.21-3.82 1 1.02-3.72-.23-.38a9.78 9.78 0 01-1.5-5.2c0-5.42 4.42-9.83 9.86-9.83a9.78 9.78 0 019.84 9.83c0 5.43-4.42 9.88-9.8 9.88zm5.4-7.39c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-1.7-.85-2.81-1.52-3.93-3.44-.3-.5.3-.47.85-1.57.1-.2.05-.37-.05-.52-.1-.15-.6-1.45-.82-1.93-.22-.48-.44-.42-.6-.42-.16 0-.35-.02-.54-.02-.2 0-.5.07-.77.37-.27.3-1.03 1-1.03 2.45 0 1.44 1.05 2.84 1.2 3.04.15.2 2.03 3.1 5 4.24 2.47.95 2.97.76 3.5.71.53-.05 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.26-.2-.56-.35z"/></svg>
            Confirm via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

const errTextStyle: React.CSSProperties = {
  fontFamily: T.sans, fontSize: "11.5px", color: "#C0453A", marginTop: "-2px",
};
