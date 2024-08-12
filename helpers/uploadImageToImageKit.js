export default async function uploadImageToImageKit(file) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await fetch("/api/imageKitAuth", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Fehler beim Hochladen des Bildes");
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error("Fehler beim Hochladen des Bildes:", error);
    return null;
  }
}
