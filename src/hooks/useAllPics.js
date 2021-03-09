import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const useAllPics = (collection) => {
  const [docs, setDocs] = useState([]);

  const { currentUser } = useAuth();

  Array.prototype.shuffle = function () {
    let input = this;
  
    for (let i = input.length - 1; i >= 0; i--) {
  
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let itemAtIndex = input[randomIndex];
  
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    return input;
  }

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          if (doc.data().email !== currentUser.email) {
            documents.push({ ...doc.data(), id: doc.id });
          }
        });

        documents.shuffle();

        setDocs(documents);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useAllPics;
