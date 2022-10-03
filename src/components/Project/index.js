import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Project({ props }) {
  let altTxt = props.name + " screenshot";
  let linkTxt = `/react-portfolio/portfolio/${props.id}`;
  return (
    <div className="project-container">
      <h2>{props.name}</h2>
      <Link to={linkTxt} data={props}>
        <img alt={altTxt} src={props.img} />
      </Link>
    </div>
  );
}

export default Project;
