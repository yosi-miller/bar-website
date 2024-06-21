import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase-config";

async function uploadFile(file, category) {
  const storageRef = ref(storage, `images/${category}/${file.name}`);
  console.log("🚀 ~ uploadFile ~ storageRef:", storageRef)
  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log('Uploaded a blob or file!', snapshot.ref);
  } catch (error) {
    console.error('Error uploading blob or file:', error);
  }
}

export default uploadFile;
