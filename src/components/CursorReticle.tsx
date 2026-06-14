import { useEffect, useRef, useState } from "react";

export function CursorReticle() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const el = (e.target as HTMLElement)?.closest("[data-reticle]") as HTMLElement | null;
      if (el) {
        setActive(true);
        setLabel(el.dataset.reticle || "PLAY CLIP");
      } else {
        setActive(false);
        setLabel(null);
      }
    };
    const loop = () => {
      cx += (tx - cx) * 0.25;
      cy += (ty - cy) * 0.25;
      if (ref.current) ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ transition: "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1)" }}
    >
      <div
        className={`relative flex items-center justify-center ease-revo transition-all duration-500 ${
          active ? "h-24 w-24" : "h-4 w-4"
        }`}
      >
        {/* crosshair */}
        <div className={`absolute inset-0 rounded-full border ${active ? "border-neon" : "border-white/70"}`} style={{ borderColor: active ? "var(--neon)" : "rgba(255,255,255,0.7)" }} />
        {active && (
          <>
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2" style={{ background: "var(--neon)" }} />
            <div className="absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2" style={{ background: "var(--neon)" }} />
            <div className="absolute top-1/2 left-0 w-3 h-px -translate-y-1/2" style={{ background: "var(--neon)" }} />
            <div className="absolute top-1/2 right-0 w-3 h-px -translate-y-1/2" style={{ background: "var(--neon)" }} />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--neon)" }}>
              {label}
            </span>
          </>
        )}
        {!active && <div className="h-1 w-1 rounded-full bg-white" />}
      </div>
    </div>
  );
}
