"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  type ReactNode,
  type PointerEvent as RPointerEvent,
} from "react";
import { motion, AnimatePresence, useDragControls } from "motion/react";
import { buildScene, type Scene } from "./pixelScene";

/* ════════════════════════════════ data ════════════════════════════════ */

const NAME_ASCII = `███╗   ███╗ █████╗ ██╗  ██╗
████╗ ████║██╔══██╗╚██╗██╔╝
██╔████╔██║███████║ ╚███╔╝
██║╚██╔╝██║██╔══██║ ██╔██╗
██║ ╚═╝ ██║██║  ██║██╔╝ ██╗
╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

type WinId = "hero" | "about" | "projects" | "skills" | "terminal" | "contact";

const WINDOWS: { id: WinId; title: string; icon: string }[] = [
  { id: "hero", title: "scroll.parchment", icon: "✦" },
  { id: "about", title: "journal.txt", icon: "❦" },
  { id: "projects", title: "inventory.bag", icon: "▣" },
  { id: "skills", title: "character.stats", icon: "✪" },
  { id: "terminal", title: "rune-shell", icon: "❯" },
  { id: "contact", title: "quest-board", icon: "✉" },
];

const PROJECTS = [
  {
    icon: "⚔️",
    name: "Rivendell",
    grade: "★ LEGENDARY",
    desc: "An enchanted interface — a living elven operating system rendered in candle-gold and fog. Floating glass panels, an interactive map, and synthesized ambience.",
    tags: ["Next.js", "Framer Motion", "Web Audio"],
  },
  {
    icon: "📜",
    name: "Realm.OS",
    grade: "★ EPIC",
    desc: "This very desktop: a procedurally pixel-painted fantasy landscape with draggable RPG windows, a parchment editor and a rune-shell terminal.",
    tags: ["React", "TypeScript", "Canvas"],
  },
  {
    icon: "🔮",
    name: "Oracle",
    grade: "★ EPIC",
    desc: "A conversational assistant that reasons over private documents — retrieval, tool-use and streaming answers wrapped in a calm UI.",
    tags: ["Python", "LLMs", "RAG"],
  },
  {
    icon: "🛡️",
    name: "Aegis",
    grade: "★ RARE",
    desc: "A self-hosted authentication ward — passkeys, sessions and rate-limiting, hardened against the dark.",
    tags: ["Go", "Postgres", "Auth"],
  },
  {
    icon: "🗺️",
    name: "Cartographer",
    grade: "★ RARE",
    desc: "A tile-based mapping engine for hand-drawn worlds, with smooth pan, zoom and lore markers.",
    tags: ["WebGL", "Rust", "WASM"],
  },
  {
    icon: "🧪",
    name: "Alchemy",
    grade: "★ UNCOMMON",
    desc: "A data pipeline that transmutes raw logs into dashboards — batched, observable, and quietly reliable.",
    tags: ["Airflow", "DuckDB", "ETL"],
  },
];

const SKILLS = [
  { name: "Programming", val: 85 },
  { name: "Frontend", val: 75 },
  { name: "Backend", val: 70 },
  { name: "AI / ML", val: 90 },
  { name: "Systems", val: 80 },
  { name: "Design", val: 65 },
];

const QUESTS = [
  { title: "Summon via GitHub", reward: "Open Source Glory", href: "https://github.com", tag: "github" },
  { title: "Parley on LinkedIn", reward: "A Professional Alliance", href: "https://linkedin.com", tag: "linkedin" },
  { title: "Send a Raven (Email)", reward: "A Swift Reply", href: "mailto:seungd@uci.edu", tag: "email" },
  { title: "Claim the Résumé Scroll", reward: "Full Chronicle of Deeds", href: "#", tag: "resume" },
];

/* ════════════════════════════ typewriter ════════════════════════════ */

function useTypewriter(text: string, speed = 28, start = true) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (!start) return;
    setOut("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed, start]);
  return { out, done };
}

/* ════════════════════════════ draggable window ═══════════════════════ */

type WinProps = {
  meta: { id: WinId; title: string; icon: string };
  z: number;
  pos: { left: number; top: number; width: number };
  variant?: string;
  onFocus: () => void;
  onClose: () => void;
  children: ReactNode;
};

function Window({ meta, z, pos, variant = "", onFocus, onClose, children }: WinProps) {
  const controls = useDragControls();
  const startDrag = (e: RPointerEvent) => {
    onFocus();
    if (window.matchMedia("(min-width: 821px)").matches) controls.start(e);
  };
  return (
    <motion.section
      className={`realm-win ${variant}`}
      style={{ left: pos.left, top: pos.top, width: pos.width, zIndex: z }}
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      onPointerDownCapture={onFocus}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.18 } }}
      transition={{ duration: 0.34, ease: [0.2, 0.9, 0.3, 1] }}
    >
      <span className="realm-win-corners">
        <i className="bl" />
        <i className="br" />
      </span>
      <header className="realm-titlebar" onPointerDown={startDrag}>
        <span className="realm-title-icon">{meta.icon}</span>
        <span>{meta.title}</span>
        <span className="realm-title-spacer" />
        <button
          className="realm-winbtn"
          onClick={onClose}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="close"
        >
          ✕
        </button>
      </header>
      <div className="realm-winbody">{children}</div>
    </motion.section>
  );
}

/* ════════════════════════════ scene + particles ═════════════════════ */

function useScene() {
  const [scene, setScene] = useState<Scene | null>(null);
  useEffect(() => {
    setScene(buildScene(11));
  }, []);
  return scene;
}

function Particles() {
  const ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0,
      h = 0;
    const mobile = window.innerWidth < 820;
    type P = { x: number; y: number; vy: number; vx: number; s: number; a: number; ph: number };
    let parts: P[] = [];
    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = w + "px";
      cv.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = mobile ? 26 : 60;
      parts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vy: -0.05 - Math.random() * 0.18,
        vx: (Math.random() - 0.5) * 0.1,
        s: Math.random() < 0.5 ? 2 : 3,
        a: 0.25 + Math.random() * 0.5,
        ph: Math.random() * 6.28,
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    let raf = 0;
    let t = 0;
    const loop = () => {
      t++;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(t * 0.01 + p.ph) * 0.06;
        if (p.y < -4) {
          p.y = h + 4;
          p.x = Math.random() * w;
        }
        const tw = 0.55 + 0.45 * Math.sin(t * 0.04 + p.ph);
        ctx.fillStyle = `rgba(244,228,160,${p.a * tw})`;
        ctx.fillRect(p.x | 0, p.y | 0, p.s, p.s); // chunky pixel motes
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas className="realm-particles" ref={ref} />;
}

/* ════════════════════════════════ clock ══════════════════════════════ */

function pad(n: number) {
  return n < 10 ? "0" + n : "" + n;
}

/* ════════════════════════════════ page ═══════════════════════════════ */

export default function Realm() {
  const scene = useScene();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const fgRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // window manager
  const [open, setOpen] = useState<Record<WinId, boolean>>({
    hero: true,
    terminal: true,
    about: false,
    projects: false,
    skills: false,
    contact: false,
  });
  const [order, setOrder] = useState<WinId[]>(["terminal", "hero"]);
  const focus = useCallback((id: WinId) => {
    setOrder((o) => [...o.filter((x) => x !== id), id]);
  }, []);
  const openWin = useCallback(
    (id: WinId) => {
      setOpen((s) => ({ ...s, [id]: true }));
      focus(id);
    },
    [focus]
  );
  const closeWin = useCallback((id: WinId) => setOpen((s) => ({ ...s, [id]: false })), []);
  const toggleWin = useCallback(
    (id: WinId) => {
      setOpen((s) => {
        const next = !s[id];
        if (next) focus(id);
        return { ...s, [id]: next };
      });
    },
    [focus]
  );
  const zOf = (id: WinId) => 20 + Math.max(0, order.indexOf(id));

  // responsive: open everything on mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const apply = () => {
      setIsMobile(mq.matches);
      if (mq.matches)
        setOpen({ hero: true, about: true, projects: true, skills: true, terminal: true, contact: true });
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // parallax (pointer + slow idle drift)
  useEffect(() => {
    if (isMobile) return;
    let mxN = 0,
      myN = 0,
      raf = 0,
      t = 0;
    const tick = () => {
      t++;
      const dx = Math.sin(t * 0.0016) * 6;
      const dy = Math.cos(t * 0.0012) * 4;
      if (bgRef.current)
        bgRef.current.style.transform = `translate(${mxN * 8 + dx}px, ${myN * 6 + dy}px) scale(1.02)`;
      if (fgRef.current)
        fgRef.current.style.transform = `translate(${mxN * 20 + dx * 1.6}px, ${myN * 12}px) scale(1.04)`;
      raf = requestAnimationFrame(tick);
    };
    const onMove = (e: PointerEvent) => {
      mxN = e.clientX / window.innerWidth - 0.5;
      myN = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  // clock
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const hh = now ? pad(now.getHours()) : "--";
  const mm = now ? pad(now.getMinutes()) : "--";
  const dateStr = now
    ? now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })
    : "";

  // hero typewriter
  const heroBody = `OS    : Student Developer
