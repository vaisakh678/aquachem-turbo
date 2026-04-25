"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ReadingKey =
  | "fc" | "ph" | "ta" | "ch" | "cya"
  | "tc" | "salt" | "kh"
  | "bor" | "big" | "h2o2" | "phos" | "mg" | "tb";

export const ALL_KEYS: ReadingKey[] = [
  "fc", "ph", "ta", "ch", "cya",
  "tc", "salt", "kh",
  "bor", "big", "h2o2", "phos", "mg", "tb",
];

const DEFAULT_ENABLED: Record<ReadingKey, boolean> = {
  fc: true, ph: true, ta: true, ch: true, cya: true,
  tc: true, salt: true, kh: true,
  bor: false, big: false, h2o2: false, phos: false, mg: false, tb: false,
};

export interface PoolSettings {
  enabled: Record<ReadingKey, boolean>;
  targetOverrides: Partial<Record<ReadingKey, { min: number; max: number }>>;
}

const DEFAULT_SETTINGS: PoolSettings = {
  enabled: DEFAULT_ENABLED,
  targetOverrides: {},
};

const STORAGE_KEY = "aquachem.poolSettings.v1";

type Ctx = {
  settings: PoolSettings;
  setEnabled: (key: ReadingKey, enabled: boolean) => void;
  setTarget: (key: ReadingKey, min: number, max: number) => void;
  resetTarget: (key: ReadingKey) => void;
  resetAll: () => void;
};

const PoolSettingsContext = createContext<Ctx>({
  settings: DEFAULT_SETTINGS,
  setEnabled: () => {},
  setTarget: () => {},
  resetTarget: () => {},
  resetAll: () => {},
});

export function PoolSettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<PoolSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined"
        ? window.localStorage.getItem(STORAGE_KEY)
        : null;
      if (!raw) return;
      const parsed = JSON.parse(raw);
      setSettings({
        enabled: { ...DEFAULT_ENABLED, ...(parsed?.enabled ?? {}) },
        targetOverrides: parsed?.targetOverrides ?? {},
      });
    } catch {}
  }, []);

  const save = (next: PoolSettings) => {
    setSettings(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const setEnabled = (key: ReadingKey, enabled: boolean) => {
    save({ ...settings, enabled: { ...settings.enabled, [key]: enabled } });
  };

  const setTarget = (key: ReadingKey, min: number, max: number) => {
    save({
      ...settings,
      targetOverrides: { ...settings.targetOverrides, [key]: { min, max } },
    });
  };

  const resetTarget = (key: ReadingKey) => {
    const next = { ...settings.targetOverrides };
    delete next[key];
    save({ ...settings, targetOverrides: next });
  };

  const resetAll = () => save(DEFAULT_SETTINGS);

  return (
    <PoolSettingsContext.Provider
      value={{ settings, setEnabled, setTarget, resetTarget, resetAll }}
    >
      {children}
    </PoolSettingsContext.Provider>
  );
}

export function usePoolSettings() {
  return useContext(PoolSettingsContext);
}
