"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useWorkoutContext } from "../../context/WorkoutContext";
import PlanCard from "../../components/PlanCard";
import SortDropdown from "../../components/SortDropdown";

function MyPlanContent() {
  const { todayPlan, saved, markAsDone, removeFromPlan, removeFromSaved } =
    useWorkoutContext();

  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    const timer = setTimeout(() => {
      const tabFromUrl = searchParams.get("tab") === "saved" ? "saved" : "plan";
      setActiveTab(tabFromUrl);
    }, 0);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const activePlan = todayPlan.filter((item) => !item.done);

  const totalMinutes = activePlan.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activePlan.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  const listToShow = activeTab === "plan" ? activePlan : saved;

  const sortedList = [...listToShow].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }
    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <main className="mx-6 mt-10">
      <h1 className="text-3xl font-extrabold uppercase text-white">My Plan</h1>
      <p className="mt-2 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-gray-800 bg-[#15171c] p-6 sm:grid-cols-3">
        <div>
          <p className="text-sm text-gray-400">Exercises</p>
          <p className="text-3xl font-extrabold text-[#ccff00]">
            {activePlan.length}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Minutes</p>
          <p className="text-3xl font-extrabold text-white">{totalMinutes}</p>
        </div>
        <div>
          <p className="text-sm text-gray-400">Calories</p>
          <p className="text-3xl font-extrabold text-white">{totalCalories}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 rounded-lg border border-gray-800 p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-md px-4 py-2 text-sm font-semibold ${
              activeTab === "plan" ? "bg-[#22252b] text-white" : "text-gray-400"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-sm font-semibold ${
              activeTab === "saved"
                ? "bg-[#22252b] text-white"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Sort By</span>
          <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {sortedList.length === 0 && (
          <div className="rounded-xl border border-gray-800 bg-[#15171c] py-16 text-center">
            <h3 className="text-xl font-extrabold uppercase text-white">
              Nothing Here Yet
            </h3>
            <p className="mt-2 text-gray-400">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-5 inline-block rounded-full bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        )}

        {sortedList.map((workout) => (
          <PlanCard
            key={workout.id}
            workout={workout}
            showMarkAsDone={activeTab === "plan"}
            onMarkDone={markAsDone}
            onRemove={activeTab === "plan" ? removeFromPlan : removeFromSaved}
          />
        ))}
      </div>
    </main>
  );
}

export default function MyPlanPage() {
  return (
    <Suspense fallback={<p className="p-10 text-gray-400">Loading...</p>}>
      <MyPlanContent />
    </Suspense>
  );
}
