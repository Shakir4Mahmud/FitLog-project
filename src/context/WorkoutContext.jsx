"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WorkoutContext = createContext();

export function WorkoutProvider({ children }) {
  const [todayPlan, setTodayPlan] = useState([]);
  const [saved, setSaved] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const savedPlan = localStorage.getItem("fitlog-plan");
      const savedSaved = localStorage.getItem("fitlog-saved");

      if (savedPlan) {
        setTodayPlan(JSON.parse(savedPlan));
      }

      if (savedSaved) {
        setSaved(JSON.parse(savedSaved));
      }

      setIsLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(todayPlan));
    }
  }, [todayPlan, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, isLoaded]);

  function showToast(message, type) {
    const id = Date.now();
    const newToast = { id, message, type };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  }

  function removeToast(id) {
    setToasts((prevToasts) => prevToasts.filter((item) => item.id !== id));
  }

  function addToPlan(workout) {
    const alreadyInPlan = todayPlan.some((item) => item.id === workout.id);
    if (alreadyInPlan) {
      showToast("Already in your plan", "error");
      return;
    }
    const newPlan = [...todayPlan, { ...workout, done: false }];
    setTodayPlan(newPlan);
    showToast("Added to today's plan", "success");
  }

  function saveForLater(workout) {
    const alreadySaved = saved.some((item) => item.id === workout.id);
    if (alreadySaved) {
      showToast("Already saved", "error");
      return;
    }
    const newSaved = [...saved, workout];
    setSaved(newSaved);
    showToast("Saved for later", "success");
  }

  function removeFromPlan(id) {
    const updatedPlan = todayPlan.filter((item) => item.id !== id);
    setTodayPlan(updatedPlan);
    showToast("Removed from plan", "error");
  }

  function removeFromSaved(id) {
    const updatedSaved = saved.filter((item) => item.id !== id);
    setSaved(updatedSaved);
    showToast("Removed from saved", "error");
  }

function markAsDone(id) {
  const updatedPlan = todayPlan.filter((item) => item.id !== id);
  setTodayPlan(updatedPlan);
  showToast("Marked as done", "success");
}

  const value = {
    todayPlan,
    saved,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
    toasts,
    removeToast,
  };

  return (
    <WorkoutContext.Provider value={value}>{children}</WorkoutContext.Provider>
  );
}

export function useWorkoutContext() {
  return useContext(WorkoutContext);
}
