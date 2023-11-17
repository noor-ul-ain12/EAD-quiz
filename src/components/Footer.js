import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer(){
    return (

        <>
    <footer className="footer">
      <Container className="bg-dark  text-white"> 
        <Row className='mt-5'>
          <Col>
            <p className="text-center">All rights are reserved by @BakeryStore</p>
          </Col>
        </Row>
      </Container>
    </footer> </>
    )
}

export default Footer