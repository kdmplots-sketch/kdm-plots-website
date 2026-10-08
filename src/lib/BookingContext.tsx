import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Booking Modal Context — lets any "Book a Visit" button anywhere in the tree
// open the shared appointment-scheduling modal. Passing a project name carries
// that context into the modal and the WhatsApp message it sends.
// ─────────────────────────────────────────────────────────────────────────────
const BookingModalCtx = React.createContext<{ open: (projectName?: string) => void } | null>(null);

export function BookingModalProvider({
  children,
  render,
}: {
  children: React.ReactNode;
  render: (isOpen: boolean, close: () => void, projectName: string | null) => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [projectName, setProjectName] = React.useState<string | null>(null);
  const value = React.useMemo(() => ({
    open: (name?: string) => { setProjectName(name ?? null); setIsOpen(true); },
  }), []);
  return (
    <BookingModalCtx.Provider value={value}>
      {children}
      {render(isOpen, () => setIsOpen(false), projectName)}
    </BookingModalCtx.Provider>
  );
}

export function useBookingModal() {
  const ctx = React.useContext(BookingModalCtx);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
