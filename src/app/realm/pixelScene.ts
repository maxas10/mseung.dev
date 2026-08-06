/* ════════════════════════════════════════════════════════════════════
   Procedural pixel-art fantasy landscape.
   Inspired by the Hyprland "fantasy waterfall castle" rice:
   snow-capped blue mountains, a red-spired white castle, a great
   waterfall beneath an arched stone bridge, golden-tipped pine forests.

   Drawn at low resolution and upscaled with nearest-neighbour so every
   pixel stays chunky. Returns two layers for parallax depth.
   ════════════════════════════════════════════════════════════════════ */

export type Scene = { bg: string; fg: string; w: number; h: number };

// small seeded RNG so the scene is stable across regenerations
function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0xffffffff;
  };
}

const C = {
  skyTop: "#9ec9e6",
  skyMid: "#bcddee",
  skyLow: "#dcEef3",
  cloud: "#eef4f1",
  cloudShade: "#cdddDB",
  snow: "#eef3f4",
  snowShade: "#c2d2da",
  rock: "#8ea3b0",
  rockShade: "#6c8492",
  rockDark: "#46596a",
  castleWall: "#e7e3d6",
  castleShade: "#b9b3a0",
  castleWin: "#3a4656",
  roof: "#b23c34",
  roofShade: "#822a26",
  water: "#bfe0e8",
  waterDeep: "#7fb4c4",
  pool: "#6f9fae",
  bridge: "#8d8472",
  bridgeShade: "#645c4c",
  pine: "#33452a",
  pineMid: "#43592f",
  pineLite: "#6f8a3d",
  gold: "#b9a23e",
  ground: "#2c281f",
  groundLite: "#3c3526",
};

function px(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, c: string) {
  ctx.fillStyle = c;
  ctx.fillRect(x | 0, y | 0, w | 0, h | 0);
}

function pine(
  ctx: CanvasRenderingContext2D,
  cx: number,
  baseY: number,
  size: number,
  rand: () => number
) {
  const w = size;
  const h = size * 2.1;
  // trunk
  px(ctx, cx - 1, baseY - 2, 2, 3, C.ground);
  const tiers = 4;
  for (let t = 0; t < tiers; t++) {
    const ty = baseY - 2 - (h * (t + 1)) / (tiers + 1) - 2;
    const tw = w * (1 - t / (tiers + 1.2));
    // body
    for (let yy = 0; yy < h / tiers + 2; yy++) {
      const prog = yy / (h / tiers + 2);
      const lw = tw * (1 - prog) + 1;
      const shade = rand() > 0.7 ? C.pine : rand() > 0.4 ? C.pineMid : C.pineLite;
      px(ctx, cx - lw / 2, ty + yy, lw, 1, shade);
    }
    // golden highlight tips
    if (rand() > 0.55) px(ctx, cx + tw / 4, ty + 1, 1, 1, C.gold);
  }
  // snow dusting on some
  if (rand() > 0.82) px(ctx, cx - 1, baseY - h - 1, 2, 1, C.snow);
}

/** jagged ridgeline via summed sines */
function ridge(x: number, W: number, base: number, amp: number, seedPhase: number) {
  const n =
    Math.sin((x / W) * 6.3 + seedPhase) * 0.5 +
    Math.sin((x / W) * 17 + seedPhase * 2) * 0.28 +
    Math.sin((x / W) * 41 + seedPhase * 3) * 0.14;
  return base - n * amp;
}

