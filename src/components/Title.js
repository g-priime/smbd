import React from "react";
import { useHistory } from "react-router-dom";

const Title = ({ setShowForm }) => {
  const history = useHistory();

  const toProfile = () => {
    history.push("/");
  };

  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="title">
      <header>
        <h1>SMBD</h1>
        <button onClick={toProfile}>Profile</button>
        <button onClick={handleClick}>Add Photo</button>
      </header>
      <h2>So Much Beauty in Dirt</h2>
      {/*
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      */}
    </div>
  );
};

export default Title;
