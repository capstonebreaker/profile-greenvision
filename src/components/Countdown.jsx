import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-gray-800 text-white px-4 py-2 rounded">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm capitalize">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
