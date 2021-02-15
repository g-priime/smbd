import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";

import "./Navbar.css";

const Title = ({ setShowForm }) => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { logout, currentUser } = useAuth();

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

  const toUpdateProfile = () => {
    closeMobileMenu();
    history.push("/update-profile");
  };

  const addPhoto = () => {
    closeMobileMenu();
    setShowForm(true);
  };

  async function handleLogout() {
    closeMobileMenu();
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
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h1>SMBD</h1> <i className="fas fa-leaf" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <h3>{currentUser.email}</h3>


            <button onClick={addPhoto}>Add Photo</button>


            <button onClick={toUpdateProfile}>Update Profile</button>


            <button onClick={handleLogout}>Log Out</button>

          </ul>

        </div>
      </nav>


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
