import { useEffect, useState } from "react";
import "./clock.scss";

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
      <h2 className="clock">Current time: {currentTime}</h2>
    </div>
  );
}
