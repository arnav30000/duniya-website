"use client";

import { useMemo } from "react";

/** Simple seeded RNG so layout looks random but stable per load */
function lcg(seed = 0xA11CE_B0B) {
  let s = seed >>> 0;
  return () => {
    s = (1664525 * s + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

type Item = {
  x: number;  // 0..1 of viewport width
  y: number;  // 0..1 of viewport height
  rot: number;
  scale: number;
  kind: "feather" | "harp";
};

export default function MotifScatter() {
  // Design constants (fixed — no UI controls)
  const COUNT = 6;                  // total motifs (few)
  const FEATHER_SIZE = 110;         // px
  const HARP_SIZE = 120;            // px
  const OPACITY = 0.07;             // very subtle
  const MIN_DIST = 0.18;            // min separation in viewport units (~18% of min(vw,vh))
  const EXCLUDE_CENTER = {          // keep middle fairly clean so hero text breathes
    cx: 0.48, cy: 0.42, rx: 0.28, ry: 0.22
  };
  const EDGE_MARGIN = 0.04;         // don’t hug edges

  const items = useMemo<Item[]>(() => {
    const rand = lcg(0xD00D_C0DE);
    const placed: Item[] = [];
    const kinds: Array<Item["kind"]> = []; // alternate 2:1 (feather:harp)
    for (let i = 0; i < COUNT; i++) kinds.push(i % 3 === 2 ? "harp" : "feather");

    // rejection sampling w/ min distance + center exclusion
    outer: for (let i = 0; i < COUNT; i++) {
      for (let tries = 0; tries < 200; tries++) {
        const x = EDGE_MARGIN + rand() * (1 - 2 * EDGE_MARGIN);
        const y = EDGE_MARGIN + rand() * (1 - 2 * EDGE_MARGIN);

        // push away from central rectangle
        if (
          Math.abs(x - EXCLUDE_CENTER.cx) < EXCLUDE_CENTER.rx &&
          Math.abs(y - EXCLUDE_CENTER.cy) < EXCLUDE_CENTER.ry
        ) {
          continue;
        }

        // keep distance from others
        let ok = true;
        for (const p of placed) {
          const dx = x - p.x;
          const dy = y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < MIN_DIST) {
            ok = false;
            break;
          }
        }
        if (!ok) continue;

        const rot = (rand() - 0.5) * 28;      // -14..14°
        const scale = 0.9 + rand() * 0.4;     // 0.9..1.3
        placed.push({ x, y, rot, scale, kind: kinds[i] });
        continue outer;
      }
      // if we couldn’t place with spacing, skip quietly (keeps it sparse)
    }
    return placed;
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ overflow: "hidden" }}>
      {items.map((it, idx) => {
        const isFeather = it.kind === "feather";
        const size = (isFeather ? FEATHER_SIZE : HARP_SIZE) * it.scale;

        return (
          <img
            key={idx}
            src={isFeather ? "/feather.png" : "/harp.svg"}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              left: `${it.x * 100}vw`,
              top: `${it.y * 100}vh`,
              transform: `translate(-50%, -50%) rotate(${it.rot}deg)`,
              width: Math.round(size),
              height: "auto",
              opacity: OPACITY,
              filter: "blur(0.35px) saturate(0.9) brightness(0.92)",
              mixBlendMode: "soft-light",
            }}
          />
        );
      })}
    </div>
  );
}
