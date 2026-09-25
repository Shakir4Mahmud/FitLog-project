import Link from "next/link";
import Image from "next/image";

export default function PlanCard({ workout, showMarkAsDone, onMarkDone, onRemove }) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-800 bg-[#15171c] p-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-base font-bold uppercase text-white">
            {workout.name}
          </h3>
          <p className="text-sm text-gray-400">{workout.equipment}</p>
          <div className="mt-1 flex items-center gap-3 text-sm text-gray-300">
            <span>⏱ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>⭐ {workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-600 px-4 py-2 text-sm font-semibold text-white"
        >
          View Details
        </Link>

        {showMarkAsDone && (
          <button
            onClick={() => onMarkDone(workout.id)}
            className="rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="px-2 text-lg text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}