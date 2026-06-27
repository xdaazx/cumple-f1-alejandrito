import { motion } from "framer-motion";
import "./Welcome.css";

function Welcome({ onStart }) {
  return (
    <section className="welcome">
      <motion.div
        className="welcome-box"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="welcome-small">🏁 Gran Premio</p>
        <h1>Alejandrito F1</h1>
        <p className="welcome-text">La carrera más tierna está por comenzar</p>

        <button onClick={onStart} className="start-btn">
          🏎️ Iniciar carrera
        </button>
      </motion.div>
    </section>
  );
}

export default Welcome;