import WorkoutCard from "./WorkoutCard";

export default function Library({ workouts, isLoading }) {
  return (
    <section id="library" className="mx-6 mt-16">
      <h2 className="text-3xl font-extrabold uppercase text-white">
        The Library
      </h2>
      <p className="mt-2 text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-[#ccff00]"></div>
          <p className="mt-4 text-gray-400">Loading workouts...</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}