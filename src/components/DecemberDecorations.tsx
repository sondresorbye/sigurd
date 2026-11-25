"use client";

import { useEffect, useState } from "react";

const snowflakes = [
  { left: 5, duration: 19, delay: -4, size: 13 },
  { left: 13, duration: 23, delay: -15, size: 10 },
  { left: 21, duration: 17, delay: -9, size: 16 },
  { left: 29, duration: 25, delay: -20, size: 11 },
  { left: 38, duration: 21, delay: -7, size: 14 },
  { left: 47, duration: 27, delay: -18, size: 10 },
  { left: 56, duration: 18, delay: -12, size: 15 },
  { left: 65, duration: 24, delay: -3, size: 11 },
  { left: 74, duration: 20, delay: -16, size: 14 },
  { left: 82, duration: 26, delay: -10, size: 10 },
  { left: 90, duration: 22, delay: -21, size: 16 },
  { left: 97, duration: 19, delay: -6, size: 12 },
];

function isDecemberInNorway() {
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    timeZone: "Europe/Oslo",
  }).format(new Date()) === "12";
}

export default function DecemberDecorations() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => setShow(isDecemberInNorway());
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  if (!show) return null;

  return (
    <div className="december-decorations" aria-hidden="true">
      <div className="december-lights">
        {Array.from({ length: 15 }, (_, index) => (
          <span className="december-bulb" key={index} />
        ))}
      </div>
      <div className="december-snow">
        {snowflakes.map((flake) => (
          <span
            className="december-snowflake"
            key={flake.left}
            style={{
              left: `${flake.left}%`,
              fontSize: `${flake.size}px`,
              animationDuration: `${flake.duration}s`,
              animationDelay: `${flake.delay}s`,
            }}
          >
            ❄︎
          </span>
        ))}
      </div>
    </div>
  );
}
