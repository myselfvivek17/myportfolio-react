import React from "react";
import "./DataMe.css";

export default function DataMe(props) {
  const { number, name, color, description } = props;

  return (
    <div className="data-me" style={{ '--card-accent': color }}>
      <div className="number">0{number}</div>
      <div className="name" style={{ color }}>
        <h2>{name}</h2>
      </div>
      <div className="description">{description}</div>
    </div>
  );
}
