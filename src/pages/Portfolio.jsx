import React from "react";
import { Row, Col, Container } from "../components/Grid";
import Project from "../components/Project";
import repos from "../util/repos.json";

function Portfolio() {
  return (
    <Container>
      {repos.length ? (
        <Row>
          {repos.map((repo) => (
            <Col key={repo.id} size="md-6 sm-12">
              <Project props={repo} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3>{"No Projects Found 😔"}</h3>
      )}
      <div>&nbsp;</div>
    </Container>
  );
}

export default Portfolio;
