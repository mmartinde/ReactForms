import { Container, Navbar, NavbarBrand, Nav, NavDropdown, NavbarCollapse } from "react-bootstrap"
import { Link } from "react-router-dom";

function NavigationBar (){
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Films</Navbar.Brand>
            <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/peliculas" className="nav-link">Películas</Link>
                <Link to="/contacto" className="nav-link">Contacto</Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nueva-pelicula">Agregar Películas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Buscar Películas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Borrar Películas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Login</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default NavigationBar