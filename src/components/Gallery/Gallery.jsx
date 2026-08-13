import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrivePhotos } from "../../hooks/useDrivePhotos";
import "./Gallery.css";

function Gallery() {
  const { photos, loading } = useDrivePhotos();
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const carouselRef = useRef(null);

  // Función para los botones de PC (mover el carrusel)
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return <p className="loading">Cargando recuerdos...</p>;
  }

  return (
    <section className="gallery-section" id="galeria">
      <h2>🏁 PIT LANE DE ALEJANDRITO</h2>
      <p className="gallery-subtitle">
        Cada foto es una vuelta especial en la vida de Alejandrito 🏎️
      </p>

      <div className="carousel-container">
        {/* Botón Izquierda (PC) */}
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          &#10094;
        </button>

        <div className="pit-lane" ref={carouselRef}>
          {photos.length > 0 ? (
            photos.map((photo, index) => (
              <motion.article
                className="pit-photo-card"
                key={photo.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Borde doble estilo telemetría */}
                <div className="card-inner-border">
                  <div className="card-header">
                    🏁 VUELTA {String(index + 1).padStart(2, "0")}
                  </div>
                  
                  <div className="image-container">
                    <img src={photo.url} alt={photo.name || `Vuelta ${index + 1}`} />
                  </div>
                  
                  <div className="card-footer">
                    🏎️ Recuerdo especial
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <p>No hay fotos para mostrar.</p>
          )}
        </div>

        {/* Botón Derecha (PC) */}
        <button className="carousel-btn right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>

      {/* Modal Pantalla Completa Animado */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()} /* Evita cerrar si tocas la foto */
            >
              <button className="close-btn" onClick={() => setSelectedPhoto(null)}>
                &times;
              </button>
              <img src={selectedPhoto.url} alt="Recuerdo en pantalla completa" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;