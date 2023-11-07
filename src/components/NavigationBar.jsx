import { Navbar, Nav, Container, Image } from 'react-bootstrap';

import Button from './Button';

const NavigationBar = () => {
  return (
    <>
      <Navbar className="hexColor-f1f3ff">
        <Container>
          <Navbar.Brand>
            <Image src="./images/logo.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="column-gap-3 fw-medium">
            <Nav.Link href="#service">Our Services</Nav.Link>
            <Nav.Link href="#why-us">Why Us</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <Nav>
              <Button position={'px-3'}>Register</Button>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
