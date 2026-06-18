import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/revo-portrait.jpg";
import { CursorReticle } from "@/components/CursorReticle";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REVO // High-Retention Video & Social Strategy" },
      { name: "description", content: "REVO — Video editor, videographer, and social media marketer. Crafting high-retention visuals engineered for algorithmic growth." },
      { property: "og:title", content: "REVO // Neon Cyber Studio" },
      { property: "og:description", content: "Crafting High-Retention Visuals. Engineered for Algorithmic Growth." },
    ],
  }),
  component: Index,
});

// ============ DATA ============

const SHORT_CATS = [
  { id: "REEL_01", tag: "Talking Head", title: "Founder POV // Hooks at 0:00", retention: "92%", views: "4.2M", camera: "FX3 · 50mm 1.2", color: "Rec.709 · Teal/Orange", platform: "IG · TT · YT Shorts" },
  { id: "REEL_02", tag: "Product Showcase", title: "Macro Motion Drop", retention: "88%", views: "2.7M", camera: "FX30 · 90mm Macro", color: "S-Log3 · Custom LUT", platform: "IG · TT" },
  { id: "REEL_03", tag: "Podcast", title: "Vertical Cut · Multi-Cam", retention: "84%", views: "1.9M", camera: "FX3 ×3 · 35mm", color: "Cine D · Warm", platform: "YT Shorts · TT" },
  { id: "REEL_04", tag: "Events", title: "Live Run-of-Show Recap", retention: "79%", views: "980K", camera: "FX30 · 24-70mm GM", color: "S-Cinetone", platform: "IG · LinkedIn" },
  { id: "REEL_05", tag: "Real Estate", title: "Walkthrough · Gimbal Pass", retention: "86%", views: "1.3M", camera: "FX3 · 16-35mm GM", color: "HLG3 · Neutral", platform: "IG · TT · YT" },
  { id: "REEL_06", tag: "Brand Focused", title: "Identity Film · 30s Cut", retention: "91%", views: "3.1M", camera: "FX3 · Sigma 18-35", color: "ACES · Brand LUT", platform: "IG · TT · YT" },
];

const LONGFORM = [
  { id: "YT_LF_01", tag: "Real Estate", title: "Inside a $14M Penthouse — The Full Walkthrough", duration: "14:22", avd: "11:08", ctr: "9.4%", thumb: "linear-gradient(135deg,#001317,#003642 50%,#080808)" },
  { id: "YT_LF_02", tag: "Informative", title: "How Algorithms Decide What You Watch Next", duration: "18:47", avd: "12:55", ctr: "11.2%", thumb: "linear-gradient(135deg,#0a0a0a,#002129 60%,#4a3512)" },
  { id: "YT_LF_03", tag: "Documentary", title: "Night Shift // A City That Never Edits", duration: "22:10", avd: "16:31", ctr: "8.7%", thumb: "linear-gradient(135deg,#000,#061f24 50%,#3d2a0d)" },
];

const TESTIMONIALS = [
  { quote: "REVO turned our launch reel into a 3.1M-view machine. The edit rhythm hooks the algorithm and the human.", who: "M. Lazar", role: "Founder · NORTHLINE" },
  { quote: "Cinema-grade craft with a marketer's brain. Rare combo. Our CPM dropped, retention doubled.", who: "S. Aoki", role: "Head of Growth · LUMA" },
  { quote: "Delivered 42 shorts in 30 days. Every single one cleared 70% retention. Unreal.", who: "J. Vance", role: "CEO · DRAFT.FM" },
  { quote: "The penthouse walkthrough closed two offers in a week. The film did the selling.", who: "R. Okafor", role: "Principal · AXIS Real Estate" },
  { quote: "REVO doesn't deliver footage. He delivers compounding distribution.", who: "K. Petrov", role: "Creator · 1.2M YT" },
];

// ============ HELPERS ============

function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:py-6">
      <div className="pill-nav mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-4 py-2.5 sm:px-5">
        <a
          href="#"
          data-reticle="HOME"
          className="font-display text-sm font-bold tracking-[0.3em] text-white"
        >
          REVO<span style={{ color: "var(--neon)" }}>.</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full bg-white/[0.04] p-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 md:flex">
          <a href="#shorts" className="pill-nav-link">
            Shorts
          </a>
          <a href="#longform" className="pill-nav-link">
            Long-Form
          </a>
          <a href="#proof" className="pill-nav-link">
            Proof
          </a>
          <a href="#book" className="pill-nav-link">
            Book
          </a>
        </nav>
        <a
          href="#book"
          data-reticle="BOOK CALL"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white ease-revo transition-all hover:border-white/50 hover:bg-white hover:text-black sm:text-[11px] sm:tracking-[0.2em]"
        >
          Book Call
        </a>
      </div>
    </header>
  );
}

