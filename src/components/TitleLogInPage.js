import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const TitleLogInPage = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout } = useAuth();

  async function handleSignUp() {
    setError("");

    try {
      await logout();
      history.push("/signup");
    } catch {
      setError("Failed to go to sign up page");
    }
  }

  return (
    <div className="title">
      <div className="header-logged-out">
        <h1>SMBD</h1>

        <button onClick={handleSignUp}>Sign Up</button>
      </div>

      <h2>Log In to SMBD</h2>
      {/* TODO - fix how error message is shown */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/*
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      */}
    </div>
  );
};

export default TitleLogInPage;
