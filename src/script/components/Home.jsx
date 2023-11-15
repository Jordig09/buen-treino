import React from "react";
import CtaButton from "./CtaButton";
import { Container, Stack, Image, Col, Row } from "react-bootstrap";
import postit from "../../img/Tuto/postit.png";
import tape1 from "../../img/Tuto/tape1.png";
import tape2 from "../../img/Tuto/tape2.png";

function Home({ handleOnClick, infoVisible }) {
  return (
    <>
      <Container id="action" className="mt-auto p-0">
        <Stack gap={2} className=" ">
          <CtaButton
            text="wellness"
            navigate="wellness"
            type="primary"
            disabled={false}
            action={handleOnClick}
          />
          <CtaButton
            text="entrenamiento"
            navigate="entrenamiento"
            type="primary"
            disabled={false}
            action={handleOnClick}
          />
          <Row>
            <Col xs={6}>
              <CtaButton
                text="unirse"
                navigate="unirse"
                type="secondary"
                disabled={false}
                className="font-small"
                action={handleOnClick}
              />
            </Col>
            <Col xs={6}>
              <CtaButton
                text="crear"
                navigate="crear"
                type="secondary"
                disabled={false}
                action={handleOnClick}
              />
            </Col>
          </Row>
        </Stack>
        {/* --- Imágenes tutorial --- */}
        <Image
          src={infoVisible ? postit : ""}
          className="align-item-right"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "-10px",
          }}
        />
         <Image
          src={infoVisible ? tape1 : ""}
          className="align-item-left"
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
          }}
        />
         <Image
          src={infoVisible ? tape2 : ""}
          className="align-item-right"
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "0px",
          }}
        />

      </Container>
    </>
  );
}

export default Home;
