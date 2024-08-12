const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default async function handler(req, res) {
  try {
    const thirtyDaysAgo = Math.floor(Date.now() / 1000 - 30 * 24 * 60 * 60); // Berechnung des Zeitstempels vor 30 Tagen
    const payments = await stripe.charges.list({
      created: {
        gte: thirtyDaysAgo,
        lte: Math.floor(Date.now() / 1000), // Aktueller Zeitstempel
      },
      currency: "eur", // Wählen Sie die gewünschte Währung
    });

    const totalAmountInEUR =
      payments.data.reduce((total, payment) => {
        return total + payment.amount;
      }, 0) / 100; // Die Beträge sind in Cent, daher teilen wir durch 100, um EUR zu erhalten

    res.status(200).json({ totalAmountInEUR });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
