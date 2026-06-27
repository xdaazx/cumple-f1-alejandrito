import "./WhatsappButton.css";

function WhatsappButton() {
  const numero = "593963384305";
  const mensaje = "Hola, confirmo mi asistencia al cumpleaños F1 🏎️🏁";

  return (
    <a
      className="whatsapp-btn"
      href={`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Confirmar por WhatsApp
    </a>
  );
}

export default WhatsappButton;