import React from "react";
import "./style.css";

function Card({ content }) {
  return (
    <div className="card">
      <div className="card-header text-center">
        <h2>{content.heading}</h2>
      </div>
      <div className="card-body">
        <div className="bg-secondary">{content.body}</div>
      </div>
    </div>
  );
}

export default Card;
