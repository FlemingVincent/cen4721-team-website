import React from 'react'
import "../components/people.css";

const People = (props) => {
  return (
    <div className="card-container">
      <header className="header">
        <img src={props.img} alt={props.name} className="im" />
      </header>
      <h1 className="bold-text">{props.name}</h1>
      <h2 className="normal-text">{props.res}</h2>
    </div>
  );
};

export default People;
