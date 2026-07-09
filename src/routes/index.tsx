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
import { useEffect, useId, useRef, useState } from "react";

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  }
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

/* ---------- Menu data with descriptions & tags ---------- */
type MenuItem = { name: string; price: string; desc?: string; tag?: string };
type MenuCategory = {
  key: string;
  title: string;
  tagline: string;
  hero: string;
  featured: { name: string; price: string; blurb: string };
  items: MenuItem[];
};

const menu: MenuCategory[] = [
  {
    key: "chiya-saathi",
    title: "Chiya Saathi",
    tagline: "the perfect companions to your cup",
    hero: menuChiyaSaathi,
    featured: {
      name: "Pakoda Trio",
      price: "NPR 100 – 210",
      blurb: "Veg, onion, or paneer — golden, crisp, served hot with our house tomato achar. The classic sidekick to a strong chiya.",
    },
    items: [
      { name: "Pakoda", price: "100 / 120 / 210", desc: "Veg · Onion · Paneer", tag: "Signature" },
      { name: "French Fries", price: "140", desc: "Hand-cut, sea salt" },
      { name: "Samosa", price: "70", desc: "Per plate, warm masala potato" },
      { name: "Bhatmas Chiura", price: "120", desc: "Roasted soybeans + beaten rice" },
      { name: "Aaloo Chop", price: "100", desc: "4 pcs, spiced potato patty" },
      { name: "Peanuts Sadheko", price: "150", desc: "Zesty, chili-lime tossed", tag: "Spicy" },
      { name: "Wai Wai Sadheko", price: "120", desc: "The Nepali cult classic" },
      { name: "Bhatmas Sadheko", price: "100", desc: "Crunchy, tangy, addictive" },
      { name: "Doughnut", price: "30", desc: "Sweet finish for a chiya break" },
    ],
  },
  {
    key: "snacks",
    title: "Snacks & Mains",
    tagline: "steaming plates from the garden kitchen",
    hero: menuSnacks,
    featured: {
      name: "Chicken Momo",
      price: "NPR 170 – 230",
      blurb: "Hand-folded, steamed to order, then finished four ways — steam, fry, jhol, or fiery chilly. Lalitpur's favorite dumpling.",
    },
    items: [
      { name: "Sandwich", price: "120 / 160", desc: "Veg · Chicken", tag: "Quick bite" },
      { name: "Wai Wai Soup", price: "120 / 140", desc: "Plain · Egg" },
      { name: "Thukpa", price: "120 / 160 / 180", desc: "Veg · Egg · Chicken", tag: "Warming" },
      { name: "Keema Noodles", price: "180", desc: "Chicken minced, wok-tossed" },
      { name: "Laphing", price: "90 / 100", desc: "Dry · Jhol — cold spicy noodles", tag: "Spicy" },
      { name: "Paneer Momo", price: "170 / 190 / 210 / 230", desc: "Steam · Fry · Jhol · Chilly" },
      { name: "Chicken Momo", price: "170 / 190 / 210 / 230", desc: "Steam · Fry · Jhol · Chilly", tag: "Signature" },
      { name: "Chowmein", price: "120 / 180 / 180", desc: "Veg · Paneer · Chicken" },
      { name: "Chicken Sausage", price: "50", desc: "Per pc, char-grilled" },
      { name: "Chicken Chilly", price: "240 / 260", desc: "Bone · Boneless", tag: "Spicy" },
      { name: "Chicken Lollipop", price: "340", desc: "6 pcs, sticky-glazed" },
      { name: "Chicken Choila", price: "250", desc: "Newari-style smoked" },
      { name: "Chicken Roast", price: "200", desc: "Marinated, oven-finished" },
      { name: "Chicken Leg", price: "140 / 540", desc: "Per pc · Full 4 pcs" },
      { name: "Chicken Buffalo Wings", price: "250 / 480", desc: "Half · Full" },
      { name: "Mushroom Choila", price: "150", desc: "Smoky, herby, vegetarian" },
      { name: "Boiled Egg", price: "40" },
      { name: "Omelet", price: "80 / 120", desc: "Plain · Masala" },
    ],
  },
  {
    key: "dessert",
    title: "Sweet Endings",
    tagline: "a cold finish under the fairy lights",
    hero: menuDessert,
    featured: {
      name: "Matka Kulfi",
      price: "NPR 120",
      blurb: "Slow-set cardamom kulfi served in a tiny clay matka — creamy, cold, and impossibly pretty against the garden lights.",
    },
    items: [
      { name: "Ice Cream", price: "70 / 120", desc: "Single · Double scoop" },
      { name: "Matka Kulfi", price: "120", desc: "Cardamom, clay-pot set", tag: "Signature" },
    ],
  },
];

