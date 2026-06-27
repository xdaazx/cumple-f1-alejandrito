import { motion, useScroll, useTransform } from "framer-motion";
import "./RaceCar.css";

function RaceCar() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20vw", "85vw"]);

  return (
    <motion.div className="race-car" style={{ x }}>
      🏎️
    </motion.div>
  );
}

export default RaceCar;