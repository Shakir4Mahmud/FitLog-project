"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useWorkoutContext } from "../context/WorkoutContext";

export default function Navbar() {
  const pathname = usePathname();
  const { todayPlan, saved } = useWorkoutContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mx-auto border border-gray-800 bg-[#101114]/95 backdrop-blur-md">
      <div className="mx-auto flex h-19 max-w-350 items-center justify-between px-6">

        <div className="flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
          >
            ☰
          </button>

          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="FITLOG Logo" width={30} height={30} />
            <span className="text-2xl font-bold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold transition ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold transition ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-gray-300 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        <div className="flex items-center gap-5 sm:gap-10">
          <Link href="/my-plan?tab=plan" className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm font-semibold text-white">Plan</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[#ccff00] px-2 text-sm font-bold text-black">
              {todayPlan.length}
            </span>
          </Link>

          <Link href="/my-plan?tab=saved" className="flex items-center gap-2 sm:gap-3">
            <span className="text-sm font-semibold text-white">Saved</span>
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-gray-300 px-2 text-sm font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-gray-800 px-6 py-4 md:hidden">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`rounded-md px-3 py-2 text-sm font-semibold ${
              pathname === "/"
                ? "bg-[#22252b] text-[#ccff00]"
                : "text-gray-300"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setMenuOpen(false)}
            className={`rounded-md px-3 py-2 text-sm font-semibold ${
              pathname === "/my-plan"
                ? "bg-[#22252b] text-[#ccff00]"
                : "text-gray-300"
            }`}
          >
            My Plan
          </Link>
        </div>
      )}
    </nav>
  );
}