import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-[#101114]">
      <div className="mx-auto flex max-w-350 flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="FITLOG Logo" width={26} height={26} />
          <span className="text-xl font-bold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        <p className="text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}