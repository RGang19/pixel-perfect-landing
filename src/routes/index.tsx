import { createFileRoute } from "@tanstack/react-router";
import heroDoge from "@/assets/hero-doge.png";
import teaser from "@/assets/teaser.jpg";
import cardFast from "@/assets/card-fast.jpg";
import cardEnemies from "@/assets/card-enemies.jpg";
import cardCoins from "@/assets/card-coins.jpg";
import cardDogeos from "@/assets/card-dogeos.jpg";
import ctaDoge from "@/assets/cta-doge.jpg";
import aiCompanion from "@/assets/ai-companion.jpg";
import roboD from "@/assets/robo-d.png";
import {
  Play,
  Youtube,
  Zap,
  ArrowRight,
  MessageCircle,
  Twitter,
  Send,
  Check,
  Trophy,
  Globe,
  Users,
  Rocket,
  Flame,
  Shield,
  Wrench,
  Sparkles,
  Crosshair,
  Plus,
  Magnet,
  Heart,
} from "lucide-react";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DOGE ESCAPE — Break Free. Secure the Doge." },
      {
        name: "description",
        content:
          "A wild pixel arcade adventure on DogeOS. Survive the waves, defeat enemies, collect coins and escape!",
      },
      { property: "og:title", content: "DOGE ESCAPE — Pixel Arcade on DogeOS" },
      {
        property: "og:description",
        content: "Break free. Secure the Doge. Play the pixel arcade adventure.",
      },
    ],
  }),
  component: Index,
});

const navItems = ["HOME", "GAMEPLAY", "FEATURES", "ROADMAP", "ABOUT", "FAQ"];

