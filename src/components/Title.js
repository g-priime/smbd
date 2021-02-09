import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const Title = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();

  const toUpdateProfile = () => {
    history.push("/update-profile");
  };

  const handleClick = () => {
    setShowForm(true);
  };

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
      <header>
        <h1>SMBD</h1>
        <h3>{currentUser.email}</h3>
        
        <button onClick={handleClick}>Add Photo</button>
        <button onClick={toUpdateProfile}>Update Profile</button>
        <button onClick={handleLogout}>Log Out</button>
      </header>
      
      <h2>So Much Beauty in Dirt</h2>
      {/* TODO - fix how error message is shown */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/*
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      */}
    </div>
  );
};

export default Title;
