import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Countdown from "./components/Countdown/Countdown";
import MusicButton from "./components/Music/MusicButton";
import Gallery from "./components/Gallery/Gallery";
import Timeline from "./components/Timeline/Timeline";
import WhatsappButton from "./components/Whatsapp/WhatsappButton";

function App() {
  return (
    <main>
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