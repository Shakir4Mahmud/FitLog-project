# FitLog — Workout Library

FitLog is a dark-themed workout tracking web app where users can browse a
library of workouts, view detailed instructions for each exercise, build a
daily workout plan, and save workouts for later. Built as Assignment 6 for
Programming Hero.

## 🚀 Live Demo

[ dp link]

## 🛠️ Technologies Used

- **Next.js** (App Router) — routing and UI
- **React** (Context API) — global state management for Plan/Saved data
- **Tailwind CSS** — styling and responsive layout
- **Browser localStorage** — persisting plan/saved data across reloads

## ✨ Key Features

1. **Dynamic Workout Library** — Fetches all 12 workouts from a live API and
   displays them as responsive cards in a 3x4 grid, each showing category
   tags, equipment, duration, calories, and rating.
2. **Workout Details Page** — Dynamic route (`/workouts/[id]`) showing a
   full breakdown of each workout including key specs and step-by-step
   instructions.
3. **Today's Plan & Saved Lists** — Add workouts to today's plan or save
   them for later, with live-updating badge counters in the navbar.
4. **Sort & Track Progress** — Sort the plan/saved list by Duration,
   Calories, or Rating, mark workouts as done, and remove items — with
   live metrics for total exercises, minutes, and calories.
5. **Persistent Data & Toast Notifications** — Plan/Saved data is saved to
   localStorage so it survives a page reload, and every action shows an
   animated toast notification for clear feedback.

## 📱 Responsive Design

Fully responsive across mobile, tablet, and desktop — including a
collapsible hamburger menu for the navbar on small screens.


## 🔌 API Used

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`