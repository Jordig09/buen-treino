import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import LoginCard from "../../components/LoginCard";
import Footer from "../../components/Footer";

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
