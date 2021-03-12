import React, { useState } from "react";

import MyModal from "./MyModal";

import UploadForm from "./UploadForm";

import "../index.css";
import TitleMyGallery from "./TitleMyGallery";
import MyGrid from "./MyGrid";

function MyGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const pageTitle = "So Much Beauty in Dirt";

  return (
    <div className="ImageGallery">
      <TitleMyGallery setShowForm={setShowForm} pageTitle={pageTitle} />
      {showForm && <UploadForm setShowForm={setShowForm} />}{" "}
      {/* comment out to remove upload ability */}
      <MyGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <MyModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default MyGallery;
