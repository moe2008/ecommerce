import { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

const useShopState = () => {
  const [isOnline, setIsOnline] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const shopRef = doc(db, "shopstate", "shopState");
        const querySnapshot = await getDoc(shopRef);

        setIsOnline(querySnapshot.data().online);
      } catch (error) {
        setError("Fehler beim Abrufen des States", error);
        setIsOnline(false);
      }
      setLoading(false);
    };

    fetchStatus();
  }, [isOnline]);

  return { isOnline, loading, error };
};

export default useShopState;
