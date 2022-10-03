import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import repositories from "../util/repos.json";
import { Row, Col, Container } from "../components/Grid";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
  },
};

Modal.setAppElement("#root");

function Detail() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const repos = repositories;
  const location = useLocation();
  const targetRepo = repos.filter(
    (repo) => repo.id === parseInt(location.pathname.slice(-1))
  );

  try {
    let imgAlt = targetRepo[0].name + " screenshot";
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <h3>{targetRepo[0].name}</h3>
            <div className="project-body">
              <img
                alt={imgAlt}
                src={targetRepo[0].img}
                onClick={openModal}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="project-links bg-light bg-gradient rounded mt-3 text-center">
              {targetRepo[0].deploy_url ? (
                <a
                  href={targetRepo[0].deploy_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Site
                </a>
              ) : (
                "No deployed link yet available"
              )}
              <br />
              <a href={targetRepo[0].repo_url} target="_blank" rel="noreferrer">
                Repository Link
              </a>
            </div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  onClick={closeModal}
                  className="btn btn-danger btn-sm"
                  type="button"
                >
                  Close
                </button>
              </div>
              <div className="d-flex justify-content-between">
                <h2>{targetRepo[0].name}</h2>
                {targetRepo[0].type === "solo" ? (
                  <i className="fas fa-male m-auto"> Solo Project</i>
                ) : (
                  <i className="fas fa-people-carry m-auto"> Group Project</i>
                )}
              </div>
              <div>{targetRepo[0].description}</div>
              <form></form>
            </Modal>
          </Col>
        </Row>
      </Container>
    );
  } catch (err) {
    return <Redirect to="/portfolio" />;
  }
}

export default Detail;
