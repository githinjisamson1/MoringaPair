import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', textAlign: 'center', padding: '20px' }}>
      <Container>
        <Row>
          <Col md={6}>
            <div style={{ display: 'inline-block' }}>
              <Image src="https://www.liberty.edu/news/wp-content/uploads/sites/137/2019/12/studygroup-students-mentors-beaconofhope-201504286327JRm.jpg" fluid />
            </div>
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
    </div>
  );
};

export default AboutUs;
