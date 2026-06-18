import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BkUCFGul.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var revo_portrait_default = "/assets/revo-portrait-C_fIAo5m.jpg";
function CursorReticle() {
	const ref = (0, import_react.useRef)(null);
	const [label, setLabel] = (0, import_react.useState)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		let tx = 0, ty = 0, cx = 0, cy = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
			const el = e.target?.closest("[data-reticle]");
			if (el) {
				setActive(true);
				setLabel(el.dataset.reticle || "PLAY CLIP");
			} else {
				setActive(false);
				setLabel(null);
			}
		};
		const loop = () => {
			cx += (tx - cx) * .25;
			cy += (ty - cy) * .25;
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block",
		style: { transition: "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative flex items-center justify-center ease-revo transition-all duration-500 ${active ? "h-24 w-24" : "h-4 w-4"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-0 rounded-full border ${active ? "border-neon" : "border-white/70"}`,
					style: { borderColor: active ? "var(--neon)" : "rgba(255,255,255,0.7)" }
				}),
				active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 top-0 h-3 w-px -translate-x-1/2",
						style: { background: "var(--neon)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2",
						style: { background: "var(--neon)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 left-0 w-3 h-px -translate-y-1/2",
						style: { background: "var(--neon)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 right-0 w-3 h-px -translate-y-1/2",
						style: { background: "var(--neon)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[10px] tracking-[0.2em] uppercase",
						style: { color: "var(--neon)" },
						children: label
					})
				] }),
				!active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-white" })
			]
		})
	});
}
function RevealOnScroll({ children, delay = 0, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					el.style.animationDelay = `${delay}ms`;
					el.classList.add("reveal");
					io.unobserve(el);
				}
			});
		}, { threshold: .15 });
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className,
		children
	});
}
var SHORT_CATS = [
	{
		id: "REEL_01",
		tag: "Talking Head",
		title: "Founder POV // Hooks at 0:00",
		retention: "92%",
		views: "4.2M",
		camera: "FX3 · 50mm 1.2",
		color: "Rec.709 · Teal/Orange",
		platform: "IG · TT · YT Shorts"
	},
	{
		id: "REEL_02",
		tag: "Product Showcase",
		title: "Macro Motion Drop",
		retention: "88%",
		views: "2.7M",
		camera: "FX30 · 90mm Macro",
		color: "S-Log3 · Custom LUT",
		platform: "IG · TT"
	},
	{
		id: "REEL_03",
		tag: "Podcast",
		title: "Vertical Cut · Multi-Cam",
		retention: "84%",
		views: "1.9M",
		camera: "FX3 ×3 · 35mm",
		color: "Cine D · Warm",
		platform: "YT Shorts · TT"
	},
	{
		id: "REEL_04",
		tag: "Events",
		title: "Live Run-of-Show Recap",
		retention: "79%",
		views: "980K",
		camera: "FX30 · 24-70mm GM",
		color: "S-Cinetone",
		platform: "IG · LinkedIn"
	},
	{
		id: "REEL_05",
		tag: "Real Estate",
		title: "Walkthrough · Gimbal Pass",
		retention: "86%",
		views: "1.3M",
		camera: "FX3 · 16-35mm GM",
		color: "HLG3 · Neutral",
		platform: "IG · TT · YT"
	},
	{
		id: "REEL_06",
		tag: "Brand Focused",
		title: "Identity Film · 30s Cut",
		retention: "91%",
		views: "3.1M",
		camera: "FX3 · Sigma 18-35",
		color: "ACES · Brand LUT",
		platform: "IG · TT · YT"
	}
];
var LONGFORM = [
	{
		id: "YT_LF_01",
		tag: "Real Estate",
		title: "Inside a $14M Penthouse — The Full Walkthrough",
		duration: "14:22",
		avd: "11:08",
		ctr: "9.4%",
		thumb: "linear-gradient(135deg,#1a0006,#2b000a 50%,#080808)"
	},
	{
		id: "YT_LF_02",
		tag: "Informative",
		title: "How Algorithms Decide What You Watch Next",
		duration: "18:47",
		avd: "12:55",
		ctr: "11.2%",
		thumb: "linear-gradient(135deg,#0a0a0a,#1a0008 60%,#3b0010)"
	},
	{
		id: "YT_LF_03",
		tag: "Documentary",
		title: "Night Shift // A City That Never Edits",
		duration: "22:10",
		avd: "16:31",
		ctr: "8.7%",
		thumb: "linear-gradient(135deg,#000,#0f0004 50%,#240008)"
	}
];
var TESTIMONIALS = [
	{
		quote: "REVO turned our launch reel into a 3.1M-view machine. The edit rhythm hooks the algorithm and the human.",
		who: "M. Lazar",
		role: "Founder · NORTHLINE"
	},
	{
		quote: "Cinema-grade craft with a marketer's brain. Rare combo. Our CPM dropped, retention doubled.",
		who: "S. Aoki",
		role: "Head of Growth · LUMA"
	},
	{
		quote: "Delivered 42 shorts in 30 days. Every single one cleared 70% retention. Unreal.",
		who: "J. Vance",
		role: "CEO · DRAFT.FM"
	},
	{
		quote: "The penthouse walkthrough closed two offers in a week. The film did the selling.",
		who: "R. Okafor",
		role: "Principal · AXIS Real Estate"
	},
	{
		quote: "REVO doesn't deliver footage. He delivers compounding distribution.",
		who: "K. Petrov",
		role: "Creator · 1.2M YT"
	}
];
function TopNav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 px-4 py-4 md:py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pill-nav mx-auto flex w-full max-w-5xl items-center justify-between gap-3 rounded-full px-4 py-2.5 sm:px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					"data-reticle": "HOME",
					className: "font-display text-sm font-bold tracking-[0.3em] text-white",
					children: ["REVO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { color: "var(--neon)" },
						children: "."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 rounded-full bg-white/[0.04] p-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#shorts",
							className: "pill-nav-link",
							children: "Shorts"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#longform",
							className: "pill-nav-link",
							children: "Long-Form"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#proof",
							className: "pill-nav-link",
							children: "Proof"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#book",
							className: "pill-nav-link",
							children: "Book"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#book",
					"data-reticle": "BOOK CALL",
					className: "inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white ease-revo transition-all hover:border-white/50 hover:bg-white hover:text-black sm:text-[11px] sm:tracking-[0.2em]",
					children: "Book Call"
				})
			]
		})
	});
}
function SectionLabel({ idx, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-1.5 w-1.5 rounded-full pulse-dot",
				style: { background: "var(--neon)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { color: "var(--neon)" },
				children: idx
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "//" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
		]
	});
}
function FauxClip({ seed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden scanline",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: {
				background: `
            radial-gradient(circle at ${20 + seed * 13 % 60}% ${30 + seed * 7 % 40}%, rgba(255,0,51,0.35), transparent 40%),
            radial-gradient(circle at ${70 - seed * 11 % 50}% ${60 + seed * 5 % 30}%, rgba(255,255,255,0.12), transparent 35%),
            linear-gradient(${seed * 37}deg, #1a0006, #080808 70%)`,
				filter: "contrast(1.1)",
				animation: `pulse-dot ${2 + seed % 3}s ease-in-out infinite alternate`
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			style: { backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)" }
		})]
	});
}
function ShortCard({ item, idx }) {
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
		delay: idx * 120,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-reticle": "PLAY CLIP",
			className: "group relative aspect-[9/13] brand-border bg-charcoal overflow-hidden ease-revo transition-transform duration-700 hover:-translate-y-2",
			onMouseEnter: () => setHover(true),
			onMouseLeave: () => setHover(false),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 ease-revo transition-all duration-700",
					style: {
						background: `linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%), linear-gradient(${idx * 47}deg, #0a0a0a 0%, #1a0006 100%)`,
						filter: hover ? "saturate(1) brightness(1) scale(1)" : "saturate(0) brightness(0.85)",
						transform: hover ? "scale(1.06)" : "scale(1)"
					}
				}),
				hover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FauxClip, { seed: idx + 1 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 p-4 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between font-mono text-[10px] tracking-[0.2em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "px-2 py-1 bg-black/60 backdrop-blur-sm",
							style: { color: "var(--neon)" },
							children: ["ID // ", item.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 py-1 bg-black/60 backdrop-blur-sm text-white/70",
							children: item.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl font-bold leading-tight mb-3",
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-1 font-mono text-[10px] tracking-wider text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["RET ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: item.retention
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["VIEWS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: item.views
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 truncate",
								children: ["CAM · ", item.camera]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 truncate",
								children: ["COLOR · ", item.color]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "col-span-2 truncate",
								style: { color: "var(--neon)" },
								children: ["▸ ", item.platform]
							})
						]
					})] })]
				})
			]
		})
	});
}
function LongCard({ item, idx, large }) {
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
		delay: idx * 150,
		className: large ? "md:col-span-2 md:row-span-2" : "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-reticle": "PLAY FILM",
			className: "group relative w-full aspect-video brand-border bg-charcoal overflow-hidden ease-revo transition-transform duration-700 hover:-translate-y-1",
			onMouseEnter: () => setHover(true),
			onMouseLeave: () => setHover(false),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 ease-revo transition-all duration-700",
					style: {
						background: item.thumb,
						filter: hover ? "saturate(1.1) brightness(1)" : "saturate(0.2) brightness(0.75)",
						transform: hover ? "scale(1.04)" : "scale(1)"
					}
				}),
				hover && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FauxClip, { seed: idx + 99 }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 p-5 md:p-8 flex flex-col justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between font-mono text-[10px] tracking-[0.25em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "px-2 py-1 bg-black/70",
							style: { color: "var(--neon)" },
							children: ["ID // ", item.id]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2 py-1 bg-black/70 text-white/70",
							children: item.tag
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `font-display font-bold leading-[1.05] mb-4 ${large ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"}`,
						children: item.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-6 gap-y-1 font-mono text-[10px] md:text-[11px] tracking-wider text-white/70 uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["RUNTIME · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: item.duration
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["AVD · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: item.avd
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["CTR · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--neon)" },
								children: item.ctr
							})] })
						]
					})] })]
				})
			]
		})
	});
}
function Index() {
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.add("dark");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorReticle, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative min-h-screen w-full overflow-hidden grid-lines",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-6 md:inset-10 border border-white/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:block absolute top-10 left-10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40",
							children: "N 40.7128° · W 74.0060°"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex absolute top-10 right-10 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-1.5 w-1.5 rounded-full pulse-dot",
								style: { background: "var(--neon)" }
							}), "REC · LIVE STUDIO"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 grid md:grid-cols-2 min-h-screen items-center px-6 md:px-16 pt-32 pb-16 gap-12",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] w-full max-w-md mx-auto md:mx-0 brand-border overflow-hidden animate-ignite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: revo_portrait_default,
										alt: "REVO portrait — video editor and videographer",
										width: 1024,
										height: 1280,
										className: "absolute inset-0 h-full w-full object-cover",
										style: { filter: "contrast(1.15) saturate(0.8)" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0",
										style: {
											background: "linear-gradient(160deg, rgba(255,0,51,0.18) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)",
											mixBlendMode: "multiply"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.25em] uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--neon)" },
											children: "SUBJECT · REVO"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline text-white/60",
											children: "ISO 800 · F1.4"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-hidden mask-up",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-6",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { color: "var(--neon)" },
												children: "00 //"
											}), " Identity Frame"]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "neon-text whitespace-nowrap font-black leading-[0.85] text-[clamp(2.5rem,12.5vw,4.75rem)] sm:text-[clamp(4.75rem,12.5vw,8rem)] md:text-[clamp(4rem,8vw,9rem)] lg:text-[clamp(5.75rem,8.5vw,12rem)] xl:text-[clamp(7rem,9vw,12.25rem)]",
										children: "REVO"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 max-w-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display text-lg sm:text-xl md:text-2xl font-bold leading-tight text-white",
											children: [
												"Crafting High-Retention Visuals.",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													style: { color: "var(--neon)" },
													children: "Engineered"
												}),
												" for Algorithmic Growth."
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-4 font-mono text-[11px] sm:text-xs tracking-wider text-white/60 leading-relaxed uppercase",
											children: "Video editor · Videographer · Social media marketer. Reels, YouTube, brand films — built to perform, not just to play."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#book",
											"data-reticle": "BOOK CALL",
											className: "inline-flex w-full sm:w-auto justify-center font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-3 ease-revo transition-all whitespace-nowrap",
											style: {
												background: "var(--neon)",
												color: "#fff",
												boxShadow: "0 0 24px rgba(255,0,51,0.5)"
											},
											children: "▸ Command the Feed"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#shorts",
											"data-reticle": "VIEW WORK",
											className: "inline-flex w-full sm:w-auto justify-center font-mono text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.25em] uppercase px-4 sm:px-5 py-3 brand-border ease-revo transition-all hover:bg-white/5 whitespace-nowrap",
											children: "Browse Archive"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-md font-mono text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xl sm:text-2xl font-display font-bold",
												style: { color: "var(--neon)" },
												children: "180M+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/50 mt-1",
												children: "Organic Views"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xl sm:text-2xl font-display font-bold",
												style: { color: "var(--neon)" },
												children: "87%"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/50 mt-1",
												children: "Avg Retention"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xl sm:text-2xl font-display font-bold",
												style: { color: "var(--neon)" },
												children: "240+"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-white/50 mt-1",
												children: "Shipped Cuts"
											})] })
										]
									})
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "shorts",
					className: "relative scroll-mt-28 px-6 md:px-16 py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealOnScroll, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						idx: "01",
						label: "Shorts & Reels Archive"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[1fr_auto] items-end gap-6 mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display font-black text-5xl md:text-7xl leading-[0.9]",
							children: [
								"Vertical cuts",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"built to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-text-soft",
									children: "retain."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs uppercase tracking-wider text-white/60 max-w-xs",
							children: "Six content systems. One operating principle: stop the scroll inside three frames or it never existed."
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6",
						children: SHORT_CATS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShortCard, {
							item,
							idx: i
						}, item.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "longform",
					className: "relative scroll-mt-28 px-6 md:px-16 py-32 border-t border-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealOnScroll, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						idx: "02",
						label: "Long-Form YouTube Showcase"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display font-black text-5xl md:text-7xl leading-[0.9] mb-16 max-w-4xl",
						children: [
							"Widescreen films. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "neon-text-soft",
								children: "Cinema"
							}),
							" meets click-through."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-3 md:auto-rows-fr gap-4 md:gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LongCard, {
								item: LONGFORM[0],
								idx: 0,
								large: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LongCard, {
								item: LONGFORM[1],
								idx: 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LongCard, {
								item: LONGFORM[2],
								idx: 2
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "proof",
					className: "relative scroll-mt-28 py-32 border-t border-white/5 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-6 md:px-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealOnScroll, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							idx: "03",
							label: "Validation Layout"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display font-black text-5xl md:text-7xl leading-[0.9] mb-16 max-w-4xl",
							children: [
								"Operators who ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "neon-text-soft",
									children: "ship"
								}),
								". Receipts attached."
							]
						})] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-6 animate-marquee w-max",
							children: [...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "w-[380px] md:w-[460px] shrink-0 p-8 brand-border bg-charcoal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-[10px] tracking-[0.3em] uppercase mb-4",
										style: { color: "var(--neon)" },
										children: ["▸ Client Brief // ", String(i + 1).padStart(2, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-xl md:text-2xl font-bold leading-tight text-white",
										children: [
											"\"",
											t.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] tracking-wider uppercase",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white",
											children: t.who
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/50",
											children: t.role
										})]
									})
								]
							}, i))
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "book",
					className: "relative scroll-mt-28 px-6 md:px-16 py-32 border-t border-white/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[1.1fr_1fr] gap-12 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RevealOnScroll, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
								idx: "04",
								label: "High-Converting Finale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display font-black text-5xl md:text-8xl leading-[0.85] mb-8",
								children: [
									"Let's ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "neon-text-soft",
										children: "command"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"the feed."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm uppercase tracking-wider text-white/60 max-w-md leading-relaxed mb-10",
								children: "30-minute strategy call. Walk out with a content cadence, a retention model, and a delivery timeline. No deck. No fluff."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 font-mono text-xs uppercase tracking-wider text-white/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--neon)" },
											children: "▸"
										}), " Audit of your current top + bottom 3 posts"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--neon)" },
											children: "▸"
										}), " Hook framework calibrated to your niche"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--neon)" },
											children: "▸"
										}), " 30-day deliverable plan with clear KPIs"]
									})
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevealOnScroll, {
							delay: 200,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "brand-border bg-charcoal p-6 md:p-8 relative scanline overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: "var(--neon)" },
											children: "▸ BOOKING TERMINAL"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white/40",
											children: "v4.2 · SECURE"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl font-bold mb-1",
										children: "Strategy Call · 30 min"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-xs text-white/60 mb-6",
										children: "Zoom · Free · Confirmation by email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-7 gap-1 mb-6",
										children: [[
											"M",
											"T",
											"W",
											"T",
											"F",
											"S",
											"S"
										].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] text-white/40 text-center pb-2",
											children: d
										}, i)), Array.from({ length: 28 }).map((_, i) => {
											const active = [
												3,
												7,
												10,
												14,
												17,
												21,
												24
											].includes(i);
											const today = i === 10;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												"data-reticle": active ? "SELECT" : void 0,
												disabled: !active,
												className: `aspect-square font-mono text-xs ease-revo transition-all ${active ? "hover:bg-white hover:text-black border border-white/20" : "text-white/20"} ${today ? "" : ""}`,
												style: today ? {
													background: "var(--neon)",
													color: "#fff"
												} : void 0,
												children: i + 1
											}, i);
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 mb-2",
											children: "Available · Thu"
										}), [
											"09:30",
											"11:00",
											"14:30",
											"16:00"
										].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											"data-reticle": "CONFIRM",
											className: "w-full text-left font-mono text-sm px-4 py-3 brand-border ease-revo transition-all hover:bg-white hover:text-black",
											children: [
												t,
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-white/40",
													children: "EST"
												})
											]
										}, t))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://calendly.com",
										target: "_blank",
										rel: "noreferrer",
										"data-reticle": "LOCK IN",
										className: "block w-full text-center font-mono text-[11px] tracking-[0.25em] uppercase px-5 py-4 ease-revo transition-all",
										style: {
											background: "var(--neon)",
											color: "#fff",
											boxShadow: "0 0 32px rgba(255,0,51,0.45)"
										},
										children: "▸ Confirm Booking"
									})
								]
							})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "px-6 md:px-16 py-12 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-sm font-bold text-white",
							children: ["REVO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: { color: "var(--neon)" },
								children: "."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" · ALL RIGHTS RESERVED"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white transition-colors",
									children: "Instagram"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white transition-colors",
									children: "YouTube"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white transition-colors",
									children: "TikTok"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#",
									className: "hover:text-white transition-colors",
									children: "Email"
								})
							]
						})
					]
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
