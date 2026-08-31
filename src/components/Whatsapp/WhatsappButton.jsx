import "./WhatsappButton.css";

function WhatsappButton() {
  const numero = "593995954813";
  const mensaje = "Hola, confirmo mi asistencia al cumpleaños F1 🏎️🏁";

  return (
    <section className="rsvp-section">
      <div className="rsvp-card">
        <div className="rsvp-card-inner">
          <h2 className="rsvp-title">🏁 ¿Estás listo para la carrera?</h2>
          
          <p className="rsvp-text">
            Confirma tu asistencia al Gran Premio de David Alejandro.
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