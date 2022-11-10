import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../multimedia/ICONOOO.ico';
import CardWidget from './CardWidget';
import {NavLink} from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">ATIMOV FRUTOS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <button> <img src={logo} alt="carrito"></img></button>
          <Nav
            className="me-auto my-4 p-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className="textNavbar"  to="/">Inicio</NavLink>
            <NavLink className="textNavbar"  to="/category/saludable" >Saludables</NavLink>
            <NavLink className="textNavbar"  to="/category/calorico" >Caloricos</NavLink>
            <NavLink className="textNavbar"  to="/nosotros">Nosotros</NavLink>
          </Nav>
          <Form className="d-flex">
           
            <CardWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;