/* ---------- Icons ---------- */
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
function Leaf({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className} aria-hidden>
      <path d="M20 4C10 4 4 10 4 20c8 0 16-6 16-16z" />
      <path d="M4 20c4-8 10-12 16-16" />
    </svg>
  );
}

/* ---------- Lightbox ---------- */
type GalleryImg = { src: string; alt: string; cls?: string };

function Lightbox({ images, index, onClose, onPrev, onNext }: {
  images: GalleryImg[]; index: number; onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();
    const getFocusable = () => {
      if (!dialogRef.current) return [] as HTMLElement[];
      return Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key === "ArrowLeft") { e.preventDefault(); onPrev(); return; }
      if (e.key === "ArrowRight") { e.preventDefault(); onNext(); return; }
      if (e.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) { e.preventDefault(); return; }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && (active === first || !dialogRef.current?.contains(active))) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [onClose, onPrev, onNext]);

  const img = images[index];
  return (
    <div
      ref={dialogRef}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in"
      onClick={onClose}
      role="dialog" aria-modal="true" aria-labelledby={titleId} aria-describedby={descId}
    >
      <h2 id={titleId} className="sr-only">Photo viewer</h2>
      <p id={descId} className="sr-only">Use the left and right arrow keys to navigate. Press Escape to close.</p>
      <div aria-live="polite" aria-atomic="true" className="sr-only">Photo {index + 1} of {images.length}: {img.alt}</div>
      <button
        ref={closeBtnRef}
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close photo viewer"
        className="absolute top-4 right-4 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo" aria-keyshortcuts="ArrowLeft"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo" aria-keyshortcuts="ArrowRight"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white grid place-items-center transition focus:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6" aria-hidden><path d="M9 6l6 6-6 6"/></svg>
      </button>
      <figure className="relative max-w-[95vw] max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} className="max-w-[95vw] max-h-[85vh] object-contain rounded-xl shadow-warm" />
        <figcaption className="mt-3 text-center text-white/80 text-sm">{img.alt} · {index + 1} / {images.length}</figcaption>
      </figure>
    </div>
  );
}

