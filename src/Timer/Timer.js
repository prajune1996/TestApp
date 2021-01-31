import React from "react";

import useTimer from "./useTimer";

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  return (
    <div className="app">
      <div className="stopwatch-card">
        <h1 className> {timer}</h1>
      </div>
      
      <div className="buttons ">
          {!isActive && !isPaused ? (
            <button className="home-route" onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button className="home-route" onClick={handlePause}>Pause</button>
          ) : (
            <button className="home-route" onClick={handleResume}>Start</button>
          )}
        </div>
    </div>
  );
};

export default Timer;
