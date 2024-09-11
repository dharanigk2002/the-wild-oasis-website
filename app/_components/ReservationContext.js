"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext(null);

const initialState = {
  from: undefined,
  to: undefined,
};

export function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);

  if (!context) throw new Error("Invalid context access");

  return context;
}

export { useReservation };
