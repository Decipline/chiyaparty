import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/Screenshot_2026-06-30_065832.asset.json";
import entrance from "@/assets/Screenshot_2026-06-30_065537.asset.json";
import day from "@/assets/Screenshot_2026-06-30_065810.asset.json";
import evening1 from "@/assets/Screenshot_2026-06-30_065743.asset.json";
import evening2 from "@/assets/Screenshot_2026-06-30_065705.asset.json";
import thatch from "@/assets/Screenshot_2026-06-30_065644.asset.json";
import night1 from "@/assets/Screenshot_2026-06-30_065624.asset.json";
import counter from "@/assets/Screenshot_2026-06-30_065601.asset.json";
import menuImg from "@/assets/Screenshot_2026-06-30_065420.asset.json";
import menuChiyaSaathi from "@/assets/menu-chiya-saathi.jpg";
import menuSnacks from "@/assets/menu-snacks.jpg";
import menuDessert from "@/assets/menu-dessert.jpg";
import { useState } from "react";

const menuImages: Record<string, string> = {
  "Chiya Saathi": menuChiyaSaathi,
  "Snacks": menuSnacks,
  "Dessert": menuDessert,
};

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }
}

function MenuFlipCard({ cat, items, image }: { cat: string; items: [string, string][]; image: string }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="perspective-1200 h-[560px] cursor-pointer group"
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-out ${flipped ? "rotate-y-180" : ""}`}>
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden rounded-3xl bg-card p-7 shadow-warm border border-border overflow-hidden">
          <div className="absolute top-3 right-4 text-[10px] uppercase tracking-widest text-muted-foreground opacity-70">tap to flip</div>
          <h3 className="font-display text-3xl text-primary italic mb-5 underline decoration-secondary decoration-4 underline-offset-4">{cat}</h3>
          <ul className="divide-y divide-border">
            {items.map(([name, price]) => (
              <li key={name} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="font-medium">{name}</span>
                <span className="font-display font-bold text-tea tabular-nums whitespace-nowrap">{price}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-warm border border-border">
          <img src={image} alt={`${cat} spread`} loading="lazy" width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white">
            <p className="font-script text-2xl text-secondary">served hot</p>
            <h3 className="font-display text-4xl italic">{cat}</h3>
            <p className="mt-2 text-white/85 text-sm">Fresh from our garden kitchen — tap to flip back.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiya Party — कप सँग गफ | Lalitpur Garden Cafe" },
      { name: "description", content: "Hot chiya, smoking momos, fairy lights & bamboo huts. Chiya Party — Lalitpur's coziest tea garden. कप सँग गफ!" },
      { property: "og:title", content: "Chiya Party — कप सँग गफ" },
      { property: "og:description", content: "Lalitpur's coziest chiya & momo garden — fairy lights, bamboo huts, marigolds, and good company." },
      { property: "og:image", content: evening1.url },
      { property: "twitter:image", content: evening1.url },
    ],
  }),
  component: Index,
});

const INSTAGRAM = "https://www.instagram.com/chiya_party?igsh=ZXo3d2ZtZ2c4bmxx";
const FACEBOOK = "https://www.facebook.com/share/1GvxLofNC2/?mibextid=wwXIfr";

const menu = {
  "Chiya Saathi": [
    ["Pakoda (Veg / Onion / Paneer)", "100 / 120 / 210"],
    ["French Fries", "140"],
    ["Samosa (per plate)", "70"],
    ["Bhatmas Chiura", "120"],
    ["Aaloo Chop (4 pcs)", "100"],
    ["Peanuts Sadheko", "150"],
    ["Wai Wai Sadheko", "120"],
    ["Bhatmas Sadheko", "100"],
    ["Doughnut", "30"],
  ],
  "Snacks": [
    ["Sandwich (Veg / Chicken)", "120 / 160"],
    ["Wai Wai Soup (Plain / Egg)", "120 / 140"],
    ["Thukpa (Veg / Egg / Chicken)", "120 / 160 / 180"],
    ["Keema Noodles (Chicken)", "180"],
    ["Laphing (Dry / Jhol)", "90 / 100"],
    ["Paneer Momo (Steam/Fry/Jhol/Chilly)", "170 / 190 / 210 / 230"],
    ["Chicken Momo (Steam/Fry/Jhol/Chilly)", "170 / 190 / 210 / 230"],
    ["Chowmein (Veg / Paneer / Chicken)", "120 / 180 / 180"],
    ["Chicken Sausage (per pc)", "50"],
    ["Chicken Chilly (Bone / Boneless)", "240 / 260"],
    ["Chicken Lollipop (6 pcs)", "340"],
    ["Chicken Choila", "250"],
    ["Chicken Roast", "200"],
    ["Chicken Leg (per pc / Full 4 pcs)", "140 / 540"],
    ["Chicken Buffalo Wings (Half / Full)", "250 / 480"],
    ["Mushroom Choila", "150"],
    ["Boiled Egg", "40"],
    ["Omelet (Plain / Masala)", "80 / 120"],
  ],
  "Dessert": [
    ["Ice Cream (Single / Double Scoop)", "70 / 120"],
    ["Matka Kulfi", "120"],
  ],
};

function IgIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function FbIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13 22v-8h3l1-4h-4V7.5C13 6.4 13.3 5.7 15 5.7h2V2.2C16.5 2.1 15.4 2 14.2 2 11.6 2 10 3.6 10 6.6V10H7v4h3v8h3z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Chiya Party logo" className="h-12 w-12 rounded-full bg-white/90 p-1 shadow-warm" />
            <div className="hidden sm:block brand-highlight brand-breathe cursor-pointer">
              <div className="font-display font-bold text-lg leading-none text-white brand-glow">Chiya Party</div>
              <div className="font-script text-secondary text-sm leading-tight brand-glow">कप सँग गफ</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1 rounded-full px-6 py-2.5 nav-glass backdrop-blur-xl">
            {[
              { href: "#story", label: "Our Story" },
              { href: "#gallery", label: "Gallery" },
              { href: "#menu", label: "Menu" },
              { href: "#visit", label: "Visit" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative group px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white/90 transition-all duration-300 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 nav-glow-line transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
               className="grid place-items-center h-10 w-10 rounded-full bg-warm text-white shadow-warm hover:scale-110 transition">
              <IgIcon />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
               className="grid place-items-center h-10 w-10 rounded-full bg-tea text-white shadow-warm hover:scale-110 transition">
              <FbIcon />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <img src={evening1.url} alt="Chiya Party bamboo garden at dusk with fairy lights" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
        </div>

        {/* String lights */}
        <div className="absolute top-20 left-0 right-0 flex justify-around px-6 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="block h-3 w-3 rounded-full bg-secondary shadow-glow animate-bulb" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 grid md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-8 text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] mb-6 border border-white/20">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" /> Open daily · Lalitpur
            </div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95]">
              Sip slow.<br />
              <span className="text-secondary italic">Gossip</span> louder.
            </h1>
            <p className="font-script text-3xl sm:text-5xl text-secondary mt-4">कप सँग गफ</p>
            <p className="mt-6 max-w-xl text-lg text-white/90">
              A bamboo-and-thatch chiya garden where marigolds glow, fairy lights twinkle, and every cup
              comes with a story. Momos, thukpa, sadheko & the warmest chiya in town.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="px-6 py-3 rounded-full bg-warm text-white font-semibold shadow-warm hover:scale-105 transition">
                See the Menu
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer"
                 className="px-6 py-3 rounded-full bg-white/95 text-tea font-semibold inline-flex items-center gap-2 hover:bg-white transition">
                <IgIcon className="h-4 w-4" /> @chiya_party
              </a>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-6 bg-secondary/30 blur-3xl rounded-full" />
              <img src={logo.url} alt="" className="relative rounded-full bg-white p-4 shadow-warm" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-warm text-white py-4 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap font-script text-2xl animate-[scroll_30s_linear_infinite]">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-12 shrink-0">
              <span>🍵 Hot Chiya</span><span>·</span>
              <span>🥟 Steamy Momos</span><span>·</span>
              <span>✨ Fairy Lights</span><span>·</span>
              <span>🌼 Marigold Vibes</span><span>·</span>
              <span>🎸 Live Gossip</span><span>·</span>
              <span>कप सँग गफ</span><span>·</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
      </div>

      {/* STORY */}
      <section id="story" className="py-24 px-5">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={thatch.url} alt="Thatched roof with lanterns and string lights" className="rounded-3xl shadow-warm w-full aspect-[4/5] object-cover" />
            <img src={counter.url} alt="Chiya counter at night" className="hidden sm:block absolute -bottom-10 -right-8 w-1/2 rounded-3xl shadow-warm border-4 border-background object-cover aspect-square" />
          </div>
          <div>
            <p className="font-script text-3xl text-primary">est. in good company</p>
            <h2 className="text-4xl md:text-5xl font-bold mt-2">More than a cup —<br />it's a <span className="text-primary">party</span>.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tucked behind a yellow gate and a curtain of thatch, Chiya Party is where Lalitpur comes
              to slow down. Bamboo benches, marigold pots, hanging lanterns, a guitar in the corner —
              and chiya brewed strong enough to fuel any gossip session.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[["🌿","Garden Seating"],["🪔","Lantern Lit"],["🎶","Acoustic Nights"]].map(([e,t]) => (
                <div key={t} className="rounded-2xl bg-muted p-5 hover:bg-secondary/30 transition">
                  <div className="text-3xl">{e}</div>
                  <div className="text-sm font-semibold mt-2">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-16 px-5 overflow-hidden bg-warm">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={evening2.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40" />
        <div className="relative mx-auto max-w-5xl text-center text-white">
          <p className="font-script text-3xl sm:text-4xl text-secondary">catch the glow before the cup cools</p>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 leading-tight">
            Watch the garden come alive.<br className="hidden sm:block" /> Scroll the vibes.
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Fairy lights, bamboo huts, marigold corners, and the steam rising off every cup —
            see why Lalitpur can't stop talking about Chiya Party.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#gallery" onClick={(e) => scrollToId(e, "gallery")}
               className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-lg shadow-warm hover:scale-105 transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              View the Photos
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white text-tea font-bold text-lg hover:scale-105 transition">
              <IgIcon className="h-5 w-5" /> Watch on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-5 bg-sunset">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-accent">a peek inside</p>
            <h2 className="text-4xl md:text-5xl font-bold">The Vibe, Captured</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {[
              { src: evening1.url, alt: "Bamboo seating at dusk under string lights", cls: "col-span-2 row-span-2" },
              { src: thatch.url, alt: "Thatched roof with hanging kerosene lantern", cls: "" },
              { src: night1.url, alt: "Guests gathered at night with guitar", cls: "col-span-2" },
              { src: counter.url, alt: "Chiya counter glowing red at evening", cls: "" },
              { src: evening2.url, alt: "Wrapped tree lights and bamboo fence", cls: "col-span-2" },
              { src: day.url, alt: "Marigold pots and bamboo garden in daylight", cls: "" },
              { src: entrance.url, alt: "Yellow gate entrance with Chiya Party banner", cls: "" },
            ].map((img) => (
              <figure key={img.src} className={`group relative overflow-hidden rounded-2xl shadow-warm ${img.cls}`}>
                <img src={img.src} alt={img.alt} loading="lazy"
                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </figure>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warm text-white font-semibold shadow-warm hover:scale-105 transition">
              <IgIcon /> See more on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="py-24 px-5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-script text-3xl text-primary">what's brewing</p>
            <h2 className="text-4xl md:text-5xl font-bold">The Menu</h2>
            <p className="mt-3 text-muted-foreground">All prices in NPR · Served fresh, all day</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(menu).map(([cat, items]) => (
              <MenuFlipCard key={cat} cat={cat} items={items as [string, string][]} image={menuImages[cat]} />
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Hover or tap any card to see the dish.</p>
          <div className="mt-10 text-center">
            <a href={menuImg.url} target="_blank" rel="noreferrer"
               className="text-sm font-medium text-primary hover:underline">View original menu card →</a>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative py-24 px-5 bg-tea text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={night1.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-script text-3xl text-secondary">come on by</p>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">Find Your Seat at the Garden</h2>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Pull up a bamboo stool, order a chiya, and stay a while. Best enjoyed at dusk when the
            lanterns flicker on.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/15">
              <div className="text-secondary text-xs uppercase tracking-widest">Hours</div>
              <div className="mt-2 font-display text-xl">Daily · 8am – 10pm</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/15">
              <div className="text-secondary text-xs uppercase tracking-widest">Where</div>
              <div className="mt-2 font-display text-xl">Lalitpur, Nepal</div>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur p-6 border border-white/15">
              <div className="text-secondary text-xs uppercase tracking-widest">Follow</div>
              <div className="mt-2 flex gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-secondary">
                  <IgIcon /> @chiya_party
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-3xl overflow-hidden border border-white/15 shadow-warm">
            <iframe
              title="Chiya Party location map"
              src="https://maps.google.com/maps?q=M8Q3%2B2W6%2C%20Lalitpur%2044600%2C%20Nepal&t=&z=17&ie=UTF8&iwloc=&output=embed"
              className="w-full h-72 sm:h-96 border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="https://www.google.com/maps/dir/?api=1&destination=M8Q3%2B2W6%2C%20Lalitpur%2044600%2C%20Nepal"
               target="_blank" rel="noreferrer"
               className="px-7 py-3 rounded-full bg-warm font-semibold shadow-warm hover:scale-105 transition inline-flex items-center gap-2">
              🗺️ Get Directions
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="px-7 py-3 rounded-full bg-white text-tea font-semibold hover:scale-105 transition inline-flex items-center gap-2">
              <IgIcon /> Instagram
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer"
               className="px-7 py-3 rounded-full bg-white text-tea font-semibold hover:scale-105 transition inline-flex items-center gap-2">
              <FbIcon /> Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-5 bg-background text-center text-sm text-muted-foreground space-y-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <img src={logo.url} alt="" className="h-10 w-10 rounded-full bg-white p-1 mb-2" />
          <div className="font-display font-bold text-tea text-lg">Chiya Party</div>
          <div className="font-script text-secondary text-lg">कप सँग गफ</div>
        </div>
        <div className="pt-2">
          © 2026 Chiya Party · Made with chiya & love in Lalitpur
        </div>
      </footer>
    </div>
  );
}
