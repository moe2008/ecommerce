const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default async function handler(req, res) {
  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const monthlyRevenue = [];

    for (let month = 0; month < 12; month++) {
      const startOfMonth = new Date(year, month, 1);
      const endOfMonth = new Date(year, month + 1, 0, 23, 59, 59, 999); // Letzter Tag des Monats

      const payments = await stripe.charges.list({
        created: {
          gte: Math.floor(startOfMonth / 1000),
          lte: Math.floor(endOfMonth / 1000),
        },
        currency: "eur", // Wählen Sie die gewünschte Währung
      });

      const totalAmountInEUR =
        payments.data.reduce((total, payment) => {
          return total + payment.amount;
        }, 0) / 100; // Die Beträge sind in Cent, daher teilen wir durch 100, um EUR zu erhalten

      monthlyRevenue.push({
        month: startOfMonth.getMonth() + 1, // Monat ist 0-basiert, daher +1
        year: year,
        totalAmountInEUR: totalAmountInEUR,
      });
    }

    res.status(200).json({ monthlyRevenue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
