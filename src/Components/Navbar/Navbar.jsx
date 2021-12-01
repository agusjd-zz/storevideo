import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import { Nav} from 'react-bootstrap'
import {CartWidget} from '../CartWidget/CartWidget'
import {Link} from 'react-router-dom'
import './Navbar.scss'


export const NavBar = () =>{
    return(
<>

  <Navbar bg="primary" expand="lg">
    <Container>

      <Navbar.Brand> <Link to="/"> StoreVideo </Link></Navbar.Brand>
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
       
          <Nav.Link > <Link to="/"> Home </Link></Nav.Link>
        
       
          <Nav.Link> <Link to="/detail">Store </Link></Nav.Link>
          <Nav.Link> <Link to="/category/remeras">Remeras </Link></Nav.Link>
          <Nav.Link> <Link to="/category/zapatillas">Zapatillas </Link></Nav.Link>
        </Nav>

        <Link to = "/cart"><CartWidget/></Link>
      </Navbar.Collapse>
      
    </Container>
      
  </Navbar>

</>
        
    )
}