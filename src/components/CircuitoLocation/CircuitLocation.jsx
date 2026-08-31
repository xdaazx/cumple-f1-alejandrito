import "./CircuitLocation.css";

function CircuitLocation() {
  return (
    <section className="circuit-section" id="ubicacion">
      <h2 className="circuit-section-title">📍 CIRCUITO</h2>
      
      <div className="circuit-card">
        <div className="circuit-card-inner">
          <h3 className="circuit-name">Casa de David Alejandro</h3>
          
          {/* ========================================= */}
          {/* ANIMACIÓN DE PISTA ESTILO F1 (CARRITO INTEGRADO) */}
          {/* ========================================= */}
          <div className="circuit-animation-container">
            <svg viewBox="0 0 400 160" className="circuit-track-svg">
              <defs>
                <pattern id="checkered" width="4" height="4" patternUnits="userSpaceOnUse">
                  <rect width="2" height="2" fill="#fff" />
                  <rect x="2" y="2" width="2" height="2" fill="#fff" />
                  <rect x="2" y="0" width="2" height="2" fill="#000" />
                  <rect x="0" y="2" width="2" height="2" fill="#000" />
                </pattern>
              </defs>

              {/* Trazado principal de la pista (Se le pone un ID para que el carro lo siga) */}
              <path 
                id="f1-track"
                d="M 100 130 L 260 130 C 330 130, 340 40, 270 40 L 180 40 C 130 40, 130 80, 90 80 C 40 80, 40 130, 100 130 Z" 
                fill="none" 
                stroke="#333" 
                strokeWidth="12" 
              />
              
              {/* Línea punteada en el centro */}
              <path 
                d="M 100 130 L 260 130 C 330 130, 340 40, 270 40 L 180 40 C 130 40, 130 80, 90 80 C 40 80, 40 130, 100 130 Z" 
                fill="none" 
                stroke="#fff" 
                strokeWidth="1.5" 
                strokeDasharray="6 4"
              />

              {/* Línea de Salida / Meta a cuadros */}
              <rect x="95" y="124" width="10" height="12" fill="url(#checkered)" />

              {/* El Carrito pegado al SVG */}
              <g>
                <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#f1-track" />
                </animateMotion>
                {/* Lo rotamos (scale) para que mire hacia adelante y lo centramos */}
                <text x="0" y="8" fontSize="28" textAnchor="middle" transform="scale(-1, 1)" className="svg-car">🏎️</text>
              </g>
            </svg>
          </div>
          
          {/* ========================================= */}
          {/* CONTENEDOR DEL MAPA INCRUSTADO */}
          {/* ========================================= */}
          <div className="map-container">
            <iframe 
              title="Mapa Casa de David Alejandro"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d856.428715191372!2d-79.9752054986808!3d-3.252290010970825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90330efcc9cc4457%3A0xb9fb60a79c7a769b!2sP2XG%2B643%2C%20Machala!5e0!3m2!1ses-419!2sec!4v1788112774423!5m2!1ses-419!2sec" 
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