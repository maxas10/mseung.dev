"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ════════════════════════════════ data ════════════════════════════════ */

const NAV = ["Hall", "Maps", "Archives", "Relics", "Journey"] as const;

type Place = {
  id: string;
  name: string;
  epithet: string;
  lore: string;
  x: number; // percent
  y: number;
};

const PLACES: Place[] = [
  {
    id: "rivendell",
    name: "Rivendell",
    epithet: "Imladris, the Cloven Valley",
    lore: "The Last Homely House, where Elrond keeps council and the weary find rest beneath singing waterfalls.",
    x: 32,
    y: 30,
  },
  {
    id: "lothlorien",
    name: "Lothlórien",
    epithet: "The Golden Wood",
    lore: "Realm of Galadriel, where the mallorn trees bloom gold and time runs softly as a half-remembered dream.",
    x: 54,
    y: 52,
  },
  {
    id: "moria",
    name: "Moria",
    epithet: "Khazad-dûm, the Black Pit",
    lore: "The deep delvings of the Dwarves, now silent halls where shadow and flame slumber in the dark.",
    x: 44,
    y: 40,
  },
  {
    id: "gondor",
    name: "Gondor",
    epithet: "The White City",
    lore: "Minas Tirith of seven walls, last great kingdom of Men, watchful tower against the rising East.",
    x: 64,
    y: 76,
  },
  {
    id: "shire",
    name: "The Shire",
    epithet: "A Land of Quiet Hills",
    lore: "Green country of the Hobbits, of round doors and second breakfasts, untroubled by the wars of the wide world.",
    x: 16,
    y: 18,
  },
];

const ARCHIVES = [
  {
    icon: "✶",
    title: "The Red Book",
    body: "Of the journey of the Ring-bearer, set down in a fair hand and copied through the long age that followed.",
  },
  {
    icon: "❂",
    title: "Songs of Eärendil",
    body: "Verses of the mariner who sailed the sky with a Silmaril upon his brow, the morning and evening star.",
  },
  {
    icon: "❦",
    title: "The Lay of Lúthien",
    body: "Of love that outlasted death, sung in the deep woods of Doriath when the world was young and green.",
  },
  {
    icon: "✦",
    title: "Maps of the Eldar",
    body: "Charts of vanished coasts and drowned cities, of starpaths and the straight road into the West.",
  },
];

const RELICS = [
  {
    icon: "◈",
    name: "Nenya",
    lore: "The Ring of Adamant, of water and preservation, worn in secret by the Lady of the Wood.",
  },
  {
    icon: "✸",
    name: "The Phial",
    lore: "A light in dark places, holding the captured radiance of Eärendil's star.",
  },
  {
    icon: "⚔",
    name: "Andúril",
    lore: "Flame of the West, reforged from the shards of Narsil for the hand of the returning king.",
  },
  {
    icon: "❂",
    name: "The Palantír",
    lore: "A seeing-stone of old Númenor, gazing across leagues to halls long lost.",
  },
];

/* ═══════════════════════════ corner ornament ══════════════════════════ */

