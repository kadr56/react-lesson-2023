import TimerForm from "./TimerForm";
import { useState } from "react";
export default function ToggleableTimerForm() {
  const [isOpen, setIsOpen] = useState(false);

  function handleFormSubmit(timer) {
    setIsOpen(false);
  }

  function handleFormOpen() {
    setIsOpen(true);
  }

  function handleFormClose() {
    setIsOpen(false);
  }

  return (
    <div>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <div>
          <button onClick={handleFormOpen}>Click me</button>
        </div>
      )}
    </div>
  );
}
