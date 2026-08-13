import "./CircuitLocation.css";

function CircuitLocation() {
  return (
    <section className="circuit-section" id="ubicacion">
      <h2 className="circuit-section-title">📍 CIRCUITO</h2>
      
      <div className="circuit-card">
        <div className="circuit-card-inner">
          <h3 className="circuit-name">Colegio de Médicos</h3>
          <p className="circuit-icon">🏁</p>
          
          {/* ========================================= */}
          {/* NUEVO: CONTENEDOR DEL MAPA INCRUSTADO */}
          {/* ========================================= */}
          <div className="map-container">
            <iframe 
              title="Mapa Colegio de Médicos"
              src="https://maps.google.com/maps?q=Colegio%20de%20Medicos,%20Machala&t=&z=15&ie=UTF8&iwloc=&output=embed" 
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