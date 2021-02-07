import React from "react";

const Title = ({ setShowForm }) => {
  const handleClick = () => {
    setShowForm(true);
  };

  return (
    <div className="title">
      <header>
        <h1>SMBD</h1>
        <button onClick={handleClick}>Profile</button>
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