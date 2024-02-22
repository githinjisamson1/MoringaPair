import React from "react";
import { Container, Row, Col } from "react-bootstrap";
/*import "./pages/contact.css";*/

export default function Contact() {
  return (
    <Container className="contact-container">
      <Row>
        {/* Top row with two grids lying horizontally */}
        <Col>
          <Row>
            <Col>
              <h1>Address</h1>
              <p>Ngong Plaza, Nairobi</p>
            </Col>
            <Col>Social Profile</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        {/* Bottom row with two grids */}
        <Col>
          <Row>
            <Col>
              <h1>Email Us</h1>
              <p>moringapair@gmail.com</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>Call Us</h1>
              <p>0796521993</p>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* Form */}
      <Row>
        <Col>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username: </label>
              <input type="text" className="form-control" id="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email: </label>
              <input type="email" className="form-control" id="email" placeholder="name@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject: </label>
              <input type="text" className="form-control" id="subject" placeholder="Talk to us" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
