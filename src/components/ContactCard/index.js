import React from "react";
import { Col } from "../Grid";
import selfImage from "../../assets/images/self-img.jpg";
import "./style.css";

function ContactCard() {
  return (
    <div className="contact-card row">
      <Col size="sm-4 12">
        <img
          className="self-img"
          src={selfImage}
          alt="John Hinojosa, handsome, rad, full-stack developer"
        />
      </Col>
      <div className="m-auto col-sm-8" style={{ height: "fit-content" }}>
        <span className="contact-info bg-light bg-gradient p-3">
          Thank you for your time, feel free to contact me by:
          <h4>
            Email: <a href="mailto:hinojohn@ymail.com">hinojohn@ymail.com</a>
            <br />
            Google Voice: <a href="tel:737-231-0139">737-231-0139</a>
          </h4>
        </span>
      </div>
    </div>
  );
}

export default ContactCard;
