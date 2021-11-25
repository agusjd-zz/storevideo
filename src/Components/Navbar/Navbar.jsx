import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav} from 'react-bootstrap'
import {CartWidget} from '../CartWidget/CartWidget'


export const NavBar = () =>{
    return(
<>
  <Navbar bg="primary" expand="lg">
    <Container>
      <Navbar.Brand href="#home">StoreVideo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Store</Nav.Link>
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
      
    </Container>
      
  </Navbar>

</>
        
    )
}