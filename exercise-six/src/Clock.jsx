import { useEffect, useState } from "react";
import './clock.scss'

export function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="clock">Current Time: {currentTime.toLocaleTimeString()}</h2>

    </div>
  );
}
