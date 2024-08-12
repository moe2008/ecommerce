import ImageKit from "imagekit";
import { IncomingForm } from "formidable-serverless";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Nur POST-Anfragen erlaubt" });
  }

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error("Fehler beim Parsen der Datei:", err);
      return res.status(500).json({ message: "Fehler beim Parsen der Datei" });
    }

    const imagekit = new ImageKit({
      publicKey: "public_tnqtDm8z3/l3x/RRkHi3qwsBW3Q=",
      privateKey: "private_WD4JwJZQxUbGQM5XkvLMU6dmxAk=",
      urlEndpoint: "https://ik.imagekit.io/dykrs",
    });

    try {
      const file = files.image;

      // Lesen Sie den Inhalt der Datei
      const fileContent = await fs.readFile(file.path);

      const result = await imagekit.upload({
        file: fileContent,
        fileName: file.name,
      });

      res.status(200).json({ url: result.url });
    } catch (uploadError) {
      console.error("Upload-Fehler:", uploadError);
      res.status(500).json({ message: "Fehler beim Hochladen des Bildes" });
    }
  });
}
