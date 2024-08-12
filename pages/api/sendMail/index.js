import nodemailer from "nodemailer";
import { isValidEmail } from "../../../helpers/isValidEmail";
import { checkInput } from "../../../helpers/checkInput";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, message } = req.body;

      if (!checkInput(firstName, lastName, email, message)) {
        return res.status(400).json({ message: "Bitte alle Felder ausfüllen" });
      }

      if (!isValidEmail(email)) {
        return res
          .status(400)
          .json({ message: "Bitte eine gültige E-Mail-Adresse eingeben" });
      }
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "mdierker0@gmail.com",
          pass: "ofhz msnb dpxi part",
        },
      });

      const mailOptions = {
        from: email,
        to: "mdierker0@gmail.com",
        subject: "Neue Nachricht von Kontaktformular",
        text: `Von: ${firstName} ${lastName}\nE-Mail: ${email}\nNachricht: ${message}`,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "E-Mail wurde erfolgreich gesendet." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Etwas ist schief gelaufen." });
    }
  } else {
    res.status(405).end();
  }
}
