import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";

async function addData(data, category) {
  console.log("🚀 ~ addData ~ data:", data);
  try {
    const docRef = await addDoc(collection(db, category), data);
    console.log("Document written with ID: ", docRef.id);
    // return the data to use it in the ItemInput component beacuse to render the new item
    return data;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addData;
