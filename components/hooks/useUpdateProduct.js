import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const useUpdateProduct = (productID, values) => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const updateProduct = async (id) => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists) {
          await updateDoc(docRef, values);
          setSuccess(true);
        } else {
          setSuccess(false);
          setError("Product not found");
        }
      } catch (err) {
        setSuccess(false);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    updateProduct(productID);
  }, []);
  return { success, loading, error };
};
