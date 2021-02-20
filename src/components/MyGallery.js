import React, { useState } from "react";

import Modal from "./Modal";

import UploadForm from "./UploadForm";

import "../index.css"
import TitleMyGallery from "./TitleMyGallery";
import MyGrid from "./MyGrid"

function MyGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [showForm, setShowForm] = useState(false);

  

  return (
    <div className="ImageGallery">
      <TitleMyGallery setShowForm={setShowForm} />
      {showForm && <UploadForm setShowForm={setShowForm} />} {/* comment out to remove upload ability */}
      
      <MyGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default MyGallery;