function SectionLabel({ idx, label }: { idx: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6">
      <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "var(--neon)" }} />
      <span style={{ color: "var(--neon)" }}>{idx}</span>
      <span>//</span>
      <span>{label}</span>
    </div>
  );
}

// Animated faux video preview shown on hover (no asset network deps)
function FauxClip({ seed }: { seed: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden scanline" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at ${20 + (seed * 13) % 60}% ${30 + (seed * 7) % 40}%, rgba(0,229,255,0.35), transparent 40%),
            radial-gradient(circle at ${40 + (seed * 17) % 45}% ${20 + (seed * 9) % 55}%, rgba(245,184,75,0.16), transparent 38%),
            radial-gradient(circle at ${70 - (seed * 11) % 50}% ${60 + (seed * 5) % 30}%, rgba(255,255,255,0.12), transparent 35%),
            linear-gradient(${seed * 37}deg, #001317, #080808 70%)`,
          filter: "contrast(1.1)",
          animation: `pulse-dot ${2 + (seed % 3)}s ease-in-out infinite alternate`,
        }}
      />
      <div className="absolute inset-0" style={{
        backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)"
      }} />
    </div>
  );
}

function ShortCard({ item, idx }: { item: typeof SHORT_CATS[number]; idx: number }) {
  const [hover, setHover] = useState(false);
  return (
    <RevealOnScroll delay={idx * 120}>
      <div
        data-reticle="PLAY CLIP"
        className="group relative aspect-[9/13] brand-border bg-charcoal overflow-hidden ease-revo transition-transform duration-700 hover:-translate-y-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Resting cover */}
        <div
          className="absolute inset-0 ease-revo transition-all duration-700"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%), linear-gradient(${idx * 47}deg, #0a0a0a 0%, #002a33 72%, #3a2a0d 100%)`,
            filter: hover ? "saturate(1) brightness(1) scale(1)" : "saturate(0) brightness(0.85)",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
        {hover && <FauxClip seed={idx + 1} />}

        {/* Overlay metadata */}
        <div className="absolute inset-0 p-4 flex flex-col justify-between">
          <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="px-2 py-1 bg-black/60 backdrop-blur-sm" style={{ color: "var(--neon)" }}>ID // {item.id}</span>
            <span className="px-2 py-1 bg-black/60 backdrop-blur-sm text-white/70">{item.tag}</span>
          </div>

          <div>
            <div className="font-display text-xl font-bold leading-tight mb-3">{item.title}</div>
            <div className="grid grid-cols-2 gap-1 font-mono text-[10px] tracking-wider text-white/70">
              <div>RET <span className="text-white">{item.retention}</span></div>
              <div>VIEWS <span className="text-white">{item.views}</span></div>
              <div className="col-span-2 truncate">CAM · {item.camera}</div>
              <div className="col-span-2 truncate">COLOR · {item.color}</div>
              <div className="col-span-2 truncate" style={{ color: "var(--neon)" }}>▸ {item.platform}</div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function LongCard({ item, idx, large }: { item: typeof LONGFORM[number]; idx: number; large?: boolean }) {
  const [hover, setHover] = useState(false);
  return (
    <RevealOnScroll delay={idx * 150} className={large ? "md:col-span-2 md:row-span-2" : ""}>
      <div
        data-reticle="PLAY FILM"
        className="group relative w-full aspect-video brand-border bg-charcoal overflow-hidden ease-revo transition-transform duration-700 hover:-translate-y-1"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          className="absolute inset-0 ease-revo transition-all duration-700"
          style={{
            background: item.thumb,
            filter: hover ? "saturate(1.1) brightness(1)" : "saturate(0.2) brightness(0.75)",
            transform: hover ? "scale(1.04)" : "scale(1)",
          }}
        />
        {hover && <FauxClip seed={idx + 99} />}

        <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-between">
          <div className="flex items-start justify-between font-mono text-[10px] tracking-[0.25em] uppercase">
            <span className="px-2 py-1 bg-black/70" style={{ color: "var(--neon)" }}>ID // {item.id}</span>
            <span className="px-2 py-1 bg-black/70 text-white/70">{item.tag}</span>
          </div>
          <div>
            <div className={`font-display font-bold leading-[1.05] mb-4 ${large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`}>
              {item.title}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] md:text-[11px] tracking-wider text-white/70 uppercase">
              <span>RUNTIME · <span className="text-white">{item.duration}</span></span>
              <span>AVD · <span className="text-white">{item.avd}</span></span>
              <span>CTR · <span style={{ color: "var(--neon)" }}>{item.ctr}</span></span>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

// ============ PAGE ============

function Index() {
  // tab title flicker on load
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <CursorReticle />
      <TopNav />

      <main className="relative">
        {/* ============ HERO ============ */}
        <section className="relative min-h-screen w-full overflow-hidden grid-lines">
          {/* corner ticks */}
          <div className="pointer-events-none absolute inset-6 md:inset-10 border border-white/10" />
          <div className="hidden md:block absolute top-10 left-10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">N 40.7128° · W 74.0060°</div>
          <div className="hidden md:flex absolute top-10 right-10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ background: "var(--neon)" }} />
            REC · LIVE STUDIO
          </div>

          <div className="relative z-10 grid md:grid-cols-2 min-h-screen items-center px-6 md:px-16 pt-32 pb-16 gap-12">
            {/* Portrait */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 brand-border overflow-hidden animate-ignite">
              <img
                src={portrait}
                alt="REVO portrait — video editor and videographer"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "contrast(1.15) saturate(0.8)" }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(160deg, rgba(0,229,255,0.18) 0%, rgba(245,184,75,0.08) 38%, rgba(0,0,0,0.7) 100%)",
                mixBlendMode: "multiply",
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.25em] uppercase">
                <span style={{ color: "var(--neon)" }}>SUBJECT · REVO</span>
                <span className="hidden sm:inline text-white/60">ISO 800 · F1.4</span>
              </div>
            </div>

            {/* Typography */}
            <div className="relative min-w-0">
              <div className="overflow-hidden mask-up">
                <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6">
                  <span style={{ color: "var(--neon)" }}>00 //</span> Identity Frame
                </div>
              </div>

              <h1 className="neon-text whitespace-nowrap font-black leading-[0.85] text-[clamp(2.5rem,12.5vw,4.75rem)] sm:text-[clamp(4.75rem,12.5vw,8rem)] md:text-[clamp(4rem,8vw,9rem)] lg:text-[clamp(5.75rem,8.5vw,12rem)] xl:text-[clamp(7rem,9vw,12.25rem)]">
                REVO
              </h1>

              <div className="mt-6 max-w-xl">
                <p className="font-display text-lg sm:text-xl md:text-2xl font-bold leading-tight text-white">
                  Crafting High-Retention Visuals.<br />
                  <span style={{ color: "var(--neon)" }}>Engineered</span> for Algorithmic Growth.
                </p>
                <p className="mt-4 font-mono text-[11px] sm:text-xs tracking-wider text-white/60 leading-relaxed uppercase">
                  Video editor · Videographer · Social media marketer. Reels, YouTube, brand films — built to perform, not just to play.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <a href="#book" data-reticle="BOOK CALL"
                   className="inline-flex w-full sm:w-auto justify-center font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-3 ease-revo transition-all whitespace-nowrap"
                   style={{ background: "var(--neon)", color: "#031014", boxShadow: "0 0 24px rgba(0,229,255,0.46)" }}>
                  ▸ Command the Feed
                </a>
                <a href="#shorts" data-reticle="VIEW WORK"
                   className="inline-flex w-full sm:w-auto justify-center font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-3 brand-border ease-revo transition-all hover:bg-white/5 whitespace-nowrap">
                  Browse Archive
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-md font-mono text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase">
                <div><div className="text-xl sm:text-2xl font-display font-bold" style={{ color: "var(--neon)" }}>180M+</div><div className="text-white/50 mt-1">Organic Views</div></div>
                <div><div className="text-xl sm:text-2xl font-display font-bold" style={{ color: "var(--neon)" }}>87%</div><div className="text-white/50 mt-1">Avg Retention</div></div>
                <div><div className="text-xl sm:text-2xl font-display font-bold" style={{ color: "var(--neon)" }}>240+</div><div className="text-white/50 mt-1">Shipped Cuts</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SHORTS ARCHIVE ============ */}
        <section
          id="shorts"
          className="relative scroll-mt-28 px-6 md:px-16 py-32"
        >
          <RevealOnScroll>
            <SectionLabel idx="01" label="Shorts & Reels Archive" />
            <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 mb-16">
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9]">
                Vertical cuts<br/>built to <span className="neon-text-soft">retain.</span>
              </h2>
              <p className="font-mono text-xs uppercase tracking-wider text-white/60 max-w-xs">
                Six content systems. One operating principle: stop the scroll inside three frames or it never existed.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {SHORT_CATS.map((item, i) => (
              <ShortCard key={item.id} item={item} idx={i} />
            ))}
          </div>
        </section>

        {/* ============ LONG-FORM ============ */}
        <section
          id="longform"
          className="relative scroll-mt-28 px-6 md:px-16 py-32 border-t border-white/5"
        >
          <RevealOnScroll>
            <SectionLabel idx="02" label="Long-Form YouTube Showcase" />
            <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] mb-16 max-w-4xl">
              Widescreen films. <span className="neon-text-soft">Cinema</span> meets click-through.
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 md:auto-rows-fr gap-4 md:gap-6">
            <LongCard item={LONGFORM[0]} idx={0} large />
            <LongCard item={LONGFORM[1]} idx={1} />
            <LongCard item={LONGFORM[2]} idx={2} />
          </div>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section
          id="proof"
          className="relative scroll-mt-28 py-32 border-t border-white/5 overflow-hidden"
        >
          <div className="px-6 md:px-16">
            <RevealOnScroll>
              <SectionLabel idx="03" label="Validation Layout" />
              <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.9] mb-16 max-w-4xl">
                Operators who <span className="neon-text-soft">ship</span>. Receipts attached.
              </h2>
            </RevealOnScroll>
          </div>

          <div className="relative">
            <div className="flex gap-6 animate-marquee w-max">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <article key={i} className="w-[380px] md:w-[460px] shrink-0 p-8 brand-border bg-charcoal">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--neon)" }}>▸ Client Brief // {String(i + 1).padStart(2, "0")}</div>
                  <p className="font-display text-xl md:text-2xl font-bold leading-tight text-white">"{t.quote}"</p>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] tracking-wider uppercase">
                    <span className="text-white">{t.who}</span>
                    <span className="text-white/50">{t.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOK A CALL ============ */}
        <section
          id="book"
          className="relative scroll-mt-28 px-6 md:px-16 py-32 border-t border-white/5"
        >
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <RevealOnScroll>
              <SectionLabel idx="04" label="High-Converting Finale" />
              <h2 className="font-display font-black text-5xl md:text-8xl leading-[0.85] mb-8">
                Let's <span className="neon-text-soft">command</span><br />the feed.
              </h2>
              <p className="font-mono text-sm uppercase tracking-wider text-white/60 max-w-md leading-relaxed mb-10">
                30-minute strategy call. Walk out with a content cadence, a retention model, and a delivery timeline. No deck. No fluff.
              </p>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider text-white/70">
                <li className="flex items-center gap-3"><span style={{ color: "var(--neon)" }}>▸</span> Audit of your current top + bottom 3 posts</li>
                <li className="flex items-center gap-3"><span style={{ color: "var(--neon)" }}>▸</span> Hook framework calibrated to your niche</li>
                <li className="flex items-center gap-3"><span style={{ color: "var(--neon)" }}>▸</span> 30-day deliverable plan with clear KPIs</li>
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              {/* Calendly-style dark embed mock */}
              <div className="brand-border bg-charcoal p-6 md:p-8 relative scanline overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase mb-6">
                  <span style={{ color: "var(--neon)" }}>▸ BOOKING TERMINAL</span>
                  <span className="text-white/40">v4.2 · SECURE</span>
                </div>
                <div className="font-display text-2xl font-bold mb-1">Strategy Call · 30 min</div>
                <div className="font-mono text-xs text-white/60 mb-6">Zoom · Free · Confirmation by email</div>

                <div className="grid grid-cols-7 gap-1 mb-6">
                  {["M","T","W","T","F","S","S"].map((d,i) => (
                    <div key={i} className="font-mono text-[10px] text-white/40 text-center pb-2">{d}</div>
                  ))}
                  {Array.from({ length: 28 }).map((_, i) => {
                    const active = [3, 7, 10, 14, 17, 21, 24].includes(i);
                    const today = i === 10;
                    return (
                      <button
                        key={i}
                        data-reticle={active ? "SELECT" : undefined}
                        disabled={!active}
                        className={`aspect-square font-mono text-xs ease-revo transition-all ${
                          active ? "hover:bg-white hover:text-black border border-white/20" : "text-white/20"
                        } ${today ? "" : ""}`}
                        style={today ? { background: "var(--neon)", color: "#031014" } : undefined}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2">Available · Thu</div>
                  {["09:30", "11:00", "14:30", "16:00"].map((t) => (
                    <button
                      key={t}
                      data-reticle="CONFIRM"
                      className="w-full text-left font-mono text-sm px-4 py-3 brand-border ease-revo transition-all hover:bg-white hover:text-black"
                    >
                      {t} <span className="text-white/40">EST</span>
                    </button>
                  ))}
                </div>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  data-reticle="LOCK IN"
                  className="block w-full text-center font-mono text-[11px] tracking-[0.25em] uppercase px-5 py-4 ease-revo transition-all"
                  style={{ background: "var(--neon)", color: "#031014", boxShadow: "0 0 32px rgba(0,229,255,0.44)" }}
                >
                  ▸ Confirm Booking
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className="px-6 md:px-16 py-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40">
          <div className="font-display text-sm font-bold text-white">REVO<span style={{ color: "var(--neon)" }}>.</span></div>
          <div>© {new Date().getFullYear()} · ALL RIGHTS RESERVED</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">TikTok</a>
            <a href="#" className="hover:text-white transition-colors">Email</a>
          </div>
        </footer>
      </main>
    </>
  );
}
