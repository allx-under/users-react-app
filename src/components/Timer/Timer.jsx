import { useState, useEffect, useRef } from "react";
import timer from "./timer.module.css";

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const initDate = useRef(Date.now());

  const startCount = (initDate) => {
    const time = Date.now() - initDate.current;

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const intervalId = setInterval(() => startCount(initDate), 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={timer.container}>
      <p className={timer.text}>Time spent on the web-site</p>
      <div className={timer.wrapper}>
        <span className={timer.unit}>{hours >= 10 ? hours : `0${hours}`}</span>
        <span className={timer.unit}>
          {minutes >= 10 ? minutes : `0${minutes}`}
        </span>
        <span className={timer.unit}>
          {seconds >= 10 ? seconds : `0${seconds}`}
        </span>
      </div>
      <div className={timer.wrapper}>
        <span className={timer.label}>HOURS</span>
        <span className={timer.label}>MINUTES</span>
        <span className={timer.label}>SECONDS</span>
      </div>
    </div>
  );
};

export default Timer;
