import "./App.css";

import { TimersDashboard } from "./components/TimersDashboard";
import { FunctionalCounter } from "./components/FunctionalCounter";
import { ClassCounter } from "./components/ClassCounter";

export default function App() {
  return (
    <div>
      <h1>Day 65 - Class component - Timer app </h1>
      {/* <FunctionalCounter />
      <ClassCounter /> */}
      <TimersDashboard />
    </div>
  );
}
