import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav} from 'react-bootstrap'
import {CartWidget} from '../CartWidget/CartWidget'
import {NavLink} from 'react-router-dom'


export const NavBar = () =>{
    return(
<>

  <Navbar bg="primary" expand="lg">
    <Container>
      <NavLink to="/"> 
      <Navbar.Brand href="/">StoreVideo</Navbar.Brand>
      </NavLink> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <NavLink to="/">
          <Nav.Link href="/">Home</Nav.Link>
        </NavLink> 
        <NavLink to="/detail">
          <Nav.Link href="/detail">Store</Nav.Link>
          </NavLink> 
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
      
    </Container>
      
  </Navbar>

</>
        
    )
}