function Corner({ className }: { className: string }) {
  return (
    <svg className={`riv-corner ${className}`} viewBox="0 0 120 120" fill="none">
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M0 18 H64 Q92 18 92 46 V92" opacity="0.9" />
        <path d="M0 10 H44" opacity="0.6" />
        <path d="M10 0 V44" opacity="0.6" />
        <path d="M14 14 Q14 64 64 64 Q40 64 40 40 Q40 14 14 14 Z" opacity="0.85" />
        <path d="M64 64 q14 0 22 8 q6 6 6 20" opacity="0.7" />
        <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" />
        <circle cx="92" cy="92" r="2.3" fill="currentColor" stroke="none" />
      </g>
      <path
        d="M40 40 l5 -10 l5 10 l10 5 l-10 5 l-5 10 l-5 -10 l-10 -5 z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

function CompassRose() {
  return (
    <svg className="riv-compass-rose" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="17" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
      <path d="M20 3 L23 20 L20 37 L17 20 Z" fill="currentColor" opacity="0.9" />
      <path d="M3 20 L20 17 L37 20 L20 23 Z" fill="currentColor" opacity="0.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

/* ridge silhouette data-URI masks (jagged mountains) */
const ridgeBack =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300' preserveAspectRatio='none'%3E%3Cpath fill='%23000' d='M0 300 L0 180 L120 120 L240 200 L360 90 L480 190 L600 70 L720 180 L840 110 L960 200 L1080 130 L1200 190 L1200 300 Z'/%3E%3C/svg%3E\")";
const ridgeFront =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 300' preserveAspectRatio='none'%3E%3Cpath fill='%23000' d='M0 300 L0 230 L150 160 L300 240 L450 150 L560 60 L680 160 L820 200 L980 150 L1120 220 L1200 180 L1200 300 Z'/%3E%3C/svg%3E\")";

/* map contour grid */
const mapGrid =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23c6a86d' stroke-width='0.5' opacity='0.18'%3E%3Cpath d='M0 40 H80 M40 0 V80'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3C/g%3E%3C/svg%3E\")";

/* ═══════════════════════════ ambient + cursor ════════════════════════ */

function useAmbientCanvas(
  bgRef: React.RefObject<HTMLCanvasElement | null>,
  curRef: React.RefObject<HTMLCanvasElement | null>
) {
  useEffect(() => {
    const bg = bgRef.current;
    const cur = curRef.current;
    if (!bg || !cur) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const bgx = bg.getContext("2d")!;
    const curx = cur.getContext("2d")!;

    let w = 0,
      h = 0;
    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; ph: number };
    let parts: P[] = [];

    const mobile = window.innerWidth < 760;
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      for (const c of [bg, cur]) {
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = w + "px";
        c.style.height = h + "px";
      }
      bgx.setTransform(dpr, 0, 0, dpr, 0, 0);
      curx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = reduce ? 0 : Math.min(mobile ? 36 : 96, Math.floor((w * h) / 16000));
      parts = Array.from({ length: target }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.06 - Math.random() * 0.16,
        r: 0.5 + Math.random() * 1.8,
        a: 0.15 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    // cursor trail
    const trail: { x: number; y: number; t: number }[] = [];
    let mx = w / 2,
      my = h / 2,
      hasMouse = false;
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      hasMouse = true;
      trail.push({ x: mx, y: my, t: tick });
      if (trail.length > 22) trail.shift();
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    let tick = 0;
    const loop = () => {
      tick++;
      // ambient particles
      bgx.clearRect(0, 0, w, h);
      bgx.globalCompositeOperation = "lighter";
      for (const p of parts) {
        p.x += p.vx + Math.sin((tick * 0.004) + p.ph) * 0.12;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const tw = 0.6 + 0.4 * Math.sin(tick * 0.02 + p.ph);
        const alpha = p.a * tw;
        const g = bgx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        g.addColorStop(0, `rgba(244,230,181,${alpha})`);
        g.addColorStop(1, "rgba(244,230,181,0)");
        bgx.fillStyle = g;
        bgx.beginPath();
        bgx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        bgx.fill();
      }
      bgx.globalCompositeOperation = "source-over";

      // cursor
      curx.clearRect(0, 0, w, h);
      if (fine && hasMouse && !reduce) {
        curx.globalCompositeOperation = "lighter";
        for (let i = 0; i < trail.length; i++) {
          const tp = trail[i];
          const age = (tick - tp.t) / 26;
          if (age >= 1) continue;
          const rad = (1 - age) * 9;
          const al = (1 - age) * 0.22;
          const g = curx.createRadialGradient(tp.x, tp.y, 0, tp.x, tp.y, rad);
          g.addColorStop(0, `rgba(244,230,181,${al})`);
          g.addColorStop(1, "rgba(244,230,181,0)");
          curx.fillStyle = g;
          curx.beginPath();
          curx.arc(tp.x, tp.y, rad, 0, Math.PI * 2);
          curx.fill();
        }
        // core
        const core = curx.createRadialGradient(mx, my, 0, mx, my, 16);
        core.addColorStop(0, "rgba(255,247,224,0.95)");
        core.addColorStop(0.25, "rgba(244,230,181,0.55)");
        core.addColorStop(1, "rgba(244,230,181,0)");
        curx.fillStyle = core;
        curx.beginPath();
        curx.arc(mx, my, 16, 0, Math.PI * 2);
        curx.fill();
        curx.globalCompositeOperation = "source-over";
        curx.fillStyle = "rgba(255,250,235,0.95)";
        curx.beginPath();
        curx.arc(mx, my, 2.2, 0, Math.PI * 2);
        curx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [bgRef, curRef]);
}

/* ════════════════════════════ ambience (web audio) ═══════════════════ */

function useAmbience() {
  const [on, setOn] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);

  const toggle = useCallback(() => {
    if (!on) {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new Ctx();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);

      // ── wind / distant water: filtered noise ──
      const bufSize = 2 * ctx.sampleRate;
      const noiseBuf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
      const data = noiseBuf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = noiseBuf;
      noise.loop = true;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 520;
      const noiseGain = ctx.createGain();
      noiseGain.gain.value = 0.5;
      // slow LFO on filter to make wind breathe
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 240;
      lfo.connect(lfoGain).connect(lp.frequency);
      noise.connect(lp).connect(noiseGain).connect(master);

      // ── soft choir pad: detuned sine triad ──
      const padGain = ctx.createGain();
      padGain.gain.value = 0.16;
      padGain.connect(master);
      const freqs = [146.83, 220, 293.66, 369.99]; // D3 A3 D4 F#4
      const oscs = freqs.map((f, i) => {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = f;
        o.detune.value = (i - 1.5) * 4;
        const g = ctx.createGain();
        g.gain.value = 0.25;
        // gentle swell per voice
        const swell = ctx.createOscillator();
        swell.frequency.value = 0.03 + i * 0.017;
        const swellG = ctx.createGain();
        swellG.gain.value = 0.12;
        swell.connect(swellG).connect(g.gain);
        o.connect(g).connect(padGain);
        swell.start();
        o.start();
        return o;
      });

      noise.start();
      lfo.start();
      // fade master up to <15%
      master.gain.linearRampToValueAtTime(0.13, ctx.currentTime + 3);

      ctxRef.current = ctx;
      masterRef.current = master;
      void oscs;
      setOn(true);
    } else {
      const ctx = ctxRef.current;
      const master = masterRef.current;
      if (ctx && master) {
        master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
        setTimeout(() => ctx.close(), 1700);
      }
      ctxRef.current = null;
      masterRef.current = null;
      setOn(false);
    }
  }, [on]);

  useEffect(() => () => void ctxRef.current?.close(), []);
  return { on, toggle };
}

/* ════════════════════════════ reveal helper ═════════════════════════ */

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
};

/* ════════════════════════════════ page ══════════════════════════════ */

export default function Rivendell() {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const worldRef = useRef<HTMLDivElement | null>(null);
  const bgCanvas = useRef<HTMLCanvasElement | null>(null);
  const curCanvas = useRef<HTMLCanvasElement | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const ambience = useAmbience();

  useAmbientCanvas(bgCanvas, curCanvas);

  // very slow parallax driven by the scroll container + pointer
  useEffect(() => {
    const root = shellRef.current?.closest(".riv") as HTMLElement | null;
    const world = worldRef.current;
    if (!root || !world) return;
    let py = 0,
      px = 0,
      raf = 0;
    const apply = () => {
      world.style.transform = `translate3d(${px}px, ${py}px, 0)`;
      raf = 0;
    };
    const onScroll = () => {
      py = -root.scrollTop * 0.06;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onPointer = (e: PointerEvent) => {
      px = (e.clientX / window.innerWidth - 0.5) * -22;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      root.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollTo = useCallback((id: string) => {
    const root = shellRef.current?.closest(".riv") as HTMLElement | null;
    const el = document.getElementById(id);
    if (root && el) {
      root.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" });
    }
  }, []);

  const navTarget: Record<string, string> = {
    Hall: "hall",
    Maps: "maps",
    Archives: "archives",
    Relics: "relics",
    Journey: "journey",
  };

  return (
    <main className="riv">
      {/* Layer 1 — world */}
      <div className="riv-world" ref={worldRef}>
        <div className="riv-sky" />
        <div className="riv-moon" />
        <div
          className="riv-ridge"
          style={{
            height: "70%",
            opacity: 0.7,
            ["--ridge-mask" as string]: ridgeBack,
            ["--ridge-fill" as string]: "rgba(14,22,18,0.85)",
          }}
        />
        <div
          className="riv-ridge"
          style={{
            height: "55%",
            ["--ridge-mask" as string]: ridgeFront,
            ["--ridge-fill" as string]: "rgba(7,11,9,0.95)",
          }}
        />
      </div>
      <div className="riv-fog riv-fog-a" />
      <div className="riv-fog riv-fog-b" />
      <div className="riv-vignette" />
      <canvas className="riv-canvas" ref={bgCanvas} />

      {/* Layer 2 — elven frame */}
      <div className="riv-frame">
        <Corner className="tl" />
        <Corner className="tr" />
        <Corner className="bl" />
        <Corner className="br" />
      </div>

      {/* Layer 3 — interface */}
      <div className="riv-shell" ref={shellRef}>
        {/* navigation compass */}
        <nav className="riv-nav">
          <div className="riv-compass">
            <CompassRose />
            {NAV.map((n) => (
              <button key={n} className="riv-navlink" onClick={() => scrollTo(navTarget[n])}>
                {n}
              </button>
            ))}
          </div>
        </nav>

        {/* hero */}
        <section id="hall" className="riv-hero">
          <motion.p
            className="riv-overline"
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.55em" }}
            transition={{ duration: 2.4, ease: "easeOut" }}
          >
            East of the Sea · West of the Moon
          </motion.p>
          <motion.h1
            className="riv-title"
            initial={{ opacity: 0, y: 40, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
          >
            RIVENDELL
          </motion.h1>
          <motion.p
            className="riv-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.86 }}
            transition={{ duration: 2.2, delay: 0.8 }}
          >
            The Last Homely House East of the Sea
          </motion.p>

          <motion.div
            className="riv-runes"
            initial={{ opacity: 0, scaleX: 0.4 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 2.4, delay: 1.1, ease: "easeOut" }}
          >
            <span className="riv-runes-line" />
            <motion.span
              className="rune"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ᚱᛁᚢᛖᚾᛞᛖᛚᛚ
            </motion.span>
            <span className="riv-runes-line" />
          </motion.div>

          <motion.button
            className="riv-btn"
            onClick={() => scrollTo("maps")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 1.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore
          </motion.button>
        </section>

        {/* world map */}
        <motion.section id="maps" className="riv-section" {...reveal}>
          <p className="riv-eyebrow">Cartography of the Eldar</p>
          <h2 className="riv-h2">The Living Map</h2>
          <p className="riv-lede">
            Trace the old roads across Middle-earth. Touch a beacon to wake its memory.
          </p>

          <div className="riv-map">
            <div
              className="riv-map-canvas"
              style={{ position: "absolute", inset: 0 }}
            >
              <div
                className="riv-map-grid"
                style={{ backgroundImage: mapGrid, backgroundSize: "80px 80px" }}
              />
              {/* a faint river */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
              >
                <path
                  d="M10 12 Q30 28 32 30 Q40 38 44 40 Q52 46 54 52 Q60 66 64 76"
                  fill="none"
                  stroke="rgba(217,201,143,0.35)"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <path
                  d="M16 18 Q40 40 64 76"
                  fill="none"
                  stroke="rgba(198,168,109,0.18)"
                  strokeWidth="0.4"
                />
              </svg>

              {PLACES.map((p) => (
                <button
                  key={p.id}
                  className="riv-marker"
                  data-active={active === p.id}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  onMouseEnter={() => setActive(p.id)}
                  onMouseLeave={() => setActive((a) => (a === p.id ? null : a))}
                  onClick={() => setActive((a) => (a === p.id ? null : p.id))}
                >
                  <span style={{ position: "relative" }}>
                    <span className="riv-marker-dot" />
                    <span className="riv-marker-ping" />
                  </span>
                  <span className="riv-marker-label">{p.name}</span>
                  <AnimatePresence>
                    {active === p.id && (
                      <motion.span
                        className="riv-lorecard"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 12 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h4>{p.name}</h4>
                        <span className="epithet">{p.epithet}</span>
                        <p>{p.lore}</p>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* lore archive */}
        <motion.section id="archives" className="riv-section" {...reveal}>
          <p className="riv-eyebrow">Candle-lit Library</p>
          <h2 className="riv-h2">The Archives</h2>
          <p className="riv-lede riv-dropcap">
            Within these shelves rest the chronicles of an age that is passing. Each volume hums
            faintly when opened, and gold light slips from between the pages.
          </p>
          <div className="riv-grid">
            {ARCHIVES.map((b, i) => (
              <motion.article
                key={b.title}
                className="riv-book"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="riv-book-icon" style={{ fontSize: 30 }}>
                  {b.icon}
                </div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* relics */}
        <motion.section id="relics" className="riv-section" {...reveal}>
          <p className="riv-eyebrow">Treasury of the First Age</p>
          <h2 className="riv-h2">The Relics</h2>
          <p className="riv-lede">
            Artifacts of power, kept safe in vaults of stone. They stir when gazed upon.
          </p>
          <div className="riv-grid">
            {RELICS.map((r, i) => (
              <motion.article
                key={r.name}
                className="riv-relic"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="riv-relic-orb" style={{ fontSize: 38 }}>
                  {r.icon}
                </div>
                <span className="riv-relic-shadow" />
                <h3>{r.name}</h3>
                <p>{r.lore}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* journey / footer */}
        <motion.section id="journey" className="riv-section" {...reveal}>
          <p className="riv-eyebrow">The Road Goes Ever On</p>
          <h2 className="riv-h2">Begin the Journey</h2>
          <p className="riv-lede">
            The doors of the Hall stand open to travelers. Tarry a while; the night is long and the
            fire is warm.
          </p>
          <div style={{ textAlign: "center" }}>
            <motion.button
              className="riv-btn"
              onClick={() => scrollTo("hall")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Return to the Hall
            </motion.button>
          </div>
          <p className="riv-footer">
            “The world is indeed full of peril, and in it there are many dark places.”
          </p>
        </motion.section>
      </div>

      {/* sound toggle */}
      <button
        className="riv-sound"
        data-on={ambience.on}
        onClick={ambience.toggle}
        aria-pressed={ambience.on}
      >
        <span className="riv-sound-dot" />
        {ambience.on ? "Silence the Hall" : "Awaken the Hall"}
      </button>

      {/* cursor on top */}
      <canvas className="riv-cursor-layer" ref={curCanvas} />
    </main>
  );
}
