import { Container, Navbar, NavDropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import running from "../../img/running.png";

import { auth } from "../../api/firebase";
import { useNavigate } from "react-router-dom";

function NavBar({ login = true, usuario = "Usuario" }) {
  const navigate = useNavigate();
  async function signOutHandler() {
    try {
      const response = await auth.signOut();
      if (response) navigate("login");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Navbar className="bg-dark text-white">
      <Container>
        <Navbar.Brand className=" text-white " href="/home">
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
                  <img
                    alt=""
                    src="https://dummyimage.com/40/ffffff/000000.png&text=User"
                    width=""
                    height=""
                    className="d-inline-block align-center"
                  />{" "}
                  <span className="text-white"> {usuario} </span>
                </Navbar.Text>
              }
              id="basic-nav-dropdown"
              className="bg-dark text-white"
            >
              <NavDropdown.Item href="#action/1">Mi Cuenta</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Calendario</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Grupos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={signOutHandler}>
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
