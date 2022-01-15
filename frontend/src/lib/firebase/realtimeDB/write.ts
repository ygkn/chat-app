import { getDatabase, ref, push } from "firebase/database";
import app from "../firebase";

export async function writeDB<T>(path: string, data: T) {
  const db = getDatabase(app);
  const dbRef = ref(db, path);
  push(dbRef, data);
}
