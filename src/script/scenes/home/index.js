import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import HomeCard from "../../components/HomeCard";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <NavBar login={false} />
      <Container className="my-4">
        <Row className="justify-content-end">
          <Col sm md="4" className="">
            <HomeCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
