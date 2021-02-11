import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const TitleUpdateProfile = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="title">
      <div className="header-update-profile">
        <h1>SMBD</h1>
        <h3>{currentUser.email}</h3>

        <button onClick={handleLogout}>Log Out</button>
      </div>

      <h2>Update Profile</h2>
      {/* TODO - fix how error message is shown */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/*
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      */}
    </div>
  );
};

export default TitleUpdateProfile;
