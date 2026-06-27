import { useRef, useState } from "react";
import music from "../../assets/musica.mp3";
import "./MusicButton.css";

function MusicButton() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setPlaying(!playing);
  };

  return (
    <section className="music-section">
      <audio ref={audioRef} src={music} loop />

      <button className="music-btn" onClick={toggleMusic}>
        {playing ? "⏸ Pausar música" : "▶ Reproducir música"}
      </button>
    </section>
  );
}

export default MusicButton;