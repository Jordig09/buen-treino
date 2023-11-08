import React from "react";
import CtaButton from "./CtaButton";
import { Container, Stack, Image } from "react-bootstrap";
import postit from "../../img/Tuto/postit.png";

function Home({ handleOnClick, currentState, infoVisible}) {
  
  return (
    <>
      <Container id="input"></Container>
      <Container
        id="action"
        className="mt-auto p-0"
        style={{ marginBottom: "60px" }}
      >
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
        </Stack>

        <Image
          src={infoVisible ? postit : ""}
          className="align-item-right"
          style={{
            position: "absolute",
            bottom: "50px",
            right: "-10px",
          }}
        />
      </Container>
    </>
  );
}

export default Home;
