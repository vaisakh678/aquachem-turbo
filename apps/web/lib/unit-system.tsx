"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type UnitSystem = "metric" | "imperial";

const STORAGE_KEY = "aquachem.unitSystem";

type Ctx = {
  system: UnitSystem;
  setSystem: (s: UnitSystem) => void;
};

const UnitSystemContext = createContext<Ctx>({
  system: "metric",
  setSystem: () => {},
});

export function UnitSystemProvider({ children }: { children: React.ReactNode }) {
  const [system, setSystemState] = useState<UnitSystem>("metric");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "metric" || saved === "imperial") setSystemState(saved);
  }, []);

  const setSystem = (s: UnitSystem) => {
    setSystemState(s);
    try {
      window.localStorage.setItem(STORAGE_KEY, s);
    } catch {}
  };

  return (
    <UnitSystemContext.Provider value={{ system, setSystem }}>
      {children}
    </UnitSystemContext.Provider>
  );
}

export function useUnitSystem(): Ctx {
  return useContext(UnitSystemContext);
}