function Nav() {
  return (
    <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
      <a href="#" className="flex flex-col leading-none">
        <span className="font-pixel-display text-2xl text-primary drop-shadow-[3px_3px_0_oklch(0.13_0.04_255)]">
          DOGE
        </span>
        <span className="font-pixel-display text-[10px] tracking-[0.3em] text-foreground">
          ESCAPE
        </span>
      </a>
      <nav className="hidden items-center gap-7 lg:flex">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-pixel-display text-[10px] tracking-widest text-foreground/80 transition-colors hover:text-primary"
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <a
          aria-label="Discord"
          href="#"
          className="grid h-9 w-9 place-items-center rounded-sm border border-border bg-card text-foreground/80 hover:text-primary"
        >
          <MessageCircle size={16} />
        </a>
        <a
          aria-label="Twitter"
          href="#"
          className="grid h-9 w-9 place-items-center rounded-sm border border-border bg-card text-foreground/80 hover:text-primary"
        >
          <Twitter size={16} />
        </a>
        <a
          href="#"
          className="btn-pixel hidden items-center gap-2 rounded-sm bg-primary px-4 py-3 text-[10px] text-primary-foreground sm:inline-flex"
        >
          JOIN COMMUNITY <MessageCircle size={14} />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDoge})` }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/40" aria-hidden />
      <div className="hero-glow" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-16 lg:pt-24 min-h-[80vh] flex items-center">
        <div className="relative max-w-2xl">
          <h1 className="font-doge-title text-7xl leading-[0.95] sm:text-8xl md:text-[7.5rem]">
            DOG<span className="relative">E
              <span className="absolute -top-3 -right-2 text-2xl">🐾</span>
            </span>
          </h1>
          <h2 className="mt-4 font-doge-escape text-5xl leading-none sm:text-6xl md:text-7xl">
            ESCAPE
          </h2>
          <p className="mt-8 font-pixel-display text-sm text-primary drop-shadow-[2px_2px_0_oklch(0.13_0.04_255)] sm:text-base">
            BREAK FREE. SECURE THE DOGE.
          </p>
          <p className="font-pixel-body mt-4 max-w-md text-2xl text-foreground/85 drop-shadow-[2px_2px_0_oklch(0.13_0.04_255)]">
            A wild arcade adventure on DogeOS. Survive the waves, defeat enemies,
            collect coins and escape!
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="btn-pixel pulse-ring inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 text-primary-foreground"
            >
              <Play size={18} fill="currentColor" />
              <span className="flex flex-col items-start leading-none">
                <span className="font-pixel-display text-sm">PLAY NOW</span>
                <span className="font-pixel-display mt-1 text-[8px] opacity-70">
                  ▶ IN BROWSER
                </span>
              </span>
            </a>
            <a
              href="#"
              className="btn-pixel inline-flex items-center gap-2 rounded-sm border border-foreground/20 bg-card/80 backdrop-blur px-6 py-5 font-pixel-display text-xs text-foreground"
            >
              WATCH TRAILER <Youtube size={16} className="text-destructive" />
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 font-pixel-display text-[10px] text-foreground/80">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-[2px_2px_0_oklch(0.13_0.04_255)]">
              🐕
            </span>
            BUILT FOR DOGEOS
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "BUILT ON DOGEOS",
    "POWERED BY 0G LABS",
    "BUILT ON DOGEOS",
    "POWERED BY 0G LABS",
    "BUILT ON DOGEOS",
    "POWERED BY 0G LABS",
  ];
  return (
    <div className="relative overflow-hidden border-y-2 border-primary/30 bg-[oklch(0.1_0.04_255)] py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <div
            key={i}
            className="flex items-center gap-10 font-pixel-display text-xs text-foreground/90"
          >
            <span>{it}</span>
            <Zap size={16} className="text-primary" fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Teaser() {
  return (
    <section id="gameplay" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="pixel-border scanlines group relative overflow-hidden rounded-md">
          <img
            src={teaser}
            alt="Doge Escape gameplay teaser"
            width={1024}
            height={768}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <button
            aria-label="Play teaser"
            className="absolute inset-0 grid place-items-center"
          >
            <span className="grid h-20 w-20 place-items-center rounded-full border-4 border-primary-foreground bg-primary text-primary-foreground shadow-[5px_5px_0_oklch(0.13_0.04_255)] transition-transform group-hover:scale-105">
              <Play size={28} fill="currentColor" />
            </span>
          </button>
        </div>
        <div>
          <p className="font-pixel-display text-xs tracking-widest text-primary">
            OFFICIAL TEASER
          </p>
          <h2 className="mt-4 font-pixel-display text-2xl text-foreground sm:text-3xl">
            CAN YOU ESCAPE...
            <br />
            <span className="text-primary">AND SECURE THE DOGE?</span>
          </h2>
          <p className="font-pixel-body mt-5 max-w-md text-xl text-foreground/80">
            Enemies everywhere. Coins calling.
            <br />
            Only one mission — escape & secure the Doge!
          </p>
          <a
            href="#"
            className="btn-pixel mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-6 py-4 font-pixel-display text-xs text-primary-foreground"
          >
            WATCH NOW <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    img: cardFast,
    title: "FAST & ADDICTIVE",
    body: "Quick runs, non-stop action. Perfect for short sessions.",
  },
  {
    img: cardEnemies,
    title: "EPIC ENEMIES",
    body: "Face crazy foes and chaotic bosses.",
  },
  {
    img: cardCoins,
    title: "COLLECT & UPGRADE",
    body: "Stack coins, upgrade weapons, and become unstoppable.",
  },
  {
    img: cardDogeos,
    title: "BUILT FOR DOGEOS",
    body: "Native. Fast. Fun. Made for the Doge community.",
  },
];

function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="font-pixel-display text-[11px] tracking-widest text-foreground/60">
          WHY YOU'LL LOVE
        </p>
        <h2 className="mt-3 font-pixel-display text-3xl text-primary sm:text-4xl">
          DOGE ESCAPE
        </h2>
        <div className="mt-3 h-1 w-32 bg-primary" />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <article
            key={f.title}
            className="pixel-card overflow-hidden rounded-sm p-3 transition-transform hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-sm border-2 border-primary/30">
              <img
                src={f.img}
                alt={f.title}
                width={512}
                height={512}
                loading="lazy"
                className="h-44 w-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-center font-pixel-display text-xs text-primary">
              {f.title}
            </h3>
            <p className="font-pixel-body mt-3 text-center text-lg text-foreground/75">
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const roadmap = [
  { q: "Q2 2025", title: "LAUNCH ON DOGEOS", icon: Rocket, done: true },
  { q: "Q3 2025", title: "LEADERBOARDS & SEASONS", icon: Trophy, done: false },
  { q: "Q4 2025", title: "NEW WORLDS & BOSSES", icon: Globe, done: false },
  { q: "2026", title: "MULTIPLAYER & TOURNAMENTS", icon: Users, done: false },
];

function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-pixel-display text-3xl text-primary sm:text-4xl">
            ROADMAP
          </h2>
          <div className="mt-3 h-1 w-24 bg-primary" />
          <ul className="mt-8 space-y-2">
            {roadmap.map(({ q, title, icon: Icon, done }) => (
              <li
                key={q}
                className="flex items-center gap-4 rounded-sm border-2 border-border bg-card/60 px-4 py-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-sm bg-primary/15 text-primary">
                  <Icon size={16} />
                </span>
                <span className="font-pixel-display text-[10px] text-primary">
                  {q}
                </span>
                <span className="font-pixel-display flex-1 text-[10px] text-foreground">
                  {title}
                </span>
                {done && <Check size={18} className="text-primary" />}
              </li>
            ))}
          </ul>
        </div>

        <div className="pixel-border relative overflow-hidden rounded-md">
          <img
            src={ctaDoge}
            alt="Doge raising fist victory"
            width={768}
            height={512}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.04_255_/_0.85)] via-[oklch(0.12_0.04_255_/_0.55)] to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-10">
            <h3 className="font-pixel-display text-base text-foreground sm:text-xl">
              THIS ISN'T JUST A GAME.
            </h3>
            <h3 className="mt-2 font-pixel-display text-base text-primary sm:text-xl">
              IT'S A MOVEMENT.
            </h3>
            <h3 className="mt-2 font-pixel-display text-base text-foreground sm:text-xl">
              JOIN THE DOGE ARMY!
            </h3>
            <a
              href="#"
              className="btn-pixel mt-6 inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-3 font-pixel-display text-[11px] text-primary-foreground"
            >
              JOIN COMMUNITY <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-border/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-4">
        <div>
          <p className="font-pixel-display text-[10px] tracking-widest text-foreground/60">
            BUILT BY
          </p>
          <p className="mt-3 font-pixel-display text-2xl text-foreground">
            KULT<span className="text-primary"> </span>
            <span className="text-xs">GAMES</span>
          </p>
        </div>
        <div>
          <p className="font-pixel-display text-[10px] tracking-widest text-foreground/60">
            POWERED BY
          </p>
          <p className="mt-3 font-pixel-display text-lg text-foreground">
            <span className="text-primary">0G</span> LABS
          </p>
        </div>
        <div>
          <p className="font-pixel-display text-[10px] tracking-widest text-foreground/60">
            BUILT ON
          </p>
          <p className="mt-3 font-pixel-display text-lg text-foreground">
            <span className="text-primary">Ð</span> DogeOS
          </p>
        </div>
        <div>
          <p className="font-pixel-display text-[10px] tracking-widest text-foreground/60">
            FOLLOW US
          </p>
          <div className="mt-3 flex gap-3">
            {[MessageCircle, Twitter, Send].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-sm border-2 border-border bg-card text-foreground/80 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="pb-8 text-center font-pixel-display text-[9px] text-foreground/50">
        © 2025 KULT GAMES. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

const stats = [
  { label: "FIREPOWER", filled: 5, total: 6, icon: Flame, color: "oklch(0.7 0.22 45)" },
  { label: "DEFENSE", filled: 4, total: 6, icon: Shield, color: "oklch(0.7 0.18 230)" },
  { label: "UTILITY", filled: 4, total: 6, icon: Wrench, color: "oklch(0.72 0.2 145)" },
  { label: "LUCK", filled: 3, total: 6, icon: Sparkles, color: "oklch(0.85 0.18 85)" },
];

const abilities = [
  { name: "TARGET LOCK", desc: "Highlights threats and prioritizes enemies.", icon: Crosshair, color: "oklch(0.7 0.18 230)" },
  { name: "REPAIR DRONE", desc: "Restores hull HP over time during battle.", icon: Plus, color: "oklch(0.72 0.2 145)" },
  { name: "COIN MAGNET", desc: "Automatically collects coins nearby.", icon: Magnet, color: "oklch(0.65 0.22 310)" },
];

const evolution = ["BASIC", "LEARNER", "ASSISTANT", "VETERAN", "LEGENDARY"];

function AICompanion() {
  return (
    <section id="companion" className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-doge-title text-5xl sm:text-6xl md:text-7xl">AI COMPANION</h2>
        <p className="font-pixel-display mt-5 text-xs tracking-widest text-foreground/80 sm:text-sm">
          YOUR LOYAL CO-PILOT. ALWAYS BY YOUR SIDE. <span className="text-primary">🐾</span>
        </p>
      </div>

      <div className="pixel-card rounded-md p-4 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="scanlines relative overflow-hidden rounded-sm border-2 border-primary/40">
            <img
              src={aiCompanion}
              alt="Doge with AI companion robot in a boat"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-3 left-3 flex max-w-[78%] items-center gap-3 rounded-sm border-2 border-[oklch(0.7_0.18_230)] bg-[oklch(0.13_0.04_255_/_0.85)] px-3 py-2 shadow-[3px_3px_0_oklch(0.13_0.04_255)]">
              <img src={roboD} alt="Robo-D" width={40} height={40} className="h-10 w-10" />
              <p className="font-pixel-display text-[8px] leading-relaxed text-[oklch(0.78_0.13_220)]">
                "BARK DETECTED. THREATS NEUTRALIZED.<br />
                VICTORY PROBABILITY: 99.99% WOOF!"
              </p>
            </div>
          </div>

          <div className="rounded-sm border-2 border-primary/40 bg-[oklch(0.14_0.04_255)] p-5 shadow-[4px_4px_0_oklch(0.1_0.04_255)]">
            <div className="-mt-9 mb-4 flex justify-center">
              <div className="btn-pixel inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2 font-pixel-display text-[11px] text-primary-foreground">
                COMPANION: ROBO-D 🐾
              </div>
            </div>
            <p className="font-pixel-body text-lg leading-snug text-foreground/85">
              Robo-D is your AI copilot, optimized for survival. It analyzes, assists, and evolves with every run.
            </p>

            <div className="my-5 h-[2px] w-full bg-primary/30" />

            <ul className="space-y-3">
              {stats.map(({ label, filled, total, icon: Icon, color }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2" style={{ borderColor: color, color }}>
                    <Icon size={14} />
                  </span>
                  <span className="font-pixel-display flex-1 text-[10px] tracking-widest text-foreground">{label}</span>
                  <span className="flex gap-1">
                    {Array.from({ length: total }).map((_, i) => (
                      <span key={i} className="h-4 w-4 border-2" style={{ borderColor: color, background: i < filled ? color : "transparent" }} />
                    ))}
                  </span>
                </li>
              ))}
            </ul>

            <div className="my-5 h-[2px] w-full bg-primary/30" />

            <p className="text-center font-pixel-display text-[10px] tracking-widest text-primary">
              🐾 ACTIVE ABILITIES 🐾
            </p>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {abilities.map(({ name, desc, icon: Icon, color }) => (
                <div key={name} className="rounded-sm border-2 bg-[oklch(0.18_0.05_255)] p-3 text-center" style={{ borderColor: color }}>
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border-2" style={{ borderColor: color, color }}>
                    <Icon size={18} />
                  </span>
                  <p className="font-pixel-display mt-3 text-[8px]" style={{ color }}>{name}</p>
                  <p className="font-pixel-body mt-2 text-sm leading-tight text-foreground/70">{desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center font-pixel-display text-[9px] tracking-widest text-primary">
              EVOLVE TO UNLOCK STRONGER ABILITIES!
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-sm border-2 border-primary/40 bg-[oklch(0.14_0.04_255)] p-4">
            <p className="text-center font-pixel-display text-[10px] tracking-widest text-primary">EVOLUTION PROGRESSION</p>
            <div className="mt-4 flex items-end justify-between gap-2">
              {evolution.map((lvl, i) => (
                <div key={lvl} className="flex flex-1 items-end gap-2">
                  <div className="flex flex-1 flex-col items-center">
                    <div className="grid h-12 w-12 place-items-center rounded-sm border-2" style={{ borderColor: i === evolution.length - 1 ? "oklch(0.85 0.18 85)" : "oklch(0.7 0.18 230)", background: i === evolution.length - 1 ? "oklch(0.85 0.18 85 / 0.15)" : "oklch(0.18 0.05 255)" }}>
                      <img src={roboD} alt="" className="h-9 w-9" />
                    </div>
                    <p className="font-pixel-display mt-2 text-[8px] text-foreground/60">LV. {i + 1}</p>
                    <p className="font-pixel-display mt-1 text-[8px] text-foreground">{lvl}</p>
                  </div>
                  {i < evolution.length - 1 && <ArrowRight size={14} className="mb-8 text-primary" />}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-sm border-2 border-[oklch(0.65_0.22_310)] bg-[oklch(0.18_0.05_280_/_0.4)] p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-sm border-2 border-[oklch(0.65_0.22_310)] text-[oklch(0.75_0.22_310)]">
                <Heart size={20} fill="currentColor" />
              </span>
              <div className="flex-1">
                <p className="font-pixel-display text-[11px] tracking-widest text-[oklch(0.78_0.2_310)]">BOND BONUS</p>
                <p className="font-pixel-body mt-2 text-base leading-snug text-foreground/80">The stronger your bond, the stronger we become.</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-sm border border-[oklch(0.65_0.22_310)]">
                  <div className="h-full w-[87%] bg-[oklch(0.7_0.22_310)]" />
                </div>
                <p className="mt-1 text-right font-pixel-display text-[9px] text-[oklch(0.78_0.2_310)]">87%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Teaser />
      <Features />
      <AICompanion />
      <Roadmap />
      <Footer />
    </div>
  );
}
