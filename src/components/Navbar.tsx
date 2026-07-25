"use client";

import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-slate-700 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold text-emerald-600"
        >
          Digital Heroes
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-medium text-slate-700 dark:text-slate-200 hover:text-emerald-600 transition"
            >
              {link.name}
            </a>
          ))}

          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={22} />
              ) : (
                <Moon size={22} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-4 md:hidden">
          {mounted && (
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 transition"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={22} />
              ) : (
                <Moon size={22} />
              )}
            </button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-700 dark:text-slate-200"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 shadow-lg">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-800 hover:text-emerald-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}