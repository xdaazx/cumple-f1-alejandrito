import hero from "../../assets/cumpleanero.png";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="flag-bar"></div>

      <div className="hero-content">

        <div className="driver-card">
          <div className="driver-card-inner">
            <p className="driver-header">🏎️ F1 DRIVER</p>
            
            <img 
              src={hero} 
              alt="Alejandrito cumpleañero" 
              className="driver-photo" 
            />
            
            <h2 className="driver-name"> DAVID ALEJANDRO</h2>
            
            <div className="driver-stats">
              <div className="stat-row"><span>CAR:</span> <span>F1-001</span></div>
              <div className="stat-row"><span>CATEGORY:</span> <span>BABY</span></div>
              <div className="stat-row"><span>AGE:</span> <span>1 AÑO</span></div>
            </div>
            
            <p className="driver-footer">🏁 2026</p>
          </div>
        </div>



        
        <h1>Cumple 1 añito</h1>

        <p className="hero-subtitle">
          🏁 Prepárate para la carrera más tierna del año 🏎️
        </p>

        <div className="event-card">
          <h2>🏆 GRAN PREMIO ALEJANDRITO</h2>

          <br />

          <div className="race-coordinates">
            <p>📅 <strong>17 OCTUBRE 2026</strong></p>
            <p>🕒 <strong>15:00</strong></p>
            <p>📍 <strong>Circuito:</strong> Colegio De Medicos</p>
          </div>
          
          <p className="track-divider">━━━━━━━━━━━━━━━━━━</p>
          
          <p className="celebration-lap"><strong>🏁 VUELTA DE CELEBRACIÓN</strong></p>
        </div>

      </div>
    </section>
  );
}

export default Hero;