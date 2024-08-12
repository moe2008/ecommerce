const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const postData = req.body;

    const checkPostData = () => {
      const items = [];
      postData.map((prod) => {
        if (prod.name) {
          items.push({
            price: "price_1Pn2KvA8r29xHHhPyeN1QO56",
            quantity: prod.quantity,
          });
        }
      });
      items.push({
        price: "price_1Pn2KvA8r29xHHhPyeN1QO56",
        quantity: 1,
      });

      return items;
    };

    try {
      const items = checkPostData();
      const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: "payment",
        shipping_address_collection: { allowed_countries: ["DE"] },
        success_url: `${req.headers.origin}/shop/orderSucced`,
        cancel_url: `${req.headers.origin}/shop/orderCanceld`,
      });
      res.status(200).json({ url: session.url });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
