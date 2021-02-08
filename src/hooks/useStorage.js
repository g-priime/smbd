import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const useStorage = (file, location) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    let id = Math.random().toString(16).slice(2);
    // references
    const storageRef = projectStorage.ref(id + "_" + file.name);
    const collectionRef = projectFirestore.collection("images");
    console.log(id);

    const fileName = file.name;

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        collectionRef.add({
          name: fileName,
          url,
          createdAt,
          location,
          email: currentUser.email,
        });
        setUrl(url);
      }
    );
  }, [file, location]);

  return { progress, url, error };
};

export default useStorage;
