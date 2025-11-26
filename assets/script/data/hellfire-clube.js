// hellfire-clube.js – Firestore funcionando
import {
  addDoc,
  collection,
  getFirestore
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

import app from "./config.js";

export async function subscribeToHellfireClube(subscriber) {
  console.log("🔥 Enviando dados ao Firestore:", subscriber);

  try {
    const db = getFirestore(app);
    console.log("📌 Firestore DB carregado:", db);

    const hellfireClubCollection = collection(db, "hellfire-club");
    console.log("📁 Collection pronta:", hellfireClubCollection);

    const docRef = await addDoc(hellfireClubCollection, subscriber);
    console.log("✔ Documento criado no Firestore. ID:", docRef.id);

    return docRef.id;

  } catch (error) {
    console.error("Erro ao salvar no Firestore:", error);
    throw error;
  }
}