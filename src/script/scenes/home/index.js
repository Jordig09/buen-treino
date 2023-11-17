import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
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
        <Row className="justify-content-end d-flex">
          {/* <Col
            sm md={9} lg={7} xl={6} xxl={5}
            className=""
          >
            <Card 
              className=" d-flex justify-content-center align-items-center"
              style={{ gap:"30px", flexDirection: "row", minHeight: "70vh", borderRadius: "15px" }}
              hidden={false}
            >
              <ImgFrente />
              <ImgEspalda />
            </Card>
          </Col> */}
          <Col sm md={10} lg={8} xl={8} xxl={5} className="">
            <Route infoVisible={infoVisible} />
          </Col>
        </Row>
      </Container>
      <Footer tutorialText={tutorialText} toggleInfo={toggleInfo} visibility="visible"/>
    </>
  );
}

export default Home;
