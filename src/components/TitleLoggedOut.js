import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const TitleLoggedOut = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout } = useAuth();

  async function handleLogin() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to go to log in page");
    }
  }

  return (
    <div className="title">
      <div className="header-logged-out">
        <h1>SMBD</h1>

        <button onClick={handleLogin}>Log In</button>
      </div>

      <h2>Create Your Account</h2>
      {/* TODO - fix how error message is shown */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/*
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      */}
    </div>
  );
};

export default TitleLoggedOut;
