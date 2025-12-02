import { useEffect } from "react";
import { collection, getDocs, query, where, setDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function UploadData() {
  useEffect(() => {
    const uploadData = async () => {
      const res = await fetch("/invoices.json");
      const records = await res.json();
      console.log("Records loaded:", records);

      for (const item of records) {
        // Ensure the id exists
        if (item.id === undefined || item.id === null) {
          console.warn("Skipping item because id is missing:", item);
          continue;
        }

        // Optional: check if invoice already exists
        const q = query(collection(db, "invoices"), where("id", "==", item.id));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          // Upload with JSON id as Firestore document ID
          await setDoc(doc(db, "invoices", String(item.id)), item);
          console.log("Uploaded:", item.id);
        } else {
          console.log("Skipped (already exists):", item.id);
        }
      }
    };

    uploadData();
  }, []);

  return null;
}
