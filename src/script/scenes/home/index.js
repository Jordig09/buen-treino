import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Route from "../../components/Route";
import Footer from "../../components/Footer";


function Home() {
  const [infoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(!infoVisible);
    infoVisible ? setTutorialText("Hide") : setTutorialText("Show");
  };

  const [tutorialText, setTutorialText] = useState("Tutorial");

  return (
    <>
      <NavBar login={true} />

      <Container className="my-4">
        <Row className="justify-content-end">
          <Col sm md={9} lg={7} xl={6} xxl={5} className="">
            <Route infoVisible={infoVisible}/>
          </Col>
        </Row>
      </Container>
      <Footer tutorialText={tutorialText} toggleInfo={toggleInfo} />
    </>
  );
}

export default Home;
