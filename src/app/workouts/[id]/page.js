"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useWorkoutContext } from "../../../context/WorkoutContext";
import { notFound } from "next/navigation";

export default function WorkoutDetailsPage() {
  const params = useParams();
  const [workout, setWorkout] = useState(null);
  const { addToPlan, saveForLater } = useWorkoutContext();

useEffect(() => {
  async function fetchWorkout() {
    const response = await fetch(
      `https://api.abcz.workers.dev/api/fitlog/${params.id}`
    );

    const data = await response.json();

    if (!response.ok || !data || !data.id) {
      notFound();
      return;
    }

    setWorkout(data);
  }

  fetchWorkout();
}, [params.id]);

  if (!workout) {
    return <p className="p-10 text-gray-400">Loading workout...</p>;
  }

  return (
    <main className="mx-6 mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
       {/* Left IMG */}
<div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-2xl">
            <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/*Details */}
      <div>
        <h1 className="text-4xl font-extrabold uppercase text-white">
          {workout.name}
        </h1>

        <p className="mt-4 text-gray-400">{workout.description}</p>

        <div className="mt-4 flex gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[#ccff00] px-3 py-1 text-xs font-bold text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <div className="mt-6 divide-y bg-[#1E2330] divide-gray-700 rounded-xl border border-gray-800">
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">EQUIPMENT</span>
            <span className="text-sm font-semibold text-white">
              {workout.equipment}
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">DIFFICULTY</span>
            <span className="text-sm font-semibold text-white">
              {workout.difficulty}
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">SETS</span>
            <span className="text-sm font-semibold text-white">
              {workout.sets}
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">REPS</span>
            <span className="text-sm font-semibold text-white">
              {workout.reps}
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">DURATION</span>
            <span className="text-sm font-semibold text-white">
              {workout.duration} min
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">CALORIES</span>
            <span className="text-sm font-semibold text-white">
              {workout.caloriesBurned} kcal
            </span>
          </div>
          <div className="flex justify-between px-5 py-3">
            <span className="text-sm text-gray-400">RATING</span>
            <span className="text-sm font-semibold text-white">
              {workout.rating}
            </span>
          </div>
        </div>

        <h2 className="mt-8 text-lg font-bold text-white">INSTRUCTIONS</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-gray-300">
          {workout.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>

        <div className="mt-8 flex gap-4">
  <button
    onClick={() => addToPlan(workout)}
    className="rounded-md bg-[#ccff00] px-6 py-3 text-sm font-bold text-black"
  >
    Add to todays plan
  </button>
  <button
    onClick={() => saveForLater(workout)}
    className="rounded-md border border-gray-600 px-6 py-3 text-sm font-bold text-white"
  >
    Save for later
  </button>
</div>
      </div>
    </main>
  );
}