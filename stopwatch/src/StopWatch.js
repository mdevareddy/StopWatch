import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    if (isActive) {
      setIsActive(false);
      clearInterval(intervalRef.current);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
