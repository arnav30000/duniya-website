/* eslint-disable @next/next/no-img-element */

import MotifScatter from "@/app/components/MotifScatter";

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen text-neutral-100">
      {/* HERO — transparent so body background shows */}
      <section className="relative border-b border-indigo-900/60">
        {/* Sparse India (feather) + Ireland (harp) motifs */}


        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                The India ↔ Ireland bridge for food, culture, and business.
              </h1>
              <p className="mt-4 text-lg leading-7 text-indigo-100/90">
                We operate retail &amp; wholesale food, e-commerce, and channel partnerships that help
                brands expand between India and Ireland—reliably and compliantly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#partnerships"
                  className="rounded-lg bg-indigo-500 px-5 py-3 text-white font-semibold hover:bg-indigo-600"
                >
                  Partner with us
                </a>
                <a
                  href="#brands"
                  className="rounded-lg border border-indigo-800 px-5 py-3 text-indigo-50 font-semibold hover:bg-black/20"
                >
                  Explore our brands
                </a>
                <a
                  href="#contact"
                  className="rounded-lg px-5 py-3 text-cyan-300 font-semibold hover:bg-black/20"
                >
                  Contact us
                </a>
              </div>

              <div className="mt-6 space-y-1 text-sm text-indigo-100/90">
                <p>
                  Email:{" "}
                  <a className="underline hover:text-cyan-300" href="mailto:hello@duniya.ie">
                    hello@duniya.ie
                  </a>{" "}
                  (placeholder)
                </p>
                <p>
                  Phone:{" "}
                  <a className="underline hover:text-cyan-300" href="tel:+353857218803">
                    +353 857218803
                  </a>
                </p>
                <p>
                  Address:{" "}
                  <a
                    className="underline hover:text-cyan-300"
                    target="_blank"
                    rel="noreferrer"
                    href="https://maps.google.com/?q=28%20Westmoreland%20St%2C%20Dublin%202%2C%20D02%20EY73"
                  >
                    28 Westmoreland St, Dublin 2, D02 EY73
                  </a>
                </p>
              </div>
            </div>

            {/* Hero visual placeholder */}
<div className="relative">
  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#0C204D]/60 bg-black/10 relative">

    {/* Image */}
    <img
      src="/hero-main.png"   // <-- make sure this file exists
      alt="Duniya Hero Image"
      className="h-full w-full object-cover"
    />

    {/* Soft overlay */}
    <div className="absolute inset-0 bg-[rgba(5,15,42,0.25)]"></div>
  </div>
