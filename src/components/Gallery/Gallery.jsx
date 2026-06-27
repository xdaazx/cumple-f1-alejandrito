import { motion } from "framer-motion";
import { useDrivePhotos } from "../../hooks/useDrivePhotos";
import "./Gallery.css";

function Gallery() {
  const { photos, loading } = useDrivePhotos();

  if (loading) {
    return <p className="loading">Cargando recuerdos...</p>;
  }

  return (
    <section className="gallery-section" id="galeria">
      <h2>📸 Pit Lane de recuerdos</h2>
      <p className="gallery-subtitle">
        Cada foto es una vuelta especial en la vida de Alejandrito 🏎️
      </p>

      <div className="pit-lane">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <motion.article
              className="pit-photo-card"
              key={photo.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <span className="photo-number">#{index + 1}</span>
              <img src={photo.url} alt={photo.name} />
            </motion.article>
          ))
        ) : (
          <p>No hay fotos para mostrar.</p>
        )}
      </div>
    </section>
  );
}

export default Gallery;