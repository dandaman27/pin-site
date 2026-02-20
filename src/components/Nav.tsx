import Link from "next/link";

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/pricing", label: "Pricing" },
  { href: "/process", label: "Process" },
  { href: "/quote", label: "Get a Quote" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          PinCo
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/portal"
            className="rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            My Orders
          </Link>
        </nav>
      </div>
    </header>
  );
}
