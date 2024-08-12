import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, limit, query } from "firebase/firestore";
import { collection } from "firebase/firestore";

const useFetchOrders = (orderAmount) => {
  const [lastOrders, setLastOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, "orders");
        const limitedQuery = query(ordersRef, limit(orderAmount));
        const querySnapshot = await getDocs(limitedQuery);

        const orders = [];
        querySnapshot.forEach((doc) => {
          orders.push(doc.data());
        });

        setLastOrders(orders);
      } catch (error) {
        setError(error.message);
        setLastOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return { lastOrders, error };
};

export default useFetchOrders;
