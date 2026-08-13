import "./Navbar.css";

function Navbar({ currentView, setCurrentView }) {
  // Lista de nuestras "pestañas" de la app
  const navItems = [
    { id: "inicio", icon: "🏠", label: "Inicio" },
    { id: "circuito", icon: "📍", label: "Circuito" },
    { id: "galeria", icon: "📸", label: "Pit Lane" },
    { id: "rsvp", icon: "✅", label: "Asistencia" },
  ];

  return (
    <nav className="navbar">
      {/* Logo solo visible en PC */}
      <h2 className="nav-logo">🏎️ David Alejandro F1</h2>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${currentView === item.id ? "active" : ""}`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;