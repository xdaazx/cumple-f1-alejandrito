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
      audioRef.current.volume = 0.02;
      await audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="music-section">
      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "🔇 Pausar música" : "🎵 Reproducir música"}
      </button>
    </section>
  );
}

export default MusicButton;