ROLE  : Full Stack Engineer
FOCUS : AI + Systems + Web`;
  const { out: typed, done: typedDone } = useTypewriter(heroBody, 26, open.hero);
  const [asciiShown, setAsciiShown] = useState(false);
  useEffect(() => {
    if (open.hero) setAsciiShown(true);
  }, [open.hero]);

  // projects state
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  // music widget
  const [playing, setPlaying] = useState(true);
  const [prog, setProg] = useState(28);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setProg((p) => (p >= 100 ? 0 : p + 0.4)), 400);
    return () => clearInterval(id);
  }, [playing]);

  // terminal
  const [termLines, setTermLines] = useState<{ t: string; c?: string }[]>([
    { t: "rune-shell v1.4  —  the realm awaits.", c: "accent" },
    { t: "type 'help' to see available incantations.", c: "muted" },
  ]);
  const [termIn, setTermIn] = useState("");
  const termBodyRef = useRef<HTMLDivElement | null>(null);
  const runCmd = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const push = (lines: { t: string; c?: string }[]) =>
      setTermLines((p) => [...p, { t: `❯ ${raw}`, c: "cmd" }, ...lines]);
    if (!cmd) {
      setTermLines((p) => [...p, { t: "❯ ", c: "cmd" }]);
      return;
    }
    switch (cmd) {
      case "help":
        push([
          { t: "incantations:" },
          { t: "  about     open the journal", c: "muted" },
          { t: "  projects  open the inventory", c: "muted" },
          { t: "  skills    view character stats", c: "muted" },
          { t: "  contact   open the quest board", c: "muted" },
          { t: "  resume    claim the résumé scroll", c: "muted" },
          { t: "  hero      reopen the name scroll", c: "muted" },
          { t: "  clear     clear the shell", c: "muted" },
        ]);
        break;
      case "about":
        openWin("about");
        push([{ t: "opening journal.txt ...", c: "accent" }]);
        break;
      case "projects":
      case "ls":
        openWin("projects");
        push([{ t: "opening inventory.bag ...", c: "accent" }]);
        break;
      case "skills":
        openWin("skills");
        push([{ t: "rolling character stats ...", c: "accent" }]);
        break;
      case "contact":
        openWin("contact");
        push([{ t: "posting to the quest board ...", c: "accent" }]);
        break;
      case "hero":
        openWin("hero");
        push([{ t: "unfurling the scroll ...", c: "accent" }]);
        break;
      case "resume":
        push([{ t: "the résumé scroll is on the quest board → 'contact'.", c: "accent" }]);
        openWin("contact");
        break;
      case "neofetch":
        push([
          { t: "user@realm.os", c: "accent" },
          { t: "OS    : Realm.OS (fantasy edition)", c: "muted" },
          { t: "WM    : Hyprland-of-the-Mind", c: "muted" },
          { t: "THEME : parchment-gold", c: "muted" },
          { t: "UPTIME: an age of the world", c: "muted" },
        ]);
        break;
      case "clear":
        setTermLines([]);
        return;
      default:
        push([{ t: `unknown incantation: ${cmd}. try 'help'.`, c: "muted" }]);
    }
  };
  useEffect(() => {
    const el = termBodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [termLines]);

  // window default positions (desktop)
  const POS: Record<WinId, { left: number; top: number; width: number }> = {
    hero: { left: 60, top: 360, width: 440 },
    about: { left: 70, top: 120, width: 430 },
    projects: { left: 520, top: 330, width: 470 },
    skills: { left: 1010, top: 360, width: 360 },
    terminal: { left: 540, top: 96, width: 480 },
    contact: { left: 1000, top: 96, width: 380 },
  };

  const winContent = (id: WinId): ReactNode => {
    switch (id) {
      case "hero":
        return (
          <>
            {asciiShown && (
              <motion.pre
                className="realm-ascii"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {NAME_ASCII}
              </motion.pre>
            )}
            <div className="realm-meta">
              {typed.split("\n").map((line, i) => (
                <div key={i}>
                  <b>{line.split(":")[0]}</b>
                  {line.includes(":") ? ":" + line.split(":").slice(1).join(":") : ""}
                </div>
              ))}
              {!typedDone && <span className="realm-cursor" />}
              {typedDone && (
                <div style={{ marginTop: 10 }}>
                  ~ the realm of a student developer ~<span className="realm-cursor" />
                </div>
              )}
            </div>
          </>
        );
      case "about":
        return (
          <div className="realm-journal">
            <h3>
              <span className="flourish">❧ </span>Of the Traveller
            </h3>
            <p>
              <b>Greetings, wanderer.</b> I am a student developer who builds at the seam of{" "}
              <b>AI, systems, and the web</b> — equally at home crafting cozy interfaces and the
              quiet machinery beneath them.
            </p>
            <h3>
              <span className="flourish">❧ </span>Interests
            </h3>
            <p>
              Pixel art &amp; ricing, language models, compilers and small tools, fantasy worlds, and
              the lost art of making software feel <i>handcrafted</i>.
            </p>
            <h3>
              <span className="flourish">❧ </span>Experience
            </h3>
            <p>
              Shipped full-stack products, taught machines to read, and tiled more windows than is
              strictly reasonable. Forever chasing the feeling of a perfectly themed desktop.
            </p>
            <p style={{ marginTop: 12, textAlign: "right", color: "var(--gold-d)" }}>
              — written by candlelight ✒
            </p>
          </div>
        );
      case "projects":
        return (
          <>
            <div className="realm-inv">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.name}
                  className="realm-cell"
                  data-active={selected === i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  onClick={() => setSelected(i)}
                >
                  <span>{p.icon}</span>
                  {hovered === i && (
                    <span className="realm-tooltip">
                      <span className="tname">{p.name}</span>
                      {p.desc.slice(0, 64)}…
                    </span>
                  )}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                className="realm-detail"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <div className="realm-detail-head">
                  <span className="realm-detail-icon">{PROJECTS[selected].icon}</span>
                  <div>
                    <h3>{PROJECTS[selected].name}</h3>
                    <span className="grade">{PROJECTS[selected].grade}</span>
                  </div>
                </div>
                <p>{PROJECTS[selected].desc}</p>
                <div className="realm-tags">
                  {PROJECTS[selected].tags.map((t) => (
                    <span key={t} className="realm-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        );
      case "skills":
        return (
          <div>
            {SKILLS.map((s) => {
              const segs = 12;
              const on = Math.round((s.val / 100) * segs);
              return (
                <div className="realm-stat" key={s.name}>
                  <div className="realm-stat-top">
                    <span>{s.name}</span>
                    <span className="realm-stat-val">{s.val}</span>
                  </div>
                  <div className="realm-bar">
                    {Array.from({ length: segs }).map((_, i) => (
                      <span key={i} className={`realm-seg ${i < on ? "on" : ""}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      case "terminal":
        return (
          <div ref={termBodyRef} style={{ maxHeight: 260, overflow: "auto" }}>
            {termLines.map((l, i) => (
              <div key={i} className={`realm-term-line ${l.c ?? ""}`}>
                {l.t}
              </div>
            ))}
            <form
              className="realm-term-input"
              onSubmit={(e) => {
                e.preventDefault();
                runCmd(termIn);
                setTermIn("");
              }}
            >
              <span>❯</span>
              <input
                value={termIn}
                onChange={(e) => setTermIn(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                aria-label="terminal input"
              />
            </form>
          </div>
        );
      case "contact":
        return (
          <div>
            {QUESTS.map((q) => (
              <a
                key={q.tag}
                className="realm-quest"
                href={q.href}
                target={q.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <span className="avail">[ Quest Available ]</span>
                <h4>{q.title}</h4>
                <span className="reward">
                  Reward: <b>{q.reward}</b>
                </span>
              </a>
            ))}
          </div>
        );
    }
  };

  const isTerminalVariant = (id: WinId) => (id === "terminal" ? "realm-term" : id === "hero" || id === "about" ? "realm-parch" : "");

  return (
    <main className="realm">
      {/* background scene */}
      <div className="realm-scene">
        {scene && (
          <>
            <div
              ref={bgRef}
              className="realm-layer"
              style={{ backgroundImage: `url(${scene.bg})` }}
            />
            <div
              ref={fgRef}
              className="realm-layer"
              style={{ backgroundImage: `url(${scene.fg})`, backgroundPosition: "center bottom" }}
            />
          </>
        )}
      </div>
      <Particles />
      <div className="realm-crt" />
      <div className="realm-vignette" />

      {/* giant pixel clock */}
      <div className="realm-bigclock">
        {hh}
        <span className="sep"> </span>
        {mm}
        <span className="realm-bigclock-date">{dateStr}</span>
      </div>

      {/* HUD — left */}
      <div className="realm-hud realm-hud-left">
        {[0, 1, 2, 3].map((i) => (
          <span className="realm-orb" key={i} />
        ))}
        <span className="realm-hud-sep" />
        {WINDOWS.map((w) => (
          <button
            key={w.id}
            className="realm-task"
            data-open={open[w.id]}
            onClick={() => toggleWin(w.id)}
          >
            {w.id}
          </button>
        ))}
        <span className="realm-hud-sep" />
        <span className="realm-hud-icon" title="display">▦</span>
        <span className="realm-rec" title="recording" />
      </div>

      {/* HUD — right */}
      <div className="realm-hud realm-hud-right">
        <span className="realm-hud-clock">
          {hh}:{mm}
        </span>
        <span className="realm-hud-sep" />
        <span className="realm-hud-icon" title="volume" onClick={() => setPlaying((p) => !p)}>
          {playing ? "♪" : "✕"}
        </span>
        <span className="realm-hud-icon" title="prev" onClick={() => setProg(0)}>⏮</span>
        <span className="realm-hud-icon" title="play" onClick={() => setPlaying((p) => !p)}>
          {playing ? "⏸" : "▶"}
        </span>
        <span className="realm-hud-icon" title="next" onClick={() => setProg(0)}>⏭</span>
        <span className="realm-hud-sep" />
        <span className="realm-hud-icon" title="moon">☾</span>
        <span className="realm-hud-icon" title="power">⚡</span>
      </div>

      {/* windows + widgets area */}
      <div className="realm-stack">
        {WINDOWS.map((w) => (
          <AnimatePresence key={w.id}>
            {open[w.id] && (
              <Window
                meta={w}
                z={zOf(w.id)}
                pos={POS[w.id]}
                variant={isTerminalVariant(w.id)}
                onFocus={() => focus(w.id)}
                onClose={() => closeWin(w.id)}
              >
                {winContent(w.id)}
              </Window>
            )}
          </AnimatePresence>
        ))}

        {/* music widget (wooden) */}
        <div className="realm-music" style={isMobile ? undefined : { right: 26, top: 150 }}>
          <div className="realm-music-top">
            <div className="realm-album">🎵</div>
            <div className="realm-music-info">
              <div className="realm-music-title">Concerning Hobbits</div>
              <div className="realm-music-artist">The Wandering Bard</div>
            </div>
          </div>
          <div className="realm-prog">
            <div className="realm-prog-fill" style={{ width: `${prog}%` }} />
          </div>
          <div className="realm-music-ctrl">
            <button onClick={() => setProg(0)}>≪</button>
            <button onClick={() => setPlaying((p) => !p)}>{playing ? "❚❚" : "▶"}</button>
            <button onClick={() => setProg(0)}>≫</button>
          </div>
        </div>
      </div>

      {!isMobile && (
        <div className="realm-hint">drag windows · click HUD tabs · type in the rune-shell</div>
      )}
    </main>
  );
}
