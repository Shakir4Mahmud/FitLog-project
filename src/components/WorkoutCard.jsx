import Link from "next/link";
import Image from "next/image";

export default function WorkoutCard({ workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="block overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] transition hover:border-[#ccff00]"
    >
<div className="relative aspect-3/2 w-full">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
            >
              {group.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="mb-1 text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="mb-4 text-sm text-gray-400">{workout.equipment}</p>

        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>⏱ {workout.duration} min</span>
          <span>🔥 {workout.caloriesBurned} kcal</span>
          <span>⭐ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}