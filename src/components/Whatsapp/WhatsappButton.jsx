import "./WhatsappButton.css";

function WhatsappButton() {
  const numero = "593995954813";
  const mensaje = "Hola, confirmo mi asistencia al cumpleaños F1 🏎️🏁";

  return (
    <section className="rsvp-section">
      
      {/* ========================================= */}
      {/* PISTA LIBERADA: DISEÑO ANCHO Y AGRESIVO F1 */}
      {/* ========================================= */}
      <svg className="rsvp-track-watermark" viewBox="0 0 1000 400" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M 150 350 L 850 350 C 980 350, 980 150, 850 150 L 550 150 C 480 150, 450 250, 350 250 C 250 250, 200 100, 100 150 C 20 190, 20 350, 150 350 Z" 
          fill="none" 
          stroke="#e10600" 
          strokeWidth="8" 
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>


      {/* LA TARJETA AHORA FLOTA POR ENCIMA */}
      <div className="rsvp-card">
        <div className="rsvp-card-inner">
          
          <h2 className="rsvp-title">🏁 YA ENTRAMOS A BOX</h2>
          
          <p className="rsvp-text">
            <strong style={{ fontSize: "18px", color: "#fff", display: "block", margin: "10px 0" }}>
              ¡FALTA QUE LLEGUES TÚ!
            </strong>
            Confirma tu asistencia al Gran Premio de David Alejandro para asegurar tu lugar.
          </p>
          
          <div className="rsvp-action">
            <a
              className="whatsapp-action-btn"
              href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              [ 🏎️ CONFIRMAR ASISTENCIA ]
            </a>
          </div>
          
          <p className="rsvp-footer">
            Nos vemos en la parrilla de salida 🏁
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatsappButton;