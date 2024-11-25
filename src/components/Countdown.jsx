import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate, showFourUnits }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!timeLeft) return null;

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex space-x-4 justify-center md:justify-start">
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{days}</span>
        <span className="text-sm text-gray-500">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold">{hours}</span>
        <span className="text-sm text-gray-500">Hours</span>
      </div>
      <div className={`flex flex-col items-center ${showFourUnits ? "" : "hidden md:flex"}`}>
        <span className="text-2xl font-bold">{minutes}</span>
        <span className="text-sm text-gray-500">Minutes</span>
      </div>
      <div className={`flex flex-col items-center ${showFourUnits ? "" : "hidden md:flex"}`}>
        <span className="text-2xl font-bold">{seconds}</span>
        <span className="text-sm text-gray-500">Seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
