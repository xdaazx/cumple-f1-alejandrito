import "./CircuitLocation.css";

function CircuitLocation() {
  return (
    <section className="circuit-section" id="ubicacion">
      <h2 className="circuit-section-title">📍 CIRCUITO</h2>
      
      <div className="circuit-card">
        <div className="circuit-card-inner">
          <h3 className="circuit-name">Casa de David Alejandro</h3>
          
          {/* ========================================= */}
          {/* ANIMACIÓN DE PISTA DE CARRERAS */}
          {/* ========================================= */}
          <div className="circuit-animation-container">
            <svg viewBox="0 0 300 100" className="circuit-track-svg">
              <path 
                d="M 50 20 L 250 20 A 30 30 0 0 1 280 50 A 30 30 0 0 1 250 80 L 50 80 A 30 30 0 0 1 20 50 A 30 30 0 0 1 50 20 Z" 
                fill="none" 
                stroke="#555" 
                strokeWidth="6" 
                strokeDasharray="8 4"
              />
            </svg>
            <div className="animated-f1-car">
              <span className="car-emoji">🏎️</span>
            </div>
          </div>
          
          {/* ========================================= */}
          {/* CONTENEDOR DEL MAPA INCRUSTADO */}
          {/* ========================================= */}
          <div className="map-container">
            <iframe 
              title="Mapa Casa de David Alejandro"
              // Aquí está tu enlace oficial de Google Maps
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.96205210706614!2d-79.974748636316!3d-3.2521635980755526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90330efcc9cc4457%3A0xb9fb60a79c7a769b!2sP2XG%2B643%2C%20Machala!5e0!3m2!1ses-419!2sec!4v1788112485520!5m2!1ses-419!2sec" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="circuit-action">
            <a 
              href="https://maps.app.goo.gl/T969X2xxwrNkVhgs9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="maps-button"
            >
              [ Abrir en la App ]
            </a>
          </div>
          
          <div className="circuit-details">
            <div className="circuit-detail-item">
              <span className="icon">📅</span> 17 OCT 2026
            </div>
            <div className="circuit-detail-item">
              <span className="icon">🕒</span> 15:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CircuitLocation;