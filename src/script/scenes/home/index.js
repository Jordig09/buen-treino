import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import HomeCard from "../../components/HomeCard";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <NavBar login={true} />
      <Container className="my-4">
        <Row className="justify-content-end">
          <Col sm md="6" lg="5" className="">
            <HomeCard />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
