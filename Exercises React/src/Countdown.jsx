import { useEffect, useState } from "react";

function CountDown() {
  const [time, setTime] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;

    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      },1000);
    }

    //   clean

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(time);
  };

  const handleInputChange = (event) => {
    const value = Number(event.target.value);
    setTime(value);
    setTimeLeft(value);
    setIsRunning(false);
  };

  return (
    <>
      <h2>Countdown Timer</h2>
      <label htmlFor="">Set Time(seconds):</label>
      <input type="number" value={time} onChange={handleInputChange} />
      <p>Time Left: {timeLeft} seconds</p>
      <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default CountDown;