</div>



          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="border-b border-indigo-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Header
            eyebrow="Our ecosystem"
            title="Consumer & Partner Brands"
            subtitle="Explore our brands connecting communities through food, culture, and learning."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <BrandCard
              name="Mini India"
              blurb="Indian grocery store — online & in-store in Ireland."
              href="https://www.miniindia.ie/"
              logoSrc="/miniindia-logo.png"
              ext
            />
            <BrandCard
              name="Chatori"
              blurb="Indian restaurant with street-food inspired dishes."
              href="https://chatori.ie/"
              logoSrc="/chatori-logo.png"
              ext
            />
            <BrandCard
              name="Ori Foods"
              blurb="Coming soon — manufacturing Indian food products for Irish and European markets."
              logoSrc="/ori-foods-logo.png"
            />
            <BrandCard
              name="Duniya Study"
              blurb="Helps students from India come study in Ireland — orientation, housing, essentials."
              href="https://duniyastudy.com/"
              logoSrc="/duniyastudy-logo.png"
              ext
            />
          </div>

          <p className="mt-4 text-center text-xs text-indigo-200/70">
            External links open in a new tab. Ori Foods will live on Duniya.ie.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-indigo-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Header
            eyebrow="What we do"
            title="From pantry to partnerships"
            subtitle="Omnichannel operations across retail, wholesale, and market entry—backed by an e-commerce backbone."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <ServiceCard
              title="Retail & Wholesale Food"
              body="Indian groceries and specialty foods for homes, stores, and restaurants across Ireland. Volume pricing, scheduled deliveries, and custom assortments."
            />

            <ServiceCard
              title="Online E-Commerce"
              body="Nationwide delivery, click-and-collect where available, subscriptions for staples, and festival bundles for Diwali, Holi, Eid, and more."
            />

            <ServiceCard
              title="Channel Partner — Brand Expansion"
              body="Manufacturing from anywhere? We handle Ireland entry: compliance & packaging, pricing, distribution onboarding, and activations."
            />

            <ServiceCard
              title="India Desk (for Irish Companies)"
              body="Partner sourcing, site visits, pilot orders, and cultural briefings—so your team lands ready to work in India."
            />

            <ServiceCard
              title="Learn Hindi & Travel Etiquette"
              body="Concise modules for teams & travellers: key phrases, payments, safety basics, etiquette, and regional differences."
            />

            <ServiceCard
              title="Manufacturing & Studies"
              body="Introductions to manufacturers, labs, and packaging vendors. Duniya Study helps students from India come to Ireland to study."
            />


            <ServiceCard
              title="Fulfilment Service (Ireland)"
              body="Warehousing, pick & pack, order dispatch, returns handling, and stock tracking for brands selling into Ireland—all fulfilled locally."
            />

          </div>
        </div>
      </section>


      {/* PARTNERSHIPS */}
      <section id="partnerships" className="border-b border-indigo-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Header
            eyebrow="Partnerships"
            title="Your channel partner for Ireland"
            subtitle="EU/India manufacturers, specialty labels, and Irish retailers work with us to move faster with one accountable partner."
          />
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", label: "Discovery" },
              { step: "2", label: "Regulatory & Packaging Check" },
              { step: "3", label: "Pilot" },
              { step: "4", label: "Scale" },
            ].map((s) => (
              <li
                key={s.step}
                className="rounded-xl border border-indigo-900 bg-black/20 p-6 text-center shadow-sm hover:shadow"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white">
                  {s.step}
                </div>
                <p className="mt-3 font-semibold text-indigo-50">{s.label}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-indigo-500 px-5 py-3 text-white font-semibold hover:bg-indigo-600"
            >
              Start a pilot with us
            </a>
            <a
              href="#services"
              className="rounded-lg border border-indigo-800 px-5 py-3 text-indigo-50 font-semibold hover:bg-black/20"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-indigo-900/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <Header
            eyebrow="About Duniya.ie"
            title="An omnichannel bridge between India & Ireland"
            subtitle="What began as a neighbourhood shop grew into a platform for food, culture, and cross-border business."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ValueCard title="Two-way expertise" body="Indian suppliers + Irish retail realities, with data-driven merchandising." />
            <ValueCard title="Trust & compliance" body="Experience with food safety, import rules, VAT, and local regulations." />
            <ValueCard title="Activation muscle" body="Festivals, samplings, diaspora reach, and creator-led campaigns." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Contact us</h2>
          <p className="mt-2 max-w-2xl text-indigo-100/90">
            For partnerships and pilots, include your product category, current markets, certifications, and target timelines.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ContactLine label="Email" value="hello@duniya.ie (placeholder)" href="mailto:hello@duniya.ie" />
            <ContactLine label="Phone" value="+353 857218803" href="tel:+353857218803" />
            <ContactLine
              label="Address"
              value="28 Westmoreland St, Dublin 2, D02 EY73"
              href="https://maps.google.com/?q=28%20Westmoreland%20St%2C%20Dublin%202%2C%20D02%20EY73"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:hello@duniya.ie"
              className="inline-flex items-center rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white hover:bg-indigo-600"
            >
              Email us
            </a>
            <a
              href="tel:+353857218803"
              className="inline-flex items-center rounded-lg border border-indigo-800 px-5 py-3 font-medium text-indigo-50 hover:bg-black/20"
            >
              Call us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-indigo-900/60">
        <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-indigo-200/80 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Duniya.ie. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
          <p className="mt-2 text-xs">
            Registered Address: 28 Westmoreland St, Dublin 2, D02 EY73. Company No. and VAT No. to follow.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ——— Reusable UI bits ——— */

function Header({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-indigo-100/90">{subtitle}</p>}
    </header>
  );
}

function BrandCard({
  name,
  blurb,
  href,
  logoSrc,
  ext,
}: {
  name: string;
  blurb: string;
  href?: string;
  logoSrc?: string;
  ext?: boolean;
}) {
  const Card = (
    <div className="group relative flex h-full flex-col justify-between rounded-xl border border-indigo-900 bg-black/20 p-6 shadow-sm hover:shadow">
      <div className="flex items-center gap-3">
        {logoSrc ? (
          <img src={logoSrc} alt={`${name} logo`} className="h-10 w-auto" />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white font-bold">
            {name.slice(0, 1)}
          </div>
        )}
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <p className="mt-3 text-sm text-indigo-100/90">{blurb}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-cyan-300">
        <span>{href ? "Visit" : "Coming soon"}</span>
        {href && <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>}
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={ext ? "_blank" : "_self"} rel={ext ? "noreferrer" : undefined}>
      {Card}
    </a>
  ) : (
    Card
  );
}

function ServiceCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col rounded-xl border border-indigo-900 bg-black/20 p-6 shadow-sm hover:shadow">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 font-bold text-cyan-300">
        •
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-indigo-100/90">{body}</p>
    </div>
  );
}

function ValueCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-indigo-900 bg-black/20 p-6 shadow-sm">
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-indigo-100/90">{body}</p>
    </div>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <>
      <p className="text-xs uppercase tracking-wide text-indigo-200/70">{label}</p>
      <p className="mt-0.5 font-medium text-indigo-50">{value}</p>
    </>
  );
  return (
    <div className="rounded-xl border border-indigo-900 bg-black/20 p-5 shadow-sm">
      {href ? (
        <a href={href} className="block hover:text-cyan-300">
          {Content}
        </a>
      ) : (
        Content
      )}
    </div>
  );
}
