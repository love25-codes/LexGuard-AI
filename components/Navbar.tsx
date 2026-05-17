"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Scan", path: "/scan" },
  { name: "Agents", path: "/agents" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "History", path: "/history" },
  { name: "GCP Core", path: "/architecture" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-emerald-500/10 bg-black/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.9)]" />

          <h1 className="text-2xl font-black text-white tracking-wider">
            LexGuard<span className="text-emerald-400">.AI</span>
          </h1>

        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-3">

          {navItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                  
                  ${
                    active
                      ? "bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                      : "text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}

        </div>

      </div>

    </nav>
  );
}