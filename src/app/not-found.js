import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-bold tracking-wider text-[#ccff00]">
        404 ERROR
      </p>

      <h1 className="mt-4 text-5xl font-extrabold uppercase text-white md:text-6xl">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
      >
        Go to Home
      </Link>
    </main>
  );
}