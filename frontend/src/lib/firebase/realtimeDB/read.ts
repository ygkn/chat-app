import debug from "debug";
import { getDatabase, onChildAdded, ref } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../firebase";

export const useOnChildAdded = <T>(path: string): T | null => {
  const db = getDatabase(app);
  const dbRef = ref(db, path);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    onChildAdded(
      dbRef,
      (snapshot) => {
        const val = snapshot.val();
        const key = snapshot.key;
        setData({ ...val, key });
        debug.log(val);
      },
      (error) => {
        debug.log(error);
      }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return data;
};
