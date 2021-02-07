import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  const { currentUser } = useAuth();
  console.log(currentUser.email);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        let userDocuments = [];
        for (let x = 0; x < documents.length; x++) {
          if (documents[x].email === currentUser.email) {
            userDocuments.push(documents[x]);
          }
        }
        setDocs(userDocuments);
      });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
