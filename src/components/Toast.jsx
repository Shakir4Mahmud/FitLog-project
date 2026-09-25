"use client";

import { useEffect, useState } from "react";
import { useWorkoutContext } from "../context/WorkoutContext";

export default function Toast() {
  const { toasts } = useWorkoutContext();

  return (
    <div className="fixed right-6 top-6 z-50 flex flex-col gap-3">
      {toasts.map((toast) => (
        <SingleToast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}

function SingleToast({ toast }) {
  const { removeToast } = useWorkoutContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 10);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    const removeTimer = setTimeout(() => {
      removeToast(toast.id);
    }, 2500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  const isSuccess = toast.type === "success";

  return (
    <div
      className={`flex items-center gap-3 rounded-lg border border-gray-700 bg-[#1a1c20] px-4 py-3 shadow-lg transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
      }`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
          isSuccess ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isSuccess ? "✓" : "✕"}
      </span>
      <span className="text-sm font-semibold text-white">{toast.message}</span>
    </div>
  );
}