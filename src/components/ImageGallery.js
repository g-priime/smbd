import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";

import "../index.css"
import useAllPics from "../hooks/useAllPics"

function ImageGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const { docs } = useAllPics("images");

  return (
    <div className="ImageGallery">
      <Title setShowForm={setShowForm} />
      {showForm && <UploadForm setShowForm={setShowForm} />} {/* comment out to remove upload ability */}
      
      <ImageGrid setSelectedImg={setSelectedImg} docs={docs} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} docs={docs} />
      )}
    </div>
  );
}

export default ImageGallery;