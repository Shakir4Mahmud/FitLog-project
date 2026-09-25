"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Library from "../components/Library";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchWorkouts() {
      const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
      const data = await response.json();
      setWorkouts(data);
      setIsLoading(false);
    }

    fetchWorkouts();
  }, []);

  return (
    <main>
      <Hero />
      <Library workouts={workouts} isLoading={isLoading} />
    </main>
  );
}