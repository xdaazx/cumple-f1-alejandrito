import { GOOGLE_DRIVE_API_KEY, GOOGLE_DRIVE_FOLDER_ID } from "./config";

export async function getDrivePhotos() {
  const query = `'${GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`;

  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&key=${GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType)&orderBy=name`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok || !data.files) {
    console.error("Error Google Drive:", data);
    return [];
  }

  return data.files.map((file) => ({
    id: file.id,
    name: file.name,
    url: `https://drive.google.com/thumbnail?id=${file.id}&sz=w1200`,
  }));
}