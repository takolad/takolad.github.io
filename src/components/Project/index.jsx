import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Project({ props }) {
  let altTxt = props.name + " screenshot";
  let linkTxt = `/portfolio/${props.id}`;
  return (
    <div className="card mb-2">
      <Link className="card-img-top" to={linkTxt}>
        <img alt={altTxt} src={props.img} className="w-100"/>
      </Link>
      <div className="card-body">
        <h5 class="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Project;
