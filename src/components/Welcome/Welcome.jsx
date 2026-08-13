import { useEffect, useState } from "react";
import "./Welcome.css";

function Welcome({ onStart }) {
  const [count, setCount] = useState(5);
  const [go, setGo] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      setGo(true);

      const timer = setTimeout(() => {
        onStart();
      }, 1400);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 850);

    return () => clearTimeout(timer);
  }, [count, onStart]);

  const lights = [1, 2, 3, 4, 5];

  return (
    <section className={`welcome ${go ? "race-go" : ""}`}>
      <div className="welcome-track">

        <div className="welcome-top">
          <span>🏁</span>
          <span>GRAN PREMIO</span>
          <span>🏁</span>
        </div>

        <div className="f1-lights">
          {lights.map((light) => (
            <div
              key={light}
              className={`f1-light ${
                !go && light >= 6 - count ? "active" : ""
              } ${go ? "green" : ""}`}
            />
          ))}
        </div>

        {!go ? (
          <>
            <div className="race-number">{count}</div>

            <h1>
              <span className="name">DAVID ALEJANDRO</span>
              <span>F1</span>
            </h1>

            <p className="welcome-text">
              La carrera más tierna está por comenzar
            </p>

            <div className="starting-line">
              <span>🏎️</span>
              <div></div>
              <span>🏁</span>
            </div>
          </>
        ) : (
          <div className="go-screen">
            <div className="go-text">GO!</div>
            <div className="go-car">🏎️💨</div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Welcome;