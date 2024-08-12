import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const useAddProducts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addProductToFirestore = async (productData) => {
    setLoading(true);
    try {
      const { name, description, price, imageUrl } = productData;

      await addDoc(collection(db, "products"), {
        name: name,
        description: description,
        price: price,
        imageUrl: imageUrl,
      });
      setSuccess("Added");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { addProductToFirestore, loading, error, success };
};

export default useAddProducts;
