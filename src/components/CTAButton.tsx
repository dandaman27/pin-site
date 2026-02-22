import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

const BASE =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2";

const SIZES: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

const VARIANTS: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 hover:shadow",
  secondary: "bg-white text-indigo-700 shadow hover:bg-indigo-50",
  outline: "border border-zinc-300 text-zinc-700 hover:border-indigo-400 hover:text-indigo-600",
  ghost: "border border-white/40 text-white hover:bg-white/10 hover:border-white",
};

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`}>
      {children}
    </Link>
  );
}
