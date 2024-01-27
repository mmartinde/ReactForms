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
              <Link to="/nueva-pelicula" className="dropdown-item">Agregar Película</Link>
              <Link to="/buscar-pelicula" className="dropdown-item">Buscar Películas</Link>
              <Link to="/borrar-pelicula" className="dropdown-item">Borrar Películas</Link>
              {/* <NavDropdown.Item href="/nueva-pelicula">Agregar Películas</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <Link to="/login" className="dropdown-item">Login</Link>
            </NavDropdown>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
};

export default NavigationBar