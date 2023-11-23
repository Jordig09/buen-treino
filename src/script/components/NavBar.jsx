import { Container, Navbar, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import running from "../../img/running.png";
import { MdPerson } from "react-icons/md";

function NavBar({ login = true, usuario = "Usuario" }) {
  return (
    <Navbar
      className="bg-dark text-white m-0"
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      <Container>
        <Navbar.Brand className="text-white ">
          <img
            alt=""
            src={running}
            width="30px"
            height=""
            className="d-inline-block align-center"
          />{" "}
          BuenTreino
        </Navbar.Brand>
        {login === true ? (
          <Navbar.Collapse className="justify-content-end text-white">
            <NavDropdown
              title={
                <Navbar.Text>
                  <MdPerson color="white" size={35} />
                  <span className="text-white"> {usuario} </span>
                </Navbar.Text>
              }
              id="basic-nav-dropdown"
              className="bg-dark text-white"
            >
              <NavDropdown.Item href="#action/1" disabled>
                Mi Cuenta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2" disabled>
                Calendario
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3" disabled>
                Grupos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/buen-treino/#/login">
                Cerrar Sesión
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        ) : (
          <a className="text-start small" href="/buen-treino/#/home">
            ingreso demo
          </a>
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;

NavBar.propTypes = {
  login: PropTypes.bool,
};
