// hellfire-clube.js – Firestore funcionando
import {
  addDoc,
  collection,
  getFirestore
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

import app from "./config.js";

export async function subscribeToHellfireClube(subscriber) {
  try {
    const db = getFirestore(app);

    const hellfireClubCollection = collection(db, "hellfire-clube");

    const docRef = await addDoc(hellfireClubCollection, subscriber);

    return docRef.id;

  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    throw error;
  }
}