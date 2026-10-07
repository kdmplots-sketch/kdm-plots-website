import React from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Booking Modal Context — lets any "Book a Visit" button anywhere in the tree
// open the shared appointment-scheduling modal.
// ─────────────────────────────────────────────────────────────────────────────
const BookingModalCtx = React.createContext<{ open: () => void } | null>(null);

export function BookingModalProvider({
  children,
  render,
}: {
  children: React.ReactNode;
  render: (isOpen: boolean, close: () => void) => React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const value = React.useMemo(() => ({ open: () => setIsOpen(true) }), []);
  return (
    <BookingModalCtx.Provider value={value}>
      {children}
      {render(isOpen, () => setIsOpen(false))}
    </BookingModalCtx.Provider>
  );
}

export function useBookingModal() {
  const ctx = React.useContext(BookingModalCtx);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}
