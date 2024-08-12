const stripe = require("stripe")(
  "sk_test_51Mdx53CkH5xVlljvvtsSicuuox1kxs5RmX7ugtD2E2tpo5rGyDBvElaR5CYP2421AJXg3MAoXzPZfiZbrRdeuPof00gYFf7iAM"
);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const postData = req.body;

    const checkPostData = () => {
      const items = [];
      postData.map((prod) => {
        if (prod.name) {
          items.push({
            price: "price_1MwRosCkH5xVlljvugaz3LZP",
            quantity: prod.quantity,
          });
        }
      });
      items.push({
        price: "price_1Os7jWCkH5xVlljvGHoZ5uLE",
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
