import EditableTimer from "./EditableTimer";

export default function EditableTimerList({
  timers,
  onTrashClick,
  onStartClick,
}) {
  const timerList = timers.map((timer, index) => (
    <EditableTimer
      key={index}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runnningSince={timer.runnningSince}
      onTrashClick={onTrashClick}
      onStartClick={onStartClick}
    />
  ));
  return <div>{timerList}</div>;
}
