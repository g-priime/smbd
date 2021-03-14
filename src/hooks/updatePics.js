import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const updatePics = (displayName, email, newName) => {
  const collectionRef = projectFirestore.collection("images");

  collectionRef.orderBy("createdAt", "desc").onSnapshot((snap) => {
    snap.forEach((doc) => {
      if (doc.data().email === email) {
        collectionRef.doc(doc.data().name).set({
          name: doc.data().name,
          url: doc.data().url,
          createdAt: doc.data().createdAt,
          location: doc.data().location,
          email: doc.data().email,
          displayName: newName,
        });
      }
    });
  });

  return {};
};

export default updatePics;
