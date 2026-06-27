import { useEffect, useState } from "react";
import { getDrivePhotos } from "../GoogleDrive/driveService";

export function useDrivePhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPhotos() {
      const result = await getDrivePhotos();
      setPhotos(result);
      setLoading(false);
    }

    loadPhotos();
  }, []);

  return { photos, loading };
}