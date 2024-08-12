import { buffer } from "micro";
import { db } from "../../../components/firebase";
import Stripe from "stripe";
import { setDoc, doc } from "firebase/firestore";

const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_API_KEY
);

export const config = {
  api: {
    bodyParser: false,
  },
};

const webhookHandler = async (req, res) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        "whsec_ybOohcl1pvjjKkfZcVAaNKGLIykZatRR"
      );
    } catch (err) {
      console.error(`⚠️ Webhook signature verification failed.`, err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      try {
        const lineItems = await stripe.checkout.sessions.listLineItems(
          session.id,
          {
            limit: 5,
          }
        );
        await setDoc(doc(db, "orders", session.id), {
          id: session.id,
          name: session.shipping_details.name,
          email: session.customer_details.email,
          address: session.shipping_details.address,
          amount: session.amount_total,
          currency: session.currency,
          payment_status: session.payment_status,
          shipping_status: "not shipped",
          product: lineItems,
          timeStamp: session.created,
        });

        res.status(200).send({ received: true });
      } catch (error) {
        console.error("Fehler beim Speichern in Firestore", error);
        res.status(500).send("Internal Server Error");
      }
    } else {
      res.status(400).send("Unhandled event type");
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default webhookHandler;