export function buildScene(seed = 7): Scene {
  const W = 340;
  const H = 191; // ~16:9
  const rand = rng(seed);

  const make = () => {
    const cv = document.createElement("canvas");
    cv.width = W;
    cv.height = H;
    return { cv, ctx: cv.getContext("2d")! };
  };

  /* ───────── background layer ───────── */
  const { cv: bgC, ctx } = make();

  // sky bands
  for (let y = 0; y < H; y++) {
    const t = y / H;
    const c = t < 0.45 ? C.skyTop : t < 0.62 ? C.skyMid : C.skyLow;
    px(ctx, 0, y, W, 1, c);
  }
  // soft clouds
  for (let i = 0; i < 7; i++) {
    const cw = 22 + rand() * 40;
    const cx = rand() * W;
    const cy = 12 + rand() * 60;
    for (let b = 0; b < 5; b++) {
      const bw = cw * (1 - Math.abs(b - 2) / 3);
      px(ctx, cx - bw / 2 + rand() * 4, cy + b * 2, bw, 2, b < 2 ? C.cloud : C.cloudShade);
    }
  }

  // far mountain range (snow) — tall dramatic peaks
  for (let x = 0; x < W; x++) {
    const r = ridge(x, W, H * 0.44, 78, 1.7);
    for (let y = r; y < H * 0.74; y++) {
      const depth = (y - r) / (H * 0.72 - r);
      // right-side shadow vs lit snow
      const lit = Math.sin((x / W) * 30) > -0.1;
      let c = C.snow;
      if (depth > 0.55) c = C.rock;
      else if (!lit) c = C.snowShade;
      if (depth > 0.8) c = C.rockShade;
      px(ctx, x, y, 1, 1, c);
    }
    // snow cap sparkle
    if (rand() > 0.85) px(ctx, x, r, 1, 1, C.snow);
  }

  // second nearer ridge (rockier, left + right framing the valley)
  for (let x = 0; x < W; x++) {
    const r = ridge(x, W, H * 0.62, 42, 4.2);
    // leave a central gap (the valley / waterfall) clear-ish
    const central = x > W * 0.42 && x < W * 0.66;
    const top = central ? r + 18 : r;
    for (let y = top; y < H * 0.86; y++) {
      const depth = (y - top) / (H * 0.86 - top);
      let c = depth < 0.3 ? C.snowShade : depth < 0.6 ? C.rock : C.rockShade;
      if (depth > 0.82) c = C.rockDark;
      px(ctx, x, y, 1, 1, c);
    }
  }

  /* ───────── the castle (left-of-centre, on a ledge) ───────── */
  const caX = Math.floor(W * 0.3);
  const caY = Math.floor(H * 0.42);
  const drawTower = (x: number, y: number, w: number, hh: number, spire: number) => {
    px(ctx, x, y, w, hh, C.castleWall);
    px(ctx, x + w - 1, y, 1, hh, C.castleShade); // right shade
    // crenellation / windows
    for (let wy = y + 2; wy < y + hh - 1; wy += 4) px(ctx, x + 1, wy, 1, 2, C.castleWin);
    // red conical/pitched roof
    for (let s = 0; s < spire; s++) {
      const rw = w - Math.floor((s * w) / spire);
      px(ctx, x + (w - rw) / 2, y - s - 1, rw, 1, s < spire * 0.5 ? C.roof : C.roofShade);
    }
  };
  // main keep
  drawTower(caX, caY, 11, 22, 8);
  // tall central spire
  drawTower(caX + 4, caY - 16, 5, 18, 12);
  // flanking towers
  drawTower(caX - 8, caY + 6, 7, 16, 6);
  drawTower(caX + 12, caY + 4, 8, 18, 7);
  // a tiny flag
  px(ctx, caX + 6, caY - 34, 1, 5, C.castleWin);
  px(ctx, caX + 7, caY - 34, 3, 2, C.roof);

  /* ───────── waterfall + gorge (centre-right) ───────── */
  const wfX = Math.floor(W * 0.6);
  const wfTop = Math.floor(H * 0.5);
  const wfBot = Math.floor(H * 0.96);
  const wfW = 16;
  // dark cliff walls either side
  px(ctx, wfX - 10, wfTop, 10, wfBot - wfTop, C.rockDark);
  px(ctx, wfX + wfW, wfTop, 12, wfBot - wfTop, C.rockDark);
  // falling water with vertical streaks
  for (let y = wfTop; y < wfBot; y++) {
    for (let x = wfX; x < wfX + wfW; x++) {
      const streak = (x + Math.floor(y / 3)) % 4;
      px(ctx, x, y, 1, 1, streak === 0 ? C.water : streak === 2 ? C.waterDeep : C.water);
    }
    if (rand() > 0.6) px(ctx, wfX + Math.floor(rand() * wfW), y, 1, 1, C.snow);
  }
  // mist/pool at base
  for (let i = 0; i < 60; i++) {
    px(ctx, wfX - 6 + rand() * (wfW + 12), wfBot - 6 + rand() * 6, 1 + rand() * 2, 1, C.pool);
  }

  /* ───────── arched stone bridge spanning the gorge ───────── */
  const brY = Math.floor(H * 0.62);
  const brX0 = wfX - 16;
  const brX1 = wfX + wfW + 18;
  px(ctx, brX0, brY, brX1 - brX0, 5, C.bridge); // deck
  px(ctx, brX0, brY, brX1 - brX0, 1, C.castleWall); // lit top edge
  px(ctx, brX0, brY + 5, brX1 - brX0, 1, C.bridgeShade);
  // piers + arches
  const span = brX1 - brX0;
  const piers = 4;
  for (let p = 0; p <= piers; p++) {
    const pxn = brX0 + Math.floor((span * p) / piers);
    px(ctx, pxn - 1, brY + 5, 3, 16, C.bridge);
    px(ctx, pxn + 1, brY + 5, 1, 16, C.bridgeShade);
  }
  // arch shadows between piers
  for (let p = 0; p < piers; p++) {
    const a0 = brX0 + Math.floor((span * p) / piers) + 2;
    const a1 = brX0 + Math.floor((span * (p + 1)) / piers) - 1;
    for (let x = a0; x < a1; x++) {
      const mid = (a0 + a1) / 2;
      const h = 12 - Math.floor((Math.abs(x - mid) / ((a1 - a0) / 2)) * 7);
      px(ctx, x, brY + 6, 1, h, C.rockDark);
    }
  }

  // back treeline along mountains base
  for (let x = 2; x < W; x += 3) {
    if (x > wfX - 12 && x < wfX + wfW + 10) continue;
    pine(ctx, x, H * 0.74 + rand() * 6, 3 + rand() * 2, rand);
  }

  /* ───────── foreground layer (near pines + ground) ───────── */
  const { cv: fgC, ctx: fx } = make();
  // dark ground mass bottom
  for (let x = 0; x < W; x++) {
    const top = H - 26 - Math.sin(x * 0.3) * 2 - rand() * 3;
    px(fx, x, top, 1, H - top, rand() > 0.5 ? C.ground : C.groundLite);
  }
  // big foreground pines framing edges
  const places: [number, number][] = [
    [10, 1.6], [22, 1.9], [34, 1.4], [W - 12, 1.8], [W - 26, 2.1], [W - 40, 1.5],
    [48, 1.2], [W - 54, 1.3], [6, 2.2], [W - 6, 2.0],
  ];
  for (const [x, s] of places) pine(fx, x, H - 16 + rand() * 4, 6 * s, rand);
  // a few mid foreground pines lower band
  for (let x = 0; x < W; x += 14) {
    if (x > W * 0.4 && x < W * 0.7) continue;
    pine(fx, x + rand() * 6, H - 22 + rand() * 6, 5 + rand() * 3, rand);
  }

  return { bg: bgC.toDataURL(), fg: fgC.toDataURL(), w: W, h: H };
}
