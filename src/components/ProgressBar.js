import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { motion } from "framer-motion";

const ProgressBar = ({
  file,
  setFile,
  location,
  setLocation,
  setSubmitted,
  setShowForm
}) => {
  const { url, progress } = useStorage(file, location);

  useEffect(() => {
    if (url) {
      setFile(null);
      setLocation("");
      setSubmitted(false);
      setShowForm(false);
    }
  }, [url, setFile, setLocation, setSubmitted, setShowForm]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;