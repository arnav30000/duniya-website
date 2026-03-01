"use client";

import { useEffect, useState } from "react";

export default function ThemeControl() {
  const [bg, setBg] = useState("#0b1220");
  const [tint, setTint] = useState(92);   // % darkness
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const s = localStorage.getItem("siteBg");
      const a = localStorage.getItem("bgTint");
      if (s) setBg(s);
      if (a) setTint(parseInt(a, 10));
    } catch {}
    setShow(process.env.NODE_ENV !== "production"); // dev-only
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--site-bg", bg);
    localStorage.setItem("siteBg", bg);
  }, [bg]);

  useEffect(() => {
    const alpha = Math.max(0, Math.min(100, tint)) / 100;
    document.documentElement.style.setProperty("--bg-tint-alpha", String(alpha));
    localStorage.setItem("bgTint", String(tint));
  }, [tint]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 hidden w-[320px] flex-col gap-2 rounded-xl border border-indigo-900 bg-black/40 p-3 text-sm text-indigo-100 shadow-lg md:flex">
      <div className="font-semibold">Theme</div>

      <div className="flex items-center justify-between gap-2">
        <label className="text-indigo-200/80">Background</label>
        <input
          type="color"
          value={bg}
          onChange={(e) => setBg(e.target.value)}
          className="h-8 w-12 cursor-pointer rounded border-0 bg-transparent p-0"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          ["Navy", "#0b1220"],
          ["Charcoal", "#0e1116"],
          ["Deep Purple", "#130f2e"],
          ["Emerald", "#06241f"],
        ].map(([label, color]) => (
          <button
            key={label}
            onClick={() => setBg(color)}
            className="rounded border border-indigo-900 px-2 py-1 hover:bg-white/5"
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2">
        <label className="text-indigo-200/80">Tint strength</label>
        <input
          type="range"
          min={60}
          max={98}
          step={1}
          value={tint}
          onChange={(e) => setTint(parseInt(e.target.value, 10))}
          className="w-44"
        />
      </div>

      <p className="mt-1 text-[11px] text-indigo-200/70">
        Motifs are fixed (few, subtle). Panel controls only affect background color and darkness.
      </p>
    </div>
  );
}
