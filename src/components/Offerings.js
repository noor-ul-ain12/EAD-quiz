import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
const Offerings =()=>{
   return (
    <>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Our Offerings </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <Image
            src="https://www.pngwing.com/en/free-png-ywzij"
            fluid
          />
        </Col>
        <Col md={6}>
          <p>
            Donuts: {" "}
            Rs=300
          </p>
          <Button variant="light">Order now </Button>
        </Col>
        
        <Col md={6}>
          <Image
            src="https://www.pngwing.com/en/free-png-ywzij"
            fluid
          />
        </Col>
        <Col md={6}>
          <p>
            Rasgulla: {" "}
            Rs=200
          </p>
          <Button variant="light">Order now </Button>
        </Col>
        <Col md={6}>
          <p>
            Barfii: {" "}
            Rs=100
          </p>
          <Button variant="light">Order now </Button>
        </Col>
      </Row>
    </Container>
    </>
   )
       

}
export default Offerings;