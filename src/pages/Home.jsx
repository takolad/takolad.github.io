import React from "react";
// import Card from "../components/Card";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Row } from "../components/Grid";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import selfImg from "../assets/images/self-img.jpg";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={{ span: 10, offset: 1 }}>
          <Row>
            <Col sm={12} md={{ span: 4, offset: 1 }} lg={{ span: 3, offset: 2 }} className="my-auto">
              <img className="self-img" src={selfImg} />
            </Col>
            <Col sm={12} md={6}>
              <Card>
                <Card.Body>
                  <h3 style={{ fontFamily: "IBM Plex Serif" }}>
                    Hello there!
                  </h3>
                  My name is <b>John Hinojosa</b> and I'm a{" "}
                  <span id="job-title">
                    Full-Stack Developer
                  </span>
                  &nbsp;living in <b>San Antonio, Texas</b>. I enjoy learning
                  new technologies and get a kick out of solving problems! Have
                  a look at my portfolio and please feel free to connect with me
                  on LinkedIn!
                  <Col sm={12} className="text-center">
                    <Link
                      className="text-white btn btn-primary bg-gradient"
                      to="/portfolio"
                    >
                      View My Portfolio
                    </Link>
                  </Col>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
