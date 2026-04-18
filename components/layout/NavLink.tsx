// components/layout/NavLink.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition ${
        isActive ? "text-[#133E87]" : "text-slate-700 hover:text-[#133E87]"
      }`}
    >
      {children}
    </Link>
  );
}