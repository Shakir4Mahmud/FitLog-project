import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-6 mt-8 rounded-2xl border border-gray-800 bg-[#15171c]">
      <div className="mx-auto flex min-h-112.5 max-w-350 items-center justify-between px-8 py-12 md:px-14">
        {/* Left Content */}
        <div className="max-w-150">
          <p className="mb-6 text-sm font-bold tracking-wider text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-135 text-base leading-7 text-gray-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* Button */}
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#b8e600]"
          >
            BROWSE WORKOUTS
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-[42%]">
          <Image
            src="/banner.png"
            alt="Workout illustration"
            className="h-auto w-full object-contain"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
