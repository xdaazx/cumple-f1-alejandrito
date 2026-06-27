import { useRef, useState } from "react";
import "./styles/global.css";

import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Countdown from "./components/Countdown/Countdown";
import MusicButton from "./components/Music/MusicButton";
import Gallery from "./components/Gallery/Gallery";
import Timeline from "./components/Timeline/Timeline";
import WhatsappButton from "./components/Whatsapp/WhatsappButton";
import RaceCar from "./components/RaceCar/RaceCar";
import music from "./assets/musica.mp3";

function App() {
  const [started, setStarted] = useState(false);
  const audioRef = useRef(null);

  const startRace = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 0.02; // volumen 2%
        await audioRef.current.play();
      } catch (error) {
        console.log("El navegador bloqueó el audio:", error);
      }
    }

    setStarted(true);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop preload="auto" />

      {!started ? (
        <Welcome onStart={startRace} />
      ) : (
        <main>
          <RaceCar />
          <Navbar />
          <Hero />
          <Countdown />
          <MusicButton audioRef={audioRef} />
          <Timeline />
          <Gallery />
          <WhatsappButton />
        </main>
      )}
    </>
  );
}

export default App;