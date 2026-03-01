import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import MotifScatter from "@/app/components/MotifScatter";

export const metadata: Metadata = {
  title: "Duniya.ie — India ↔ Ireland • Food • E-Commerce • Partnerships",
  description:
    "Duniya.ie connects India and Ireland through food, culture, and business. Retail & wholesale, e-commerce, channel partnerships, and an India desk. Contact us.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="text-neutral-100 antialiased"
        style={{
          /* Ultra-dark navy with translucent wash */
          backgroundImage:
            "linear-gradient(rgba(5,15,42,0.90), rgba(5,15,42,0.90))",
          backgroundColor: "#050F2A", // base navy
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <MotifScatter />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-50 
        border-b border-[#0C204D]/60 
        backdrop-blur 
        bg-[rgba(5,15,42,0.78)]   /* semi-transparent navy */
      "
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
       <Link href="#home" className="flex items-center gap-2">

  {/* Logo image */}
  <img
    src="/logo.png"
    alt="Duniya Logo"
    className="h-9 w-9 object-contain rounded-md"
  />

  <span className="text-xl font-extrabold tracking-tight text-white">
    Duniya<span className="text-[#8FBFFF]">.ie</span>
  </span>
</Link>


        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          <li><Link href="#services" className="text-slate-100/80 hover:text-white">Services</Link></li>
          <li><Link href="#brands" className="text-slate-100/80 hover:text-white">Brands</Link></li>
          <li><Link href="#partnerships" className="text-slate-100/80 hover:text-white">Partnerships</Link></li>
          <li><Link href="#about" className="text-slate-100/80 hover:text-white">About</Link></li>
          <li><Link href="#contact" className="text-slate-100/80 hover:text-white">Contact</Link></li>
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="
              hidden rounded-lg border border-[#1C4C89] 
              px-3 py-2 text-sm font-semibold text-[#E3F2FF]
              hover:bg-white/5 md:inline-flex
            "
          >
            +353 857218803
          </a>

          <a
            href="mailto:hello@duniya.ie"
            className="
              rounded-lg 
              bg-[#1C4C89] 
              px-3 py-2 text-sm font-semibold text-white 
              hover:bg-[#163A6A]
            "
          >
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
}
