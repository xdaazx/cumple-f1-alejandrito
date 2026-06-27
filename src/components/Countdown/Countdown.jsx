import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const eventDate = new Date("2026-10-17T15:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <h2>Faltan para la gran carrera</h2>

      <div className="countdown-boxes">
        <div><span>{time.days}</span><p>Días</p></div>
        <div><span>{time.hours}</span><p>Horas</p></div>
        <div><span>{time.minutes}</span><p>Min</p></div>
        <div><span>{time.seconds}</span><p>Seg</p></div>
      </div>
    </section>
  );
}

export default Countdown;