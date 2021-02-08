import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
//import Button from '@material-ui/core/Button';

const UploadForm = ({ setShowForm }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [locError, setLocError] = useState(null);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const types = ["image/png", "image/jpeg"];

  let selectedLocation = null;

  const handleChange = (event) => {
    selectedLocation = event.target.value;
    setLocation(selectedLocation);
    setLocError("");
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  const sendData = () => {
    if (file && location) {
      setSubmitted(true);
    } else if (!file) {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    } else {
      setLocError("Please enter a location");
    }
  };

  const exitForm = () => {
    setShowForm(false);
  };

  return (
    <div className="backdrop">
      <div className="upload-container">
        <div className="upload-grid">
          <button className="button-exit" onClick={exitForm}>
            X
          </button>
          <div className="output">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                onChange={changeHandler}
              />
              <span>+</span>
            </label>
            {file && <div className="file-name">{file.name}</div>}
            {error && <div className="error">{error}</div>}
          </div>

          <div className="location-input">
            <label className="location-label">
              Location:{" "}
              <input type="text" value={location} onChange={handleChange} />
            </label>
            {locError && <div className="error">{locError}</div>}
          </div>

          <button className="button" onClick={sendData}>
            Submit
          </button>

          {/*
        <Button className="button" variant="outlined" color="primary" onClick={sendData}>
          Primary
        </Button>
        */}
          <div className="progress-container">
            {submitted && file && location && (
              <ProgressBar
                file={file}
                setFile={setFile}
                location={location}
                setLocation={setLocation}
                setSubmitted={setSubmitted}
                setShowForm={setShowForm}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
