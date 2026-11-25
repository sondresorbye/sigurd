"use client";

import { useEffect, useState } from "react";

const osloTime = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  hour: "2-digit",
  hourCycle: "h23",
  timeZone: "Europe/Oslo",
});

function isActiveNow() {
  const parts = osloTime.formatToParts(new Date());
  const hour = Number(parts.find((part) => part.type === "hour")?.value);
  const weekday = parts.find((part) => part.type === "weekday")?.value;

  return (
    (hour >= 8 && hour < 18) ||
    (hour >= 23 && (weekday === "Fri" || weekday === "Sat")) ||
    (hour < 4 && (weekday === "Sat" || weekday === "Sun"))
  );
}

export default function ManagerStatus() {
  const [active, setActive] = useState<boolean | null>(null);

  useEffect(() => {
    let timer: number | undefined;

    const update = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      setActive(isActiveNow());
      timer = window.setTimeout(update, 60_000 - (Date.now() % 60_000) + 50);
    };

    update();
    document.addEventListener("visibilitychange", update);
    return () => {
      if (timer !== undefined) window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  return (
    <div
      className="inline-flex items-center gap-3 rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-sm font-medium shadow-sm"
      role="status"
      aria-live="polite"
    >
      <span
        className={`h-2.5 w-2.5 rounded-full ${active === null ? "bg-white/50" : active ? "bg-emerald-300" : "bg-red-400"}`}
        aria-hidden="true"
      />
      Daglig leder {active === null ? "" : active ? "aktiv" : "inaktiv"}
    </div>
  );
}