/* ---------- Menu Section (Magazine style) ---------- */
function MenuSection() {
  const [active, setActive] = useState(menu[0].key);
  const current = menu.find((m) => m.key === active) ?? menu[0];

  return (
    <section id="menu" className="relative py-24 px-5 bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-emerald-mid/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Editorial header */}
        <div className="text-center">
          <div className="mx-auto w-40 gold-rule" />
          <p className="mt-4 text-[11px] tracking-[0.4em] uppercase text-emerald-mid">The Menu · est. Chiya Party</p>
          <h2 className="mt-3 font-display text-5xl sm:text-7xl text-emerald-deep italic leading-none">
            À la <span className="text-gold not-italic">Garden</span>
          </h2>
          <p className="mt-4 font-script text-3xl text-emerald-mid">brewed with care, served with gossip</p>
          <p className="mt-3 text-sm text-muted-foreground">All prices in NPR · Served fresh, all day</p>
          <div className="mx-auto mt-6 w-40 gold-rule" />
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((m) => {
            const isActive = m.key === active;
            return (
              <button
                key={m.key}
                type="button"
                onClick={() => setActive(m.key)}
                aria-pressed={isActive}
                className={[
                  "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] transition-all",
                  "focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50",
                  isActive
                    ? "bg-emerald-deep text-cream shadow-warm border border-gold"
                    : "bg-white/70 text-emerald-deep border border-emerald-deep/15 hover:bg-white hover:border-gold/60",
                ].join(" ")}
              >
                {m.title}
              </button>
            );
          })}
        </div>

        {/* Magazine layout: featured + item column */}
        <div key={current.key} className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-12 animate-rise">
          {/* Featured dish */}
          <div className="lg:col-span-5">
            <div className="relative corner-brackets p-3 rounded-[2rem] bg-white/60">
              <div className="relative overflow-hidden rounded-[1.75rem] shadow-warm">
                <img
                  src={current.hero}
                  alt={current.featured.name}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/85 via-emerald-deep/20 to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold text-emerald-deep text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-warm">
                  <Leaf className="h-3 w-3" /> Chef's pick
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-cream">
                  <p className="font-script text-2xl text-gold">featured today</p>
                  <h3 className="font-display text-4xl italic leading-tight">{current.featured.name}</h3>
                  <p className="mt-2 text-cream/85 text-sm sm:text-base leading-relaxed">{current.featured.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream/95 text-emerald-deep px-4 py-1.5 text-sm font-bold tabular-nums">
                    {current.featured.price}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-5 text-center font-script text-2xl text-emerald-mid">{current.tagline}</p>
          </div>

          {/* Item column */}
          <div className="lg:col-span-7">
            <div className="rounded-[1.75rem] bg-white/80 backdrop-blur border border-emerald-deep/10 p-6 sm:p-8 shadow-warm">
              <div className="flex items-baseline justify-between gap-4 border-b border-gold/40 pb-3">
                <h3 className="font-display text-3xl sm:text-4xl text-emerald-deep italic">{current.title}</h3>
                <span className="text-[10px] tracking-[0.3em] uppercase text-emerald-mid whitespace-nowrap">
                  {current.items.length} items
                </span>
              </div>

              <ul className="mt-4 divide-y divide-emerald-deep/10">
                {current.items.map((item) => (
                  <li
                    key={item.name}
                    className="group py-3.5 grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3 sm:gap-6 transition-colors hover:bg-gold/10 rounded-lg px-2 -mx-2"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                        <span className="font-semibold text-emerald-deep">{item.name}</span>
                        {item.tag && (
                          <span className={[
                            "text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full",
                            item.tag === "Spicy"
                              ? "bg-primary/10 text-primary border border-primary/25"
                              : item.tag === "Signature"
                              ? "bg-gold/25 text-emerald-deep border border-gold/60"
                              : "bg-emerald-mid/10 text-emerald-mid border border-emerald-mid/30",
                          ].join(" ")}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground italic">{item.desc}</p>
                      )}
                    </div>
                    <span className="font-display text-lg text-gold tabular-nums whitespace-nowrap group-hover:text-emerald-deep transition-colors">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gold/40 pt-4">
                <p className="text-xs text-muted-foreground">Prices are in Nepalese Rupees · taxes included</p>
                <a href={menuImg.url} target="_blank" rel="noreferrer"
                   className="text-xs font-semibold uppercase tracking-widest text-emerald-mid hover:text-emerald-deep transition">
                  View original card →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function Index() {
  const galleryImages: GalleryImg[] = [
    { src: evening1.url, alt: "Bamboo seating at dusk under string lights", cls: "col-span-2 row-span-2" },
    { src: thatch.url, alt: "Thatched roof with hanging kerosene lantern" },
    { src: night1.url, alt: "Guests gathered at night with guitar", cls: "col-span-2" },
    { src: counter.url, alt: "Chiya counter glowing red at evening" },
    { src: evening2.url, alt: "Wrapped tree lights and bamboo fence", cls: "col-span-2" },
    { src: day.url, alt: "Marigold pots and bamboo garden in daylight" },
    { src: entrance.url, alt: "Yellow gate entrance with Chiya Party banner" },
  ];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImg = () => setLightboxIndex((i) => (i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length));
  const nextImg = () => setLightboxIndex((i) => (i === null ? i : (i + 1) % galleryImages.length));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <nav className="mx-auto max-w-7xl grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-5 py-4">
          <div className="flex items-center gap-3 min-w-0">
            <img src={logo.url} alt="Chiya Party logo" className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full bg-white/95 p-1 shadow-warm" />
            <div className="hidden sm:block brand-highlight brand-breathe cursor-pointer">
              <div className="font-display font-bold text-lg leading-none text-cream brand-glow">Chiya Party</div>
              <div className="font-script text-gold text-sm leading-tight brand-glow">कप सँग गफ</div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="flex items-center gap-1 rounded-full px-4 py-2 nav-glass backdrop-blur-xl">
              {[
                { href: "#story", label: "Our Story" },
                { href: "#gallery", label: "Gallery" },
                { href: "#menu", label: "Menu" },
                { href: "#visit", label: "Visit" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToId(e, link.href.slice(1))}
                  className="relative group px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cream/90 transition-all duration-300 hover:text-cream"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-0 nav-glow-line transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 justify-self-end">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"
               className="grid place-items-center h-10 w-10 rounded-full bg-gold text-emerald-deep shadow-warm hover:scale-110 transition">
              <IgIcon />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"
               className="grid place-items-center h-10 w-10 rounded-full bg-emerald-mid text-cream shadow-warm hover:scale-110 transition">
              <FbIcon />
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <img src={evening1.url} alt="Chiya Party bamboo garden at dusk with fairy lights" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/50 via-emerald-deep/45 to-background" />
        </div>

        <div className="absolute top-24 left-0 right-0 flex justify-around px-6 pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className="block h-3 w-3 rounded-full bg-gold shadow-glow animate-bulb" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-32 grid md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-8 text-cream">
            <div className="inline-flex items-center gap-2 rounded-full bg-cream/10 backdrop-blur px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] mb-6 border border-gold/40">
              <span className="h-2 w-2 rounded-full bg-gold animate-pulse" /> Open daily · Lalitpur
            </div>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95]">
              Sip slow.<br />
              <span className="text-gold italic">Gossip</span> louder.
            </h1>
            <p className="font-script text-3xl sm:text-5xl text-gold mt-4">कप सँग गफ</p>
            <p className="mt-6 max-w-xl text-lg text-cream/90 leading-relaxed">
              A bamboo-and-thatch chiya garden where marigolds glow, fairy lights twinkle, and every cup
              comes with a story. Momos, thukpa, sadheko & the warmest chiya in town.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" onClick={(e) => scrollToId(e, "menu")}
                 className="px-6 py-3 rounded-full bg-gold text-emerald-deep font-bold shadow-warm hover:scale-105 transition">
                See the Menu
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer"
                 className="px-6 py-3 rounded-full bg-cream/95 text-emerald-deep font-semibold inline-flex items-center gap-2 hover:bg-cream transition">
                <IgIcon className="h-4 w-4" /> @chiya_party
              </a>
            </div>
          </div>
          <div className="md:col-span-4 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-6 bg-gold/30 blur-3xl rounded-full" />
              <img src={logo.url} alt="" className="relative rounded-full bg-cream p-4 shadow-warm" />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-emerald-deep text-gold py-4 overflow-hidden border-y border-gold/30">
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
            <p className="font-script text-3xl text-emerald-mid">est. in good company</p>
            <h2 className="text-4xl md:text-5xl mt-2 text-emerald-deep italic">More than a cup —<br />it's a <span className="text-gold">party</span>.</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Tucked behind a yellow gate and a curtain of thatch, Chiya Party is where Lalitpur comes
              to slow down. Bamboo benches, marigold pots, hanging lanterns, a guitar in the corner —
              and chiya brewed strong enough to fuel any gossip session.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[["🌿","Garden Seating"],["🪔","Lantern Lit"],["🎶","Acoustic Nights"]].map(([e,t]) => (
                <div key={t} className="rounded-2xl bg-white/70 border border-emerald-deep/10 p-5 hover:bg-gold/20 hover:border-gold/50 transition">
                  <div className="text-3xl">{e}</div>
                  <div className="text-xs font-semibold mt-2 uppercase tracking-widest text-emerald-deep">{t}</div>
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/60 via-transparent to-emerald-deep/60" />
        <div className="relative mx-auto max-w-5xl text-center text-cream">
          <p className="font-script text-3xl sm:text-4xl text-gold">catch the glow before the cup cools</p>
          <h2 className="text-3xl sm:text-5xl mt-2 leading-tight italic">
            Watch the garden come alive.<br className="hidden sm:block" /> Scroll the vibes.
          </h2>
          <p className="mt-4 text-cream/90 max-w-2xl mx-auto text-lg">
            Fairy lights, bamboo huts, marigold corners, and the steam rising off every cup —
            see why Lalitpur can't stop talking about Chiya Party.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#gallery" onClick={(e) => scrollToId(e, "gallery")}
               className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-emerald-deep font-bold text-lg shadow-warm hover:scale-105 transition">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
              View the Photos
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cream text-emerald-deep font-bold text-lg hover:scale-105 transition">
              <IgIcon className="h-5 w-5" /> Watch on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-5 bg-sunset">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="mx-auto w-32 gold-rule" />
            <p className="mt-4 font-script text-3xl text-emerald-mid">a peek inside</p>
            <h2 className="text-4xl md:text-5xl text-emerald-deep italic">The Vibe, Captured</h2>
            <div className="mx-auto mt-4 w-32 gold-rule" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open image: ${img.alt}`}
                className={`group relative overflow-hidden rounded-2xl shadow-warm text-left focus:outline-none focus:ring-4 focus:ring-gold/60 ${img.cls ?? ""}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy"
                     className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-gold text-emerald-deep text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 opacity-0 group-hover:opacity-100 transition">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/><path d="M11 8v6M8 11h6"/></svg>
                  View
                </span>
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-deep text-cream font-semibold shadow-warm hover:scale-105 transition">
              <IgIcon /> See more on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* MENU */}
      <MenuSection />

      {/* VISIT */}
      <section id="visit" className="relative py-24 px-5 bg-emerald-deep text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={night1.url} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-script text-3xl text-gold">come on by</p>
          <h2 className="text-4xl md:text-6xl mt-2 italic">Find Your Seat at the Garden</h2>
          <p className="mt-5 text-cream/80 max-w-2xl mx-auto">
            Pull up a bamboo stool, order a chiya, and stay a while. Best enjoyed at dusk when the
            lanterns flicker on.
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-5 text-left">
            <div className="rounded-2xl bg-cream/10 backdrop-blur p-6 border border-gold/30">
              <div className="text-gold text-[10px] uppercase tracking-[0.3em]">Hours</div>
              <div className="mt-2 font-display text-xl">Daily · 8am – 10pm</div>
            </div>
            <div className="rounded-2xl bg-cream/10 backdrop-blur p-6 border border-gold/30">
              <div className="text-gold text-[10px] uppercase tracking-[0.3em]">Where</div>
              <div className="mt-2 font-display text-xl">Lalitpur, Nepal</div>
            </div>
            <div className="rounded-2xl bg-cream/10 backdrop-blur p-6 border border-gold/30">
              <div className="text-gold text-[10px] uppercase tracking-[0.3em]">Follow</div>
              <div className="mt-2 flex flex-col gap-2">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-gold">
                  <IgIcon /> @chiya_party
                </a>
                <a href={FACEBOOK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-gold">
                  <FbIcon /> Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 rounded-3xl overflow-hidden border border-gold/30 shadow-warm">
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
               className="px-7 py-3 rounded-full bg-gold text-emerald-deep font-bold shadow-warm hover:scale-105 transition inline-flex items-center gap-2">
              🗺️ Get Directions
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer"
               className="px-7 py-3 rounded-full bg-cream text-emerald-deep font-semibold hover:scale-105 transition inline-flex items-center gap-2">
              <IgIcon /> Instagram
            </a>
            <a href={FACEBOOK} target="_blank" rel="noreferrer"
               className="px-7 py-3 rounded-full bg-cream text-emerald-deep font-semibold hover:scale-105 transition inline-flex items-center gap-2">
              <FbIcon /> Facebook
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-5 bg-background text-center text-sm text-muted-foreground space-y-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <img src={logo.url} alt="" className="h-10 w-10 rounded-full bg-white p-1 mb-2" />
          <div className="font-display text-emerald-deep text-lg">Chiya Party</div>
          <div className="font-script text-gold text-lg">कप सँग गफ</div>
        </div>
        <div className="pt-2">© 2026 Chiya Party · Made with chiya & love in Lalitpur</div>
      </footer>

      {lightboxIndex !== null && (
        <Lightbox images={galleryImages} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImg} onNext={nextImg} />
      )}
    </div>
  );
}
