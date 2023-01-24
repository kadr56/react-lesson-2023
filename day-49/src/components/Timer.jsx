import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderElapsedString } from "./Helpers";

export default function Timer({
  index,
  title,
  project,
  elapsed,
  runningSince,
  runningTime,
}) {
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const timer = renderElapsedString(elapsed, runningSince);
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handlestart() {
    // Start counting
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      // update the current time every 10ms
      setNow(Date.now());
    }, 10);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  console.log(timer);
  return (
    <div>
      <Container maxWidth="sm">
        <Card sx={{ maxWidth: 345 }} key={index}>
          <Typography sx={{ fontSize: 28 }} color="text.secondary">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {project}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{runningTime}</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>{secondsPassed.toFixed(3)}</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <DeleteIcon />
            <EditIcon />
          </Box>
          <TimerActionButton
            isTimerRunning={timerIsRunning}
            onStartClick={() => {
              setTimerIsRunning(true);
              // handlestart();
            }}
            onStopClick={() => {
              setTimerIsRunning(false);
            }}
          />
        </Card>
      </Container>
    </div>
  );
}
