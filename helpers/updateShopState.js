import { db } from "../components/firebase";
import { getDoc, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";

export const fetchAndUpdateStatus = async () => {
  var msg = "unset";
  try {
    const shopRef = doc(db, "shopstate", "shopState");
    const querySnapshot = await getDoc(shopRef);

    if (querySnapshot.data().online === true) {
      await updateDoc(shopRef, {
        online: false,
      });
      msg = "Shop is now offline";
    } else {
      await updateDoc(shopRef, {
        online: true,
      });
      msg = "Shop is now online";
    }
  } catch (error) {
    console.error("Fehler beim Abrufen des States", error);
    msg = "Fehler";
  }
  return msg;
};
