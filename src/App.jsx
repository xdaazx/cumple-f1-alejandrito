import { useState } from "react";
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

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Welcome onStart={() => setStarted(true)} />;
  }

  return (
    <main>
      <RaceCar />
      <Navbar />
      <Hero />
      <Countdown />
      <MusicButton />
      <Timeline />
      <Gallery />
      <WhatsappButton />
    </main>
  );
}

export default App;