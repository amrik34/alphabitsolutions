"use client";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About Us", href: "#about" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "Career", href: "#career" },
  { label: "Contacts", href: "#contacts" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-bold text-xl text-lime-600">
          Alphabit Tech Solutions
        </div>
        <nav className="space-x-4 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-lime-600">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
