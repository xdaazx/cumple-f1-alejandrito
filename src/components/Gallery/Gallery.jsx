import { useDrivePhotos } from "../../hooks/useDrivePhotos";
import "./Gallery.css";

function Gallery() {
  const { photos, loading } = useDrivePhotos();

  if (loading) {
    return <p className="loading">Cargando fotos...</p>;
  }

  return (
    <section className="gallery-section" id="galeria">
      <h2>Galería de recuerdos 🏁</h2>

      <div className="gallery">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <img key={photo.id} src={photo.url} alt={photo.name} />
          ))
        ) : (
          <p>No hay fotos para mostrar.</p>
        )}
      </div>
    </section>
  );
}

export default Gallery;