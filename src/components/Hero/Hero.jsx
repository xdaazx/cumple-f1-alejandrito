import hero from "../../assets/hero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="flag-bar"></div>

      <div className="hero-content">
        <img src={hero} alt="Cumpleañero" className="hero-img" />

        <h1>Cumple 1 añiito</h1>

        <p className="hero-subtitle">
          🏁 Prepárate para la carrera más tierna del año 🏎️
        </p>

        <div className="event-card">
          <p><strong>📅 Fecha:</strong> Sábado 17 de octubre de 2026</p>
          <p><strong>🕗 Hora:</strong> 15:00 PM</p>
          <p><strong>📍 Lugar:</strong> Casa de Alejandrito</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;