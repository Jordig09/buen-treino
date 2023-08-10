import { Container, Navbar, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";

function NavBar({ login = true }) {
  return (
    <Navbar className="bg-dark text-white">
      <Container>
        <Navbar.Brand className="text-white" href="/home">
          <img
            alt=""
            src="https://dummyimage.com/40/ffffff/000000.png&text=Logo"
            width=""
            height=""
            className="d-inline-block align-center"
          />{" "}
          FitApp
        </Navbar.Brand>
        {login === true ? (
          <Navbar.Collapse className="justify-content-end text-white">
            <NavDropdown
              title={
                <Navbar.Text>
                  <img
                    alt=""
                    src="https://dummyimage.com/40/ffffff/000000.png&text=User"
                    width=""
                    height=""
                    className="d-inline-block align-center"
                  />{" "}
                  <a href="#login" className="text-white">
                    {" "}
                    Usuario{" "}
                  </a>
                </Navbar.Text>
              }
              id="basic-nav-dropdown"
              className="bg-dark text-white"
            >
              <NavDropdown.Item href="#action/1">Mi Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Calendario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Grupos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;

NavBar.propTypes = {
  login: PropTypes.bool,
};
