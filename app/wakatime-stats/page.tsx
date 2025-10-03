"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WakatimeStatsRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/about#garden-telemetry");
  }, [router]);
  return null;
}
