import { Container, Row, Col } from "react-bootstrap";
import ToggleTutorial from "./ToggleTutorial";

function Footer({ tutorialText, toggleInfo, visibility }) {
  return (
    <Container
      fluid
      className="mt-auto bg-dark font-small text-center text-white w-100"
      style={{ fontFamily: "Quicksand, sans-serif" }}
    >
      <Row className="m-0 footer-copyright text-center py-2 w-100 justify-content-center align-items-center">
        {visibility === "visible" && (
          <Col xs={4} sm={3} md={2} lg={2}>
            <ToggleTutorial
              tutorialText={tutorialText}
              toggleInfo={toggleInfo}
            />
          </Col>
        )}
        <Col xs={7} sm={6} md={5} lg={4} style={{ display: "inline-block" }}>
          © 2023 Copyright: G bro
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
