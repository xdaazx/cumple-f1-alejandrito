import "./Timeline.css";

function Timeline() {
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Invitación</h2>

      <div className="timeline-container">
        <div className="timeline-card">
          <h3>🏎️ Gran Premio de Alejandrito</h3>
          <p>
            Te esperamos para celebrar su primer añito con una fiesta llena de
            velocidad, alegría y mucho amor.
          </p>
        </div>

        <div className="timeline-card">
          <h3>🏁 Código de vestimenta</h3>
          <p>Rojo, negro, blanco o estilo piloto de Fórmula 1.</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;