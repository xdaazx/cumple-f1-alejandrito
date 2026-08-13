import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const eventDate = new Date("2026-10-17T15:00:00");

  const getTimeLeft = () => {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      // Usamos String y padStart para asegurar que siempre haya 2 dígitos (ej: 08 en vez de 8)
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
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
      <h2 className="digital-title">RACE STARTS IN</h2>

      <div className="countdown-board">
        <div className="digital-box">
          <span className="digital-number">{time.days}</span>
          <span className="digital-label">DÍAS</span>
        </div>
        
        <div className="digital-box">
          <span className="digital-number">{time.hours}</span>
          <span className="digital-label">HRS</span>
        </div>
        
        <div className="digital-box">
          <span className="digital-number">{time.minutes}</span>
          <span className="digital-label">MIN</span>
        </div>
        
        <div className="digital-box">
          <span className="digital-number">{time.seconds}</span>
          <span className="digital-label">SEG</span>
        </div>
      </div>
    </section>
  );
}

export default Countdown;