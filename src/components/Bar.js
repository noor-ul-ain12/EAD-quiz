import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Bar() {
  return (
    <>
    <Navbar bg="light" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sweet bakers </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">  
          <Nav className="ml-auto">
            <Nav.Link href="#option1">Home </Nav.Link>
            <Nav.Link href="#option2">Menu</Nav.Link>
            <Nav.Link href="#option3">About us </Nav.Link>
            <Nav.Link href="#option3">Contact us </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


   </>
    
  );
}

export default Bar;