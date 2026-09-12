import { useState } from "react";
import { supabase } from "../../supabaseClient"; // Ajusta los "../" según la ubicación de tu archivo
import "./TeamRadio.css";

function TeamRadio() {
    const numeroTelefono = "593995954813"; // El número de los papás  
  const [busqueda, setBusqueda] = useState("");
  const [estadoBusqueda, setEstadoBusqueda] = useState("idle"); // idle | found | not_found
  const [invitado, setInvitado] = useState(null);
  const [mensajeRadio, setMensajeRadio] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Mensajes iniciales de la cinta de radio
  const [mensajesTicker, setMensajesTicker] = useState([
    { nombre: "Tíos", texto: "¡Feliz cumpleaños campeón! Nos vemos en la pista." },
    { nombre: "Abuelos", texto: "Preparando los motores para celebrar a nuestro nieto hermoso." }
  ]);

  // BÚSQUEDA INTELIGENTE POR NOMBRE Y APELLIDO (SEPARADOS Y FLEXIBLES)
  const handleBuscar = async (e) => {
    e.preventDefault();
    const busquedaLimpia = busqueda.trim();
    
    if (!busquedaLimpia) return;

    // Separamos lo que escribieron por espacios (ej: ["Daniel", "Ajila"])
    const palabras = busquedaLimpia.split(/\s+/);
    console.log("Buscando palabras:", palabras);

    try {
      let query = supabase.from('invitados').select('*');

      // Aplicamos un filtro dinámico por cada palabra escrita para que coincida en nombre o apellido
      palabras.forEach(palabra => {
        query = query.or(`nombre.ilike.%${palabra}%,apellido.ilike.%${palabra}%`);
      });

      const { data, error } = await query;

      console.log("Respuesta de Supabase - Data:", data);
      console.log("Respuesta de Supabase - Error:", error);

      if (error) {
        console.error("Error al consultar Supabase:", error);
      }

      if (data && data.length > 0) {
        // Guardamos el ID, el nombre completo formateado y los pases
        setInvitado({
          id: data[0].id,
          nombre: `${data[0].nombre} ${data[0].apellido}`,
          pases: data[0].pases
        });
        setEstadoBusqueda("found");
      } else {
        setEstadoBusqueda("not_found");
      }
    } catch (err) {
      console.error("Excepción grave en la búsqueda:", err);
      setEstadoBusqueda("not_found");
    }
  };

  // CONFIRMACIÓN Y ENVÍO A SUPABASE + WHATSAPP
  const handleConfirmarYEnviar = async (e) => {
    e.preventDefault();
    
    if (mensajeRadio.trim() !== "") {
      try {
        // 1. Guardar el mensaje en la tabla 'team_radio' de Supabase
        await supabase
          .from('team_radio')
          .insert([{ invitado_nombre: invitado.nombre, mensaje: mensajeRadio }]);

        // 2. Actualizar el estado del invitado a confirmado usando su ID único
        await supabase
          .from('invitados')
          .update({ confirmado: true })
          .eq('id', invitado.id);

        console.log("Asistencia guardada y confirmada con éxito");
      } catch (err) {
        console.error("Error al guardar en Supabase:", err);
      }

      // 3. Guardar el mensaje visualmente en la cinta (Ticker)
      setMensajesTicker([...mensajesTicker, { nombre: invitado.nombre, texto: mensajeRadio }]);
    }
    
    setEnviado(true);

    // 4. Generar y abrir el enlace de WhatsApp con el mensaje predeterminado
    const textoWhatsapp = `Hola, soy ${invitado.nombre}. Confirmo mi asistencia al Gran Premio de David Alejandro. ¡Asegurados mis ${invitado.pases} pases en pits! 🏎️🏁`;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoWhatsapp)}`;
    window.open(url, "_blank");
  };

  // SOLICITAR ACCESO SI NO ESTÁ REGISTRADO
  const handleSolicitarAcceso = () => {
    const textoWhatsapp = `Hola, soy ${busqueda.trim()}. El sistema de pits no encontró mi registro, pero me encantaría confirmar mi asistencia al Gran Premio de David Alejandro. ¿Podrían verificar mi acceso? 🏎️🏁`;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoWhatsapp)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="radio-section" id="asistencia">
      <h2 className="radio-section-title">🎙️ TEAM RADIO</h2>
      
      <div className="radio-card">
        <div className="radio-card-inner">
          
          {/* ESTADO 1: BUSCADOR INICIAL */}
          {estadoBusqueda === "idle" && (
            <form onSubmit={handleBuscar} className="radio-form">
              <h3 className="radio-subtitle">Control de Carrera</h3>
              <p className="radio-text">Ingresa tu nombre y apellido para verificar tu acceso al Paddock.</p>
              
              <input 
                type="text" 
                className="radio-input" 
                placeholder="Nombre y Apellido" 
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                required
              />
              <button type="submit" className="radio-btn">[ BUSCAR ACCESO ]</button>
            </form>
          )}

          {/* ESTADO 2: INVITADO ENCONTRADO */}
          {estadoBusqueda === "found" && !enviado && (
            <form onSubmit={handleConfirmarYEnviar} className="radio-form">
              <h3 className="radio-subtitle" style={{ color: "#00ff66" }}>¡ACCESO CONCEDIDO!</h3>
              <p className="radio-text">
                Piloto: <strong style={{ color: "#fff" }}>{invitado.nombre}</strong><br/>
                Pases autorizados: <strong style={{ color: "#ffd700", fontSize: "18px" }}>{invitado.pases}</strong>
              </p>
              
              <p className="radio-text" style={{ marginTop: "15px", marginBottom: "5px" }}>
                Déjale un mensaje a David Alejandro por la radio:
              </p>
              <textarea 
                className="radio-input textarea" 
                placeholder="Escribe tus felicitaciones aquí..." 
                rows="3"
                value={mensajeRadio}
                onChange={(e) => setMensajeRadio(e.target.value)}
              />
              
              <button type="submit" className="whatsapp-action-btn" style={{ width: "100%" }}>
                [ CONFIRMAR EN WHATSAPP ]
              </button>
            </form>
          )}

          {/* ESTADO 3: INVITADO NO ENCONTRADO (BANDERA AMARILLA) */}
          {estadoBusqueda === "not_found" && (
            <div className="radio-form">
              <span style={{ fontSize: "40px", display: "block", marginBottom: "10px" }}>🟨</span>
              <h3 className="radio-subtitle" style={{ color: "#ffaa00" }}>BANDERA AMARILLA</h3>
              <p className="radio-text">
                No encontramos a <strong>"{busqueda}"</strong> en la telemetría oficial. 
                <br/><br/>
                No te preocupes, comunícate con los comisarios de carrera para solicitar tu acceso a pits.
              </p>
              
              <button type="button" onClick={handleSolicitarAcceso} className="whatsapp-action-btn" style={{ width: "100%" }}>
                [ SOLICITAR ACCESO POR WHATSAPP ]
              </button>
              
              <button 
                type="button" 
                onClick={() => setEstadoBusqueda("idle")} 
                className="radio-btn" 
                style={{ marginTop: "15px", background: "transparent", border: "none", textDecoration: "underline", color: "#888", cursor: "pointer" }}
              >
                Intentar otra búsqueda
              </button>
            </div>
          )}

          {/* ESTADO 4: CONFIRMACIÓN FINALIZADA */}
          {enviado && (
            <div className="radio-success">
              <span className="success-icon" style={{ fontSize: "40px", display: "block", marginBottom: "15px" }}>🏁</span>
              <h3 className="radio-subtitle" style={{ color: "#00ff66" }}>¡BOX, BOX, BOX!</h3>
              <p className="radio-text">Tu mensaje fue enviado a la radio y tu asistencia confirmada. Nos vemos en la pista.</p>
            </div>
          )}

        </div>
      </div>

      {/* ========================================= */}
      {/* CINTA DE TRANSMISIÓN DE RADIO (TICKER) */}
      {/* ========================================= */}
      <div className="ticker-container">
        <div className="ticker-label">📻 TEAM RADIO</div>
        <div className="ticker-wrap">
          <div className="ticker-move">
            {mensajesTicker.map((msg, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-name">{msg.nombre}</span>: "{msg.texto}"
              </div>
            ))}
            {/* Duplicamos para animación infinita suave */}
            {mensajesTicker.map((msg, index) => (
              <div key={`dup-${index}`} className="ticker-item">
                <span className="ticker-name">{msg.nombre}</span>: "{msg.texto}"
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamRadio;