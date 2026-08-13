import { useState } from "react";
import "./MusicButton.css";

function MusicButton({ audioRef }) {
  const [playing, setPlaying] = useState(true);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      // Ajustado al 20% como se sugiere para que sea agradable
      audioRef.current.volume = 0.20; 
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <button 
      className={`floating-music-btn ${playing ? "playing" : ""}`} 
      onClick={toggleMusic}
      title={playing ? "Silenciar música" : "Reproducir música"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
}

export default MusicButton;