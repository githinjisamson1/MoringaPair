// src/components/AboutUs.js

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.timeshighereducation.com%2Fstudent%2Fadvice%2Fhow-make-friends-university-united-states&psig=AOvVaw2BOibhMGDzm22KKpmAXY5x&ust=1708757111272000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDnlb_uwIQDFQAAAAAdAAAAABAI" fluid />
        </Col>
        <Col md={6}>
          <div>
            <h2>About Us</h2>
            <p>
              Welcome to Moringa Pair! We are located at Ngong Plaza, and our mission is to facilitate random student pairing and grouping based on their strengths and weaknesses.
            </p>
            <p>
              Technical mentors can easily generate pairs by clicking on the "Generate Pairs" button. Students will then be paired into groups efficiently.
            </p>
            <p>
              If you have any inquiries, feel free to contact us at:
            </p>
            <p>
              Phone: +254 796 521 993 <br />
              Email: moringapair@gmail.com
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
