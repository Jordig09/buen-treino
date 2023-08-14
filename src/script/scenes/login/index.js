import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../Component/NavBar";
import LoginCard from "../../Component/LoginCard";
import Footer from "../../Component/Footer";

function Login() {
  return (
    <>
      <NavBar login={false} />
      <Container className="my-4">
        <Row className="justify-content-end">
          <Col sm md="4" className="">
            <LoginCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
