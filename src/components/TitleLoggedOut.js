import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

const TitleLoggedOut = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout } = useAuth();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  async function handleLogin() {
    closeMobileMenu();
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
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h1>SMBD</h1> <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <button onClick={handleLogin}>Log In</button>
          </ul>
        </div>
      </nav>
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
