import Link from "next/link";

const COLS = [
  {
    heading: "Product",
    links: [
      { label: "Gallery", href: "/gallery" },
      { label: "Pricing", href: "/pricing" },
      { label: "How It Works", href: "/process" },
      { label: "Get a Quote", href: "/quote" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Turnaround Times", href: "/process" },
      { label: "Contact Us", href: "mailto:hello@pinco.com" },
      { label: "Track My Order", href: "/portal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-black tracking-tight text-zinc-900"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm text-white">
                📌
              </span>
              <span className="text-xl">PinCo</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              Custom lapel pins crafted with care. Fast turnaround, low minimums, unlimited
              revisions.
            </p>
            <a
              href="mailto:hello@pinco.com"
              className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:underline"
            >
              hello@pinco.com
            </a>
          </div>

          {/* Link columns */}
          {COLS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-200 pt-6 text-xs text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} PinCo. All rights reserved.</p>
          <p>Made with ❤️ for pin lovers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
