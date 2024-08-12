import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useFetchProducts = (updateKey) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        const productsSnapshot = await getDocs(productsCollection);

        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);
        setLoading(false);
      } catch (error) {
        setError("Fehler beim Abrufen der Produkte:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [updateKey]);

  return { products, loading, error };
};

export default useFetchProducts;
