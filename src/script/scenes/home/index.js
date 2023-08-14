import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../Component/NavBar";
import HomeCard from "../../Component/HomeCard";
import Footer from "../../Component/Footer";

function Home() {
  return (
    <>
      <NavBar login={true} />
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
