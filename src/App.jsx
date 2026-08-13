import { useRef, useState } from "react";
import "./styles/global.css";

import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CircuitLocation from "./components/CircuitoLocation/CircuitLocation"; 
import Countdown from "./components/Countdown/Countdown";
import MusicButton from "./components/Music/MusicButton";
import Gallery from "./components/Gallery/Gallery";
import Timeline from "./components/Timeline/Timeline";
import WhatsappButton from "./components/Whatsapp/WhatsappButton";
import RaceCar from "./components/RaceCar/RaceCar";
import music from "./assets/musica.mp3";

function App() {
  const [started, setStarted] = useState(false);
  const [currentView, setCurrentView] = useState("inicio"); 
  const audioRef = useRef(null);

  // Esta función se ejecuta al tocar "Encender Motores"
  const initAudio = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.08; // Volumen al 8% (bajito y agradable)
        await audioRef.current.play();
      } catch (error) {
        console.log("El navegador bloqueó el audio:", error);
      }
    }
  };

  // Esto solo cambia la vista cuando termina el semáforo
  const startRace = () => {
    setStarted(true);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop preload="auto" />

      {!started ? (
        <Welcome onStart={startRace} onInitAudio={initAudio} />
      ) : (
        <main className="app-container">
          {/* Componentes Globales (Siempre se ven sin importar la pestaña) */}
          <RaceCar />
          <MusicButton audioRef={audioRef} />
          
          <Navbar currentView={currentView} setCurrentView={setCurrentView} />
          
          {/* ============================================== */}
          {/* RENDERIZADO CONDICIONAL (ESTILO APP) */}
          {/* ============================================== */}
          <div className="view-content">
            {currentView === "inicio" && (
              <div className="fade-in">
                <Hero />
                <Timeline />
                <Countdown />
              </div>
            )}

            {currentView === "circuito" && (
              <div className="fade-in">
                <CircuitLocation />
              </div>
            )}

            {currentView === "galeria" && (
              <div className="fade-in">
                <Gallery />
              </div>
            )}

            {currentView === "rsvp" && (
              <div className="fade-in">
                <WhatsappButton />
              </div>
            )}
          </div>

        </main>
      )}
    </>
  );
}

export default App;