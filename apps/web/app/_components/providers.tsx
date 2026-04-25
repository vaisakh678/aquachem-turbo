"use client";

import { UnitSystemProvider } from "@/lib/unit-system";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UnitSystemProvider>{children}</UnitSystemProvider>;
}
