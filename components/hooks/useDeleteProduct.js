import { useState } from "react";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const useDeleteProduct = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const deleteProductFromFirestore = async (productId) => {
    setLoading(true);
    try {
      const productRef = doc(db, "products", productId);

      await deleteDoc(productRef);

      setSuccess("Product deleted successfully");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { deleteProductFromFirestore, loading, error, success };
};

export default useDeleteProduct;
