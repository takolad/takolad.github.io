import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Project({ props }) {
  let altTxt = props.name + " screenshot";
  let linkTxt = `/portfolio/${props.id}`;
  return (
    <div className="card mb-2">
      {/* <Link className="card-img-top" to={linkTxt}> */}
        <img alt={altTxt} src={props.img} className="w-100"/>
      {/* </Link> */}
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title fw-bold">{props.name}</h5>
          {props.type === "solo" ? (
            <i className="fas fa-male align-self-center"> Solo Project</i>
          ) : (
            <i className="fas fa-people-carry align-self-center"> Group Project</i>
          )}
        </div>
        <p className="card-text">{props.description}</p>
        <div className="d-flex justify-content-end align-items-center gap-3">
          {props.deploy_url.includes('heroku')? (
            <i className="far fa-dizzy fs-3 text-danger" title="Previously hosted on Heroku"></i>
          ) : (
            <a href={props.deploy_url} target="_blank" className="btn btn-primary">
            Visit Site
          </a>
          )}

          <a href={props.repo_url} target="_blank" className="btn btn-secondary">
            Visit <i className="fab fa-github"></i> Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
