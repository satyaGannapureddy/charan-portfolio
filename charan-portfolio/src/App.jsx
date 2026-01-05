// src/App.jsx
import { useMemo, useState } from "react";
import { profile, tech, services, projects } from "./data.js";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function IconLink({ href, label, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-slate-800 shadow-sm ring-1 ring-white/50 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white"
    >
      {children}
    </a>
  );
}

function Button({ href, children, variant = "primary" }) {
  if (!href) return null;

  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow hover:bg-blue-500"
      : "bg-white/80 text-slate-900 ring-1 ring-white/60 hover:bg-white";

  const isHash = href.startsWith("#");

  return (
    <a
      href={href}
      target={isHash ? undefined : "_blank"}
      rel="noreferrer"
      className={cn(base, styles)}
    >
      {children}
    </a>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md">
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function SimpleDevIllustration() {
  return (
    <svg viewBox="0 0 560 420" className="w-full">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#60a5fa" offset="0" />
          <stop stopColor="#22c55e" offset="1" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#a78bfa" offset="0" />
          <stop stopColor="#60a5fa" offset="1" />
        </linearGradient>
      </defs>

      <rect x="120" y="250" width="320" height="18" rx="9" fill="#0f172a" opacity="0.85" />
      <rect x="150" y="268" width="18" height="92" rx="9" fill="#0f172a" opacity="0.65" />
      <rect x="392" y="268" width="18" height="92" rx="9" fill="#0f172a" opacity="0.65" />

      <rect x="160" y="120" width="200" height="120" rx="14" fill="#ffffff" />
      <rect x="175" y="135" width="170" height="90" rx="10" fill="url(#g2)" opacity="0.18" />
      <rect x="235" y="240" width="50" height="12" rx="6" fill="#0f172a" opacity="0.7" />
      <rect x="215" y="252" width="90" height="10" rx="5" fill="#0f172a" opacity="0.35" />

      <rect x="290" y="175" width="150" height="85" rx="10" fill="#ffffff" />
      <rect x="300" y="185" width="130" height="55" rx="8" fill="url(#g1)" opacity="0.22" />
      <rect x="280" y="260" width="190" height="14" rx="7" fill="#0f172a" opacity="0.75" />

      <circle cx="240" cy="200" r="22" fill="#fbbf24" opacity="0.9" />
      <rect x="215" y="222" width="50" height="55" rx="18" fill="#ef4444" opacity="0.85" />
      <rect x="208" y="250" width="22" height="55" rx="11" fill="#0f172a" opacity="0.65" />
      <rect x="250" y="250" width="22" height="55" rx="11" fill="#0f172a" opacity="0.65" />
    </svg>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "services", label: "Services" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const github = profile?.links?.github;
  const linkedin = profile?.links?.linkedin;
  const resume = profile?.links?.resume;

  return (
    <div className={cn(dark ? "bg-slate-950 text-white" : "bg-white text-slate-900")}>
      {/* NAVBAR */}
      <div
        className={cn(
          "sticky top-0 z-30 border-b backdrop-blur",
          dark ? "border-white/10 bg-slate-950/70" : "border-slate-200 bg-white/70"
        )}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#home" className={cn("text-lg font-bold tracking-tight", dark ? "text-white" : "text-slate-900")}>
              {"<"}{profile.name}{"/>"}
            </a>

            <nav className={cn("hidden items-center gap-6 text-sm font-medium md:flex", dark ? "text-white/80" : "text-slate-700")}>
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  className={cn(
                    "rounded-md px-3 py-1.5 transition",
                    n.id === "home"
                      ? dark
                        ? "bg-white/10"
                        : "bg-blue-600 text-white"
                      : dark
                      ? "hover:bg-white/10 hover:text-white"
                      : "hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {n.label}
                </a>
              ))}
            </nav>

            <button
              onClick={() => setDark((v) => !v)}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
                dark ? "bg-white/10 text-white hover:bg-white/15" : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              )}
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {dark ? "🌙" : "☀️"} Theme
            </button>
          </div>
        </Container>
      </div>

      {/* HERO */}
      <section id="home" className="hero-clouds">
        <Container>
          <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            <div className="relative z-10">
              <p className={cn("text-sm font-semibold", dark ? "text-white/80" : "text-slate-700")}>
                Hi, I am {profile.name}
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                <span className={cn(dark ? "text-white" : "text-slate-900")}>
                  {profile.title}
                </span>
              </h1>

              <p className={cn("mt-4 max-w-xl leading-7", dark ? "text-white/80" : "text-slate-700")}>
                {profile.tagline}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <IconLink href={linkedin} label="LinkedIn">
                  <span className="font-bold">in</span>
                </IconLink>
                <IconLink href={github} label="GitHub">
                  <span className="font-bold">GH</span>
                </IconLink>
                <IconLink href={`mailto:${profile.email}`} label="Email">
                  <span className="font-bold">@</span>
                </IconLink>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={resume}>Resume</Button>
                <Button href="#projects" variant="secondary">
                  View Projects
                </Button>
              </div>
            </div>

            <div className="relative z-10 floaty">
              <div
                className={cn(
                  "rounded-3xl p-6 shadow-xl ring-1 backdrop-blur",
                  dark ? "bg-white/5 ring-white/10" : "bg-white/55 ring-white/40"
                )}
              >
                <SimpleDevIllustration />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <section id="about" className={cn("py-16", dark ? "bg-slate-950" : "bg-white")}>
        <Container>
          <SectionTitle title="About" subtitle={`${profile.location} • UMBC • GPA ${profile.gpa}`} />
          <Card>
            <p className={cn("leading-7", dark ? "text-white/80" : "text-slate-700")}>
              {profile.about}
            </p>
          </Card>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className={cn("py-16", dark ? "bg-slate-950" : "bg-slate-50")}>
        <Container>
          <SectionTitle title="Skills" subtitle="Core tools & technologies" />
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(tech).map(([group, items]) => (
              <Card key={group}>
                <div className="text-lg font-semibold">{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section id="services" className={cn("py-16", dark ? "bg-slate-950" : "bg-white")}>
        <Container>
          <SectionTitle title="Services" subtitle="What I can help you with" />
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title}>
                <div className="text-lg font-semibold">{s.title}</div>
                <p className={cn("mt-2", dark ? "text-white/80" : "text-slate-700")}>{s.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={cn("py-16", dark ? "bg-slate-950" : "bg-slate-50")}>
        <Container>
          <SectionTitle title="Projects" subtitle="Selected work from GitHub" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <Card key={p.name}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-lg font-semibold">{p.name}</div>
                    <p className={cn("mt-2", dark ? "text-white/80" : "text-slate-700")}>{p.desc}</p>
                  </div>
                  <a
                    href={p.links?.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold underline underline-offset-4"
                  >
                    GitHub
                  </a>
                </div>

                <ul className={cn("mt-4 list-disc space-y-2 pl-5 text-sm", dark ? "text-white/80" : "text-slate-700")}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className={cn("py-16", dark ? "bg-slate-950" : "bg-white")}>
        <Container>
          <SectionTitle title="Contact" subtitle="Let’s connect" />
          <Card>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold">Email</div>
                <a className="mt-1 inline-block underline underline-offset-4" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={`mailto:${profile.email}`}>Hire me</Button>
                <Button href={linkedin} variant="secondary">
                  LinkedIn
                </Button>
              </div>
            </div>
          </Card>

          <div className={cn("mt-8 text-center text-sm", dark ? "text-white/60" : "text-slate-500")}>
            
          </div>
        </Container>
      </section>
    </div>
  );
}
