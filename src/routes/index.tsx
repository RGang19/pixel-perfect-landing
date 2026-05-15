import { createFileRoute } from "@tanstack/react-router";
import heroDoge from "@/assets/hero-doge.jpg";
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
    <section className="relative">
      <div className="hero-glow" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-24 pt-4 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-4">
        <div className="relative">
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
          <p className="font-pixel-body mt-4 max-w-md text-2xl text-foreground/85">
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
              className="btn-pixel inline-flex items-center gap-2 rounded-sm border border-foreground/20 bg-card px-6 py-5 font-pixel-display text-xs text-foreground"
            >
              WATCH TRAILER <Youtube size={16} className="text-destructive" />
            </a>
          </div>
          <div className="mt-8 inline-flex items-center gap-2 font-pixel-display text-[10px] text-foreground/70">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground shadow-[2px_2px_0_oklch(0.13_0.04_255)]">
              🐕
            </span>
            BUILT FOR DOGEOS
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,oklch(0.7_0.2_220/0.45),transparent_65%)] blur-2xl" />
          <div className="scanlines relative overflow-hidden rounded-lg">
            <img
              src={heroDoge}
              alt="Doge with sunglasses on a boat firing cannons at enemies under a glowing moon"
              width={1280}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-sm border-2 border-foreground/30 bg-[oklch(0.13_0.04_255)] px-3 py-2 shadow-[3px_3px_0_oklch(0.85_0.18_85)]">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary font-pixel-display text-[10px] text-primary-foreground">
                Ð
              </span>
              <div className="leading-none">
                <div className="font-pixel-display text-[7px] text-foreground/60">
                  COMING TO
                </div>
                <div className="font-pixel-display text-xs text-foreground">
                  DogeOS
                </div>
              </div>
            </div>
            <div className="floaty absolute -left-4 top-1/3 grid h-14 w-14 place-items-center rounded-full border-2 border-foreground/30 bg-primary font-pixel-display text-xl text-primary-foreground shadow-[4px_4px_0_oklch(0.13_0.04_255)]">
              Ð
            </div>
            <div className="floaty absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border-2 border-foreground/30 bg-primary font-pixel-display text-sm text-primary-foreground shadow-[3px_3px_0_oklch(0.13_0.04_255)]" style={{ animationDelay: "1.2s" }}>
              Ð
            </div>
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

function Index() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Teaser />
      <Features />
      <Roadmap />
      <Footer />
    </div>
  );
}
