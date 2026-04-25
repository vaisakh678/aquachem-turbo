"use client";

import { UnitSystemProvider } from "@/lib/unit-system";
import { PoolSettingsProvider } from "@/lib/pool-settings";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UnitSystemProvider>
      <PoolSettingsProvider>{children}</PoolSettingsProvider>
    </UnitSystemProvider>
  );
}
