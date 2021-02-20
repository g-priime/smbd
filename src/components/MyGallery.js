import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
import Title from "./Title";
import UploadForm from "./UploadForm";

import "../index.css"
import TitleMyGallery from "./TitleMyGallery";

function MyGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [showForm, setShowForm] = useState(false);

  

  return (
    <div className="ImageGallery">
      <TitleMyGallery setShowForm={setShowForm} />
      {showForm && <UploadForm setShowForm={setShowForm} />} {/* comment out to remove upload ability */}
      
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default MyGallery;