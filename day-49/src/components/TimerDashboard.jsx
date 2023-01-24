import Timer from "./Timer";
import timerData from "../data/data";
import { useEffect, useState } from "react";
import TimerForm from "./TimerForm";
export default function TimerDashboard() {
  const [timers, setTimers] = useState([]);
  const [runningTime, setRunningTime] = useState(0);
  useEffect(() => {
    setTimers(timerData);
  }, [timers]);
  console.log(timerData);

  return (
    <div>
      <h1>Timers</h1>

      {timers &&
        timers.map((data) => {
          return (
            <Timer
              key={data.index}
              project={data.project}
              title={data.title}
              elapsed={data.elapsed}
              runningSince={data.runningSince}
              runningTime={runningTime}
            />
          );
        })}
      <TimerForm title={"title"} project={"project"} />
    </div>
  );
}
